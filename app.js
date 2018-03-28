var bs = require("browser-sync").create();

bs.watch(['localstorage/*.*', 'localstorage/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./localstorage"
});