'use strict';

import gulp        				from 'gulp';
import browserSync 				from 'browser-sync';
import gulpif      				from 'gulp-if';
import config      				from '../config';

gulp.task('audioConfig', function() {

	//
	return gulp.src(config.audio.src)
    	.pipe(gulp.dest(config.audio.dest))
});