export const isImageValid = (url: string): boolean => {
  const img = new Image();
  img.src = url;
  return img.height != 0;
};
