// Bouton GoToTop
$(function(){
  $('#toTop').click(function() {
    $('html,body').animate({scrollTop: 0}, 'slow');
  });

  $(window).scroll(function(){
     if($(window).scrollTop()<20){
        $('#toTop').fadeOut();
     }else{
        $('#toTop').fadeIn();
     }
  });
});
// Cacher les divs
$(function(){
  $("#answer1").hide();
  $("#question1").click(function(){
    $("#answer1").toggle();
  });
});
$(function(){
    $("#answer2").hide();
    $("#question2").click(function(){
      $("#answer2").toggle();
    });
});
// ---------------------------------------------------
function verifierCaracteres(event) {

	var keyCode = event.which ? event.which : event.keyCode;
	var touche = String.fromCharCode(keyCode);
	var champ = document.getElementById('mon_input');
	var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	if(caracteres.indexOf(touche) >= 0) {
		champ.value += touche;
	}
}

function activate(e){
if( 48 < e.which && e.which< 57 || e.which ==8 || e.which ==0) {
}else{
e.preventDefault();
return false;
  }
}

function verifierCaracteres2(event) {
	var keyCode = event.which ? event.which : event.keyCode;
	var touche = String.fromCharCode(keyCode);
	var champ = document.getElementById('mon_input2');
	var caracteres = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
	if(caracteres.indexOf(touche) >= 0) {
		champ.value += touche;
	}
}

function activate2(e){
if( 48 < e.which && e.which< 57 || e.which ==8 || e.which ==0) {
}else{
e.preventDefault();
return false;
  }
}

function changer(){
  document.getElementById('titlehead').innerHTML = "StandBy-Janv";
  document.getElementById('jumbotron').innerHTML = "Les Simpsons !";
  document.getElementById('firstpara').innerHTML = "Les Simpsons (The Simpsons) est une série télévisée d'animation américaine créée par Matt Groening. Elle met en scène les Simpsons dont les membres de la famille, (ayant tous la peau de couleur jaune) sont Homer, Marge, Bart, Lisa et Maggie.";
  document.getElementById('question1').innerHTML = "Pouquoi cette page fait (une petite) allusion aux Simpsons ?";
  document.getElementById('answer1').innerHTML = "Cette page fait allusion aux Simpsons car il s'agit d'un exo 'StandBy' ayant eu pour thème les Séries Américanes et ce fut la série choisie !";
  document.getElementById('question2').innerHTML = "Est-ce que les autres séries américaines seront référencées sur cette page ?";
  document.getElementById('answer2').innerHTML = "Eh bien non ! Désolé pour les fans de séries américaines mais l'exercice ne concerne pas les séries américaines en général mais une en particulier ( Google est votre ami :) )!";
  document.getElementById('titledivimg').innerHTML = "Voici les Simpsons (devant la maison situé au 742 Evergreen Terrace à Springfield) :";
  document.getElementById('contact').innerHTML = "Contact :";
  document.getElementById('name').innerHTML = "Name :";
  document.getElementById('FName').innerHTML = "First Name :";
  document.getElementById('mail').innerHTML = "E-mail :";
  document.getElementById('subject').innerHTML = "Subject :";
  document.getElementById('message').innerHTML = "Message :";
}
