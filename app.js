var bs = require("browser-sync").create();

bs.watch(['form/auth/*.*', 'form/auth/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./form/auth"
});