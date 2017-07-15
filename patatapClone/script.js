	Ideas: 
		=colored paint that paints the screen
		=raindrop animation
		=randomized children circles
	Random Circles at random locations
	var height = window.innerHeight;
	var width = window.innerWidth;
	for(var i = 0; i < 100; i++){
		var x = Math.floor(Math.random() * width);
		var y = Math.floor(Math.random() * height);
		var rad = Math.floor(Math.random() * 80);
		var circle = new Path.Circle(new Point(x, y), rad);
		circle.fillColor = "steelblue";
	}