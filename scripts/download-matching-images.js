const https = require('https');
const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, '../public/images/portfolio');
const makingOfDir = path.join(__dirname, '../public/images/making-of');

// Ensure directories exist
[portfolioDir, makingOfDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Unsplash source URLs with specific search terms for each item
const portfolioImages = [
  { id: "01", search: "wedding-dress-lace-elegant", desc: "Vestido de Noiva Clássico" },
  { id: "02", search: "evening-gown-satin-luxury", desc: "Vestido de Festa Longo" },
  { id: "03", search: "tailored-suit-woman-elegant", desc: "Conjunto Sob Medida" },
  { id: "04", search: "bridesmaid-dress-chiffon", desc: "Vestido de Madrinha" },
  { id: "05", search: "formal-dress-graduation-elegant", desc: "Traje para Formatura" },
  { id: "06", search: "haute-couture-fashion-artistic", desc: "Peça Autoral" },
  { id: "07", search: "modern-wedding-dress-minimalist", desc: "Vestido de Noiva Moderno" },
  { id: "08", search: "blazer-tailored-woman-fashion", desc: "Blazer Personalizado" },
  { id: "09", search: "gala-gown-red-carpet-luxury", desc: "Vestido de Gala" },
];

const makingOfImages = [
  { id: "01", search: "fabric-textile-luxury-silk", desc: "Seleção de Tecidos" },
  { id: "02", search: "dress-pattern-sewing-fashion", desc: "Modelagem" },
  { id: "03", search: "hand-sewing-needle-thread", desc: "Costura Artesanal" },
  { id: "04", search: "fashion-details-beading-couture", desc: "Acabamentos" },
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    const request = (urlToFetch) => {
      https.get(urlToFetch, (response) => {
        // Handle redirect
        if (response.statusCode === 301 || response.statusCode === 302) {
          request(response.headers.location);
          return;
        }

        if (response.statusCode !== 200) {
          reject(new Error(`HTTP ${response.statusCode}`));
          return;
        }

        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      }).on('error', (err) => {
        fs.unlink(filepath, () => {});
        reject(err);
      });
    };

    request(url);
  });
}

async function main() {
  console.log('='.repeat(60));
  console.log('  HIDAKA Portfolio Image Downloader');
  console.log('  Downloading fashion-matched images from Unsplash');
  console.log('='.repeat(60));
  console.log('');

  // Download portfolio images
  console.log('Downloading Portfolio Images (9 images)...\n');

  for (const item of portfolioImages) {
    const url = `https://source.unsplash.com/600x800/?${item.search}`;
    const filepath = path.join(portfolioDir, `${item.id}.jpg`);

    console.log(`[${item.id}] ${item.desc}`);
    console.log(`    Search: ${item.search}`);

    try {
      await downloadImage(url, filepath);
      console.log(`    ✓ Downloaded\n`);
      // Wait to avoid rate limiting
      await new Promise(r => setTimeout(r, 1500));
    } catch (err) {
      console.log(`    ✗ Error: ${err.message}\n`);
    }
  }

  // Download making-of images
  console.log('\nDownloading Making-Of Images (4 images)...\n');

  for (const item of makingOfImages) {
    const url = `https://source.unsplash.com/400x400/?${item.search}`;
    const filepath = path.join(makingOfDir, `${item.id}.jpg`);

    console.log(`[${item.id}] ${item.desc}`);
    console.log(`    Search: ${item.search}`);

    try {
      await downloadImage(url, filepath);
      console.log(`    ✓ Downloaded\n`);
      await new Promise(r => setTimeout(r, 1500));
    } catch (err) {
      console.log(`    ✗ Error: ${err.message}\n`);
    }
  }

  console.log('='.repeat(60));
  console.log('  Download Complete!');
  console.log('='.repeat(60));
}

main().catch(console.error);
