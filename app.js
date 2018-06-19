var bs = require("browser-sync").create();

bs.watch(['form/advanced-checkbox/*.*', 'form/auth/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./form/advanced-checkbox"
});