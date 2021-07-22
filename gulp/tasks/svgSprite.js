const gulp = require('gulp'),
      svgSprite = require('gulp-svg-sprite');

module.exports = function svg() {
    return gulp.src('app/**/*.svg')
        .pipe(svgSprite(
            {
                mode: {
                    stack: { 
                      sprite: "../icons.svg",
                      example: true
                    }
                }
            }
        ))
        .pipe(gulp.dest('dist/img'));

}