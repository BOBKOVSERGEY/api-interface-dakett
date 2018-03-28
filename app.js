var bs = require("browser-sync").create();

bs.watch(['sessionStorage/*.*', 'sessionStorage/css/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./sessionStorage"
});