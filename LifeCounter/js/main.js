
window.onload = function () {
	//Allow the back button to close the application
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });
    
    //Initialize the counter values
    let life_points = 40;
    let poison_counters = 0;
    let counter = "life";
    
    //Place the initial life counter value on the screen
    box = document.querySelector('#textbox');
    box.innerHTML = life_points.toString();
    
    //Event handler for the rotary dial
    document.addEventListener('rotarydetent', function(ev) {
        var direction = ev.detail.direction;

        if (direction == 'CW') {
        	if(counter == "life"){
        		life_points = life_points + 1;
        		box.innerHTML = life_points.toString();
        	}
        	else if (poison_counters < 10){
        		poison_counters = poison_counters + 1;
        		box.innerHTML = poison_counters.toString();
        	}
        } else if (direction == 'CCW') {
        	if(counter == "life" & life_points > 0){
        		life_points = life_points - 1;
        		box.innerHTML = life_points.toString();
        	}
        	else if(counter == "poison" & poison_counters > 0){
        		poison_counters = poison_counters - 1;
        		box.innerHTML = poison_counters.toString();
        	}
        }
        
        
        
    });
    
    //Event handler for screen press
    var textbox = document.querySelector('.contents');
    textbox.addEventListener("click", function(){
    	if (counter == "life"){
    		counter = "poison";
    		box.innerHTML = poison_counters.toString();
    	}
    	else{
    		counter = "life";
    		box.innerHTML = life_points.toString();
    	}
    });
    
    tizen.power.request('SCREEN', 'SCREEN_NORMAL');
    tizen.power.request('CPU','CPU_AWAKE');
};
