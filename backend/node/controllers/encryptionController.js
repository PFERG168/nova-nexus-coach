// Basic encryption controller example
const { encryptData, decryptData } = require('../utils/encryption');

exports.encryptUserData = (req, res) => {
  const { data } = req.body;
  const encrypted = encryptData(data);
  res.json({ encrypted });
};
