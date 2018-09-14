var gulp=require('gulp')
var sass=require('gulp-sass')
var browser=require('browser-sync').create()
var reload=browser.reload


gulp.task('default',function(){
	browser.init({
		server:{
			baseDir:"./"
		}
	})
	gulp.watch('./*.html')
	gulp.watch('./scss/**/*.scss', ['sass'])
})
gulp.task('index',function(){
	return gulp.src(reload({stream: true}))
})
gulp.task('sass',function(){
	return gulp.src('./scss/**/*.scss')
				.pipe(sass())
				.pipe(gulp.dest('./css'))
				.pipe(reload({stream: true}))
})

