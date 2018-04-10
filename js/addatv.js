function addatv(v){
	
	//pego o valor da primeira div
	let $local = document.getElementById("local");
	
	// e criado um label para empresa e um label para função e um input para cada um tambem
	let $div = document.createElement("div");
	let $labele = document.createElement("label");
	let $labelf = document.createElement("label");
	let $inpute = document.createElement("input");
	let $inputf = document.createElement("input");
	
	//o v veem como string por isso tenho de usar o parseInt transformar em number para somar com 1 se não ele conctena
	$qt = parseInt(v)+1;
	
	//atribuo a quantidade atual dos empregos no botão servir de contador
	document.getElementById("+").value = $qt;
	document.getElementById("-").value = $qt;
	document.getElementById("qtd").value = $qt;
	
	//altero o nome dos campos empresa e função depois que tem mais de um
	document.getElementById("empresa1").innerHTML = "Empresa 1";
	document.getElementById("funcao1").innerHTML = "Função 1";
	
	
	$labele.innerHTML = "Empresa "+$qt;
	$labelf.innerHTML = "Função "+$qt;
	$inpute.setAttribute("type", "text");
	$inputf.setAttribute("type", "text");
	$inpute.setAttribute("name", "atv"+$qt);
	$inputf.setAttribute("name", "func"+$qt);
	$inpute.setAttribute("class", "form-control");
	$inputf.setAttribute("class", "form-control");
	
	$div.setAttribute("id", "div"+v);
	
	$div.appendChild($labele);
	$div.appendChild($inpute);
	$div.appendChild($labelf);
	$div.appendChild($inputf);
	
	$local.appendChild($div);
}
function rematv(v){
	let $qtdiv = parseInt(v)-1;
	let $divrem = document.getElementById("div"+$qtdiv);
	if(v == 2 ){
	   	document.getElementById("empresa1").innerHTML = "Empresa";
		document.getElementById("funcao1").innerHTML = "Função";	
	}
	$divrem.parentNode.removeChild($divrem);
	document.getElementById('+').value = $qtdiv; 
	document.getElementById('-').value = $qtdiv;
	document.getElementById('qtd').value = $qtdiv;
}