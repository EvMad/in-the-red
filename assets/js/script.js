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


// local storage

// after a user types in box, they click this button
$(".saveBtn").on("click", function () {
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


// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

//color code


function colorCode() {

    // define hour 

    var currentHour = time.hours();
    console.log(currentHour);

    // target time blocks

    // reach into the html and grab all of the time boxes
    document.querySelectorAll('.description')
        .forEach(function(eachElement) {
            // for loop over each hour

            console.dir(eachElement);

            var hourOfElementAsString = eachElement.attributes.alt.nodeValue;
            var hourOfElement = parseInt(hourOfElementAsString);
            console.log(hourOfElement)
            
            // compare hourOfElement to current hour and apply the appropriate class
    
    
    
            if (hourOfElement > currentHour) {
                // add the class to the element
                eachElement.classList.add("future")
            } else if (hourOfElement === currentHour) {
                eachElement.classList.add("present")
            } else {
                eachElement.classList.add("past")
            } 
        })
};



colorCode();