$(document).ready(function() {

  // TRANSITION SLIDER
  $('#slider').click(function() {
    $('#homepage').slideToggle(600);
    $(this).addClass('textToggle');
    $(this).text($(this).text() == 'SCHEDULE' ? 'PARTICIPATE' : 'SCHEDULE');
  });

  // CLOCK
  var myVar = setInterval(function() {
    myTimer();
  }, 1000);

  function myTimer() {
    var d = new Date();
    document.getElementById("clock").innerHTML = d.toLocaleTimeString();
  }

	// EVENT SCHEDULE
  $('time').each(function() {
    // create event time and current time
    var submitted_date = new Date($(this).attr('date'));
    var now = new Date();

    // zero out specific time on both
    submitted_date.setHours(0, 0, 0, 0);
    now.setHours(0, 0, 0, 0);

    // add class to active time
    if (submitted_date.getTime() == now.getTime()) {
      $(this).parent().parent().parent().toggleClass("live")
    }
  });

  // PROMPT SCHEDULE //
  window.setInterval(function() {
    var date = new Date();
    if (date.getYear() === 119 && /*Current year minus 1900*/
      date.getMonth() === 1 && /* January is 0, February is 1 etc*/
      date.getDate() === 23 && /*Day*/
      date.getHours() === 15 && /*Hour*/
      date.getMinutes() < 10) /*Minute*/ {

      document.getElementById('prompt').innerHTML = "CURRENTLY NOT LIVE.",
      document.getElementById('prompt-chat').innerHTML = document.getElementById('prompt').innerHTML

    } else if (
      date.getYear() === 119 && /*Current year minus 1900*/
      date.getMonth() === 1 && /* January is 0, February is 1 etc*/
      date.getDate() === 23 && /*Day*/
      date.getHours() === 15 && /*Hour*/
      date.getMinutes() < 20) /*Minute*/ {

      document.getElementById('prompt').innerHTML = "CURRENTLY NOT LIVE.",
      document.getElementById('prompt-chat').innerHTML = document.getElementById('prompt').innerHTML
        

    } else if (
      date.getYear() === 119 && /*Current year minus 1900*/
      date.getMonth() === 1 && /* January is 0, February is 1 etc*/
      date.getDate() === 23 && /*Day*/
      date.getHours() === 15 && /*Hour*/
      date.getMinutes() < 30) /*Minute*/ {

      document.getElementById('prompt').innerHTML = "CURRENTLY NOT LIVE.",
      document.getElementById('prompt-chat').innerHTML = document.getElementById('prompt').innerHTML

    } else if (
      date.getYear() === 119 && /*Current year minus 1900*/
      date.getMonth() === 1 && /* January is 0, February is 1 etc*/
      date.getDate() === 23 && /*Day*/
      date.getHours() === 15 && /*Hour*/
      date.getMinutes() < 40) /*Minute*/ {

      document.getElementById('prompt').innerHTML = "CURRENTLY NOT LIVE.",
      document.getElementById('prompt-chat').innerHTML = document.getElementById('prompt').innerHTML

    } else if (
      date.getYear() === 119 && /*Current year minus 1900*/
      date.getMonth() === 1 && /* January is 0, February is 1 etc*/
      date.getDate() === 23 && /*Day*/
      date.getHours() === 15 && /*Hour*/
      date.getMinutes() < 50) /*Minute*/ {

      document.getElementById('prompt').innerHTML = "CURRENTLY NOT LIVE.",
      document.getElementById('prompt-chat').innerHTML = document.getElementById('prompt').innerHTML

    } else if (
      date.getYear() === 119 && /*Current year minus 1900*/
      date.getMonth() === 1 && /* January is 0, February is 1 etc*/
      date.getDate() === 23 && /*Day*/
      date.getHours() === 15 && /*Hour*/
      date.getMinutes() > 50) /*Minute*/ {

      document.getElementById('prompt').innerHTML = "CURRENTLY NOT LIVE.",
      document.getElementById('prompt-chat').innerHTML = document.getElementById('prompt').innerHTML

    } 
  }, 1000);

});
