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

<body onload="setInterval('chat.update()', 1000)">

		<div id="homepage" class="full">

<!--PROMPT-->
			<div id="prompt">
				
			</div>

<!--CLOCK-->
			<div id="clock"></div>
			<div id="clock-text">
				SEE UPCOMING LIVESTREAMS BELOW.
			</div>
            
<!--Link to livestreams-->    
            <div id="livestream-link">
                LIVESTREAMS @VOCALIZETOGETHER
            </div>

<!--CALENDER EVENTS -->
			<ul class="row block-grid events">
				<a href="http://instagram.com/thackhamhunter">
					<li>
						<dl>
							<dt><time date="02/20/2019"><span class="calendar-date">FEB 20,</span> <span class="calendar-time">1PM - 2PM</span></time></dt>
							<dd>Dequindre Cut</dd>
						</dl>
					</li>
				</a>
				<a href="http://instagram.com/thackhamhunter">
					<li>
						<dl>
                            <dt><time date="02/22/2019"><span class="calendar-date">FEB 22,</span> <span class="calendar-time">1PM - 2PM</span></time></dt>
							<dd class="padding">Lincoln Street Art Park</dd>
						</dl>
					</li>
				</a>
				<a href="http://instagram.com/thackhamhunter">
					<li>
						<dl>
                            <dt><time date="02/28/2019"><span class="calendar-date">FEB 28,</span> <span class="calendar-time">1PM - 2PM</span></time></dt>
							<dd>Another Place</dd>
						</dl>
					</li>
				</a>
			</ul>
		</div>
<!--END OF HOMEPAGE-->

<!--SLIDER-->
		<div id="slider" >
			<div id="slider-text">PARTICIPATE</div>
		</div>

<!--CHAT-->
<div id="chat-cont">
    <div id="prompt-chat">
    
    </div>
    
	<div id="location">
		<div id="location-text">
			LIVE AT DEQUINDRE CUT
		</div>
	</div>

		<p id="name-area"></p>

			<div id="chat-area"></div>

		<form id="send-message-area">
				<textarea id="sendie" maxlength='100'></textarea>
				<div id="send"></div>
		</form>

</div>
<!--END OF CHAT-->

</body>

</html>
