<?php

	if (isset($_REQUEST['email']))  {
	  
		$email = $_REQUEST['email'];
		$person = $_REQUEST['person'];
		$message = $_REQUEST['message'];
	  

		$to = 'dzarekcoding@gmail.com, admin2@example.com'; // <--- tu wysyłasz
		$subject = 'Wiadomość od ' + $mail;
		$message = '
		<html>
		<head>
		  <title>Wiadomość od <?php echo $person; ?> </title>
		</head>
		<body>

		  <p>Bla bla bla bla....</p>
		  
		  
			<?php
				echo $message;
			?>
		  

		</body>
		</html>
		';
		$headers[] = 'MIME-Version: 1.0';
		$headers[] = 'Content-type: text/html; charset=iso-8859-1';



		mail($to, $subject, $message, implode("\r\n", $headers));
		
		echo 'Wysłano wiadomość...';
	}

?>
