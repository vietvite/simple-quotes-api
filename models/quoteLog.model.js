let mongoose = require('mongoose');

let quoteLogSchema = new mongoose.Schema({
    err: String,
    errorDate: {
      type: Date,
      default: Date.now
    }
});

class Log {
  static async getLogs() {
    return await quoteLog.find();
  }

  static async saveLog(log) {
    return quoteLog({err: log}).save();
  }
}
const quoteLog = mongoose.model('ErrorLog', quoteLogSchema);
module.exports = Log;