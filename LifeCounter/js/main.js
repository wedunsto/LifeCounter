
window.onload = function () {
	//Allow the back button to close the application
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
	try {
	    tizen.application.getCurrentApplication().exit();
	} catch (ignore) {
	}
    });
    
    //Initialize the life counter value
    let life_points = 40;
    
    //Place the initial life counter value on the screen
    var textbox = document.querySelector('.contents');
    box = document.querySelector('#textbox');
    box.innerHTML = life_points.toString();
    
    //Event handler for the rotary dial
    document.addEventListener('rotarydetent', function(ev) {
        var direction = ev.detail.direction;

        if (direction == 'CW') {
           life_points = life_points + 1;
        } else if (direction == 'CCW') {
        	life_points = life_points - 1;
        }
        
        //Place updated value on the screen
        box.innerHTML = life_points.toString();
    });
};
