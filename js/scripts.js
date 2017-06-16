//l'action au click sur "Learn More" et click de marker
function showSidebar(pageUrl, title){
	//je charge le contenu en ajax
	$("#sidebar .content").load(pageUrl + " .content", function(){
		//j'affiche la sidebar quand le contenu est chargé et je définis la valeur de son h2
		$("#sidebar").animate({right: 0}).find("h2").text(title);
	});
}

//affiche une question du jeu
function displayQuestion(){
	var question = quizz.items[quizz.currentQuestion];
	var html = questionTemplate(question);
	$("#gameBoard").html(html);
}

//template pour le jeu
var questionSource = $("#question-template").html();
var questionTemplate = Handlebars.compile(questionSource);

//plugin parallax
$.stellar();

//charger les données via AJAX
$.getJSON("https://wt-902485dbb4fca4fccee3a0efcde5b34c-0.run.webtask.io/discover-brussels")
	.done(function(data){
		//affichage de la carte
		var map = new GMaps({
		  div: '#map',
		  lat: data.mapConfig.defaultLatitude,
		  lng: data.mapConfig.defaultLongitude,
		  zoom: data.mapConfig.defaultZoom
		});

		//configuration du template pour les highlights dans la page
		var source = $("#highlight-template").html();
		var template = Handlebars.compile(source);
		var $highlightsContainer = $("#highlights");

		//boucle sur les highlights
		data.highlights.forEach(function(highlight){
			//création du bloc html
			var html = template(highlight);
			$highlightsContainer.append(html);
			//ajout du marker
			map.addMarker({
		        lat: highlight.latitude,
		        lng: highlight.longitude,
		        title: highlight.name,
		        click: function(){
		        	showSidebar(highlight.pageUrl, highlight.name);
		        }
		  	});

		  	
		});
	});

//click sur "Learn More" >>> BUBBLING !!!!!!
$("#highlights").on("click",".btn", function(e){
	//je vais chercher le page-url
	var pageUrl = $(this).closest("div[data-page-url]").data("page-url"); //'atomium.html'
	var title = $(this).closest(".caption").find("h3").text();
	showSidebar(pageUrl, title);
	//e.stopPropagation();
	//e.preventDefault();
	return false; //ça revient à faire les 2 lignes du dessus
});

//au click sur "Close"
$("#close").click(function(){
	$("#sidebar").animate({right: -300});
	return false;
});

//le jeu
//au démarrage la page, j'affiche la première question
displayQuestion();

$("#gameBoard").on("click", "button", function(){
	var question = quizz.items[quizz.currentQuestion];
	var answer = $("input[name='gameRadio']:checked").val(); //"true" ou "false". comparer true à "true"
	if(question.answer + "" === answer){
		quizz.points++;
	}
	quizz.currentQuestion++;
	if(quizz.currentQuestion < quizz.items.length){
		displayQuestion();
	}
	else{
		$("#gameBoard").html("Score = " + quizz.points + " / " + quizz.items.length);
	}
});

