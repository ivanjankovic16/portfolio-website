<?php
    $message_sent = false;
    if(isset($_POST['email']) && $_POST['email'] != ''){
        
        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL) ){
            
            //submit the form
            $userName = $_POST['name'];
            $userEmail = $_POST['email'];
            $message = $_POST['message'];

            $to = "i.jankovic@rocketmail.com";
            $body = "";

            $body .= "From: ".$userName. "\r\n";
            $body .= "Email: ".$userEmail. "\r\n";
            $body .= "Message: ".$message. "\r\n";

            mail($to,$userEmail,$body);

            $message_sent = true;
        }
    }
?>

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');
    </style>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
    <title>Ivan Jankovic Portfolio Site</title>
    <script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
        crossorigin="anonymous">
        
        //hide footer when input box is on focus
        $(document).on('focus', 'input, textarea', function() {
            $("div[data-role=footer]").hide();
        });

        //show footer when input is NOT on focus
        $(document).on('blur', 'input, textarea', function() {
            $("div[data-role=footer]").show();
        });
    </script>
</head>
<body>
    <section class="container">
        <div class="video-container">
        <video class="lazy" autoplay muted loop playsinline data-poster="pictures/poster1.png">
            <source data-src="./video/background-video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
        </div>
        <my-header></my-header>
        <main>
            <?php 
            if($message_sent):
            ?>
                <h3>Thank you, your message has been sent!</h3>
            <?php 
            else:
            ?>
            <div class="main-container-contact">
                <div class="main-contact-container">
                    <div class="contact-container">
                        <p>Send me a message here:</p>
                    </div>
                    <form id="form-id" class="form" action="contact.php" method="POST">
                        <div class="left-form">
                            <div class="name-container">
                                <label for="name">Full name:</label>
                                <input type="text" name="name" id="name" required autofocus placeholder="Your name" pattern="([^\s][A-z0-9À-ž\s]+){2,}" title="Type your name" />
                            </div>
                            <div class="email-container">
                                <label for="email">Email address:</label>
                                <input type="email" name="email" id="email" placeholder="Your email" title="Type your email" required />
                            </div>
                        </div>
                        <div class="right-form">
                            <div class="message-container">
                                <label for="message">Your message:</label>
                                <textarea name="message" id="message" title="Type your message" placeholder="Message..." maxlenght="10" rows="4"></textarea>
                                <button type="submit" name="submit" form="form-id" value="Submit">Send</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <?php
            endif;
            ?>
        </main>
        <my-footer></my-footer>
    </section>
    <script type="module" src="script.js"></script>
</body>
</html>