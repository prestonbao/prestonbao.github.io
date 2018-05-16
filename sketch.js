var streams = [];
var symbolSize = 24;
var stop = false;

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);
	background(0);
	textSize(symbolSize);
	var x = 0;
	for (var i = 0; i <= width / symbolSize; i++){
		var stream = new Stream();
		stream.generateSymbols(x, round(random(-1000, 0)));
		streams.push(stream);
		x += symbolSize;
	}
}

function mousePressed() {
	stop = true;
}


function draw() {
	background(0, 125);
	streams.forEach(function(stream) {
		stream.render();
	});
	
}

function Symbol(x, y, speed, first) {
	this.x = x;
	this.y = y;
	this.val;
	this.speed = speed;
	this.switch = round(random(20, 45));
	this.first = first;

	this.setToRandomSymbol = function() {
		if(frameCount % this.switch == 0) {
			this.val = String.fromCharCode(
				0x30A0 + round(random(0,96))); //japanese letters
                //round(random(33, 127))); //ascii
		}
	}

	this.rain = function() {
		if(this.y >= height && !stop) 
		{
			this.y = 0;
		} 
		else
		{
			if (stop){
				this.y += this.speed + 7;
				if (this.y >= height){
					this.Symbol = null;
				}
			}
			else
				this.y += this.speed;

			
		}
	}
}

function Stream(){
	this.symbols = [];
	this.length = round(random(5, 35));
	this.speed = random(4, 16);

	this.generateSymbols = function(x, y){
		var first = round(random(0, 3)) == 1;
		for (var i = 0; i <= this.length; i++){
			symbol = new Symbol(x, y, this.speed, first);
			symbol.setToRandomSymbol();
			this.symbols.push(symbol);
			y -= symbolSize;
			first = false;
		}
	}

	this.render = function() {
		this.symbols.forEach(function(symbol) {
			if (symbol.first) {
				fill(100, 255, 155);
			} else {
				fill(0, 255, 0);
			}
			text(symbol.val, symbol.x, symbol.y);
			symbol.rain();
			symbol.setToRandomSymbol();
		});
	}
}
