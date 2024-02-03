function currentTime() {
    var d = new Date(); // Get current time
    var hr = d.getHours(); // Get current hours
    var min = d.getMinutes(); // Get current mins
    var sec = d.getSeconds(); // Get current seconds
    var ampm; // declare empty variable to store Am or PM

    // Add 0 to single digits for seconds
    if (sec < 10) {
        sec = "0" + sec;
    }

    // Add 0 to single digits for minutes
    if (min < 10) {
        min = "0" + min;
    }

    // Determine AM or PM
    if (hr == 12) {
        ampm = "PM"; // Set to PM
    } else if (hr > 12) {
        hr -= 12; // Deduct 12 from hours greater than 12 (Military time)
        ampm = "PM"; // Set to PM     
    } else {
        ampm = "AM"; // Set to AM
    }

    // Assemble time format to display
    var time = hr + ":" + min + ":" + sec + " " + ampm;

    // Display current local time and time zone on HTML elements
    document.getElementById("clock").innerText = time; // adding time

    //display timezone
    var timezoneValue = getTimezone();
    document.getElementById("timezone-value").innerText = timezoneValue;

    var utchr = d.getUTCHours(); // Get current Greenwich mean time (GMT)
    var timeDiff; // to store time difference between GMT hour and local hour
    var adjTimeDiff; // to store difference converted to a positive number
    var timeZone; // to store 4 time zones (PM, MT, CT, ET)
}
    
function getTimezone() {
    var timezoneOffset = new Date().getTimezoneOffset();
    var timezoneHours = Math.abs(timezoneOffset) / 60;
    var timezoneValue = timezoneOffset >= 0 ? "GMT - " : "GMT + ";
    timezoneValue += timezoneHours;
    return timezoneValue;
}

   
// Initial run of time data function
    // Run time data function every 1 second
    setInterval(currentTime, 1000); // setting timer
// Initial run of time data function
currentTime();

    
