// middleware/contractMiddleware.js
module.exports.calculateEndDate = function (next) {
  if (this.status === 'ongoing') {
    if (!this.startAT) {
      this.startAT = new Date(); // Set startAT to current time
    }
    if (this.delay && !this.endAT) {
      const delayInMilliseconds = Number(this.delay) * 24 * 60 * 60 * 1000;
      this.endAT = new Date(this.startAT.getTime() + delayInMilliseconds);
    }
  }
  next();
};
