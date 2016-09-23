<?php
  // show potential errors / feedback (from login object)
  if (isset($login)) {
    if ($login->errors) {
      foreach ($login->errors as $error) {
        echo $error;
      }
    }
    if ($login->messages) {
      foreach ($login->messages as $message) {
        echo $message;
      }
    }
  }
?>

<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <style>
    * {
      box-sizing: border-box;
    }
    body {
      font-family: futura;
      background-color: #67594b;
      background-image:
        radial-gradient(
          circle,
          #67594b,
          #302823
        );
    }
    .container {
      margin: 6.5em auto 0;
      max-width: 18em;
    }
    img {
      width: 100%;
    }
    form {
      width: 100%;
      text-align: center;
    }
    input {
      display: block;
      margin: .25em 0;
      padding: .25em;
      width: 100%;
      font: 1.5em futura;
    }
    button {
      border: none;
      margin-top: .875em;
      padding: .875em 2.75em .625em;
      box-shadow: 0 0 7px rgba(0, 0, 0, .3);
      color: #fff;
      font: .6875em/1.675 futura;
      letter-spacing: .2em;
      background: inherit;
      transition: .5s ease;
    }
    @media (min-width: 450px) {
      button {
        font-size: .75em;
      }
    }
    button:hover,
    button:active {
      cursor: pointer;
      background-color: #302823;
    }
  </style>
</head>

<body>
  <div class="container">
    <img src="neko.png" alt="">
    <form name="loginform" action="index.php" method="post">
      <input type="text" name="user_name" placeholder="username" required autofocus>
      <input type="password" name="user_password" placeholder="password" required>
      <button type="submit" name="login">LOG IN</button>
    </form>
  </div>
</body>
</html>
