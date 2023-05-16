var moment = require("moment");
var unique = require('uniq');

var myDate = new Date();
var myCurrentDate = moment(myDate).format("LL");

console.log(myCurrentDate);