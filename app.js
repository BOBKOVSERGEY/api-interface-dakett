var bs = require("browser-sync").create();

bs.watch(['history/*.*', 'history/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./history"
});