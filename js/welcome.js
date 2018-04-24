window.addEventListener("load", init);
		
		function init(){
			let footer = document.getElementById("footer");
			if(footer)
				footer.remove();
			let light = document.getElementsByClassName("light");
			light[0].addEventListener("click", togglelight);
		}
		function togglelight(event){
			if(event.target.classList.contains("on")){
				event.target.classList.remove("on");
				let letters = document.getElementsByClassName("letter");
				for(let i = 0; i < letters.length; i++){
					letters[i].classList.remove("trigger");
				}
			}
			else{
				event.target.classList.add("on");
				let letters = document.getElementsByClassName("letter");
				for(let i = 0; i < letters.length; i++){
					letters[i].classList.add("trigger");
				}
			}
		}