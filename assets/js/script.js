//time display

var displayTime = document.querySelector("#currentDay");

var currentTime = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

displayTime.textContent=currentTime;


//color code

const nine = moment(09).format("HH");
const ten = moment(10).format("HH");
const eleven = moment(11).format("HH");
const twelve = moment(12).format("HH");
const one = moment(13).format("HH");
const two = moment(14).format("HH");
const three = moment(15).format("HH");
const four = moment(16).format("HH");
const five = moment(17).format("HH");



function colorCode() {

    var hours = moment();

if (hours < nine ) {$("#9am").addClass("future");}

else if (nine < hours < ten ) {$("#9am").removeClass("future").addClass("present");}

else if  (ten < hours) {$("#9am").removeClass("present").addClass("past");};