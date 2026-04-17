const Jimp = require("jimp");

async function removeWhiteBg(imagePath, outPath) {
  try {
    const image = await Jimp.read(imagePath);
    
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
      // Get RGBA values
      const red = this.bitmap.data[idx];
      const green = this.bitmap.data[idx + 1];
      const blue = this.bitmap.data[idx + 2];
      
      // If the pixel is pure white or very close to white
      if (red > 240 && green > 240 && blue > 240) {
        // Set alpha to 0 (transparent)
        this.bitmap.data[idx + 3] = 0;
      }
    });

    await image.writeAsync(outPath);
  } catch (err) {
    console.error(err);
  }
}

async function run() {
  await removeWhiteBg("public/assets/flower-corner.png", "public/assets/flower-corner.png");
  await removeWhiteBg("public/assets/flower-center.png", "public/assets/flower-center.png");
  console.log("Done");
}

run();
