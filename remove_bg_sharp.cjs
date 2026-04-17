const sharp = require('sharp');
async function removeWhiteBg(inputPath, outputPath) {
  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  for (let i = 0; i < data.length; i += info.channels) {
    if (data[i] > 245 && data[i+1] > 245 && data[i+2] > 245) {
      data[i+3] = 0;
    }
  }
  await sharp(data, { raw: { width: info.width, height: info.height, channels: info.channels } }).png().toFile(outputPath);
}

async function run() {
  await removeWhiteBg("public/assets/flower-corner.png", "public/assets/flower-corner-bg.png");
  await removeWhiteBg("public/assets/flower-center.png", "public/assets/flower-center-bg.png");
  console.log("Done");
}
run();
