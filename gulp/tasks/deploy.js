

'use strict';

import fs 			from 'fs';
import gulp 		from 'gulp';
import s3 			from 'gulp-s3';
//import config from '../config';

gulp.task('deploy', ['prod'], function() {

	// Deploy to hosting environment
	var aws = JSON.parse(fs.readFileSync('./aws/aws.json'));
	gulp.src('./build/**').pipe(s3(aws));

});

gulp.task('deploystg', ['prod'], function() {

	// Deploy to hosting environment
	var aws = JSON.parse(fs.readFileSync('./aws/aws-stg.json'));
	gulp.src('./build/**').pipe(s3(aws));

});

gulp.task('deployprod', ['prod'], function() {

	// Deploy to hosting environment
	var aws = JSON.parse(fs.readFileSync('./aws/aws-prod.json'));
	gulp.src('./build/**').pipe(s3(aws));

});
