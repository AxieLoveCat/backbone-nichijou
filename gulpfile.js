const 
	spriter 	 = require('ispriter'),
	gulp 		 = require('gulp'),
	md5			 = require('gulp-md5-assets'),	
	sass 		 = require('gulp-sass'),
	babel 		 = require('gulp-babel'),
	concat 		 = require('gulp-concat'),
	rename		 = require('gulp-rename'),
	browserSync  = require('browser-sync'),
	minifyCss 	 = require('gulp-minify-css'),
	imagemin 	 = require('gulp-imagemin'),
	pngquant 	 = require('imagemin-pngquant'),
	minifyHTML 	 = require('gulp-minify-html'),
	fileinclude	 = require('gulp-file-include'),
	autoprefixer = require('gulp-autoprefixer');
	
// path settings  
var s = settings = {
	src: './src',
	dest: './bulid'
}

var	htmlSrc = s.src + '/*.html',
	jsSrc  = s.src + '/js/**/*.*',
	imgSrc = s.src + '/images/*.*',
	iconSrc = s.src + '/sass/icons/*.*',
	sassSrc = s.src + '/styles/sass/main.scss';

gulp.task('default', ['style', 'minify-html', 'copy', 'babel']);


gulp.task('style', () => {
	gulp.src( sassSrc )
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(minifyCss({
			compatibility: 'ie8'
		}))
		.pipe(rename('custom.css'))
		.pipe(gulp.dest( s.dest + '/css'))	
});

gulp.task('md5', ()=> {
	gulp.src( s.dest + '/css/*.css' )
		.pipe(md5(10, s.dest + '/index.html'))
		.pipe(gulp.dest( s.dest + '/css/' ));
});

gulp.task('pic', () => {
	gulp.src( imgSrc )
		.pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest( s.dest + '/images/'))
});

gulp.task('spriter', () => {
	spriter.merge({
	    "input":  iconSrc,
	    "output": ''
	});
});

gulp.task('copy', () => {
	gulp.src( htmlSrc )
		.pipe(gulp.dest( s.dest ));
	gulp.src( imgSrc )
		.pipe(gulp.dest( s.dest + '/images'))
	gulp.src( jsSrc )
		.pipe(gulp.dest( s.dest + '/js'))
	gulp.src( iconSrc )
		.pipe(gulp.dest( s.dest + '/css/icons'))

})

gulp.task('bs', () => {
	 browserSync({
        files:  s.src + "/**/*.*",
        server: {
            baseDir:  s.dest + "/"
        }
    })
})

gulp.task('copy-js', () => {
	gulp.src( jsSrc )
		.pipe(gulp.dest( s.dest + '/js'));
})

gulp.task('watch', () => {
	gulp.run(['minify-html', 'style', 'copy', 'babel']);

	gulp.watch( s.src + '/styles/sass/*.*', ['style'])
	gulp.watch( htmlSrc, ['minify-html'])
	gulp.watch( jsSrc , ['copy-js'])
})

gulp.task('babel', () => {
	gulp.src( s.src + '/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest( s.dest ));
})

gulp.task('minify-html', () => {
  var opts = {
    spare:true, conditionals: true
  };

  gulp.src( htmlSrc )
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest( s.dest ));
});