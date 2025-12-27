const https = require('https');
const fs = require('fs');
const path = require('path');

const API_KEY = "bfl_B8Kfgllk17qCV0pFZpTsCxvvwwaTYLAg";
const BASE_URL = "api.bfl.ml";

const portfolioDir = path.join(__dirname, '../public/images/portfolio');
const makingOfDir = path.join(__dirname, '../public/images/making-of');

// Ensure directories exist
[portfolioDir, makingOfDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Portfolio items with detailed prompts for haute couture fashion photography
const portfolioPrompts = [
  {
    id: "01",
    name: "Vestido de Noiva Clássico",
    prompt: "Professional fashion photography of an elegant classic wedding dress on a mannequin, featuring delicate French lace overlay and pure white silk fabric, intricate beading details, flowing cathedral train, soft studio lighting, haute couture bridal fashion, luxury atelier setting, cream and white color palette, 8k quality"
  },
  {
    id: "02",
    name: "Vestido de Festa Longo",
    prompt: "Professional fashion photography of a stunning long evening gown on a dress form, rich Italian satin fabric in deep burgundy or navy, exquisite hand embroidery with gold thread details, elegant A-line silhouette, soft dramatic studio lighting, haute couture formal wear, luxury fashion photography, 8k quality"
  },
  {
    id: "03",
    name: "Conjunto Sob Medida",
    prompt: "Professional fashion photography of an elegant tailored women's ensemble on a mannequin, refined feminine blazer and matching skirt or pants, impeccable bespoke tailoring, premium wool fabric, sophisticated neutral tones, clean lines and perfect fit, haute couture women's suiting, luxury atelier, 8k quality"
  },
  {
    id: "04",
    name: "Vestido de Madrinha",
    prompt: "Professional fashion photography of a beautiful bridesmaid dress on a dress form, flowing chiffon fabric in soft blush or sage green, delicate golden embellishments and details, romantic silhouette, soft ethereal lighting, haute couture wedding party fashion, elegant and feminine, 8k quality"
  },
  {
    id: "05",
    name: "Traje para Formatura",
    prompt: "Professional fashion photography of a contemporary elegant graduation dress on a mannequin, modern sophisticated design, sleek silhouette, premium fabric in jewel tones like emerald or royal blue, stylish yet appropriate for formal ceremony, young and fresh haute couture, 8k quality"
  },
  {
    id: "06",
    name: "Peça Autoral",
    prompt: "Professional fashion photography of a unique conceptual haute couture piece on a dress form, artistic and avant-garde design, sculptural elements, unexpected fabric combinations, dramatic silhouette, creative fashion art piece, designer runway quality, museum-worthy craftsmanship, 8k quality"
  },
  {
    id: "07",
    name: "Vestido de Noiva Moderno",
    prompt: "Professional fashion photography of a modern minimalist wedding dress on a mannequin, sophisticated clean lines, sleek contemporary silhouette, premium white crepe or mikado fabric, subtle elegant details, architectural design, understated luxury bridal fashion, Scandinavian aesthetic, 8k quality"
  },
  {
    id: "08",
    name: "Blazer Personalizado",
    prompt: "Professional fashion photography of a custom tailored women's blazer on a dress form, impeccable bespoke construction, premium Italian wool fabric, perfect lapels and stitching details, sophisticated neutral color, haute couture tailoring, luxury women's suiting, close-up details visible, 8k quality"
  },
  {
    id: "09",
    name: "Vestido de Gala",
    prompt: "Professional fashion photography of a breathtaking red carpet gala gown on a mannequin, dramatic flowing silhouette, luxurious fabric with movement, artistic design that captures art in motion, rich jewel tones or classic black, haute couture evening wear, celebrity-worthy elegance, 8k quality"
  }
];

// Making-of prompts
const makingOfPrompts = [
  {
    id: "01",
    name: "Seleção de Tecidos",
    prompt: "Elegant flat lay photography of luxury fabric swatches and textile samples, silk, satin, lace, chiffon in cream and neutral tones, professional fabric curation, haute couture atelier materials, soft natural lighting, premium fashion materials, organized and artistic arrangement, 8k quality"
  },
  {
    id: "02",
    name: "Modelagem",
    prompt: "Professional photography of dress pattern making and draping process, muslin fabric draped on dress form, fashion designer hands working, pattern pieces and measuring tape, haute couture atelier workshop, soft studio lighting, behind the scenes fashion creation, 8k quality"
  },
  {
    id: "03",
    name: "Costura Artesanal",
    prompt: "Close-up professional photography of expert hands doing delicate hand sewing, needle and thread on fine fabric, intricate stitching details, haute couture craftsmanship, artisan seamstress at work, soft focused lighting, premium fashion construction, 8k quality"
  },
  {
    id: "04",
    name: "Acabamentos",
    prompt: "Professional close-up photography of haute couture finishing details, delicate beading, hand-sewn buttons, fine hemming, lace trim application, exquisite craftsmanship details, luxury fashion construction, soft macro photography, 8k quality"
  }
];

function generateImage(prompt, width = 600, height = 800) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      prompt: prompt,
      width: width,
      height: height
    });

    const options = {
      hostname: BASE_URL,
      path: '/v1/flux-pro-1.1',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Key': API_KEY,
        'Content-Length': data.length
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(body);
          resolve(result.id);
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

function checkStatus(taskId) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: BASE_URL,
      path: `/v1/get_result?id=${taskId}`,
      method: 'GET',
      headers: {
        'X-Key': API_KEY
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          const result = JSON.parse(body);
          resolve(result);
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.end();
  });
}

