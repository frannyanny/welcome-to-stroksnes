// import fs from 'fs';
// import path from 'path';
// import sizeOf from 'image-size';

// // import { ImageData } from 'types/image.ts';
type ImageData = {
  name: string;
  relPath: string;
  size: number;
  height: number;
  width: number;
  title: string;
  photographer: string;
  film: string;
  camera: string;
  alt: string;
  createdAt: Date;
}


// const imageDir: string = path.join(__dirname, '../public/images');
// const outputFile: string = path.join(__dirname, '../public/imageData.json');

// const getImageDetails = (): void => {
//   const files: string[] = fs.readdirSync(imageDir);
//   const imageData: ImageData[] = files.map((file: string) => {
//     const filePath: string = path.join(imageDir, file);
//     const relPath: string = path.join('/images',file);
//     const stats: fs.Stats = fs.statSync(filePath);
//     const buffer = fs.readFileSync(filePath);
//     const dimensions = sizeOf(buffer);
//     const height: number = dimensions.height;
//     const width: number = dimensions.width;
//     const alt: string = file;

//     return {
//       name: file,
//       relPath: relPath,
//       size: stats.size,
//       createdAt: stats.birthtime,
//       height: height,
//       width: width,
//       title: '',
//       photographer: '',
//       film: '',
//       camera: '',      
//       alt: alt
//     };
//   });

//   fs.writeFileSync(outputFile, JSON.stringify(imageData, null, 2));
//   console.log('✅ Image data generated successfully!');
// };

// getImageDetails();


import fs from 'fs';
import path from 'path';
import sizeOf from 'image-size';

// interface ImageData {
//   name: string;
//   size: number;
//   createdAt: Date;
// }

const imageDir: string = path.join(__dirname, '../public/images');

const getImageDetails = (): void => {
  const supportedExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];
  const imageDataPath: string = path.join(__dirname, '../public/imageData.json');

  // Read existing data if available
  let existingData: ImageData[] = [];
  if (fs.existsSync(imageDataPath)) {
    try {
      existingData = JSON.parse(fs.readFileSync(imageDataPath, 'utf8'));
    } catch (err) {
      console.error('Error reading imageData.json:', err);
    }
  }

  // Get current image files
  const currentFiles: string[] = fs.readdirSync(imageDir)
    .filter(file => supportedExtensions.includes(path.extname(file).toLowerCase()));

  const currentFileSet = new Set(currentFiles);

  // Remove entries not found in the folder
  const filteredExistingData = existingData.filter(entry => {
    const exists = currentFileSet.has(entry.name);
    if (!exists) {
      console.log(`🗑️ Removing stale entry: ${entry.name}`);
    }
    return exists;
  });

  // Find new files not already listed
  const existingNames = new Set(filteredExistingData.map(entry => entry.name));
  const newFiles = currentFiles.filter(file => !existingNames.has(file));

  const newImageData: ImageData[] = newFiles.map((file: string) => {
    const filePath: string = path.join(imageDir, file);
    const stats: fs.Stats = fs.statSync(filePath);
    const relPath: string = path.join('/images', file);
    const buffer = fs.readFileSync(filePath);
    const dimensions = sizeOf(buffer);

    return {
      name: file,
      relPath: relPath,
      size: stats.size,
      createdAt: stats.birthtime,
      height: dimensions.height,
      width: dimensions.width,
      title: '',
      photographer: '',
      film: '',
      camera: '',
      alt: file
    };
  });

  const finalData = [...filteredExistingData, ...newImageData];

  fs.writeFileSync(imageDataPath, JSON.stringify(finalData, null, 2));
  console.log(`✅ Final write: ${newImageData.length} new, ${existingData.length - filteredExistingData.length} removed. ${newImageData.length + filteredExistingData.length} entries in total`);
};

getImageDetails();
