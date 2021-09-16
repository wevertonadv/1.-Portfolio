//alert("Seja Bem vindo")
//confirm("Quer continuar na pagina?") /* confirmação*/
//prompt("Qual é seu nome?") //perguntando o Nome

var btn = $("#back-to-top");
btn.click(function() {
  $('html, body').animate({scrollTop:0}, 'slow');
});