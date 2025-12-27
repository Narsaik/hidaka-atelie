const https = require('https');
const fs = require('fs');
const path = require('path');

const portfolioDir = path.join(__dirname, '../public/images/portfolio');
const makingOfDir = path.join(__dirname, '../public/images/making-of');
const teamDir = path.join(__dirname, '../public/images/team');

// Ensure directories exist
[portfolioDir, makingOfDir, teamDir].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    https.get(url, (response) => {
      // Handle redirect
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (res) => {
          res.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded: ${filepath}`);
            resolve();
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded: ${filepath}`);
          resolve();
        });
      }
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      reject(err);
    });
  });
}

async function main() {
  console.log('Downloading placeholder images...\n');

  // Portfolio images (9 images, 600x800)
  const portfolioImages = [
    { id: 1, seed: 'dress1' },
    { id: 2, seed: 'dress2' },
    { id: 3, seed: 'dress3' },
    { id: 4, seed: 'dress4' },
    { id: 5, seed: 'dress5' },
    { id: 6, seed: 'dress6' },
    { id: 7, seed: 'dress7' },
    { id: 8, seed: 'dress8' },
    { id: 9, seed: 'dress9' },
  ];

  for (const img of portfolioImages) {
    const url = `https://picsum.photos/seed/${img.seed}/600/800`;
    const filepath = path.join(portfolioDir, `0${img.id}.jpg`);
    try {
      await downloadImage(url, filepath);
      await new Promise(r => setTimeout(r, 500)); // Rate limiting
    } catch (err) {
      console.error(`Failed to download portfolio ${img.id}:`, err.message);
    }
  }

  // Making-of images (4 images, 400x400)
  const makingOfImages = [
    { id: 1, seed: 'fabric' },
    { id: 2, seed: 'sewing' },
    { id: 3, seed: 'craft' },
    { id: 4, seed: 'detail' },
  ];

  for (const img of makingOfImages) {
    const url = `https://picsum.photos/seed/${img.seed}/400/400`;
    const filepath = path.join(makingOfDir, `0${img.id}.jpg`);
    try {
      await downloadImage(url, filepath);
      await new Promise(r => setTimeout(r, 500));
    } catch (err) {
      console.error(`Failed to download making-of ${img.id}:`, err.message);
    }
  }

  // Team portrait (1 image, 400x500)
  const teamUrl = 'https://picsum.photos/seed/portrait/400/500';
  const teamPath = path.join(teamDir, 'kathlyn.jpg');
  try {
    await downloadImage(teamUrl, teamPath);
  } catch (err) {
    console.error('Failed to download team portrait:', err.message);
  }

  console.log('\nDone!');
}

main().catch(console.error);
