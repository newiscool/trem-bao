const gulp = require('gulp');
const sass = require('gulp-sass');
const replace = require('gulp-replace');

gulp.task('styles', () => {
    gulp.src('src/assets/css/style.scss')
       .pipe(sass({
           sourceComments: 'map',
           sourceMap: 'sass',
           outputStyle: 'nested'
       }
       ))
       .on('error', (err) => {
           console.log('Error SASS: ', err);
       })
       .pipe(replace('UTF-8', 'ISO-8859-1'))
       .pipe(gulp.dest('./opencode/css/'));
});

gulp.task('default', () => {
   gulp.watch(['src/assets/css/**/*.s[a|c]ss', 'src/libs/**/*.s[a|c]ss'], ['styles']);
});