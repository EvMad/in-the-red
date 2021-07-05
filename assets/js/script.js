
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

function getSaved(value) {
    var savedNine = localStorage.getItem('9am');
    document.getElementById("9am").innerHTML = savedNine;  
    console.log(savedNine);

    var savedTen = localStorage.getItem('10am');
    document.getElementById("10am").innerHTML = savedTen;  
    console.log(savedTen);

    var savedEleven = localStorage.getItem('11am');
    document.getElementById("11am").innerHTML = savedEleven;  
    console.log(savedEleven);

    var savedTwelve = localStorage.getItem('12pm');
    document.getElementById("12pm").innerHTML = savedTwelve;  
    console.log(savedTwelve);

    var savedOne = localStorage.getItem('1pm');
    document.getElementById("1pm").innerHTML = savedOne;  
    console.log(savedOne);

    var savedTwo = localStorage.getItem('2pm');
    document.getElementById("2pm").innerHTML = savedTwo;  
    console.log(savedTwo);

    var savedThree = localStorage.getItem('3pm');
    document.getElementById("3pm").innerHTML = savedThree;  
    console.log(savedThree);

    var savedFour = localStorage.getItem('4pm');
    document.getElementById("4pm").innerHTML = savedFour;  
    console.log(savedFour);

    var savedFive = localStorage.getItem('5pm');
    document.getElementById("5pm").innerHTML = savedFive;  
    console.log(savedFive);
};

// onload(getSaved);

console.log("hello");

//time display

var time = moment();

var currentDay = time.format("MMM Do, YYYY");
$("#currentDay").text(currentDay);

console.log(currentDay);


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist






// local storage

// after a user types in box, they click this button
$(".saveBtn").on("click", function() {
    // ** reach into the html, grab related input box text, save it to variable
    // getht he button that was clicked
    var theButton = $(this);
    // get the classes on that button that correlate to hour
    var classOfButton = theButton.attr('class');
    // since it was two class separated by and space, split it into an array
    var classesOfButton = classOfButton.split(' ');
    // pull the 2nd index of that array which will be our time
    var idOfTextArea = classesOfButton[1];

    // reach into the html and grab the text area
    var textAreaEl = $("#" + idOfTextArea);

    // get the text out of it
    var textContent = textAreaEl.val();

    console.log(textContent);
    // --- save text input to local storage ---

    
    
    
    // convert that data we just grabbed into a json string
    localStorage.setItem(idOfTextArea, textContent);
    // set it to local storage

    
    
   
    
    
        



    // test it

    
    // console.log(value);
});

getSaved();

//color code


function colorCode() {

    var hour = time.hours();
    
    $(".description").each(function () {
        
        var thisHour = parseInt($(this).attr("alt"));
        if (thisHour > hour) {
            $(this).addClass("future")
        }
        else if (thisHour === hour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("past");
        }
    })

};


// var ten = moment(10).format("HH");
// var eleven = moment(11).format("HH");
// var twelve = moment(12).format("HH");
// var one = moment(13).format("HH");
// var two = moment(14).format("HH");
// var three = moment(15).format("HH");
// var four = moment(16).format("HH");
// var five = moment(17).format("HH");
// var six = moment(18).format("HH");


//     if (time < nine) {
//         $("#9am").addClass("future");
//     } else if (nine < time < ten) {
//         $("#9am").removeClass("future").addClass("present");
//     } else {
//         $("#9am").removeClass("present").addClass("past");
//     };


//     if (time < ten) {
//         $("#10am").addClass("future");
//     } else if (ten < time < eleven) {
//         $("#10am").removeClass("future").addClass("present");
//     } else if (eleven < time) {
//         $("#10am").removeClass("present").addClass("past");
//     };

    // if (time < eleven) {
    //     $("#11am").addClass("future");
    // } else if (eleven < time < twelve) {
    //     $("#11am").removeClass("future").addClass("present");
    // } else if (twelve < time) {
    //     $("#11am").removeClass("present").addClass("past");
    // };

    // if (time < twelve) {
    //     $("#12pm").addClass("future");
    // } else if (twelve < time < one) {
    //     $("#12pm").removeClass("future").addClass("present");
    // } else if (one < time) {
    //     $("#12pm").removeClass("present").addClass("past");
    // };

    // if (time < one) {
    //     $("#1pm").addClass("future");
    // } else if (one < time < two) {
    //     $("#1pm").removeClass("future").addClass("present");
    // } else if (two < time) {
    //     $("#1pm").removeClass("present").addClass("past");
    // };

    // if (time < two) {
    //     $("#2pm").addClass("future");
    // } else if (two < time < three) {
    //     $("#2pm").removeClass("future").addClass("present");
    // } else if (three < time) {
    //     $("#2pm").removeClass("present").addClass("past");
    // };

    // if (time < three) {
    //     $("#3pm").addClass("future");
    // } else if (three < time < four) {
    //     $("#3pm").removeClass("future").addClass("present");
    // } else if (four < time) {
    //     $("#3pm").removeClass("present").addClass("past");
    // };

    // if (time < four) {
    //     $("#4pm").addClass("future");
    // } else if (four < time < five) {
    //     $("#4pm").removeClass("future").addClass("present");
    // } else if (five < time) {
    //     $("#4pm").removeClass("present").addClass("past");
    // };

    // if (time < five) {
    //     $("#5pm").addClass("future");
    // } else if (five < time) {
    //     $("#5pm").removeClass("future").addClass("present");
    // } else if (six < time) {
    //     $("#5pm").removeClass("present").addClass("past");
    // };

// };

colorCode();



