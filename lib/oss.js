const assert = require('assert');
const OSS = require('ali-oss');

function checkBucketConfig(config) {
  assert(config.endpoint || config.region,
    '[egg-ali-oss] Must set `endpoint` or `region` in oss\'s config');
  assert(config.accessKeySecret && config.accessKeyId,
    '[egg-ali-oss] Must set `accessKeyId` and `accessKeySecret` in oss\'s config');
}

module.exports = app => {
  app.addSingleton('aliOss', config => {
    config = Object.assign({}, config);
    if (config.cluster) {
      config.cluster.forEach(checkBucketConfig);
      return new OSS.ClusterClient(config);
    }

    if (config.sts === true) {
      return new OSS.STS(config);
    }

    checkBucketConfig(config);
    return new OSS(config);
  });
  app.createAliOss = app.aliOss.createInstance.bind(app.aliOss);
};
