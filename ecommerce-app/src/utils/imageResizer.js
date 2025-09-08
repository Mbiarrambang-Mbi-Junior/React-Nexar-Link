// c:/Users/mbiar/Documents/React-Nexar-Link/ecommerce-app/src/utils/imageResizer.js
/**
 * Resizes an image client-side using a canvas.
 * @param {string} imageUrl - The source of the image to resize.
 * @param {number} maxWidth - The maximum width for the resized image.
 * @param {number} quality - The quality of the output JPEG image (from 0 to 1).
 * @returns {Promise<string>} A promise that resolves with the resized image as a data URL.
 */
export const resizeImage = (imageUrl, maxWidth = 800, quality = 0.9) => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    // This is not strictly necessary for local images but is good practice.
    image.crossOrigin = 'Anonymous';
    image.src = imageUrl;

    image.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        const aspectRatio = image.width / image.height;

        // Calculate new dimensions while maintaining aspect ratio
        const newWidth = image.width > maxWidth ? maxWidth : image.width;
        const newHeight = newWidth / aspectRatio;

        canvas.width = newWidth;
        canvas.height = newHeight;

        // Draw the resized image onto the canvas
        ctx.drawImage(image, 0, 0, newWidth, newHeight);

        // Get the new image as a data URL
        const dataUrl = canvas.toDataURL('image/png', quality);
        resolve(dataUrl);
      } catch (e) {
        console.error('Canvas resizing failed:', e);
        reject(e);
      }
    };

    image.onerror = (err) => {
      console.error('Image loading failed:', err);
      reject(err);
    };
  });
};
