var gulp = require('gulp')
var webserver = require('gulp-webserver')
var stylus = require('gulp-stylus')
var shell = require('gulp-shell')

var publicPath = '_dist/public/'
var frontendPath = 'src/frontend/'

var config = {
  fonts: {
    origin: frontendPath + 'fonts/*.ttf',
    watch: frontendPath + 'fonts/*.ttf',
    copy: publicPath + 'fonts'
  },
  html: {
    origin: frontendPath + '*.html',
    watch: frontendPath + '*.html',
    copy: publicPath + ''
  },
  styl: {
    main: frontendPath + 'styl/bundle.styl',
    watch: frontendPath + 'styl/*.styl',
    bundle: publicPath + 'css'
  },
  js: {
    main: frontendPath + 'js/bundle.js',
    watch: frontendPath + 'js/*.js',
    bundle: publicPath + 'js'
  }
}

gulp.task('copy-fonts', function () {
  gulp.src(config.fonts.origin)
    .pipe(gulp.dest(config.fonts.copy))
})

gulp.task('copy-html', function () {
  gulp.src(config.html.origin)
    .pipe(gulp.dest(config.html.copy))
})

gulp.task('build-css', function () {
  gulp.src(config.styl.main)
    .pipe(stylus())
    .pipe(gulp.dest(config.styl.bundle))
})

gulp.task('build-js', function () {
  console.log('build-js start')
  var script = 'browserify -t [ babelify --presets [ es2015 ] ] '+ config.js.main + ' > '+ config.js.bundle + '/bundle.js'
  console.log(script)
  gulp.src(config.js.main, {read: false})
   .pipe(shell([script]))
  console.log('build-js done')
})

gulp.task('build-frontend', [
  'copy-fonts', 
  'copy-html', 
  'build-css',
  'build-js'
])

gulp.task('watch', function () {
  gulp.watch(config.fonts.watch, ['copy-fonts'])
  gulp.watch(config.html.watch, ['copy-html'])
  gulp.watch(config.styl.watch, ['build-css'])
  gulp.watch(config.js.watch, ['build-js'])
})

gulp.task('server', function () {
  gulp.src(publicPath)
    .pipe(webserver({
      host: '0.0.0.0',
      port: 8080,
      livereload: true
    }))
})

gulp.task('default', [
  'copy-fonts', 
  'copy-html', 
  'build-css',
  'build-js',
  'watch',
  'server'
])

