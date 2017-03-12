
var count = 3;

var sec = 15; 

var currentPhrase = "";

function WoF(phrases) {

  this.phrases = [];
  
  this.addPhrase = function(phrase){
  
  this.phrases.push(phrase);}
  
  this.ranPhrase = function() {
	
		random = (Math.floor((Math.random() * this.phrases.length) + 1) -1);

		var obj = this.phrases[random];
		
		for(var prop in obj){
		
		    if(prop == "description"){
		     
		       $("#box").append("<h3>" + obj.description + "</h3>");
	       
	        	var b = obj.keeping.split("");

	        	b.forEach(function logArrayElements(element, index, array) {
	       			
	       				if( element === " ") {
	       		
	       					$("#box").append("<div class='emptyOne'></div>");
	       		
	       				} else {
	       		
	       					$("#box").append("<div data-value='"+element+"'>" + element + "</div>");		
	       				}
							 		setTimeout(myAnimation, 1000);
	        	});  
		    }
		}
	  currentPhrase = obj;
  } 
  this.checkUserChoice = function(){

		var u = document.getElementById("uChoice").value;
		
		var p = currentPhrase.keeping.toString();
		
		var d = [].concat(p.match(new RegExp("["+u+"]","gi")));
					
      	d.forEach(function arrEll(element, index, array) {
    
    			$("#box > div[data-value='"+element+"']").addClass("selected");	
						
						$('#count').html(count.toString());
						
							if(count <= 0) {
						
								$('#count').html(sec.toString());
						
									var myVar = setInterval(function(){
							
									sec--;
									
									count--;

										if(sec % 2 == 0) {
											
											$("#count").animate({
											
												fontSize: "50px"
											
											}, 'slow');

										} else {
											
													$("#count").animate({
											
												fontSize: "30px"
											
											}, 'slow');
										}

										if( sec == 0 ) {
									
												$('#count').html("0");
							
												clearInterval(myVar);
					
												refreshPage();
										}
							
									$('#count').html(sec.toString());
							
									}, 1000);
						
							}
						
						$('#uChoice').val('');
				});
		
			}    
    
    return false;
    	
	};

	function myAnimation(){
	 		
	 		$('.emptyOne').animate({
		 			opacity: '0'
							 	}, 1000);
	 		$('#count').animate({
	 				opacity: '1'
	 		});

	 	}


  function Phrase(keeping, description) {
  	this.keeping = keeping;
  	this.description = description;
	}


	function userPhrase() {
	 
	 var a = document.getElementById("uChoice").value;
	
			if (a == currentPhrase.keeping.toLowerCase()) {
	
				alert("Congratulations!!!You won!!!");
	
				$("#box > div").addClass("selected");	

			} else {
	
					alert("Game over");
	
				refreshPage();
			}
	}


	var myList = new WoF();
	var p1 = new Phrase("A Chip on Your Shoulder", "Being angry about something that happened in the past; a grudge.");
	var p2 = new Phrase("A Dime a Dozen",
	"When something is extremely common and simple to acquire.");
	var p3 = new Phrase("A Fool and His Money Are Soon Parted",
	"Someone acting foolish can easily lose his or her money through carelessness or trickery.");
	var p4 = new Phrase("A Piece of Cake",
	"A task that is simple to complete; similar to the common phrase as easy as pie.");
	var p5 = new Phrase("An Arm and a Leg", "Something that is extremely expensive; an idiom meaning the price paid was costly, excessively so.");
	var p6 = new Phrase("All Greek To Me",
	"When something is incomprehensible due to complexity.");
	var p7 = new Phrase("Back to Square One",
	"To go back to the beginning; a popular saying that suggests a person has to start over.");
	var p8 = new Phrase("Back To the Drawing Board",
	"Similar to the phrase above, it means starting over again from a previously failed attempt.");
	var p9 = new Phrase("Barking Up The Wrong Tree",
	"To make a wrong assumption about something.");
	var p10 = new Phrase("Beating Around the Bush",
	"Avoiding the main point; a common phrase meaning a person is failing to get to the bottom line.");
	var p11 = new Phrase("Beating a Dead Horse",
	"Something that is seen as futile; a popular saying used to describe how bringing up older issues that have already been resolved is pointless.");
	var p12 = new Phrase("Between a Rock and a Hard Place",
	"Being faced with two difficult choices; a dilemma.");
	var p13 = new Phrase("Break The Ice",
	"Breaking down a social stiffness or awkardness.");
	var p14 = new Phrase("Burst Your Bubble",
	"To ruin someone's happy moment or mood, usually by telling them disappointing news or information.");



$(document).ready(function(){

	myList.addPhrase(p1);
	myList.addPhrase(p2);
	myList.addPhrase(p3);
	myList.addPhrase(p4);
	myList.addPhrase(p5);
	myList.addPhrase(p6);
	myList.addPhrase(p7);
	myList.addPhrase(p8);
	myList.addPhrase(p9);
	myList.addPhrase(p10);
	myList.addPhrase(p11);
	myList.addPhrase(p12);
	myList.addPhrase(p13);
	myList.addPhrase(p14);


	$("#main").click(function(){
		
		$("#main").hide();
		
		myList.ranPhrase();
	});
	
	$("#inputform").submit(function(event){
			if(count >= 0) {
			event.preventDefault();
			myList.checkUserChoice();
		} else {
			event.preventDefault();
			userPhrase();
		}
	});

});
 
function incrementCount() {
			
	count--;
	
	if(count <= 0) {
		
		$('#inputform').hide();

		$("#uChoice").attr('placeholder', "Please enter your phrase");
	
		$("#uChoice").removeAttr('onchange');
				
		$("#inputform").show();
	
		}
	}

	function refreshPage(){
    
    window.location.reload();
}

	// Modal and Cover 	
	var timeoutId = null;

	window.addEventListener("load",function(){

  	timeoutId = setTimeout(modalOpen,1000);
  
  // find when the user clicks .close
  // and then remove the #cover and #modal
  document.querySelector("#modal .close").addEventListener("click",modalClose);
	  document.querySelector("#main").addEventListener("click",showButtons);

    });

function modalOpen() {
  document.getElementById("cover").style.display = "block";
  document.getElementById("modal").style.display = "block";
	  setTimeout(function(){
    	document.getElementById("cover").style.opacity = 1;
    	document.getElementById("modal").style.opacity = 1;
 		 },1); // wait just 1/1000 of a sec for style.display to finish
}

function modalClose() {
  document.getElementById("cover").style.opacity = 0;
  document.getElementById("modal").style.opacity = 0;
  document.getElementById("main").style.opacity = 1;
  	setTimeout(function(){
    	document.getElementById("cover").style.display = "none";
    	document.getElementById("modal").style.display = "none";
  		},1000); // match the css 1s transition
}
  function showButtons() {

		setTimeout(function(){
		  document.getElementById("main").style.opacity = 0;
	  	document.getElementById("btn").style.opacity = 1;
	  	document.getElementById("uChoice").style.opacity = 1;
  	},1); 
	}
