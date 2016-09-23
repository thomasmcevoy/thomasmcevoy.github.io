<?php

	$postData = file_get_contents("php://input");
	$data = json_decode($postData, true);

	$name = $data['name'];
	$email = $data['email'];
	$message = $data['message'];
	$emailvalid = true;
	$msgsent = false;

	if($email && !filter_var($email, FILTER_VALIDATE_EMAIL))
		$emailvalid = false;
	else if($message) {
		$header = "From: $name" . "\r\n";
		$body = "$message\n\n$name\n$email\n\nSent from Thomas-McEvoy.com";
		mail("tmcevoy213@gmail.com","Website inquiry",$body,$header);
		$msgsent = true;
	}

?>
