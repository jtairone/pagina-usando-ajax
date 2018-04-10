function salvar(){
		var dados = $("form[name=form]").serializeArray(); //pega todos o campos do formulario
			//console.log(dados);
			//alert(dados.name["nome"].value);
			$.ajax({
				url: "salva.php",
				type: "POST",
				data: dados,
				dataType: "json", //escolher o tipo html ou json do retorno
 				success: function(data){
					//console.log(data);
					//alert(data[1]);
					
				}
			});
		  $("#form").trigger("reset"); //apos fazer o ajax e salvar limpa todos os campos do form
}
