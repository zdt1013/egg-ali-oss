const oss = require('./lib/oss');

module.exports = class {
  constructor(agent) {
    this.agent = agent;
  }

  configDidLoad() {
    if (this.agent.config.aliOss.useAgent) {
      oss(this.agent);
    }
  }
};
