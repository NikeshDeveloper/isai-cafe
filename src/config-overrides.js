module.exports = function override(config) {
    // Disable source-map-loader for specific warnings
    config.ignoreWarnings = [
      (warning) =>
        warning.module &&
        warning.module.resource.includes("@mediapipe/tasks-vision"),
    ];
    return config;
  };
  