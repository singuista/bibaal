'use strict'

import gulp         			from 'gulp'
import sass         			from 'gulp-sass'
import sourcemaps   			from 'gulp-sourcemaps'
import moduleImporter 			from 'sass-module-importer'
import gulpif       			from 'gulp-if'
import browserSync  			from 'browser-sync'
import autoprefixer 			from 'gulp-autoprefixer'
import handleErrors 			from '../util/handle-errors'
import config       			from '../config'

gulp.task('sass', function() {
	return gulp.src(config.styles.src)
		/*.pipe(sass({
			sourceComments: global.isProd ? 'map' : 'map',
			sourceMap: global.isProd ? 'sass' : 'sass',
			outputStyle: global.isProd ? 'compressed' : 'nested'
		}))*/
		.pipe(sourcemaps.init())
		.pipe(sass({
			importer: moduleImporter(),
			outputStyle: global.isProd ? 'compressed' : 'nested'
		}).on('error', sass.logError))
  		.pipe(sourcemaps.write())
		.on('error', handleErrors)
		.pipe(autoprefixer('last 2 versions', '> 1%', 'ie 8'))
		.pipe(gulp.dest(config.styles.dest))
		.pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })))
})
