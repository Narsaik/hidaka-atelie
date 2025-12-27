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

// Direct high-quality fashion image URLs from various sources
// Using picsum with specific seeds for consistent, relevant images
const portfolioImages = [
  {
    id: "01",
    desc: "Vestido de Noiva Clássico - Wedding Dress",
    url: "https://images.pexels.com/photos/1488315/pexels-photo-1488315.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1"
  },
  {
    id: "02",
    desc: "Vestido de Festa Longo - Evening Gown",
    url: "https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1"
  },
  {
    id: "03",
    desc: "Conjunto Sob Medida - Tailored Suit",
    url: "https://images.pexels.com/photos/1587678/pexels-photo-1587678.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1"
  },
  {
    id: "04",
    desc: "Vestido de Madrinha - Bridesmaid Dress",
    url: "https://images.pexels.com/photos/1468838/pexels-photo-1468838.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1"
  },
  {
    id: "05",
    desc: "Traje para Formatura - Graduation Outfit",
    url: "https://images.pexels.com/photos/1462637/pexels-photo-1462637.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1"
  },
  {
    id: "06",
    desc: "Peça Autoral - Artistic Piece",
    url: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1"
  },
  {
    id: "07",
    desc: "Vestido de Noiva Moderno - Modern Wedding",
    url: "https://images.pexels.com/photos/291759/pexels-photo-291759.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1"
  },
  {
    id: "08",
    desc: "Blazer Personalizado - Custom Blazer",
    url: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1"
  },
  {
    id: "09",
    desc: "Vestido de Gala - Gala Dress",
    url: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=1"
  }
];

const makingOfImages = [
  {
    id: "01",
    desc: "Seleção de Tecidos - Fabric Selection",
    url: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
  },
  {
    id: "02",
    desc: "Modelagem - Pattern Making",
    url: "https://images.pexels.com/photos/4620866/pexels-photo-4620866.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
  },
  {
    id: "03",
    desc: "Costura Artesanal - Hand Sewing",
    url: "https://images.pexels.com/photos/4620853/pexels-photo-4620853.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
  },
  {
    id: "04",
    desc: "Acabamentos - Finishing Details",
    url: "https://images.pexels.com/photos/6153351/pexels-photo-6153351.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1"
  }
];

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);

    const request = (urlToFetch) => {
      const protocol = urlToFetch.startsWith('https') ? https : require('http');

      protocol.get(urlToFetch, (response) => {
        // Handle redirect
        if (response.statusCode === 301 || response.statusCode === 302 || response.statusCode === 307) {
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
  console.log('  HIDAKA Portfolio - Fashion Image Downloader');
  console.log('  Downloading curated fashion images');
  console.log('='.repeat(60));
  console.log('');

  // Download portfolio images
  console.log('Downloading Portfolio Images (9 images)...\n');

  for (const item of portfolioImages) {
    const filepath = path.join(portfolioDir, `${item.id}.jpg`);

    console.log(`[${item.id}] ${item.desc}`);

    try {
      await downloadImage(item.url, filepath);
      console.log(`    ✓ Downloaded\n`);
      await new Promise(r => setTimeout(r, 500));
    } catch (err) {
      console.log(`    ✗ Error: ${err.message}\n`);
    }
  }

  // Download making-of images
  console.log('\nDownloading Making-Of Images (4 images)...\n');

  for (const item of makingOfImages) {
    const filepath = path.join(makingOfDir, `${item.id}.jpg`);

    console.log(`[${item.id}] ${item.desc}`);

    try {
      await downloadImage(item.url, filepath);
      console.log(`    ✓ Downloaded\n`);
      await new Promise(r => setTimeout(r, 500));
    } catch (err) {
      console.log(`    ✗ Error: ${err.message}\n`);
    }
  }

  console.log('='.repeat(60));
  console.log('  Download Complete!');
  console.log('='.repeat(60));
}

main().catch(console.error);
