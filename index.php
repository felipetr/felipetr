<?php
session_start();

$baseurl = 'https://localhost/projetos/felipe/2021/';
 ?><!doctype html>
<html lang="<?php
if(!($_SESSION['felipetr_lang']))
{

$locallang = substr($_SERVER['HTTP_ACCEPT_LANGUAGE'], 0, 5);

if ($locallang == !'pt-BR')
	{
		$locallang = 'en-US';
	}

    $_SESSION['felipetr_lang'] = $locallang;
}

 echo $_SESSION['felipetr_lang']
 ?>">

<head>
    <meta charset="UTF-8">
    <title>Felipe Travassos</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="content-type" content="text/html;charset=utf-8" />
    <link rel="icon shortcut" type="image/x-icon" href="assets/images/favicon.png" />
    <link rel="stylesheet" href="<?php echo $baseurl; ?>libs/bootstrap-5.0.2/css/bootstrap.min.css">
	    <link rel="stylesheet" href="<?php echo $baseurl; ?>libs/cleanalert/cleanalert.css">
	    <link rel="stylesheet" href="<?php echo $baseurl; ?>libs/fontawesome-free-5.15.4-web/css/all.min.css">

    
    <link rel="stylesheet" href="<?php echo $baseurl; ?>assets/css/felipetravassos.css">
    <link rel="stylesheet" href="<?php echo $baseurl; ?>assets/css/style.css?v=<?php echo time(); ?>">


</head>

<body >
    <div id="app">
    <header class="" id="header">
    <div class="container text-center">
    <nav class="p-3">
    <a href="#home"><img src="assets/images/logoc.svg" class="logoheader" alt=""></a>
       
            <button id="respbtn" v-on:click="fullscreenmenu('open')" class="respbtn" data-title="Info Alert w/ Danger Button" data-text="This is a info alert" data-type="info" data-btntype="danger"><i class="fas fa-bars"></i></button>
            
            <ul class="menu">
                <li><a v-bind:title="translate('portfolio_title')" href="#portfolio">{{translate('portfolio_title')}}</a></li>
                <li><a v-bind:title="translate('skills_title')" href="#skills">{{translate('skills_title')}}</a></li>
                <li><a v-bind:title="translate('services_title')" href="#services">{{translate('services_title')}}</a></li>
                <li><a v-bind:title="translate('contactme_title')" href="#contactme">{{translate('contactme_title')}}</a></li>

            </ul>
        </nav>
    </div>
</header>

<div id="fullscreenmenu">
<button id="closebtn"  v-on:click="fullscreenmenu('close')"><i class="fas fa-times"></i></button>
          <div class="novomenu">
<ul class="list-group">
  <li class="list-group-item"><a  v-on:click="fullscreenmenu('close')" v-bind:title="translate('portfolio_title')" href="#portfolio">{{translate('portfolio_title')}}</a></li>
  <li class="list-group-item"><a  v-on:click="fullscreenmenu('close')" v-bind:title="translate('skills_title')" href="#skills">{{translate('skills_title')}}</a></li>
  <li class="list-group-item"><a  v-on:click="fullscreenmenu('close')" v-bind:title="translate('services_title')" href="#services">{{translate('services_title')}}</a></li>
  <li class="list-group-item"><a  v-on:click="fullscreenmenu('close')" v-bind:title="translate('contactme_title')" href="#contactme">{{translate('contactme_title')}}</a></li>
  
</ul>
</div>
</div>
<section id="home">
        <img src="assets/images/logow.svg" id="logohome" alt="Felipe Travassos">
</section>
<section id="portfolio">
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
<p>asdfasd</p>
</section>
    </div>

    <button class="respbtn" >Info Alert w/ Danger Button</button>
    <script>
       const baseurl = '<?php echo $baseurl; ?>';
    </script>

    <script src="libs/vue.min.js"></script>
    <script src="libs/bootstrap-5.0.2/js/bootstrap.bundle.min.js"></script>
    <script src="libs/cleanalert/cleanalert.js"></script>
    <script src="assets/js/vanilla.js"></script>
    <script src="assets/js/app.js"></script>

</body>

</html>