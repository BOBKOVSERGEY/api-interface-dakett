var bs = require("browser-sync").create();

bs.watch(['modal/*.*', 'modal/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./modal"
});