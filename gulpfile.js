const styleBuild = require('./gulp/build/styleBuild');

const gulp = require('gulp'),
	  styles = require('./gulp/tasks/style'),
	  browserSync = require('browser-sync').create(),
	  html = require('./gulp/tasks/html'),
	  script = require('./gulp/tasks/script'),
	  img = require('./gulp/tasks/img'),
	  fonts = require('./gulp/tasks/fonts'),
	  svg = require('./gulp/tasks/svgSprite'),
	  clean = require('./gulp/tasks/del'),
	  htmlBuild = require('./gulp/build/htmlBuild'),
	  scriptBuild = require('./gulp/build/scriptBuild'),
	  styl = require('./gulp/build/styleBuild'),
	  svgBuild = require('./gulp/build/svgBuild');

function browsersync() {
	browserSync.init({
		server: {
            baseDir: "dist/"
        }
	});
}

function watching() {
	gulp.watch(["app/sass/**/*.sass"], styles);
	gulp.watch(["app/sass/**/*.sass"]).on('change', browserSync.reload);
	gulp.watch(["app/**/*.html"], html);
	gulp.watch(["app/**/*.html"]).on('change', browserSync.reload);
	gulp.watch(["app/**/*.js"], script);
	gulp.watch(["app/**/*.js"]).on('change', browserSync.reload);
	gulp.watch(["app/img/**/*.{gif,png,jpg,webp}"], img);
	gulp.watch(["app/fonts/*"], fonts);
	// gulp.watch(["app/img/**/*.svg"], svg);
}
let ghPages = require('gulp-gh-pages');
gulp 
gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

const task = gulp.parallel(styles, html, script, img, fonts);
const dev = gulp.series(clean, task);

const wat = gulp.parallel(browsersync, watching);

exports.default = gulp.parallel(dev, wat);


exports.build = gulp.series(clean, htmlBuild, styl, scriptBuild, img, fonts)