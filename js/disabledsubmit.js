$(document).ready(function () {
    $("form[name=form]").submit(function(e){
		e.preventDefault(); //não envia o form
    });
});