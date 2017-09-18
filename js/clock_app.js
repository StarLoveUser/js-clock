window.onload = function() {
  var ClockApp = function() {
    // Extract date.
    var date = new Date(),
        hours = date.getHours(),
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();

    // Access to p element
    var pDay = document.getElementById('day');
    var pMonth = document.getElementById('month');
    var pYear = document.getElementById('year');
    var pHours = document.getElementById('hours');
    var pMinutes = document.getElementById('minutes');
    var pSeconds = document.getElementById('seconds');

    // Months
    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

    // Changue content of p element
    if (hours < 10) { hours = "0" + hours; };
    if (hours > 10) { hours = hours; };
    if (minutes < 10) { minutes = "0" + minutes };
    if (minutes < 10) { minutes = minutes };
    if (seconds < 10) { seconds = "0" + seconds };
    if (seconds > 10) { seconds = seconds };
    pDay.textContent = day;
    pMonth.textContent = months[month]
    pYear.textContent = year;
    pHours.textContent = hours;
    pMinutes.textContent = minutes;
    pSeconds.textContent = seconds;

  };

  ClockApp();
  var interval = setInterval(ClockApp, 1000);

};
