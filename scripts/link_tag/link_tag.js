var soundScript = document.createElement("script");
soundScript.src = "dist/js/addSoundFunc.js"
var head = document.getElementsByTagName("head");
var libScript = head[0].getElementsByTagName("script")[0];
libScript.append(soundScript);