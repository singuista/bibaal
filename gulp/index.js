'use strict';

var fs = require('fs');
var onlyScripts = require('./util/script-filter');
var tasks = fs.readdirSync('./gulp/tasks/').filter(onlyScripts);

//console.log('tasks ==', tasks)

tasks.forEach(function(task) {
  require('./tasks/' + task);
});