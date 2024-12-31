(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"sang_atlas_1", frames: [[0,580,1344,93],[0,278,892,149],[1206,429,268,35],[894,429,310,44],[1323,44,92,83],[1323,0,188,42],[0,675,1344,93],[894,278,892,149],[1206,466,268,35],[894,475,310,44],[1323,129,92,83],[1513,0,188,42],[0,0,1321,276],[0,770,1344,93],[0,429,892,149],[1206,503,268,35],[894,521,310,44],[1417,44,92,83],[1703,0,188,42]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_202 = function() {
	this.initialize(img.CachedBmp_202);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2342,1210);


(lib.CachedBmp_201 = function() {
	this.initialize(img.CachedBmp_201);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2342,1210);


(lib.CachedBmp_200 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_199 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_198 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_197 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_196 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_195 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_194 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_193 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_192 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_191 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_190 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_189 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_188 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_187 = function() {
	this.initialize(img.CachedBmp_187);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2400,1254);


(lib.CachedBmp_186 = function() {
	this.initialize(img.CachedBmp_186);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2400,1254);


(lib.CachedBmp_185 = function() {
	this.initialize(img.CachedBmp_185);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2342,1210);


(lib.CachedBmp_184 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_183 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_182 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_181 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_180 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_179 = function() {
	this.initialize(ss["sang_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Image = function() {
	this.initialize(img.Image);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,3029,1181);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.Tween8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_202();
	this.instance.setTransform(-585.2,-302.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-585.2,-302.4,1171,605);


(lib.Tween7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_201();
	this.instance.setTransform(-585.2,-302.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-585.2,-302.4,1171,605);


(lib.letstravelEXPLORETHEWORLD = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_188();
	this.instance.setTransform(6.1,-1.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.letstravelEXPLORETHEWORLD, new cjs.Rectangle(6.1,-1.4,660.5,138), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgnoAWBMAD5gx6MBLYAF4MgD5Ax7g");
	mask.setTransform(353.225,217.375);

	// Layer_3
	this.instance = new lib.Image();
	this.instance.setTransform(58.15,0,0.2331,0.2953,9.602);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(99.5,38.8,507.5,357.2), null);


(lib.Tween6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_200();
	this.instance.setTransform(-506.8,108,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_199();
	this.instance_1.setTransform(-506.8,25.3,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_198();
	this.instance_2.setTransform(342.05,217.35,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_197();
	this.instance_3.setTransform(-487.15,216.95,0.5,0.5);

	this.instance_4 = new lib.letstravelEXPLORETHEWORLD();
	this.instance_4.setTransform(-164.7,-74.1,1,1,0,0,0,348.2,68.4);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",4,4,12);

	this.instance_5 = new lib.CachedBmp_196();
	this.instance_5.setTransform(435.45,-239.1,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_195();
	this.instance_6.setTransform(412.95,-193.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-516.8,-239.1,1023.8,478.1);


(lib.Tween5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.CachedBmp_194();
	this.instance.setTransform(-506.8,108,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_193();
	this.instance_1.setTransform(-506.8,25.3,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_192();
	this.instance_2.setTransform(342.05,217.35,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_191();
	this.instance_3.setTransform(-487.15,216.95,0.5,0.5);

	this.instance_4 = new lib.letstravelEXPLORETHEWORLD();
	this.instance_4.setTransform(-164.7,-74.1,1,1,0,0,0,348.2,68.4);
	this.instance_4.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",4,4,12);

	this.instance_5 = new lib.CachedBmp_190();
	this.instance_5.setTransform(435.45,-239.1,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_189();
	this.instance_6.setTransform(412.95,-193.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-516.8,-239.1,1023.8,478.1);


// stage content:
(lib.sang = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// TEXTS
	this.instance = new lib.Tween5("synched",0);
	this.instance.setTransform(642.05,580.4);
	this.instance.alpha = 0;

	this.instance_1 = new lib.Tween6("synched",0);
	this.instance_1.setTransform(642.05,278.15);

	this.instance_2 = new lib.CachedBmp_184();
	this.instance_2.setTransform(135.25,386.15,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_183();
	this.instance_3.setTransform(135.25,303.45,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_182();
	this.instance_4.setTransform(984.1,495.5,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_181();
	this.instance_5.setTransform(154.9,495.1,0.5,0.5);

	this.instance_6 = new lib.letstravelEXPLORETHEWORLD();
	this.instance_6.setTransform(477.35,204.05,1,1,0,0,0,348.2,68.4);
	this.instance_6.shadow = new cjs.Shadow("rgba(0,0,0,0.2)",4,4,12);

	this.instance_7 = new lib.CachedBmp_180();
	this.instance_7.setTransform(1077.5,39,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_179();
	this.instance_8.setTransform(1055,84.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},29).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},271).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,y:278.15,alpha:1},29).wait(273));

	// OBJECTS
	this.instance_9 = new lib.Tween7("synched",0);
	this.instance_9.setTransform(605.45,325.95);
	this.instance_9.alpha = 0;

	this.instance_10 = new lib.Tween8("synched",0);
	this.instance_10.setTransform(605.45,325.95);

	this.instance_11 = new lib.CachedBmp_185();
	this.instance_11.setTransform(20.25,23.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},29).to({state:[{t:this.instance_11}]},271).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true,alpha:1},29).wait(273));

	// PHOTOS
	this.instance_12 = new lib.ClipGroup();
	this.instance_12.setTransform(912.95,314.55,1,1,0,0,0,377.2,230.8);
	this.instance_12.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({alpha:1},29).wait(273));

	// BACKGROUND
	this.instance_13 = new lib.CachedBmp_186();
	this.instance_13.setTransform(0,1.25,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_187();
	this.instance_14.setTransform(0,1.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_14}]},299).to({state:[]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(600,314.3,690.2,505.09999999999997);
// library properties:
lib.properties = {
	id: '0581FC8BD520E3449235EF8203D21105',
	width: 1200,
	height: 626,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/CachedBmp_202.png", id:"CachedBmp_202"},
		{src:"images/CachedBmp_201.png", id:"CachedBmp_201"},
		{src:"images/CachedBmp_187.png", id:"CachedBmp_187"},
		{src:"images/CachedBmp_186.png", id:"CachedBmp_186"},
		{src:"images/CachedBmp_185.png", id:"CachedBmp_185"},
		{src:"images/Image.png", id:"Image"},
		{src:"images/sang_atlas_1.png", id:"sang_atlas_1"}
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
an.compositions['0581FC8BD520E3449235EF8203D21105'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;