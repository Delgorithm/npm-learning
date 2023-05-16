var moment = require("moment");
var unique = require('uniq');

var myDate = new Date();
var myCurrentDate = moment(myDate).format("LL");

var myList = [1,2,1,1,1,3,3,6,5,5,3,4,6];

var myUniqueList = unique(myList);

console.log(myUniqueList);