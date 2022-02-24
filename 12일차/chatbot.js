function check_text() {
	var value = document.getElementById("console").value;
	console.log(value);
	if (value == "지냥아") {
		document.getElementsByClassName("cat_says")[0].innerHTML="지냥이 왜 불러~?";
	} 
	
	else if (value == "지냥이 손!") {
		document.getElementsByClassName("cat_says")[0].innerHTML="손 말고 츄르 달라옹!";
	} 
	
	else if (value == "불꺼줘") {
		document.getElementsByClassName("cat_says")[0].innerHTML="캄캄해져라! 냥";
		document.body.style.backgroundColor="gray";
	}

	else if (value == "불켜줘") {
		document.getElementsByClassName("cat_says")[0].innerHTML="밝아져라! 냥";
		document.body.style.backgroundColor="white";
	}

	else {
	  alert("지냥이는 지금 사료 먹는 중! 말 걸어줄거야?");
	}
  }
  