async function waitForResult(taskId) {
  while (true) {
    const result = await checkStatus(taskId);

    if (result.status === 'Ready') {
      return result.result?.sample;
    } else if (result.status === 'Failed') {
      throw new Error('Generation failed');
    }

    console.log(`  Status: ${result.status}... waiting`);
    await new Promise(r => setTimeout(r, 3000));
  }
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('='.repeat(60));
  console.log('  HIDAKA Portfolio Image Generator');
  console.log('  Using Flux AI for haute couture fashion imagery');
  console.log('='.repeat(60));
  console.log('');

  // Generate portfolio images (600x800 portrait)
  console.log('Generating Portfolio Images (9 images)...\n');

  for (const item of portfolioPrompts) {
    console.log(`[${item.id}] ${item.name}`);
    try {
      const taskId = await generateImage(item.prompt, 600, 800);
      console.log(`  Task ID: ${taskId}`);

      const imageUrl = await waitForResult(taskId);

      if (imageUrl) {
        const filepath = path.join(portfolioDir, `${item.id}.jpg`);
        await downloadImage(imageUrl, filepath);
        console.log(`  ✓ Saved: ${filepath}\n`);
      }

      // Rate limiting
      await new Promise(r => setTimeout(r, 2000));

    } catch (err) {
      console.log(`  ✗ Error: ${err.message}\n`);
    }
  }

  // Generate making-of images (400x400 square)
  console.log('\nGenerating Making-Of Images (4 images)...\n');

  for (const item of makingOfPrompts) {
    console.log(`[${item.id}] ${item.name}`);
    try {
      const taskId = await generateImage(item.prompt, 400, 400);
      console.log(`  Task ID: ${taskId}`);

      const imageUrl = await waitForResult(taskId);

      if (imageUrl) {
        const filepath = path.join(makingOfDir, `${item.id}.jpg`);
        await downloadImage(imageUrl, filepath);
        console.log(`  ✓ Saved: ${filepath}\n`);
      }

      await new Promise(r => setTimeout(r, 2000));

    } catch (err) {
      console.log(`  ✗ Error: ${err.message}\n`);
    }
  }

  console.log('='.repeat(60));
  console.log('  Generation Complete!');
  console.log('='.repeat(60));
}

main().catch(console.error);
