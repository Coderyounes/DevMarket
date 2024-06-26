const mongoose = require('mongoose');

// eslint-disable-next-line consistent-return
const checkIdValidity = (req, res, next) => {
  const { id } = req.params;
  const status = mongoose.Types.ObjectId.isValid(id);

  if (!status) {
    return res.status(403).send('malformed id');
  }

  next();
};

module.exports = checkIdValidity;
