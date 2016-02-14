var gulp = require('gulp'),
	connect  = require('gulp-connect'),
	port = process.env.port || 8000;

var webserver = require('gulp-webserver');

gulp.task('webserver', function() {
  gulp.src('app')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

//live reload html
gulp.task('html',function(){
	gulp.src('./app/*.html')
	.pipe(connect.reload());
});

//live reload html
gulp.task('watch',function(){
	gulp.watch('app/index.html',['html'])
});


gulp.task('serve',['watch','webserver'])