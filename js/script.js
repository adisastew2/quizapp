// function to take input and check answers
function checkAnswer() {
	// checks 1st question
	var answer1 = document.getElementById("answer1").value
	var box1 = document.getElementById("question1")
	var hintOne = document.getElementById("hintOne")
	if (answer1.toLowerCase()=="tingle") {
		box1.className += " has-success"
		box1.classList.remove("has-error")
		hintOne.innerHTML = "CORRECT!"
	}else {
		box1.classList.remove("has-success")
		box1.className += " has-error"
		hintOne.innerHTML = "Hint: 'My spider sense is...'"
	}

	// checks 2nd question
	var answer2 = document.getElementById("answer2").value
	var box2 = document.getElementById("question2")
	var hintTwo = document.getElementById("hintTwo")
	if (answer2.toLowerCase()=="stick") {
		box2.className += " has-success"
		box2.classList.remove("has-error")
		hintTwo.innerHTML = "CORRECT!"
	}else {
		box2.classList.remove("has-success")
		box2.className += " has-error"
		hintTwo.innerHTML = "WRONG!"
	}

	// checks 3rd question
	var answer3 = document.getElementById("answer3").value
	var box3 = document.getElementById("question3")
	var hintThree = document.getElementById("hintThree")
	if (answer3.toLowerCase()=="malcolm x") {
		box3.className += " has-success"
		box3.classList.remove("has-error")
		hintThree.innerHTML = "CORRECT!"
	}else {
		box3.classList.remove("has-success")
		box3.className += " has-error"
		hintThree.innerHTML = "Hint: Magneto achieves his goals by any means necessary"
	}

	// checks 4th question
	var answer4 = document.getElementById("answer4").value
	var box4 = document.getElementById("question4")
	var hintFour = document.getElementById("hintFour")
	if (answer4.toLowerCase()=="wakanda") {
		box4.className += " has-success"
		box4.classList.remove("has-error")
		hintFour.innerHTML = "CORRECT!"
	}else {
		box4.classList.remove("has-success")
		box4.className += " has-error"
		hintFour.innerHTML = "WRONG!"
	}

	// checks 5th question
	var answer5 = document.getElementById("answer5").value
	var box5 = document.getElementById("question5")
	var hintFive = document.getElementById("hintFive")
	if (answer5.toLowerCase()=="clarence") {
		box5.className += " has-success"
		box5.classList.remove("has-error")
		hintFive.innerHTML = "CORRECT!"
	}else {
		box5.classList.remove("has-success")
		box5.className += " has-error"
		hintFive.innerHTML = "Trick question: The actor was in another movie with Eminem 'But I know something about you. You went to CRANBROOK, thats a private school. Whats the matter dawg, you embarrased? This guy's a gangsta? His real name's...'"
	}

	// checks 6th question
	var answer6 = document.getElementById("answer6").value
	var box6 = document.getElementById("question6")
	var hintSix = document.getElementById("hintSix")
	if (answer6.toLowerCase()=="deathstroke") {
		box6.className += " has-success"
		box6.classList.remove("has-error")
		hintSix.innerHTML = "CORRECT!"
	}else {
		box6.classList.remove("has-success")
		box6.className += " has-error"
		hintSix.innerHTML = "WRONG!"
	}
}

//enter key submit
answer1.onkeydown = function(e){
   if(e.keyCode == 13){
     checkAnswer()
   }
	}

answer2.onkeydown = function(e){
   if(e.keyCode == 13){
     checkAnswer()
   }
	}

answer3.onkeydown = function(e){
   if(e.keyCode == 13){
     checkAnswer()
   }
	}

answer4.onkeydown = function(e){
   if(e.keyCode == 13){
     checkAnswer()
   }
	}	

answer5.onkeydown = function(e){
   if(e.keyCode == 13){
     checkAnswer()
   }
	}

answer6.onkeydown = function(e){
   if(e.keyCode == 13){
     checkAnswer()
   }
	}







