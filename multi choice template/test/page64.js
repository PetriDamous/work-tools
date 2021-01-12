(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


// symbols:



(lib.fly = function() {
	this.initialize(img.fly);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,900,679);


(lib.pop = function() {
	this.initialize(img.pop);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,94,44);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.fly, null, new cjs.Matrix2D(0.219,0,0,0.222,-98.5,-73.3)).s().p("ABeLaIALgOIADgBQABgGAHgCIAAgBIABgCIAEgBQAAgBAAgBQAAAAAAgBQAAAAABAAQABgBAAAAIAFgBQADgHAHgDIABgBQAMgMAOgKIABgBIAFgCIAAgBIAAgCQANgNAMgPIABgCIAEgCQAAgDADgCIABgCIABgCIAAgCQAEgCABgEIAAgCIAHgNIAAgCIACgEIABgBIAAgKIAAgCIACgBIAAgBIAAgNIAAgCIADgBIAAgBIAAgBIAAgCIAIgHIABgCIABgCIAAgCIAKgIIAAgBIAAgBIAAgCIACgBIAAgBIAAgBIAAgCIADgBIAAgBIAAgBIAAgCIACgBIAAgBIAAgBIAAgCIADgBIAAgBIAAgJIAAgCIAHgGIAAgBIAFgBIAFgGIAAgBIAIgBQACgEAFgDIAAgBIAAgDIAIgBIAHgJIAAgBIAAhLIAAgCIhLgBQgBAHgGAEIAAAAIgIACIgCACIgIAAIgKAGIgFACQgBADgEACIAAAAIAAACIgCAAIgBABIgBABIgBACIgFABIAAABIAAABIgBACIgEABIgBABIgBACIgBACIgDACIgBACQgDATAAATIgHAGIAAAAIAAACIAAABIgCACIgBABIAAANIAAACIgCACIAAACIAAAJIAAACIgCAEIgBACIgHANIAAACQgBADgEACIAAABIAAADIgBACQgQAUgSARIAAAAIAAACIAAABIgFACQgLALgOAJIAAAAIAAACIgCABQgFACgCAEIgBACQgNAHgKANIgDACQgIANgLAJIAAAAQgSAfgVAfIgCABIgFAEIuyAAIAAkHIArgBIAAgBQACgDADgCIAAAAQgBgFACgEIABgCIADgCIACgCIAAgCIAAgCIADgBIACgHIAAgCIACgBIABgBQAVgCASgJIAMgFQAQgGANgLIABhJIABgnIACgCIABgBQAEgjgCgmIAAgRIADgBIAAAAIAAgJIAAgCIACgBIAAgBIAAgBIAAgCIACgEIABgCIACgDIAAgBIAAgnIASAAIAAgBIAAgiIAMAAIAAgBIAAhHIAAgCIhLgBIAAABIAAAjIgMgBIAAABIAAAgIgSAAIAAAAIAAAEIAAACIgCAEIAAACIgDADIAAAAIAAACIAAABIgCACIAAAAIAAAJIAAACIgCACIgBAAQAAAlgCAlIAAAQIgCADIgBABQgGAkgBAlIAAAqQgHAFgJADIgHACQgGAFgHADQgEACgFAAQgFAGgKABIgDAAIAAw5IerAAIAAO4IhUACQgGABgGACIgCAAQgCgHAAgIQgDhGABhHQABgTgDgSIgCgCIgBgEIgCgLIAAgCIgCgCIAAgBQgGgOgKgNIgCgCIgFgCIgCgBIAAgCQAAgHgEgFIgBgBIABgIQAGgygEgzIgBgPIgCgEIAAgCQgGgGgJgHIAAgBIgDgCIAAgBIhpAAQgbAHgcADIhmAPIgFAEIgCACIgGABQgBACgDACIgIACIgBACIgBACQgkAMgnAMIgGABQgGAHgJgBIAAAAIAAAIIAAAaIgCADIAAABIgIABIgCADIAAABIAAAGIAAABIgDACIAAAAIAAACIAABIIAAACIBOgBIAAgBIACgCIAAACIAAACIAGAEIABABQABACAAADIAAACIADABQAFANAIALIABACQADARAOALIADABIACAGIABABIAAABIAbABQgBARABASQABAHgBAGQgRASgLAWIgBABIgDACIAAAAIgBA6QAAAeAGAcQAJAmASAjQgJAfgUAbQgQAVgTAUIgGACIAAACIAABJIAAACQAmgBAjgJQAWgHAQgWQAKAPAJARIAAACIBQgBQAEgygDgzQgDgogXghIgEgKQgIghACgkIgbgCIAAAAIAAgBIAAhLIAAgCIAJgPIABgCIADgcIAEgvQACgjgOgfIgjAAIAAgjIAAgKIgCgCIgBgBQACglgHgjIgBgGQAEgBADgDIAEgCQAEgEAEAAQA9gKA+gIIADAEIABACQgEA2ABA2QAAAKAEAKQAHAHABAKIABACIAGACIAAABIABADIABACQAIAIAGAJIABACIAAAEIAAACIACABIABADQACAGAAAGIAAACIABACIABABIABAMIAAAFQgEA1AAA2QgBAUAEASIACACIABABIAAAEQABAOAFAMIABACIAAACIAAACIACACIABABIAFABQArABAsgDIAQAAQAOALAPAJIADACIABACIABACIADACIACACIAAACIACAJIABACIAQAAIAAF1gAoOHDIAAApIADACIAAACIAAACIABACIABABIAAAEIAAACIABACIACACIAAACIAAACQAGALABAPIAAACQAFAHACAIIABACIACABIAAACIAAACIACACIABABQAAAEgFABIAAACIAAABIgKAJIAAABIAAABIAAACIgCAEIgBACIgCADIAAAAIAAACIAAABIgCADIgBABIAABLIAAARIADABQAAABAAAAQAAABAAABQAAAAAAABQABAAAAABIABABIAAACIAAACIACABIADACIAAACIAAACIACACIBRgBIAAgBIAAhAIAAgCQAAAAABgBQAAAAABAAQAAgBABAAQAAgBABAAIABgCIAAgCIAAgCQAFgEAAgHIAAgCQAFgFAAgGIAAgCIAEgEIABgBIAAgEIgBhHIAAgCQgIgTgGgUIAAgCIgDgCIAAAAIAAgBIAAgCIgDgEIgCgCIAAgEIAAgBQgDgDgBgDIgBgCQgDgKAAgLIAAgBIgCgEIgCgCQgCgFgBgGIAAgCIgBgCIgBgCIAAgCIAAgCIgDgBIAAgBIAAgkIAAgCIhLAAIAABJg");
	this.shape.setTransform(11.3,-29.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.fly, null, new cjs.Matrix2D(0.219,0,0,0.222,-98.4,-148.3)).s().p("ABDAUIAIgMQAJgNAKgOIN4AAIAAAngAvVAUIAAgnIOyAAIgIAFIAAAAIgHAJIgBACQgCABgBACIgBABIgIAEIAAAAIAAACIAAABIgFACIAAAAQgIAGgKAEg");
	this.shape_1.setTransform(-11.4,100.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-109.6,-102.5,219.2,205);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.fly, null, new cjs.Matrix2D(0.219,0,0,0.222,-108.1,-131.6)).s().p("AieC8QAJhZA0hSIAUgWIACgKQAWgeAXgbQASggAagKQAsghAigcIgKAIIALgLIABgBIAMAAQAGgGAHgCIACAAQAPAFANAHIAKAPQgFBrgyBkQgjA2gWA7QgZAPgYANg");
	this.shape.setTransform(0,22.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.fly, null, new cjs.Matrix2D(0.219,0,0,0.222,-168.4,-91.7)).s().p("AhzFpQhjg8gBh7QgQhygLhzQgRgtgGgvQgehCAXhIIAMgPIgFAFIAFgKIADgCQA/ghBcgHIAFgFIAPAAIAFgFQAvgLAvgHQCJgMCBAjIAAJWQgQALgSAKIgFAHQhBA0hQAfQg1AOg1AAQg2AAg2gOg");
	this.shape_1.setTransform(67.3,-3.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.fly, null, new cjs.Matrix2D(0.219,0,0,0.222,-51.1,-128.3)).s().p("AhQCYIgCgKIgIgHIgFgNQACiKAhiAIAFgNQAIgDAFgJIAzAAQANAaAMAaIAAADQAIAQAKAOIAAAKQAKAWAPAXQAkA/giA/IAAAKIgRAcIgyAeQgSAFgRAAQgeAAgbgSg");
	this.shape_2.setTransform(-49.5,20.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.fly, null, new cjs.Matrix2D(0.219,0,0,0.222,-9.9,-97.6)).s().p("AhgDkIAAkIIAEgEIACgHIAKgFIAMghQAUgZAVgWQAlgbAgghIARgZIANgFIgGgFQAKAAADAKIAAACIAIADQAHAOACASIABAFQgLAOgFASIgCADIAAANIgFAFQgSBUAGBhQABAPgBAPIAEAKIgEAKQgIA8ghArQgwAQg2AAIgPAAg");
	this.shape_3.setTransform(-86,8.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.6,-41.1,191.3,82.3);


(lib.selected_circle_a = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("ABphnQArArAAA8QAAA9grAsQgsArg9AAQg8AAgrgrQgsgsAAg9QAAg8AsgrQArgsA8AAQA9AAAsAsg");
	this.shape.setTransform(14.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,31.5,31.5);


(lib.correct_circle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("ABphnQArArAAA8QAAA9grAsQgsArg9AAQg8AAgrgrQgsgsAAg9QAAg8AsgrQArgsA8AAQA9AAAsAsg");
	this.shape.setTransform(14.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,31.5,31.5);


(lib.correct = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("ABphnQArArAAA8QAAA9grAsQgsArg9AAQg8AAgrgrQgsgsAAg9QAAg8AsgrQArgsA8AAQA9AAAsAsg");
	this.shape.setTransform(14.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.correct, new cjs.Rectangle(-1,-1,31.5,31.5), null);


(lib.btnD = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgoAyIAAhjIAiAAIARABQAJACAGAFQAIAHAEALQADAKAAANQAAALgCAJQgDAIgEAGQgEAGgFADQgFAEgHABQgHACgIAAgAgbAmIAVAAQAJAAAGgBQAFgCAEgEQAEgFADgHQADgJAAgKQAAgPgFgJQgGgIgHgDQgFgDgLAAIgVAAg");
	this.shape.setTransform(10.7,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ABJBJQgeAegrAAQgqAAgegeQgegeAAgrQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqQAAArgeAeg");
	this.shape_1.setTransform(10.3,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],-2,-3.7,0,-2,-3.7,10.4).s().p("AhIBIQgegeAAgqQAAgpAegfQAfgeApAAQAqAAAeAeQAfAfAAApQAAAqgfAeQgeAfgqAAQgpAAgfgfg");
	this.shape_2.setTransform(10.3,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AhIBJQgegeAAgrQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqQAAArgeAeQgeAegrAAQgqAAgegeg");
	this.shape_3.setTransform(10.3,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#00FF00","#00D700","#009F00","#000000"],[0,0.478,0.784,1],-2,-3.7,0,-2,-3.7,13.1).s().p("AhIBIQgegeAAgqQAAgpAegfQAfgeApAAQAqAAAeAeQAfAfAAApQAAAqgfAeQgeAfgqAAQgpAAgfgfg");
	this.shape_4.setTransform(10.3,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,22.5,22.5);


(lib.btnC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgWAtQgLgGgFgNQgFgMAAgOQAAgPAGgMQAGgMALgGQALgGAMAAQAPAAAKAIQALAIAEAOIgNADQgEgLgHgFQgGgFgKAAQgLAAgIAFQgHAGgDAJQgEAJAAAKQAAAMAEAKQAEAJAIAFQAIAFAIAAQALAAAIgHQAHgGADgNIANADQgEARgLAIQgLAJgPAAQgPAAgKgHg");
	this.shape.setTransform(10.6,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ABJBJQgeAegrAAQgqAAgegeQgegeAAgrQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqQAAArgeAeg");
	this.shape_1.setTransform(10.3,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],-2,-3.7,0,-2,-3.7,10.4).s().p("AhIBIQgegeAAgqQAAgpAegfQAfgeApAAQAqAAAeAeQAfAfAAApQAAAqgfAeQgeAfgqAAQgpAAgfgfg");
	this.shape_2.setTransform(10.3,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AhIBJQgegeAAgrQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqQAAArgeAeQgeAegrAAQgqAAgegeg");
	this.shape_3.setTransform(10.3,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#00FF00","#00D700","#009F00","#000000"],[0,0.478,0.784,1],-2,-3.7,0,-2,-3.7,13.1).s().p("AhIBIQgegeAAgqQAAgpAegfQAfgeApAAQAqAAAeAeQAfAfAAApQAAAqgfAeQgeAfgqAAQgpAAgfgfg");
	this.shape_4.setTransform(10.3,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,22.5,22.5);


(lib.btnb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglAyIAAhjIAlAAQALAAAHADQAHADAEAGQAEAGAAAIQAAAGgEAFQgDAGgHADQAJADAFAGQAFAGAAAJQAAAHgDAGQgDAGgFADQgEAEgHABQgGACgKAAgAgYAmIAYAAIAJAAQAFgBADgCQADgCACgDQACgEAAgFQAAgFgDgFQgDgEgFgCQgFgCgJAAIgXAAgAgYgHIAWAAQAIAAAEgBQAFgCACgDQADgDAAgGQAAgFgDgEQgCgEgEgBQgFgCgKAAIgUAAg");
	this.shape.setTransform(10.3,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ABJBJQgeAegrAAQgqAAgegeQgegeAAgrQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqQAAArgeAeg");
	this.shape_1.setTransform(10.3,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],-2,-3.7,0,-2,-3.7,10.4).s().p("AhIBIQgegeAAgqQAAgpAegfQAfgeApAAQAqAAAeAeQAfAfAAApQAAAqgfAeQgeAfgqAAQgpAAgfgfg");
	this.shape_2.setTransform(10.3,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AhIBJQgegeAAgrQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqQAAArgeAeQgeAegrAAQgqAAgegeg");
	this.shape_3.setTransform(10.3,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#00FF00","#00D700","#009F00","#000000"],[0,0.478,0.784,1],-2,-3.7,0,-2,-3.7,13.1).s().p("AhIBIQgegeAAgqQAAgpAegfQAfgeApAAQAqAAAeAeQAfAfAAApQAAAqgfAeQgeAfgqAAQgpAAgfgfg");
	this.shape_4.setTransform(10.3,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,22.5,22.5);


(lib.btna = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgAyIgMgeIgpAAIgLAeIgOAAIAnhjIANAAIApBjgAgGgUIgLAdIAhAAIgLgbIgGgVIgFATg");
	this.shape.setTransform(10.2,10);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("ABJBJQgeAegrAAQgqAAgegeQgegeAAgrQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqQAAArgeAeg");
	this.shape_1.setTransform(10.3,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#00FF00","#000000"],[0,1],-2,-3.7,0,-2,-3.7,10.4).s().p("AhIBIQgegeAAgqQAAgpAegfQAfgeApAAQAqAAAeAeQAfAfAAApQAAAqgfAeQgeAfgqAAQgpAAgfgfg");
	this.shape_2.setTransform(10.3,10.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AhIBJQgegeAAgrQAAgqAegeQAegeAqAAQArAAAeAeQAeAeAAAqQAAArgeAeQgeAegrAAQgqAAgegeg");
	this.shape_3.setTransform(10.3,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.rf(["#00FF00","#00D700","#009F00","#000000"],[0,0.478,0.784,1],-2,-3.7,0,-2,-3.7,13.1).s().p("AhIBIQgegeAAgqQAAgpAegfQAfgeApAAQAqAAAeAeQAfAfAAApQAAAqgfAeQgeAfgqAAQgpAAgfgfg");
	this.shape_4.setTransform(10.3,10.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,22.5,22.5);


(lib.selected_circle_d = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.selected_circle_a("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-0.9,0.1,1,1,0,0,0,14.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.7,-15.7,31.5,31.5);


(lib.selected_circle_c = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.selected_circle_a("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-1.9,-1.9,1,1,0,0,0,14.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.7,-17.7,31.5,31.5);


(lib.selected_circle_b = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.selected_circle_a("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(0.1,-2.9,1,1,0,0,0,14.8,14.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.7,-18.7,31.5,31.5);


(lib.fly_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_59 = function() {
		/* stop();
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(59).call(this.frame_59).wait(1));

	// pop
	this.instance = new lib.pop();
	this.instance.parent = this;
	this.instance.setTransform(-119.6,141.6,2.025,2.026,-30);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(48).to({_off:false},0).wait(5).to({_off:true},1).wait(6));

	// fly
	this.instance_1 = new lib.Tween3("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-36.2,174.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.fly, null, new cjs.Matrix2D(0.219,0,0,0.222,-98.4,-73.3)).s().p("ABeLaIAMgOIADgBQABgGAGgCIAAgBIABgCIAEgBQAAgBAAAAQAAgBAAgBQABAAAAAAQABgBABAAIAEgBQAEgHAGgDIABgBQAMgMAOgKIABgBIAFgCIAAgBIAAgCQANgNAMgPIABgCIAEgCQAAgDADgCIACgCIAAgCIAAgCQAEgCABgEIAAgCIAHgNIAAgCIACgEIABgBIAAgKIAAgCIACgBIABgBIAAgNIAAgCIACgBIAAgBIAAgBIAAgCIAIgHIABgCIABgCIAAgCIAKgIIAAgBIAAgBIAAgCIACgBIAAgBIAAgBIAAgCIADgBIAAgBIAAgBIAAgCIADgBIAAgBIAAgBIAAgCIACgBIAAgBIAAgJIAAgCIAHgGIAAgBIAGgBIAEgGIAAgBIAIgBQADgEAFgDIAAgBIAAgDIAHgBIAHgJIABgBIAAhLIAAgCIhMgBQgBAHgGAEIAAAAIgHACIgDACIgIAAIgKAGIgEACQgCADgEACIAAAAIAAACIgCAAIAAABIgBABIgBACIgGABIAAABIAAABIgBACIgDABIgCABIgBACIgBACIgCACIgCACQgCATgBATIgHAGIAAAAIAAACIAAABIgCACIgBABIAAANIAAACIgCACIAAACIAAAJIAAACIgCAEIAAACIgIANIAAACQgBADgEACIAAABIAAADIgBACQgQAUgSARIAAAAIAAACIAAABIgFACQgLALgOAJIAAAAIAAACIgCABQgEACgDAEIgBACQgNAHgKANIgDACQgIANgLAJIAAAAQgSAfgVAfIgCABIgFAEIuyAAIAAkHIArgBIAAgBQACgDADgCIAAAAQAAgFABgEIABgCIAEgCIABgCIABgCIAAgCIACgBIACgHIAAgCIADgBIAAgBQAWgCARgJIAMgFQARgGAMgLIABhJIACgnIABgCIABgBQAEgjgCgmIAAgRIADgBIAAAAIAAgJIAAgCIACgBIAAgBIAAgBIAAgCIACgEIABgCIACgDIABgBIAAgTIAKAAIAAgBIAAgTIAHAAIAAgBIAAgiIANAAIAAgBIAAgCIABAAIAAgBIAAhOIAAgCIhcgBIAAABIAAA5IgWAAIAAABIAAAnIAAAAIAAAAIAAAJIAAACIgCACIgBAAQAAAlgBAlIgBAQIgCADIAAABQgHAkAAAlIgBAqQgHAFgJADIgHACQgGAFgGADQgFACgFAAQgFAGgKABIgDAAIAAw5IerAAIAAO4IhTACQgHABgGACIgCAAQgCgHAAgIQgDhGAChHQAAgTgDgSIgCgCIgBgEIgBgLIAAgCIgDgCIAAgBQgFgOgLgNIgBgCIgGgCIgBgBIAAgCQAAgHgFgFIgBgBIABgIQAGgygDgzIgBgPIgDgEIAAgCQgGgGgIgHIgBgBIgDgCIAAgBIhoAAQgbAHgdADIhmAPIgEAEIgDACIgFABQgBACgEACIgIACIgBACIgBACQgkAMgmAMIgHABQgGAHgIgBIAAAAIAAAIIAAAaIgDADIAAABIgIABIgCADIAAABIAAAGIAAABIgCACIAAAAIAAACIAABIIAAACIBNgBIAAgBIADgCIAAACIAAACIAFAEIACABQABACgBADIAAACIADABQAGANAHALIACACQACARAOALIAEABIACAGIAAABIAAABIAbABQgBARABASQABAHgBAGQgRASgLAWIgBABIgDACIAAAAIgBA6QAAAeAGAcQAJAmASAjQgJAfgTAbQgRAVgTAUIgGACIAAACIAABJIAAACQAmgBAjgJQAXgHAPgWQALAPAIARIABACIBQgBQADgygCgzQgDgogXghIgFgKQgIghADgkIgcgCIAAAAIAAgBIAAhLIAAgCIAJgPIABgCIADgcIAEgvQACgjgOgfIgjAAIAAgjIAAgKIgCgCIgBgBQACglgGgjIgCgGQAEgBADgDIAFgCQAEgEADAAQA9gKA+gIIAEAEIABACQgFA2ABA2QAAAKAEAKQAIAHABAKIAAACIAGACIAAABIACADIAAACQAIAIAGAJIABACIAAAEIAAACIADABIAAADQACAGAAAGIAAACIABACIABABIABAMIAAAFQgEA1AAA2QAAAUADASIACACIABABIAAAEQACAOAEAMIABACIAAACIAAACIACACIABABIAFABQAsABAsgDIAQAAQAOALAPAJIACACIABACIABACIADACIADACIAAACIABAJIABACIAQAAIAAF1gAoOHDIAAApIADACIAAACIAAACIACACIABABIAAAEIAAACIAAACIACACIAAACIAAACQAGALABAPIAAACQAFAHADAIIAAACIACABIAAACIAAACIACACIABABQABAEgGABIAAACIAAABIgKAJIAAABIAAABIAAACIgCAEIgBACIgCADIAAAAIAAACIAAABIgCADIAAABIAABLIAAARIACABQAAABAAABQAAAAAAABQAAAAABABQAAAAAAABIABABIAAACIAAACIADABIACACIAAACIAAACIACACIBRgBIAAgBIAAhAIAAgCQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAgBIABgCIAAgCIAAgCQAFgEAAgHIAAgCQAGgFgBgGIAAgCIAEgEIABgBIAAgEIgBhHIAAgCQgIgTgGgUIAAgCIgDgCIAAAAIAAgBIAAgCIgDgEIgBgCIgBgEIAAgBQgCgDgCgDIgBgCQgDgKAAgLIAAgBIgCgEIgCgCQgCgFgBgGIAAgCIgBgCIgBgCIAAgCIAAgCIgCgBIAAgBIAAgkIAAgCIhMAAIAABJg");
	this.shape.setTransform(-18.6,134.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.fly, null, new cjs.Matrix2D(0.219,0,0,0.222,-98.5,-73.3)).s().p("ABeLaIALgOIADgBQABgGAHgCIAAgBIABgCIAEgBQAAgBAAgBQAAAAAAgBQAAAAABAAQABgBAAAAIAFgBQADgHAHgDIABgBQAMgMAOgKIABgBIAFgCIAAgBIAAgCQANgNAMgPIABgCIAEgCQAAgDADgCIABgCIABgCIAAgCQAEgCABgEIAAgCIAHgNIAAgCIACgEIABgBIAAgKIAAgCIACgBIAAgBIAAgNIAAgCIADgBIAAgBIAAgBIAAgCIAIgHIABgCIABgCIAAgCIAKgIIAAgBIAAgBIAAgCIACgBIAAgBIAAgBIAAgCIADgBIAAgBIAAgBIAAgCIACgBIAAgBIAAgBIAAgCIADgBIAAgBIAAgJIAAgCIAHgGIAAgBIAFgBIAFgGIAAgBIAIgBQACgEAFgDIAAgBIAAgDIAIgBIAHgJIAAgBIAAhLIAAgCIhLgBQgBAHgGAEIAAAAIgIACIgCACIgIAAIgKAGIgFACQgBADgEACIAAAAIAAACIgCAAIgBABIgBABIgBACIgFABIAAABIAAABIgBACIgEABIgBABIgBACIgBACIgDACIgBACQgDATAAATIgHAGIAAAAIAAACIAAABIgCACIgBABIAAANIAAACIgCACIAAACIAAAJIAAACIgCAEIgBACIgHANIAAACQgBADgEACIAAABIAAADIgBACQgQAUgSARIAAAAIAAACIAAABIgFACQgLALgOAJIAAAAIAAACIgCABQgFACgCAEIgBACQgNAHgKANIgDACQgIANgLAJIAAAAQgSAfgVAfIgCABIgFAEIuyAAIAAkHIArgBIAAgBQACgDADgCIAAAAQgBgFACgEIABgCIADgCIACgCIAAgCIAAgCIADgBIACgHIAAgCIACgBIABgBQAVgCASgJIAMgFQAQgGANgLIABhJIABgnIACgCIABgBQAEgjgCgmIAAgRIADgBIAAAAIAAgJIAAgCIACgBIAAgBIAAgBIAAgCIACgEIABgCIACgDIAAgBIAAgnIASAAIAAgBIAAgiIAMAAIAAgBIAAhHIAAgCIhLgBIAAABIAAAjIgMgBIAAABIAAAgIgSAAIAAAAIAAAEIAAACIgCAEIAAACIgDADIAAAAIAAACIAAABIgCACIAAAAIAAAJIAAACIgCACIgBAAQAAAlgCAlIAAAQIgCADIgBABQgGAkgBAlIAAAqQgHAFgJADIgHACQgGAFgHADQgEACgFAAQgFAGgKABIgDAAIAAw5IerAAIAAO4IhUACQgGABgGACIgCAAQgCgHAAgIQgDhGABhHQABgTgDgSIgCgCIgBgEIgCgLIAAgCIgCgCIAAgBQgGgOgKgNIgCgCIgFgCIgCgBIAAgCQAAgHgEgFIgBgBIABgIQAGgygEgzIgBgPIgCgEIAAgCQgGgGgJgHIAAgBIgDgCIAAgBIhpAAQgbAHgcADIhmAPIgFAEIgCACIgGABQgBACgDACIgIACIgBACIgBACQgkAMgnAMIgGABQgGAHgJgBIAAAAIAAAIIAAAaIgCADIAAABIgIABIgCADIAAABIAAAGIAAABIgDACIAAAAIAAACIAABIIAAACIBOgBIAAgBIACgCIAAACIAAACIAGAEIABABQABACAAADIAAACIADABQAFANAIALIABACQADARAOALIADABIACAGIABABIAAABIAbABQgBARABASQABAHgBAGQgRASgLAWIgBABIgDACIAAAAIgBA6QAAAeAGAcQAJAmASAjQgJAfgUAbQgQAVgTAUIgGACIAAACIAABJIAAACQAmgBAjgJQAWgHAQgWQAKAPAJARIAAACIBQgBQAEgygDgzQgDgogXghIgEgKQgIghACgkIgbgCIAAAAIAAgBIAAhLIAAgCIAJgPIABgCIADgcIAEgvQACgjgOgfIgjAAIAAgjIAAgKIgCgCIgBgBQACglgHgjIgBgGQAEgBADgDIAEgCQAEgEAEAAQA9gKA+gIIADAEIABACQgEA2ABA2QAAAKAEAKQAHAHABAKIABACIAGACIAAABIABADIABACQAIAIAGAJIABACIAAAEIAAACIACABIABADQACAGAAAGIAAACIABACIABABIABAMIAAAFQgEA1AAA2QgBAUAEASIACACIABABIAAAEQABAOAFAMIABACIAAACIAAACIACACIABABIAFABQArABAsgDIAQAAQAOALAPAJIADACIABACIABACIADACIACACIAAACIACAJIABACIAQAAIAAF1gAoOHDIAAApIADACIAAACIAAACIABACIABABIAAAEIAAACIABACIACACIAAACIAAACQAGALABAPIAAACQAFAHACAIIABACIACABIAAACIAAACIACACIABABQAAAEgFABIAAACIAAABIgKAJIAAABIAAABIAAACIgCAEIgBACIgCADIAAAAIAAACIAAABIgCADIgBABIAABLIAAARIADABQAAABAAAAQAAABAAABQAAAAAAABQABAAAAABIABABIAAACIAAACIACABIADACIAAACIAAACIACACIBRgBIAAgBIAAhAIAAgCQACgBACgCIABgCIAAgCIAAgCQAFgEAAgHIAAgCQAFgFAAgGIAAgCIAEgEIABgBIAAgEIgBhHIAAgCQgIgTgGgUIAAgCIgDgCIAAAAIAAgBIAAgCIgDgEIgCgCIAAgEIAAgBQgDgDgBgDIgBgCQgDgKAAgLIAAgBIgCgEIgCgCQgCgFgBgGIAAgCIgBgCIgBgCIAAgCIAAgCIgDgBIAAgBIAAgkIAAgCIhLAAIAABJg");
	this.shape_1.setTransform(-11.9,134.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.fly, null, new cjs.Matrix2D(0.219,0,0,0.222,-98.4,-148.3)).s().p("ABDAUIAIgMQAJgNAKgOIN4AAIAAAngAvVAUIAAgnIOyAAIgIAFIgBAAIgGAJIgBACQgCABgBACIgBABIgIAEIAAAAIAAACIAAABIgFACIAAAAQgIAGgKAEg");
	this.shape_2.setTransform(-34.6,264);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.fly, null, new cjs.Matrix2D(0.203,0.08,-0.081,0.206,-64.5,-104.2)).s().p("AizLJIAPgJIAEAAQACgFAHABIAAgCIACgBIAFAAQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAGABQAEgGAIAAIAAgBQAQgGARgFIACgBIAFABIABgBIAAgCQASgHAPgKIACgCIAEABQACgEADgBIACAAIABgCIABgCQAEAAADgEIABgCIALgKIABgBIAEgDIABgBIADgIIABgCIACgBIABgBIADgMIABgCIADAAIABgBIAAgBIABgCIAKgDIACgBIAAgCIABgBIANgFIAAAAIABgCIABgBIACAAIAAgBIABgBIAAgCIADAAIAAgBIABgBIABgCIADAAIAAgBIAAgBIABgCIACAAIABAAIADgJIABgCIAJgDIABAAIAFAAIAFgDIABgBIAIACQAEgEAFAAIAAgBIACgDIAHACIAKgFIABgCIAbhFIACgCIhGgcQgDAFgIACIAAAAIgHgBIgEABIgHgCIgMABQgCABgDgBQgCACgEABIAAAAIgBACIgCgBIgBABIgCAAIgBABIgFAAIAAABIgBABIgCABIgDAAIgBAAIgCACIgCACIgDAAIgCABQgJARgHASIgJACIAAABIgBABIAAABIgDACIAAAAIgFAMIgBACIgDABIgBACIgEAJIAAABQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAABIgBACQgHAEgFAFIgBACQgCACgFABIAAABIgBACIgCACQgWAMgXAKIAAAAIAAACIgBABIgGAAQgOAGgPADIgBAAIAAACIgCABQgGgBgDAEIgBABQgQACgOAIIgDABQgMAJgPAEQgcAWgfAVIgCABIgHABItulbIBgj0IAoAOIAAAAQAEgDAEAAIAAgBQABgEADgDIABgCIAFgBIABgBIABgBIABgCIADAAIAEgGIABgCIACAAIACgBQAVAGATgBIAOgBQARABAPgGIAbhCIAQglIADAAIAAgBQASgfAMgkIAGgQIADABIAAgBIADgIIABgCIACAAIABgBIAAgBIABgCIAEgDIAAgBIADgCIACgCIAOgkIAQAHIABgBIAMggIAMAFIAAgBIAahCIABgCIhFgcIgBAAIgNAhIgLgFIgBAAIgLAfIgRgHIAAAAIgBAEIAAABIgEADIgBACIgDACIAAABIgBABIgBABIgDABIAAAAIgEAJIAAABIgCABIgBAAQgOAjgPAhIgGAPIgDACIgCABQgSAfgOAiIgQAmQgIADgJAAIgIgBIgPACQgEABgGgCQgHAEgIgDIgEgBIGNvuIcgLRIleN1QgngPgogOIgMgCIgBgBIADgPQAXhCAchBQAHgRADgSIAAgDIABgEIACgLIAAgCIgCgCIABgBQABgQgFgQIgBgCIgFgEIAAgCQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBAAAAQADgGgDgGIAAgCIAEgGQAYgtAQgxIAEgPQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIAAgBIgJgSIAAgBIgCgDIAAgBIhhgnQgbgDgcgHIhlgYIgFACIgDABIgFgBQgCACgEAAIgIgBIgCABIgBABQgngBgogDIgGgBQgIAEgHgFIAAABIgEAHIgJAYIgDACIgBABIgHgCIgEACIAAABIgDAFIAAACIgDAAIAAABIAAABIgbBEIgBACIBJAcIAAgBIACgBIAAABIgBACIAEAGIABABQAAADgCACIgBACIADADQAAAOAEANIAAABQgDASAJAPIACACIAAAGIAAACIAAABIAZAKQgIAQgFARIgFAMQgXAKgSAQIgCABIgDABIAAAAIgWA2QgLAbgFAdQgGAmAFAoQgVAZgbASQgXAOgZALIgGAAIAAABIgbBEIgBACQAjANAkAEQAXACAXgOQAEARABATIAAACIBLAdQAWgtAQgxQALgmgIgoQgBgFAAgFQAEgiAQggIgYgMIAAAAIAAgBIAchGIAAgCIAOgLIACgBIANgZIAUgqQAQgggCghIghgNIANghIADgJIAAgCIAAgCQAPgiAGgkIACgGQAEABADgCIAGAAQAEgCAEABIB4AcIACAGIABACQgYAwgTA0QgEAKAAAKQAEAJgDAKIAAACIAFADIAAABIAAAEIAAACQAEAKACALIABACIgCAEIgBACIADACIgBADQAAAGgDAFIgBACIABACIAAACIgDALIgBAFQgYAwgUAyQgIASgCASIAAADIABABIgCAEQgEAOAAANIAAACIgBACIAAABIABADIAAABIAFADQAoARAqANIAPAGQAIAPAMAOIABADIAAACIAAACIACADIABADIAAACIgCAJIAAACIAQAGIiJFbgAqnFdIAAABIgNAFIAAACIAAABIgEADIgCACIgDACIAAAAIAAABIgBACIgCACIgCABIgcBGIgFAQIACABQgCACABADIABABIgBACIgBACIACACIACADIgBACIgBACIABACIBLAdIABgBIAXg8IABgBQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAIACgCIAAgBIABgCQAGgCACgHIABgBQAIgDABgGIABgCIAGgCIABgBIABgDIAahCIAAgCQgBgUACgWIABgCIgCgCIAAgBIAAgBIABgBQAAgBAAAAQAAgBAAgBQgBAAAAgBQAAAAAAgBIgBgCIABgEIAAgCIgBgGIAAgCQAAgKAEgLIABgBIgBgEIgBgDQAAgGACgFIAAgCIAAgDIAAgBIAAgCIACgCIgDgDIABAAIANghIABgCIhGgcIgbBEIgPAmIACADIgBABIgBACIABADIABABIgCAEIgBACIAAABIACADIgCACIAAACQABANgEAOIgBACQACAIgBAIIAAACIACACIgBACIgBABIACADIAAABQgBAFgGgCIgBACg");
	this.shape_3.setTransform(43.2,113.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.fly, null, new cjs.Matrix2D(-0.002,0.218,-0.221,-0.002,73.8,-97.7)).s().p("AjlPSQAAgqgBgqIgCgNIAAgBQAHgCAIgBQBGgCBGACQATAAASgCIACgCIAEgBIALgCIACAAIACgCIABAAQAPgGAMgKIACgCIACgFIABgBIACAAQAHAAAFgEIABgBIAIABQAyAGAzgEIAPAAIAEgCIABAAQAHgHAGgIIACgBIABgBIABAAIAChqQgHgagDgdIgOhlIgFgGIgBgCIgCgGQgCgBgBgCIgCgJIgCgBIgCgBQgMgkgLgnIgCgFQgGgGABgJIAAAAIgIAAIgagBIgDgCIgBAAIgBgIIgDgCIgBAAIgGAAIgBAAIgCgDIAAAAIgCAAIhIAAIgCAAIAABNIABAAIACACIgBAAIgCAAIgEAGIgBABQgDACgDgBIgCAAIgBADQgNAGgLAHIgBABQgRADgLAOIgCADIgFACIgCAAIgBAAIAAAcQgSgCgSABQgGABgHgBQgRgRgWgLIgCgBIgBgDIgBAAIg5gBQgegBgcAGQgmAIgjATQgfgKgagTQgVgQgUgUIgCgGIgCAAIhJgBIgCAAQAAAmAKAjQAGAXAWAQQgPAKgRAIIgCABIABBPQAxAFA0gDQAngDAhgXIAKgEQAhgIAkADIACgbIABAAIABAAIBKAAIACAAIAPAJIACABIAcAEIAvAEQAjADAegOIAAgjIAkAAIAJAAIACgBIACgBQAkACAkgHIAGgBQABADACAEIACAEQAEAEABAEQAJA9AHA+IgEADIgBABQg2gFg2ABQgLAAgKADQgHAIgKABIgCAAIgBAGIgBAAIgEACIgCAAQgHAJgJAFIgCABIgEAAIgCAAIgBADIgDAAQgGADgGgBIgCAAIgCABIgBABIgMAAIgFABQg1gEg2gBQgTAAgSADIgCABIgCACIgEAAQgOABgMAFIgCABIgCAAIgCAAIgBACIgBABIgCAEQgBArACAtIABAQQgLAOgJAOIgCADIgDABIgCABIgCADIgCACIgCAAIgJACIgCAAIAAARIl0gCIAGt3IAOAMIACADQAGABABAGIACAAIACABIABAEQABAAAAAAQABAAAAAAQAAABABAAQAAABAAABIABAEQAHAEADAGIABABQAMANAKANIABABIACAGIABAAIACAAQANANAPAMIACABIABADQAEAAACAEIABABIACABIACAAQACADAEABIACABIANAHIACAAIAEACIABABIAKAAIACAAIABACIABABIANAAIACAAIABACIABAAIABAAIACAAIAHAIIACABIACABIACAAIAIAKIABAAIABAAIACAAIABADIABAAIABAAIACAAIABADIABAAIABAAIACAAIABACIABAAIABAAIACAAIABACIABAAIAJAAIACAAIAGAHIABABIABAFIAFAEIABABIABAHQAFADADAEIAAAAIAEAAIABAIIAIAIIACAAIBKABIACAAIABhLQgGgBgEgGIgBAAIgBgIIgDgCIAAgIIgFgLIgCgEQgDgCgCgEIAAAAIgCAAIAAgCIgBgBIgBgBIgCAAIgBgGIgBAAIgBAAIgCgBIgBgDIgBgCIgCgBIgCgBIgCgDIgBgBQgTgCgUgBIgFgHIgBAAIgBAAIgCAAIgCgCIAAgBIgOAAIgBAAIgDgCIgBgBIgKAAIgBAAIgEgBIgCgBIgNgHIgCgBQgEgBgCgEIAAAAIgDAAIgCgBQgUgQgRgSIAAAAIgCAAIgBAAIgCgFQgLgLgJgOIAAAAIgCAAIgBgCQgCgFgEgCIgBgBQgHgNgNgKIgCgDQgNgHgJgMIAAAAQgfgSgegVIgCgCIgEgFIAHuwIEGACIABArIABAAQAEACABADIABAAQAFAAAEACIACABIACACIABACIACAAIACAAIABADIAHACIACAAIABACIABABQACAVAIATIAGALQAFAQALANQAkABAlABIAnACIACACIABAAQAjAFAlgCIARAAIABADIABAAIAJAAIACAAIABADIAAAAIACAAIACAAIADABIACABIADABIACABIAnAAIAAARIABAAIAiABIAAANIABAAIBGAAIACAAIABhLIAAAAIgjAAIAAgMIAAAAIgggBIAAgRIAAAAIgEAAIgCAAIgEgCIgCAAIgDgDIAAAAIgCAAIgBAAIgCgDIAAAAIgJAAIgCAAIgCgCIAAAAQglgBglgBIgQgBIgDgDIgBAAQgkgGglgCIgpAAQgFgHgDgJIgCgHQgFgGgDgHQgCgEAAgGQgGgFgBgJIAAgEIQ2AIIgOengApgmhIAEAFIABABIADAAIBIAAIABAAQATgJAVgGIACAAIABgCIABAAIABAAIACAAIADgEIACgCIAEAAIACAAQADgDADAAIACgBQAKgDALAAIABAAIAEgDIACgBQAFgCAGgBIACAAIACgCIABgBIACAAIACAAIACgCIABAAIAjAAIACAAIABhKIhIAAIgqgBIgBACIgCAAIgCAAIgCACIgCABIgEAAIgCAAIgBABIgCACIgCAAIgCAAQgMAGgOAAIgCAAQgHAFgIACIgCABIgCACIgCAAIgCAAIgCADIgBAAQgEAAgBgFIgBAAIgCAAIgJgKIAAAAIgCAAIgBAAIgEgCIgCAAIgDgDIgBAAIgBAAIgCAAIgCgCIgCgBIhKgBIgRAAIgBADQgBAAAAAAQgBAAgBAAQAAAAgBABQAAAAgBABIgBABIgCAAIgCAAIgBACIgCACIgCAAIgCAAIgCACIAABQIABAAIBAABIACAAQABACACACIACABIACAAIACAAQAEAFAHAAIACABQAFAFAGgBIACAAg");
	this.shape_4.setTransform(152.1,134.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.fly, null, new cjs.Matrix2D(-0.002,0.218,-0.221,-0.002,149,-149.4)).s().p("AgWHIIAGuQIAMAIQAOAJAOALIgHN1g");
	this.shape_5.setTransform(22.3,162.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(img.fly, null, new cjs.Matrix2D(0.298,0.055,0.038,0.143,-142.5,-58.1)).s().p("AQ4JDQgLgLgPgKIgIgIQgQgXgDgXIgmgIIAAAAIAAgBIgNgwIAAgBIAJgIIABgBIAAgRIgDgdQgCgWgZgXIgwgJIgGgXIgCgGIgDgCIgBgBQgEgYgQgZIgCgEIAJAAIAFAAQAFgCAFABIClATIAFAEIACABQADAiALAkQACAGAGAIQAMAGADAHIABABIAJADIAAAAIACADIABABQANAHAKAIIABABIABADIAAABIAEACIABACQAEAEABAEIAAABIACACIACABIADAHIABAEQAEAhAIAjQADAMAJANIACACIACABIAAACQAFAKAJAJIACABIAAACIAAABIADABIABABIAHACQA8AMA7AJIAWAEIAEACgAG8I4IAAAAIADgBIAAAAIgCgJIAAgBIADAAIAAAAIAAgBIgBgBIAKgDIACAAIAAgCIAAgBIAMgDIAAAAIAAgBIgBgBIADAAIAAgBIAAgBIAAgBIADAAIAAAAIAAgBIAAgCIADAAIAAAAIgBgBIAAgBIADAAIAAgBIgCgFIAAgCIAJgCIAAgBIAHABQABgBAEgBIAAgBIAKABQADgCAGgBIAAAAIAAgCIAKABIAIgEIAAAAIgNgxIAAgBIhmgTQgBAEgIABIABAAIgKgBIgEABIgKgCIgNABIgGAAQgCACgEAAIAAAAIAAABIgDAAIAAAAIgBABIgCABIgGgBIAAABIAAAAIgCABIgEAAIgCAAIgBACIAAABIgEAAIgCABQAAALADANIgJACIAAAAIAAABIABABIgDABIgBAAIADAJIAAABIgCABIgBAAIACAHIAAABIgCACIAAABIgIAGIAAACQAAACgFAAIAAAAIAAACIAAABQgTAJgWAGIAAABIAAABIAAABIgGAAQgNAEgSACIAAAAIABABIgCABQgHgBgCADIgBABQgRABgLAFIgEABQgFAFgIACIigAAIAAiPImwAAIgMgsIAAgBQgPgPgMgOIAAgCIgEgBIAAgBIAAAAIgBgCIgFgDIgCgBIgCgDIAAgBIgGgEIgBgCQgGgHgCgHIAAgBIgEgDIgDgCQgEgEgCgEIAAgBIgCgCIgCgBIAAgBIgBgCIgEgBIAAgBIgGgXIAAgBIhngTIANAvIAHAaIAEACIAAABIABABIACACIABABIABADIAAABIACABIADACIAAABIAAACQALAJAEAJIAAACQAIAFAFAGIABABIADACIAAABIABABIADACIABABQABADgHgBIAAABIAAABIgMADIAAABIABABIAAABIgCACIAAABIgEABIABAAIAAABIAAABIgCACIgBAAIAIAbInKAAIicg/IguipIA7AKIAAgBQACgBAEgBIAAAAQgCgDACgCIABgBIAEgBIACAAIAAgCIAAgBIADAAIABgEIABgBIACgBIABAAQAdAEAXgBIAPAAQAVAAAPgEIgLgvIgFgZIADAAIAAgBQAAgWgJgYIgDgLIAEAAIAAAAIgCgGIgBgBIAEAAIAAgBIAAgBIgBgBIACgCIABgBIACgBIAAgBIgHgZIAYAEIAAAAIgGgVIARADIAAgBIgMguIAAgBIhngTIAAAAIAGAWIgRgDIAAAAIAGAVIgYgEIAAAAIABADIAAABIgCACIgBABIgCABIAAAAIAAABIAAABIgDABIAAAAIACAGIAAABIgCABIgBAAQAGAXAEAXIACAKIgCABIgBABQgBAWAFAXIAGAbQgJABgLAAIgJAAIgRABIgMAAQgGACgNgCIgFgBIi6q4MAp3AHyICkJlIhygUIgRgBIgCgBQgDgFgDgFQgQgugKgtQgCgMgIgNIgDgBIgBgDIgFgIIAAgBIgDgCIgBAAQgKgLgQgLIgDgCIgIgDIgCgBIAAgBQgBgFgHgEIgCgBIABgFQgBgegOgiIgEgKIgDgDIgBgCIgWgMIgBgBIgEgBIAAgBIiPgbQgkgCgmgFIiJgRIgGACIgCABIgIgBIgFABIgLgBIgBABIgBABIhhgDIgIgBQgHADgNgDIAAABIABAEIAFARIgDABIAAABIgKgBIgDABIABABIAAAEIABABIgDAAIAAAAIAAABIAMAvIABACIBqATIgBgBIADAAIABABIAAABIAIAEIACABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAIAAACIAFABQAJAKANAJIACABQAHAMAVALIAEABIAEAEIABACIAAAAIAlAHQACALAFAMQACAFgBAEQgUAHgLALIgBABIgEAAIAAAAIAJAlQAFATANAUQATAbAfAbQgIARgWANIgRAIg");
	this.shape_6.setTransform(148.3,262.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},5).to({state:[{t:this.instance_1}]},10).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_6}]},8).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:-23.2,y:163.6},4).to({startPosition:0},1).wait(1).to({x:-29.9},0).wait(1).to({x:-23.2},0).wait(1).to({x:-18.5},0).wait(1).to({x:-23.2},0).wait(1).to({x:-29.9},0).wait(1).to({x:-23.2},0).wait(1).to({x:-18.5},0).wait(1).to({x:-23.2},0).wait(1).to({startPosition:0},0).to({x:-36.2,y:174.6},5).to({startPosition:0},10).wait(1).to({startPosition:0},0).to({x:-23.2,y:163.6},8).to({startPosition:0},1).wait(1).to({x:-29.9},0).wait(1).to({x:-23.2},0).wait(1).to({x:-18.5},0).wait(1).to({x:-23.2},0).to({_off:true},1).wait(2).to({_off:false,x:-18.5},0).wait(1).to({x:-28.9},0).to({_off:true},1).wait(1).to({_off:false,scaleX:1,scaleY:1,rotation:51.6,x:57.8,y:123.6},0).to({_off:true},1).wait(10));

	// Layer 3
	this.instance_2 = new lib.Tween2("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-27.7,179.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(img.fly, null, new cjs.Matrix2D(0.17,0,-0.149,0.319,5.6,-189.2)).s().p("AjxEPQBDiBBfh2IAfgfIAJgOQAlgsAjgnQAjguAdgPQA0gsApgkIgEAEIAQgPIABgCIAKAAQAHgIAIgEIACAAQAHAHAFALIgCAXQhLCZhrCPQg/BPg5BTQgdAXgcATg");
	this.shape_7.setTransform(-42.9,198.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(img.fly, null, new cjs.Matrix2D(0.17,0,-0.149,0.319,-74.4,-131.9)).s().p("AmDIHQglhVBSixQBBilBFilQARhBAchEQAVhfBChnIATgVIgHAHIALgOIADgEQBGgvBNgLIAHgHIAMAAIAHgHQArgPAqgKQBzgSBNAzImTNcQgUAQgUAOIgJALQhWBKhSAsQgzAUgqAAQgqAAgggUg");
	this.shape_8.setTransform(33.1,161.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(img.fly, null, new cjs.Matrix2D(0.17,0,-0.149,0.319,48.9,-184.6)).s().p("AiODaIAEgOIgBgLIAFgSQBfjHBwi4IALgSQAJgFAKgNIApAAQgIAlgJAmIgBAEIgHArIgHAOQgGAggFAhQgOBbhFBbIgHAPIgfAnIg7ArQgTAJgNAAQgYAAgHgbg");
	this.shape_9.setTransform(-81.7,196.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(img.fly, null, new cjs.Matrix2D(0.17,0,-0.149,0.319,59,-140.4)).s().p("AjaFIICyl8IAFgFIAHgLIALgHIAegvQAhglAegfQAxgnAugwIAegkIAOgHIAAgHQAGABgEANIgBAEIADAEQgDAUgKAaIgEAHQgRAVgQAZIgEAFIgJASIgGAHQhHB5g+CMQgKAWgJAWIgEAOIgKAOQgvBXg1A9QgyAXgqAAIgKAAg");
	this.shape_10.setTransform(-100.4,179);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},4).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},8).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_2}]},10).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},8).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},8).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_2}]},7).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},4).wait(15).to({_off:false},0).to({startPosition:0},10).wait(1).to({startPosition:0},0).to({_off:true},8).wait(14).to({_off:false},0).to({startPosition:0},7).wait(1));

	// puddles
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#B58522").ss(1,1,1).p("AE9BLQhCAMgwAkQgEADgQAFQhcAfh2ACQifACgygbQglgVgwgRQgKgEgYABQiFAEg4gOQgQgEgUgCQgTgCgKgEQgLgEgHgHQgMgKAIgQQACgFAEgFQAagcA1gMQAqgMAbgWQA7g0B1gDQAOAAAMgBQB2gDBuACQBVABA7gPQATgFARgIQAkgPA3gGQAQgBASgDQBLgOBYAIQANABAGAEQASALBKACQgHARAoADQACABgEAHQgUAfAZAVQATARAZAPQALAGAJAGQAQAMg6AaQgLAFgSAEQhBANhMAIQg1AGgyATQALgCALgB");
	this.shape_11.setTransform(-120.5,202.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#E6AA2F","#7B5913"],[0,1],62.6,0,-58.7,0).s().p("AjsCLQglgVgwgRQgKgEgYABQiFAEg4gOQgQgEgUgCQgTgCgKgEQgLgEgHgHQgMgKAIgQQACgFAEgFQAagcA1gMQAqgMAbgWQA7g0B1gDIAagBQB2gDBuACQBVABA7gPQATgFARgIQAkgPA3gGQAQgBASgDQBLgOBYAIQANABAGAEQASALBKACQgHARAoADQACABgEAHQgUAfAZAVQATARAZAPIAUAMQAQAMg6AaQgLAFgSAEQhBANhMAIQg1AGgyATQhCAMgwAkQgEADgQAFQhcAfh2ACIgWAAQiMAAgvgZg");
	this.shape_12.setTransform(-120.5,202.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#B58522").ss(1,1,1).p("Am/hoQBdgSBEgyQAHgGAWgHQCCgrCngDQDggDBGAnQA1AdBEAZQAOAFAhgBQC8gGBPATQAXAGAdADQAaADAOAFQAQAHAKAJQARAPgLAWQgDAHgGAHQglAnhKASQg9AQglAgQhTBJimAEQgSABgTAAQimAGibgDQh5gDhTAWQgbAIgYAKQgyAWhPAHQgWACgZAFQhrAUh8gMQgSgBgJgFQgZgRhogCQAJgZg4gEQgEAAAHgLQAcgrgjgeQgbgYgkgVQgOgIgNgJQgXgRBRgmQAQgHAZgFQBcgSBsgMQBLgJBGgZQgPACgPAC");
	this.shape_13.setTransform(19.9,201);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#E6AA2F","#7B5913"],[0,1],-88.3,0,83,0).s().p("ApSDjQgSgBgJgFQgZgRhogCQAJgZg4gEQgEAAAHgLQAcgrgjgeQgbgYgkgVIgbgRQgXgRBRgmQAQgHAZgFQBcgSBsgMQBLgJBGgZQBdgSBEgyQAHgGAWgHQCCgrCngDQDggDBGAnQA1AdBEAZQAOAFAhgBQC8gGBPATQAXAGAdADQAaADAOAFQAQAHAKAJQARAPgLAWQgDAHgGAHQglAnhKASQg9AQglAgQhTBJimAEIglABQimAGibgDQh5gDhTAWQgbAIgYAKQgyAWhPAHQgWACgZAFQhDANhKAAQgsAAgugFg");
	this.shape_14.setTransform(19.9,201);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},59).wait(1));

	// glueboard
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("EAhoAA+IAAA9Mgv6AEYIAAhSIzWnPMAv7gEEITWHQIgBAAMgv6AEDEghogCOIAAA/ITWHi");
	this.shape_15.setTransform(-38.9,208.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#805600").s().p("EghngDRIAAg/ITVHPIAABSgAuSC/MAv6gECIAAA9Mgv6AEXgAuSC/g");
	this.shape_16.setTransform(-38.9,221.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#E6AA2F","#7B5913"],[0,1],61.9,23.2,-61.9,-23.2).s().p("EghogBlMAv7gEEITVHPIAAAAMgv6AEEg");
	this.shape_17.setTransform(-38.9,204.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-255.1,72.1,432.5,205);


(lib.choiceMC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"0frame":0,"1frame":7,"2frame":14,"3frame":21});

	// timeline functions:
	this.frame_0 = function() {
		/* correctChoice.visible = false;
		
		
		
		
		function setCorrect():void{
			correctChoice.visible = true;
			//buttonA.enabled = buttonB.enabled = buttonC.enabled= buttonD.enabled = false;
			
		}
		
		function setWrong(){
			if(buttonA!=null){
				buttonA.removeEventListener(MouseEvent.CLICK, MovieClip(parent).checkAnswer);
				buttonA.alpha = .5
			}
			if(buttonB!=null){
				buttonB.removeEventListener(MouseEvent.CLICK, MovieClip(parent).checkAnswer);
				buttonB.alpha = .5
			}
			if(buttonC!=null){
				buttonC.removeEventListener(MouseEvent.CLICK, MovieClip(parent).checkAnswer);
				buttonC.alpha = .5
			}
			if(buttonD!=null){
				buttonD.removeEventListener(MouseEvent.CLICK, MovieClip(parent).checkAnswer);
				buttonD.alpha = .5 
			}
		}
		
		
		function setText(input:String):void{
			choice_text.htmlText = input;
		}*/
		/* stop();*/
		/* buttonA.addEventListener(MouseEvent.CLICK, MovieClip(parent).checkAnswer);*/
	}
	this.frame_7 = function() {
		/* stop();*/
		/* buttonB.addEventListener(MouseEvent.CLICK, MovieClip(parent).checkAnswer)*/
	}
	this.frame_14 = function() {
		/* stop();*/
		/* buttonC.addEventListener(MouseEvent.CLICK, MovieClip(parent).checkAnswer);*/
	}
	this.frame_21 = function() {
		/* stop();*/
		/* buttonD.addEventListener(MouseEvent.CLICK, MovieClip(parent).checkAnswer);*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(7).call(this.frame_14).wait(7).call(this.frame_21).wait(7));

	// buttons
	this.buttonA = new lib.btna();
	this.buttonA.name = "buttonA";
	this.buttonA.parent = this;
	new cjs.ButtonHelper(this.buttonA, 0, 1, 1);

	this.buttonB = new lib.btnb();
	this.buttonB.name = "buttonB";
	this.buttonB.parent = this;
	new cjs.ButtonHelper(this.buttonB, 0, 1, 1);

	this.buttonC = new lib.btnC();
	this.buttonC.name = "buttonC";
	this.buttonC.parent = this;
	new cjs.ButtonHelper(this.buttonC, 0, 1, 1);

	this.buttonD = new lib.btnD();
	this.buttonD.name = "buttonD";
	this.buttonD.parent = this;
	new cjs.ButtonHelper(this.buttonD, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.buttonA}]}).to({state:[{t:this.buttonB}]},7).to({state:[{t:this.buttonC}]},7).to({state:[{t:this.buttonD}]},7).wait(7));

	// text
	this.choice_text = new cjs.Text("", "12px 'Arial'", "#003300");
	this.choice_text.name = "choice_text";
	this.choice_text.lineHeight = 15;
	this.choice_text.lineWidth = 372;
	this.choice_text.parent = this;
	this.choice_text.setTransform(27,2);

	this.timeline.addTween(cjs.Tween.get(this.choice_text).wait(28));

	// correct
	this.correctChoice = new lib.correct();
	this.correctChoice.name = "correctChoice";
	this.correctChoice.parent = this;
	this.correctChoice.setTransform(10.3,10.3,1,1,0,0,0,14.8,14.8);
	this.correctChoice.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.correctChoice).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-5.5,406.5,59.5);


// stage content:
(lib.page76pop_Canvas = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.questionText.text = "A caller tells unimpressed Willie that she's seen some kind of bug running quickly around the bathroom. This insect is about an inch long, kind of scaly looking, and has some kind of long tail made of three projections. What is it?";
		this.answer_a_text.text = "This is probably an earwig. They have an abdominal projection and they run fast.";
		this.answer_b_text.text = "Sounds like silverfish or firebrats. They're both scaly, like to live in humid areas and have three long \"tail\" projections.";
		this.answer_c_text.text = "It's probably German cockroaches. These cockroaches like humidity and they usually live in kitchens or bathrooms.";
		this.answer_d_text.text = "This sounds like a smoky brown cockroach. These roaches like humidity and seek out high moisture areas.";
		this.wrongChoice.visible = false;
		this.correct_circle.y = "315";
		
		
		//// Answer A - Button 1 //// Correct Answer /////
		
		this.button_1.addEventListener("click", fl_MouseClickHandler.bind(this));
		
		function fl_MouseClickHandler()
		{
			this.correctHeading.text = "Incorrect!";
			this.incorrectFeedback.text = "Incorrect! Earwigs do have abdominal projections, but their forceps are in groups of two and they aren't really scaly. Silverfish and firebrats are covered with scales, like to live in bathrooms, and have three tail-like projections called cerci.";
			this.correctFeedback.text = "";
			this.correct_circle.visible = true;
			this.wrongChoice.visible = true;
		}
		
		this.button_2.addEventListener("click", fl_MouseClickHandler_2.bind(this));
		
		function fl_MouseClickHandler_2()
		{
			
			this.correctHeading.text = "Correct!";
			this.correctFeedback.text = "Good work!";
			this.correct_circle.visible = true;
			this.wrongChoice.visible = false;
			this.incorrectFeedback.text = "";
		}
		
		this.button_3.addEventListener("click", fl_MouseClickHandler_3.bind(this));
		
		function fl_MouseClickHandler_3()
		{
			
			this.correctHeading.text = "Incorrect!";
			this.correctFeedback.text = "";
			this.correct_circle.visible = true;
			this.wrongChoice.visible = true;
			this.incorrectFeedback.text = "Incorrect! German cockroaches do like humid areas, but they don't have any kind of tail-like projections. Silverfish and firebrats are covered with scales, like to live in bathrooms, and have three tail-like projections called cerci.";
			
			
			
		}
		
		this.button_4.addEventListener("click", fl_MouseClickHandler_4.bind(this));
		
		function fl_MouseClickHandler_4()
		{
			this.correctHeading.text = "Incorrect!";
			this.correctFeedback.text = "";
			this.correct_circle.visible = true;
			this.wrongChoice.visible = true;
			this.incorrectFeedback.text = "Incorrect! Apparently you've never seen a smoky brown cockroach; they aren't scaly and don't have three projections from the tail. Silverfish and firebrats are covered with scales, like to live in bathrooms, and have three tail-like projections called cerci.";
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// questionNum
	this.questionNum = new cjs.Text("", "16px 'Arial'");
	this.questionNum.name = "questionNum";
	this.questionNum.lineHeight = 18;
	this.questionNum.lineWidth = 497;
	this.questionNum.parent = this;
	this.questionNum.setTransform(39.8,97);

	this.timeline.addTween(cjs.Tween.get(this.questionNum).wait(1));

	// questionText
	this.questionText = new cjs.Text("", "16px 'Arial'");
	this.questionText.name = "questionText";
	this.questionText.lineHeight = 18;
	this.questionText.lineWidth = 497;
	this.questionText.parent = this;
	this.questionText.setTransform(39.8,97.3);

	this.timeline.addTween(cjs.Tween.get(this.questionText).wait(1));

	// correct_answer
	this.wrongChoice = new cjs.Text("The correct answer is circled:", "16px 'Arial'", "#990000");
	this.wrongChoice.name = "wrongChoice";
	this.wrongChoice.lineHeight = 20;
	this.wrongChoice.lineWidth = 371;
	this.wrongChoice.parent = this;
	this.wrongChoice.setTransform(43,214.2);

	this.timeline.addTween(cjs.Tween.get(this.wrongChoice).wait(1));

	// correctFeedback
	this.button_4 = new lib.btnD();
	this.button_4.name = "button_4";
	this.button_4.parent = this;
	this.button_4.setTransform(36.8,409.7);
	new cjs.ButtonHelper(this.button_4, 0, 1, 1);

	this.button_3 = new lib.btnC();
	this.button_3.name = "button_3";
	this.button_3.parent = this;
	this.button_3.setTransform(36.8,358);
	new cjs.ButtonHelper(this.button_3, 0, 1, 1);

	this.button_2 = new lib.btnb();
	this.button_2.name = "button_2";
	this.button_2.parent = this;
	this.button_2.setTransform(36.8,304.8);
	new cjs.ButtonHelper(this.button_2, 0, 1, 1);

	this.button_1 = new lib.btna();
	this.button_1.name = "button_1";
	this.button_1.parent = this;
	this.button_1.setTransform(37.8,249.8);
	new cjs.ButtonHelper(this.button_1, 0, 1, 1);

	this.correctHeading = new cjs.Text("", "20px 'Arial'", "#663300");
	this.correctHeading.name = "correctHeading";
	this.correctHeading.lineHeight = 22;
	this.correctHeading.lineWidth = 260;
	this.correctHeading.parent = this;
	this.correctHeading.setTransform(43,188);

	this.correctFeedback = new cjs.Text("", "20px 'Arial'", "#663300");
	this.correctFeedback.name = "correctFeedback";
	this.correctFeedback.lineHeight = 24;
	this.correctFeedback.lineWidth = 193;
	this.correctFeedback.parent = this;
	this.correctFeedback.setTransform(568,282.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.correctFeedback},{t:this.correctHeading},{t:this.button_1},{t:this.button_2},{t:this.button_3},{t:this.button_4}]}).wait(1));

	// incorrectFeedback
	this.incorrectFeedback = new cjs.Text("", "14px 'Arial'", "#000099");
	this.incorrectFeedback.name = "incorrectFeedback";
	this.incorrectFeedback.lineHeight = 16;
	this.incorrectFeedback.lineWidth = 193;
	this.incorrectFeedback.parent = this;
	this.incorrectFeedback.setTransform(568,282.7);

	this.timeline.addTween(cjs.Tween.get(this.incorrectFeedback).wait(1));

	// extras
	this.instance = new lib.fly_1();
	this.instance.parent = this;
	this.instance.setTransform(659.8,104.8,0.406,0.454);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#396337").s().p("AAsBWIhZiGIAACGIgVAAIAAirIAWAAIBaCGIAAiGIAWAAIAACrg");
	this.shape.setTransform(193.9,50.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#396337").s().p("AgqBNQgTgLgKgVQgKgUAAgXQAAgqAXgXQAXgZAjAAQAYAAATALQATAMAKAVQAKATAAAaQAAAagKAUQgLAVgTAKQgUALgWAAQgXAAgTgMgAgogzQgSAQAAAlQAAAfARASQARATAYgBQAaABAQgTQARgRAAgiQAAgUgHgPQgHgQgOgJQgOgJgRABQgXAAgRARg");
	this.shape_1.setTransform(176,50.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#396337").s().p("AgKBWIAAirIAVAAIAACrg");
	this.shape_2.setTransform(163.3,50.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#396337").s().p("AgLBWIAAiXIg4AAIAAgUICHAAIAAAUIg5AAIAACXg");
	this.shape_3.setTransform(152.7,50.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#396337").s().p("AghBSQgQgHgJgOQgJgNAAgRIAVgCQACANAFAIQAGAIALAFQAMAFAOAAQANAAAKgEQAKgDAFgHQAEgHAAgIQAAgIgEgGQgFgGgLgEIgdgIQgYgGgKgEQgMgHgGgJQgGgKAAgMQAAgNAHgLQAIgLAOgGQAOgGASAAQASAAAOAGQAPAGAIAMQAIAMAAAPIgWACQgBgQgKgJQgLgIgTAAQgUAAgJAIQgKAHAAALQAAAJAHAGQAGAGAbAGQAcAHAKAEQAPAGAHALQAHAKAAAOQAAAOgIAMQgHAMgPAHQgPAHgSAAQgXAAgPgHg");
	this.shape_4.setTransform(137.2,50.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#396337").s().p("Ag/BWIAAirIB7AAIAAAUIhlAAIAAA1IBfAAIAAAUIhfAAIAAA6IBpAAIAAAUg");
	this.shape_5.setTransform(121.6,50.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#396337").s().p("AgmBPQgPgIgHgQQgGgQgBgbIAAhiIAXAAIAABiQAAAWAEALQAFAKAKAGQAJAGAQAAQAXAAALgLQALgMAAggIAAhiIAWAAIAABiQAAAagFAPQgGAQgQAJQgPAJgYAAQgYAAgPgIg");
	this.shape_6.setTransform(104.6,50.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#396337").s().p("AAoBJQgTALgWAAQgXAAgTgMQgTgLgLgUQgKgVAAgYQAAgaAKgUQALgVATgLQATgLAXAAQAXAAATALQATAMAKAUQAKAUAAAaQAAAUgGARQgHARgNAMQAQALAOAFIgHAQQgTgHgSgOgAgrg4QgQARAAAjQAAAgAQASQARASAZAAQAMAAAKgEQgKgHgLgDIAEgRQAUAGANALQAUgTAAgjQAAgVgHgQQgHgPgOgJQgOgJgQAAQgZAAgRASg");
	this.shape_7.setTransform(86.7,50.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#396337").s().p("AhABWIAAirIBAAAQAQAAAKACQAMACAIAGQAJAGAGAKQAEALAAANQAAAWgNAOQgOAPglAAIgrAAIAABGgAgqgDIArAAQAXAAAJgJQAJgHAAgPQAAgLgFgIQgGgHgIgDQgHgCgPAAIgrAAg");
	this.shape_8.setTransform(63.1,50.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#396337").s().p("AgqBNQgTgLgKgVQgKgUAAgXQAAgqAXgXQAXgZAjAAQAYAAATALQATAMAKAVQAKATAAAaQAAAagKAUQgLAVgTAKQgUALgWAAQgXAAgTgMgAgogzQgSAQAAAlQAAAfARASQARATAYgBQAaABAQgTQARgRAAgiQAAgUgHgPQgHgQgOgJQgOgJgRABQgXAAgRARg");
	this.shape_9.setTransform(45.4,50.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#396337").s().p("AhABWIAAirIBAAAQAQAAAKACQAMACAIAGQAJAGAGAKQAEALAAANQAAAWgNAOQgOAPglAAIgrAAIAABGgAgqgDIArAAQAXAAAJgJQAJgHAAgPQAAgLgFgIQgGgHgIgDQgHgCgPAAIgrAAg");
	this.shape_10.setTransform(28.4,50.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 4
	this.answer_d_text = new cjs.Text("", "14px 'Arial'");
	this.answer_d_text.name = "answer_d_text";
	this.answer_d_text.lineHeight = 18;
	this.answer_d_text.lineWidth = 459;
	this.answer_d_text.parent = this;
	this.answer_d_text.setTransform(74,411.7);

	this.answer_c_text = new cjs.Text("", "14px 'Arial'");
	this.answer_c_text.name = "answer_c_text";
	this.answer_c_text.lineHeight = 18;
	this.answer_c_text.lineWidth = 460;
	this.answer_c_text.parent = this;
	this.answer_c_text.setTransform(74,358.3);

	this.answer_b_text = new cjs.Text("", "14px 'Arial'");
	this.answer_b_text.name = "answer_b_text";
	this.answer_b_text.lineHeight = 18;
	this.answer_b_text.lineWidth = 462;
	this.answer_b_text.parent = this;
	this.answer_b_text.setTransform(74,307.7);

	this.answer_a_text = new cjs.Text("", "14px 'Arial'");
	this.answer_a_text.name = "answer_a_text";
	this.answer_a_text.lineHeight = 18;
	this.answer_a_text.lineWidth = 462;
	this.answer_a_text.parent = this;
	this.answer_a_text.setTransform(74,252.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.answer_a_text},{t:this.answer_b_text},{t:this.answer_c_text},{t:this.answer_d_text}]}).wait(1));

	// Layer 5
	this.selected_circle_d = new lib.selected_circle_d();
	this.selected_circle_d.name = "selected_circle_d";
	this.selected_circle_d.parent = this;
	this.selected_circle_d.setTransform(48,420);
	this.selected_circle_d.visible = false;
	new cjs.ButtonHelper(this.selected_circle_d, 0, 1, 1);

	this.selected_circle_c = new lib.selected_circle_c();
	this.selected_circle_c.name = "selected_circle_c";
	this.selected_circle_c.parent = this;
	this.selected_circle_c.setTransform(48.6,370.8);
	this.selected_circle_c.visible = false;
	new cjs.ButtonHelper(this.selected_circle_c, 0, 1, 1);

	this.selected_circle_b = new lib.selected_circle_b();
	this.selected_circle_b.name = "selected_circle_b";
	this.selected_circle_b.parent = this;
	this.selected_circle_b.setTransform(47,318);
	this.selected_circle_b.visible = false;
	new cjs.ButtonHelper(this.selected_circle_b, 0, 1, 1);

	this.selected_circle_a = new lib.selected_circle_a();
	this.selected_circle_a.name = "selected_circle_a";
	this.selected_circle_a.parent = this;
	this.selected_circle_a.setTransform(48.6,260,1,1,0,0,0,14.8,14.8);
	this.selected_circle_a.visible = false;
	new cjs.ButtonHelper(this.selected_circle_a, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.selected_circle_a},{t:this.selected_circle_b},{t:this.selected_circle_c},{t:this.selected_circle_d}]}).wait(1));

	// correct_circle
	this.correct_circle = new lib.correct_circle();
	this.correct_circle.name = "correct_circle";
	this.correct_circle.parent = this;
	this.correct_circle.setTransform(47.6,369,1,1,0,0,0,14.8,14.8);
	this.correct_circle.visible = false;
	new cjs.ButtonHelper(this.correct_circle, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.correct_circle).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(415.5,297.5,745,446);
// library properties:
lib.properties = {
	id: 'D79FC32A327BB445A5156E6D307393DA',
	width: 795,
	height: 525,
	fps: 12,
	color: "#E5F4DE",
	opacity: 1.00,
	manifest: [
		{src:"images/fly.png", id:"fly"},
		{src:"images/pop.png", id:"pop"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['D79FC32A327BB445A5156E6D307393DA'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;