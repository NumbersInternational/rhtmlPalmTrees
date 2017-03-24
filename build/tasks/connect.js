const gulp = require('gulp');
const serveStatic = require('serve-static');
const serveIndex = require('serve-index');
const connect = require('connect');
const connectLiveReload = require('connect-livereload');
const httpServer = require('http');

gulp.task('connect', function () {
  const app = connect()
    //.use(connectLiveReload({ port: 35729 }))
    // browser is a directory of compiled JS/HTML/CSS to serve. It is generated by the core task
    .use(serveStatic('theSrc/internal_www'))
    .use(serveIndex('theSrc/internal_www'));

  httpServer.createServer(app)
    .listen(9000)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:9000');
    });
});
