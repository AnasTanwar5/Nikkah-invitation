const { removeBackground } = require('@imgly/background-removal-node');
const fs = require('fs');

async function removeBg(imgPath, outPath) {
    console.log("Processing", imgPath);
    const blob = await removeBackground(imgPath);
    const buffer = Buffer.from(await blob.arrayBuffer());
    fs.writeFileSync(outPath, buffer);
    console.log("Done", outPath);
}

async function run() {
    await removeBg('public/assets/flower-corner.png', 'public/assets/flower-corner-clear.png');
    await removeBg('public/assets/flower-center.png', 'public/assets/flower-center-clear.png');
}
run();
