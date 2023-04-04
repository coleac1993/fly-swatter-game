
var counter=0;
var original_x;
var original_y;

function Dodge(event){
		current_x=event.clientX;
		current_y=event.clientY;
		//x can be 0-1000, y can be 0-500
	const randomX = Math.floor(Math.random() * 1000);
	const randomY = Math.floor(Math.random() * 500);
	const info= document.getElementById("info");	
	const nervousButton= document.getElementById("evil-button");
	counter=counter+1;
	console.log( "Old clientX: "+ event.clientX, "Old clientY:"+ event.clientY, "New randomx:"+ randomX, "New randomY:"+ randomY, "counter: " + counter)
	
	if (counter==1){
		original_x=event.clientX;
		original_y=event.clientY;
		nervousButton.style.position= 'absolute';
		nervousButton.style.top =  randomY + "px";
		nervousButton.style.left =  randomX + "px";
		info.innerHTML="You swatted me once! Two more to go.";
	}else if(counter==2){
		nervousButton.style.position= 'absolute';
		nervousButton.style.top =  randomY + "px";
		nervousButton.style.left =  randomX + "px";
		info.innerHTML="You've swatted me twice. One more time ";
	}else if(counter==3){
		info.innerHTML="SPLAAT!";
		smash()
	}
}

function Reset(){
	counter=0;
	nervousButton= document.getElementById("evil-button");
	nervousButton.style.top =  original_y + "px";
	nervousButton.style.left =  original_x + "px";
	nervousButton.src="resources/fly_30.png";
	
	info.innerHTML="ANOTHER FLY HAS APPEARED! Click the fly to clean up and start again.";
}

function smash(){
	const smashes= document.getElementById("evil-button");
	console.log("smash!")
	smashes.src="resources/splat_30.png";
	setTimeout(Reset,2000);
}

