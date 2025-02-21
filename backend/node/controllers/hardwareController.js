// Hardware controller for fetching hardware info
exports.getHardwareInfo = (req, res) => {
  res.json({
    cpu: 'Intel i7',
    gpu: 'NVIDIA RTX 3080',
    mouseDPI: 800
  });
};
