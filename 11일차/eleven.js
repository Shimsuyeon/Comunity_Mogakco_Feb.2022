function check_text() {
	var value = document.getElementById("console").value;
	console.log(value);
	if (value == "지냥아") {
		document.getElementsByClassName("cat_says")[0].innerHTML="지냥이 왜 불러~?";
	} else if (value == "지냥이 손!") {
		document.getElementsByClassName("cat_says")[0].innerHTML="손 말고 츄르 달라옹!";
	} else {
	  alert("지냥이는 지금 사료 먹는 중! 말 걸어줄거야?");
	}
  }
  