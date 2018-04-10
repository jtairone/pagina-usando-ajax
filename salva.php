<?php
$nome = $_POST['nome'];
$end = $_POST['end'];
$numero = $_POST['numero'];
$atv1 = $_POST['atv1'];
$func1 = $_POST['func1'];
$qt = intval($_POST['qt']);

$dados = array($nome, $end, $numero, $atv1, $func1);

if($qt > 1){
	$const = 2;
	//$num = parse_str($const);
	for($i=1; $i<$qt; $i++){	
		$atvx  = $_POST['atv'."$const"];
		$funcx = $_POST['func'."$const"];
		array_push($dados, $atvx, $funcx);
		$const++;
	}
}

$salvar = json_encode($dados);
/* este parte serial a de implementação para salvar no banco de dados mais como vou postar no github resolver não colocar este parte 
que seria mais simples só incluir a conexão do banco e mandar fazer um insert lá dos informaçãoes e etc fica pra outra hora explicar */

$name = "arquivos.txt"; //se não existir ele criar ou abre o arquivo para salvar
$file = fopen($name, 'a'); //chamo a função fopen com dois parametros o arquivos pra abrir e o parametro a para abrir
fwrite($file, $salvar); //mando escrever no arquivos e escrever as informações do salvar
fclose($file);  // fecho o arquivo

?>