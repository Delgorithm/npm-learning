var moment = require("moment");

var myDate = new Date();
var myCurrentDate = moment(myDate).format("YYYY [escaped] YYYY");

console.log(myCurrentDate);