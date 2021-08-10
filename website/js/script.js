	function openmenu(){
		document.getElementById("navlist").style.display = "flex";
		document.getElementById("hamburger").style.display = "none";
	}
	function closemenu(){
		document.getElementById("navlist").style.display = "none";
		document.getElementById("hamburger").style.display = "block";
	}
	function contain1(){
		document.getElementById("con1").style.display="flex"
		document.getElementById("c1").style.backgroundColor="Khaki"
		document.getElementById("c2").style.backgroundColor="LavenderBlush"
		document.getElementById("c3").style.backgroundColor="LavenderBlush"
		document.getElementById("c4").style.backgroundColor="LavenderBlush"
		document.getElementById("c5").style.backgroundColor="LavenderBlush"
		document.getElementById("con2").style.display="none"
		document.getElementById("con3").style.display="none"
		document.getElementById("con4").style.display="none"
		document.getElementById("con5").style.display="none"
	}
	function contain2(){
		document.getElementById("con1").style.display="none"
		document.getElementById("con2").style.display="flex"
		document.getElementById("c1").style.backgroundColor="LavenderBlush"
		document.getElementById("c2").style.backgroundColor="Khaki"
		document.getElementById("c3").style.backgroundColor="LavenderBlush"
		document.getElementById("c4").style.backgroundColor="LavenderBlush"
		document.getElementById("c5").style.backgroundColor="LavenderBlush"
		document.getElementById("con3").style.display="none"
		document.getElementById("con4").style.display="none"
		document.getElementById("con5").style.display="none"
	}
	function contain3(){
		document.getElementById("con1").style.display="none"
		document.getElementById("con2").style.display="none"
		document.getElementById("con3").style.display="flex"
		document.getElementById("c1").style.backgroundColor="LavenderBlush"
		document.getElementById("c2").style.backgroundColor="LavenderBlush"
		document.getElementById("c3").style.backgroundColor="Khaki"
		document.getElementById("c4").style.backgroundColor="LavenderBlush"
		document.getElementById("c5").style.backgroundColor="LavenderBlush"
		document.getElementById("con4").style.display="none"
		document.getElementById("con5").style.display="none"
	}
	function contain4(){
		document.getElementById("con1").style.display="none"
		document.getElementById("con2").style.display="none"
		document.getElementById("con3").style.display="none"
		document.getElementById("con4").style.display="flex"
		document.getElementById("c1").style.backgroundColor="LavenderBlush"
		document.getElementById("c2").style.backgroundColor="LavenderBlush"
		document.getElementById("c3").style.backgroundColor="LavenderBlush"
		document.getElementById("c4").style.backgroundColor="Khaki"
		document.getElementById("c5").style.backgroundColor="LavenderBlush"
		document.getElementById("con5").style.display="none"
	}
	function contain5(){
		document.getElementById("con1").style.display="none"
		document.getElementById("con2").style.display="none"
		document.getElementById("con3").style.display="none"
		document.getElementById("con4").style.display="none"
		document.getElementById("con5").style.display="flex"
		document.getElementById("c1").style.backgroundColor="LavenderBlush"
		document.getElementById("c2").style.backgroundColor="LavenderBlush"
		document.getElementById("c3").style.backgroundColor="LavenderBlush"
		document.getElementById("c4").style.backgroundColor="LavenderBlush"
		document.getElementById("c5").style.backgroundColor="Khaki"
	}


	$(window).resize(function() {
	var width = screen.width
	var height = screen.height
	var History = 3*width/1000
	var Vedic = 3*width/1000 
	var Glorious = 3*width/1000 
	var heritage = 3*width/1000
	var studntsproject = 3*width/1000 
	var Historycon = document.getElementById("History");
	var Vediccon = document.getElementById("Vedic");
	var Gloriouscon = document.getElementById("Glorious");
	var Heritagecon = document.getElementById("heritage");
	var stuojectcon = document.getElementById("studntsproject");
	// document.getElementById("History").style.fontSize = History;
	Historycon.style.fontSize = History + "rem";
	Vediccon.style.fontSize = Vedic + "rem";
	Gloriouscon.style.fontSize = Glorious + "rem";
	Heritagecon.style.fontSize = heritage + "rem";
	stuojectcon.style.fontSize = studntsproject + "rem";

	var sliderw = 200*History+"px";
	var sliderh = 200*sliderw + "px"
	document.getElementById("slider").style.width = sliderw 

	});

