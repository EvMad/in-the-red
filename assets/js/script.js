//time display

var time = moment();

var currentDaY = time.format("MMM Do, YYYY");
$("#currentDay").text(currentDaY);

// local storage

$(".saveBtn").on("click", function() {

    var value = $(this).sibling("textarea").val();
    
    localStorage.setItem(value);
})


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
const six = moment(18).format("HH");

function colorCode() {


    if (time < nine) {
        $("#9am").addClass("future");
    } else if (nine < time < ten) {
        $("#9am").removeClass("future").addClass("present");
    } else if (ten < time) {
        $("#9am").removeClass("present").addClass("past");
    }


    if (time < ten) {
        $("#10am").addClass("future");
    } else if (ten < time < eleven) {
        $("#10am").removeClass("future").addClass("present");
    } else if (eleven < time) {
        $("#10am").removeClass("present").addClass("past");
    };

    if (time < eleven) {
        $("#11am").addClass("future");
    } else if (eleven < time < twelve) {
        $("#11am").removeClass("future").addClass("present");
    } else if (twelve < time) {
        $("#11am").removeClass("present").addClass("past");
    };

    if (time < twelve) {
        $("#12pm").addClass("future");
    } else if (twelve < time < one) {
        $("#12pm").removeClass("future").addClass("present");
    } else if (one < time) {
        $("#12pm").removeClass("present").addClass("past");
    };

    if (time < one) {
        $("#1pm").addClass("future");
    } else if (one < time < two) {
        $("#1pm").removeClass("future").addClass("present");
    } else if (two < time) {
        $("#1pm").removeClass("present").addClass("past");
    };

    if (time < two) {
        $("#2pm").addClass("future");
    } else if (two < time < three) {
        $("#2pm").removeClass("future").addClass("present");
    } else if (three < time) {
        $("#2pm").removeClass("present").addClass("past");
    };

    if (time < three) {
        $("#3pm").addClass("future");
    } else if (three < time < four) {
        $("#3pm").removeClass("future").addClass("present");
    } else if (four < time) {
        $("#3pm").removeClass("present").addClass("past");
    };

    if (time < four) {
        $("#4pm").addClass("future");
    } else if (four < time < five) {
        $("#4pm").removeClass("future").addClass("present");
    } else if (five < time) {
        $("#4pm").removeClass("present").addClass("past");
    };

    if (time < five) {
        $("#5pm").addClass("future");
    } else if (five < time) {
        $("#5pm").removeClass("future").addClass("present");
    } else if (six < time) {
        $("#5pm").removeClass("present").addClass("past");
    };

}



