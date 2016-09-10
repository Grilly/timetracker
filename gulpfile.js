// declarations, dependencies
// ----------------------------------------------------------------------------
const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const gutil = require('gulp-util');
const babelify = require('babelify');
const browserSync = require('browser-sync');

const reload = browserSync.reload;

// External dependencies you do not want to rebundle while developing,
// but include in your application deployment
const dependencies = [
  'react',
  'react-dom',
];
// keep a count of the times a task refires
let scriptsCount = 0;

// Private Functions
// ----------------------------------------------------------------------------
function bundleApp(isProduction, shouldReload) {
  scriptsCount += 1;
  // Browserify will bundle all our js files together in to one and will let
  // us use modules in the front end.
  const appBundler = browserify({
    entries: './app/app.jsx',
    debug: true,
  });

  // If it's not for production, a separate vendors.js file will be created
  // the first time gulp is run so that we don't have to rebundle things like
  // react everytime there's a change in the js file
  if (!isProduction && scriptsCount === 1) {
    // create vendors.js for dev environment.
    browserify({
      require: dependencies,
      debug: true,
    })
      .bundle()
      .on('error', gutil.log)
      .pipe(source('vendors.js'))
      .pipe(gulp.dest('./web/js/'));
  }
  if (!isProduction) {
    // make the dependencies external so they dont get bundled by the
    // app bundler. Dependencies are already bundled in vendor.js for
    // development environments.
    dependencies.forEach((dep) => {
      appBundler.external(dep);
    });
  }

  appBundler
    // transform ES6 and JSX to ES5 with babelify
    .transform(babelify, { presets: ['es2015', 'react'] })
    .bundle()
    .on('error', gutil.log)
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./web/js/'))
    .on('end', () => {
      if (shouldReload) {
        reload();
      }
    });
}

// Gulp tasks
// ----------------------------------------------------------------------------
gulp.task('startBrowserSync', () => {
  browserSync({
    notify: false,
    logPrefix: 'BS',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: './',
  });
});

gulp.task('scripts', () => {
  bundleApp(false, true);
});

gulp.task('deploy', () => {
  bundleApp(true, false);
});

gulp.task('watch', () => {
  gulp.watch(['./app/**/*.js', './app/**/*.jsx'], ['scripts']);
});

// When running 'gulp' on the terminal this task will fire.
// It will start watching for changes in every .js file.
// If there's a change, the task 'scripts' defined above will fire.
gulp.task('default', ['startBrowserSync', 'scripts', 'watch']);
