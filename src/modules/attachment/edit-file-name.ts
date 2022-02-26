var path = require('path');

export const editFileName = (req, file, callback) => {
  const fileExtName = path.extname(file.originalname);
  const randomName = Array(12)
    .fill(null)
    .map(() => Math.round(Math.random() * 16).toString(16))
    .join('');
  callback(null, `${randomName}${fileExtName}`);
};
