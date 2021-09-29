<?php

$nome = $_POST['name'];

$email = $_POST['email'];
$chh = $_POST['chh'].$_POST['chh2'];


$mensagem = $_POST['message'].'';

if($chh)
{
	echo 'error';
	
	exit();
}


$titulo = 'Contato do Site';

$corpo = '<h2>Contato Site</h2>

<p><b>Nome:</b>'.$nome.'</p>
<p><b>Email:</b>'.$email.'</p>
<p><b>Mensagem:</b><br>'.$mensagem.'</p><p>
';
$meumail = 'contato@felipetravassos.com';
$cabecalho  = "MIME-Version: 1.0\n";
$cabecalho .= "Content-type: text/html; charset=UTF-8\n";
$cabecalho .= "Reply-to: ".$email."\n";
$cabecalho .= "From: ".$nome." <".$meumail.">";

mail($meumail, $titulo, $corpo, $cabecalho);

if(mail)
{
	echo 'success';
	exit();
}
else
{
	echo 'error';
	
	exit();
}

?>
