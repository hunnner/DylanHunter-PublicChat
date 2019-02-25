<html>

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

	<title>Idea Vocalizer</title>
	<!-- CSS -->
	<link rel="stylesheet" href="style.css" type="text/css" charset="utf-8" />
	<!-- jQuery Library -->
	<script src="scripts/jquery.js"></script>
	<!-- jQuery UI Library -->
	<script src="scripts/jquery-ui.js"></script>
	<!-- Animation Library -->
	<script type="text/javascript" scr="scripts/transit.js"></script>
	<!-- JS Libraries -->
	<script src="scripts/plugins.js"></script>
	<!-- Custom JS Script -->
	<script src="scripts/app.js"></script>
	<!-- Chat JS -->
	<script type="text/javascript" src="scripts/chat.js"></script>
	<!-- Voice JS -->
	<script type="text/javascript" src="scripts/voice.js"></script>
	<!-- Chat Script -->
	<script type="text/javascript">

			// ask user for name with popup prompt
			var name = prompt("Enter your chat name:", "Guest");

			// default name is 'Guest'
		if (!name || name === ' ') {
			 name = "Guest";
		}

		// strip tags
		name = name.replace(/(<([^>]+)>)/ig,"");

		// display name on page
		$("#name-area").html("You are: <span>" + name + "</span>");

		// kick off chat
			var chat =  new Chat();
		$(function() {

			 chat.getState();

			 // watch textarea for key presses
					 $("#sendie").keydown(function(event) {

							 var key = event.which;

							 //all keys including return.
							 if (key >= 33) {

									 var maxLength = $(this).attr("maxlength");
									 var length = this.value.length;

									 // don't allow new content if length is maxed out
									 if (length >= maxLength) {
											 event.preventDefault();
									 }
								}
																																																			});
			 // watch textarea for release of key press
			 $('#sendie').keyup(function(e) {

					if (e.keyCode == 13) {

									var text = $(this).val();
					var maxLength = $(this).attr("maxlength");
									var length = text.length;

									// send
									if (length <= maxLength + 1) {

								chat.send(text, name);
								$(this).val("");

									} else {

						$(this).val(text.substring(0, maxLength));
					}
					}
					 });
		});
	</script>
</head>

<body onload="setInterval('chat.update()', 1000)" class="no-scroll">

		<div id="homepage">
			<div id="inner-cont">
<!--PROMPT-->
			<div id="prompt">
CURRENTLY NOT LIVE
			</div>

<!--CLOCK-->
			<div id="clock"></div>
			<div id="clock-text">
				SEE UPCOMING LIVESTREAMS BELOW.
			</div>

<!--Link to livestreams-->
					<a href="http://instagram.com/thackhamhunter">
            <div id="livestream-link">
                LIVESTREAMS @VOCALIZETOGETHER
            </div>
					</a>
<!--CALENDER EVENTS -->
			<ul class="row block-grid events">
				<a href="http://instagram.com/thackhamhunter">
					<li>
						<dl>
							<dt><time date="03/01/2019"><span class="calendar-date">MAR. 01,</span> <span class="calendar-time">1PM–2PM</span></time></dt>
							<dd>Dequindre Cut</dd>
						</dl>
					</li>
				</a>
				<a href="http://instagram.com/thackhamhunter">
					<li>
						<dl>
                            <dt><time date="03/02/2019"><span class="calendar-date">MAR. 02,</span> <span class="calendar-time">1PM–2PM</span></time></dt>
							<dd class="padding">Lincoln St. Art Park</dd>
						</dl>
					</li>
				</a>
				<a href="http://instagram.com/thackhamhunter">
					<li>
						<dl>
                            <dt><time date="03/03/2019"><span class="calendar-date">MAR. 03,</span> <span class="calendar-time">1PM–2PM</span></time></dt>
							<dd>Another Place</dd>
						</dl>
					</li>
				</a>
			</ul>
		</div>
	</div>
<!--END OF HOMEPAGE-->

<!--SLIDER-->
		<div id="slider" >
			<span id="slider-text">PARTICIPATE</span>
			<span id="arrow">↑</span>
		</div>

<!--CHAT-->
<div id="second-page">
<div id="chat-cont">
    <div id="prompt-chat">
			prompts are placed here and change every 10 minutes
    </div>

	<div id="location">currently not live</div>

			<div id="chat-area"></div>

		<form id="send-message-area">
				<textarea id="sendie" maxlength='100'></textarea>
				<div id="send"></div>
		</form>

</div>
</div>
<!--END OF CHAT-->

</body>

</html>
