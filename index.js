var elem=document.getElementById('shapka');
//var elem = document.querySelector("#shapka");
var i=1;
var j=0;
var timee=100;

function prozr(){
j+=0.1;
elem.style.opacity=j;
	if (j>0.9) j=0.1;
console.log(j);	
}

function back(){
	i--;
	
	if (i==0){
		i=3;
		elem.classList.remove("img1");
		elem.classList.add("img3");
	}
		if (i==2){
		elem.classList.remove("img3");
		elem.classList.add("img2");
	}
			if (i==1){
		elem.classList.remove("img2");
		elem.classList.add("img1");
	}	
}

function forward(){
	i++;
		if (i==4){
		i=1;
		elem.classList.remove("img3");
		elem.classList.add("img1");
	}
     	if (i==2){
		elem.classList.remove("img1");
		elem.classList.add("img2");
	}
				if (i==3){
		elem.classList.remove("img2");
		elem.classList.add("img3");
	}	
}




