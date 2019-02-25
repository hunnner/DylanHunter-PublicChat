$(document).ready(function() {

  // TRANSITION SLIDER
  $('#slider').click(function() {
    $('#homepage').slideToggle(600);
    $('#slider-text').text($('#slider-text').text() == 'SCHEDULE' ? 'PARTICIPATE' : 'SCHEDULE');
    $('#arrow').text($('#arrow').text() == '↓' ? '↑' : '↓');
    // $('#arrow').toggleClass('flip');
  });

  //  DOMAIN SPEAKER
  function domainSpeak() {
    responsiveVoice.speak("participate at shout-together.com");
  }
  domainSpeak();
  setInterval(domainSpeak, 30000);

  //  PROMPT SPEAKER
  // function domainSpeak() {
  //   var prompt =
  //   responsiveVoice.speak("participate at shout-together.com");
  // }
  // domainSpeak();
  // setInterval(domainSpeak, 30000);

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
      date.getDate() === 24 && /*Day*/
      date.getHours() === 18 && /*Hour*/
      date.getMinutes() < 10) /*Minute*/ {

      document.getElementById('prompt').innerHTML = "Do you like me?",
      document.getElementById('prompt-chat').innerHTML = document.getElementById('prompt').innerHTML
      document.getElementById('clock-text').innerHTML = "new topic every 10 minutes";
      document.getElementById('livestream-link').innerHTML = "livestreaming now @vocalizetogether";
      document.getElementById('location').innerHTML = "live at dequindre cut";

    } else if (
      date.getYear() === 119 && /*Current year minus 1900*/
      date.getMonth() === 1 && /* January is 0, February is 1 etc*/
      date.getDate() === 24 && /*Day*/
      date.getHours() === 18 && /*Hour*/
      date.getMinutes() < 20) /*Minute*/ {

      document.getElementById('prompt').innerHTML = "How are you?",
      document.getElementById('prompt-chat').innerHTML = document.getElementById('prompt').innerHTML
      document.getElementById('clock-text').innerHTML = "new topic every 10 minutes";
      document.getElementById('livestream-link').innerHTML = "livestreaming now @vocalizetogether";
      document.getElementById('location').innerHTML = "live at dequindre cut";

    } else if (
      date.getYear() === 119 && /*Current year minus 1900*/
      date.getMonth() === 1 && /* January is 0, February is 1 etc*/
      date.getDate() === 24 && /*Day*/
      date.getHours() === 18 && /*Hour*/
      date.getMinutes() < 30) /*Minute*/ {

      document.getElementById('prompt').innerHTML = "Communism will prevail?",
      document.getElementById('prompt-chat').innerHTML = document.getElementById('prompt').innerHTML
      document.getElementById('clock-text').innerHTML = "new topic every 10 minutes";
      document.getElementById('livestream-link').innerHTML = "livestreaming now @vocalizetogether";
      document.getElementById('location').innerHTML = "live at dequindre cut";

    } else if (
      date.getYear() === 119 && /*Current year minus 1900*/
      date.getMonth() === 1 && /* January is 0, February is 1 etc*/
      date.getDate() === 24 && /*Day*/
      date.getHours() === 18 && /*Hour*/
      date.getMinutes() < 40) /*Minute*/ {

      document.getElementById('prompt').innerHTML = "2Pac is dead?",
      document.getElementById('prompt-chat').innerHTML = document.getElementById('prompt').innerHTML
      document.getElementById('clock-text').innerHTML = "new topic every 10 minutes";
      document.getElementById('livestream-link').innerHTML = "livestreaming now @vocalizetogether";
      document.getElementById('location').innerHTML = "live at dequindre cut";

    } else if (
      date.getYear() === 119 && /*Current year minus 1900*/
      date.getMonth() === 1 && /* January is 0, February is 1 etc*/
      date.getDate() === 24 && /*Day*/
      date.getHours() === 18 && /*Hour*/
      date.getMinutes() < 50) /*Minute*/ {

      document.getElementById('prompt').innerHTML = "Cats or Ferrets?",
      document.getElementById('prompt-chat').innerHTML = document.getElementById('prompt').innerHTML
      document.getElementById('clock-text').innerHTML = "new topic every 10 minutes";
      document.getElementById('livestream-link').innerHTML = "livestreaming now @vocalizetogether";
      document.getElementById('location').innerHTML = "live at dequindre cut";

    } else if (
      date.getYear() === 119 && /*Current year minus 1900*/
      date.getMonth() === 1 && /* January is 0, February is 1 etc*/
      date.getDate() === 24 && /*Day*/
      date.getHours() === 18 && /*Hour*/
      date.getMinutes() > 50) /*Minute*/ {

      document.getElementById('prompt').innerHTML = "are octopus aliens from another planet?",
      document.getElementById('prompt-chat').innerHTML = document.getElementById('prompt').innerHTML
      document.getElementById('clock-text').innerHTML = "new topic every 10 minutes";
      document.getElementById('livestream-link').innerHTML = "livestreaming now @vocalizetogether";
      document.getElementById('location').innerHTML = "live at dequindre cut";

    }
  }, 1000);

});
