var commands = require("./commands");
var version = require("./version");
var abbreviations = require("./util/abbreviations")(commands);

function clearRuntimeCache() {
  // Note that in edge cases, some architecture components instance's
  // in-memory cache might be skipped.
  // If that's a problem, you should create and fresh instances instead.
  var PackageRepository = require("./core/PackageRepository");
  PackageRepository.clearRuntimeCache();
}

module.exports = {
  version: version,
  commands: commands,
  config: require("./config")(),
  abbreviations: abbreviations,
  reset: clearRuntimeCache,
};
