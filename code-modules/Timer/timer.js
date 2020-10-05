function hideTimer () {
    var slideLabel = cpInfoCurrentSlideLabel.slice(0, 14);

    isTimer = (slideLabel !== 'Learning Check' || slideAudioName) ? true : false;

}

// Controls position of duration timer and color
var durationTimePos = 'absolute';
var durationTimeTop = '95%';
var durationTimeLeft = '85%';
var durationTimeColor = 'white';

// Controls position of current time timer and color
var currentTimePos = 'absolute';
var currentTimeTop = '95%';
var currentTimeLeft = '9%';
var currentTimeColor = 'white';


        /////////////////////// Timer //////////////////////////////////////////////

        if (isTimer) {

            ///////////// Duration Time ///////////////////

            // Creates Duration time
            var durationTime = document.createElement('div');

            durationTime.id = 'duration-time';
            durationTime.style.position = durationTimePos;
            durationTime.style.top = durationTimeTop;
            durationTime.style.left = durationTimeLeft;
            durationTime.style.color = durationTimeColor;
            durationTime.style.zIndex = 3000;

            $("#div_Slide").append(durationTime);
            
            var durationFrames = lastFrame - firstFrame;        
            var durationFps = cpInfoFPS;
            var durationSeconds = durationFrames / durationFps;    
            var durationHrs = 0;    
            var durationMin = 0;    
            var durationSec = 0;            
            
            function setDuration() {                   
            
                /*hour*/            
                
                if (durationSeconds > 3600) {
                    
                    if (cpInfoCurrentFrame === firstFrame) {

                        durationHrs = '00';

                    } else if (durationHrs > 9) {

                        durationHrs = Math.floor((durationSeconds / 3600)).toFixed(0);

                    } else {

                        durationHrs = '0' + Math.floor((durationSeconds / 3600)).toFixed(0);
                    }       
                }      
            
                /*minutes*/        
            
                if (durationSeconds / 3600 - (Math.floor(durationSeconds / 3600)).toFixed(0) < 1) {

                    if (cpInfoCurrentFrame === firstFrame) {

                        durationMin = '00'

                    } else if (durationMin > 9) {            

                        durationMin = Math.floor((durationSeconds / 3600 - (Math.floor(durationSeconds / 3600).toFixed(0))) * 60).toFixed(0);

                    } else {

                        durationMin = '0' + Math.floor((durationSeconds / 3600 - (Math.floor(durationSeconds / 3600).toFixed(0))) * 60).toFixed(0);                   

                    }        
                }
            
                /*seconds*/            
            
                if (durationSeconds / 3600 - (Math.floor(durationSeconds / 3600)).toFixed(0) < 1) {                

                    if (cpInfoCurrentFrame === firstFrame) {

                        durationSec = '00'

                    } else if (durationSec > 9) {            

                        durationSec = ((((durationSeconds / 3600 - Math.floor(durationSeconds / 3600)) * 60) - Math.floor(((durationSeconds / 3600 - Math.floor(durationSeconds / 3600)) * 60))) * 60).toFixed(0);

                    } else {

                        durationSec = '0' +  ((((durationSeconds / 3600 - Math.floor(durationSeconds / 3600)) * 60) - Math.floor(((durationSeconds / 3600 - Math.floor(durationSeconds / 3600)) * 60))) * 60).toFixed(0);                    

                    }   
                
                }
                
                 // Takes out extra zero when counter hits 10
                 if (durationHrs.length === 3) {
                  durationHrs = durationHrs.slice(1)
                 }  
             
                 if (durationMin.length === 3) {
                  durationMin = durationMin.slice(1)
                 }  
             
                 if (durationSec.length === 3) {
                  durationSec = durationSec.slice(1)
                 }  

                durationTime.textContent = durationMin + ':' + durationSec
            }

            setDuration();

            ///////////// Current Time ///////////////////

            // Current time variables                        
            var timeInSeconds;        
            var fps = cpInfoFPS;    
            var timeHrs = 0;    
            var timeMin = 0;    
            var timeSec = 0;
            
            // Creates Current time 
            var currentTime = document.createElement('div');        

            currentTime.id = 'current-time';
            currentTime.style.position = currentTimePos;
            currentTime.style.top = currentTimeTop;
            currentTime.style.left = currentTimeLeft;
            currentTime.style.color = currentTimeColor;
            currentTime.style.zIndex = 3000;

            $("#div_Slide").append(currentTime);

            // Event and functions that control current time timer
            cpAPIEventEmitter.addEventListener("CPAPI_VARIABLEVALUECHANGED", getTimeStamp, "cpInfoCurrentFrame");

            function getTimeStamp() {      

               var numOfFrm = cpInfoCurrentFrame - firstFrame; 
            
               timeInSeconds = numOfFrm / fps;

               // Takes out extra zero when counter hits 10
               if (timeHrs.length === 3) {
                timeHrs = timeHrs.slice(1)
               }  

               if (timeMin.length === 3) {
                timeMin = timeMin.slice(1)
               }  

               if (timeSec.length === 3) {
                timeSec = timeSec.slice(1)
               }      
           
                /*hour*/            
           
                if (timeInSeconds > 3600) {

                    if (cpInfoCurrentFrame === firstFrame) {

                        timeHrs = '00';

                    } else if (timeHrs > 9) {

                        timeHrs = Math.floor((timeInSeconds / 3600)).toFixed(0);

                    } else {

                        timeHrs = '0' + Math.floor((timeInSeconds / 3600)).toFixed(0);
                    }       
                }      
            
                /*minutes*/        
            
                if (timeInSeconds / 3600 - (Math.floor(timeInSeconds / 3600)).toFixed(0) < 1) {

                    if (cpInfoCurrentFrame === firstFrame) {

                        timeMin = '00'

                    } else if (timeMin > 9) {            

                        timeMin = Math.floor((timeInSeconds / 3600 - (Math.floor(timeInSeconds / 3600).toFixed(0))) * 60).toFixed(0);

                    } else {

                        timeMin = '0' + Math.floor((timeInSeconds / 3600 - (Math.floor(timeInSeconds / 3600).toFixed(0))) * 60).toFixed(0);                   

                    }        
                }
            
                /*seconds*/            
            
                if (timeInSeconds / 3600 - (Math.floor(timeInSeconds / 3600)).toFixed(0) < 1) {                

                    if (cpInfoCurrentFrame === firstFrame) {

                        timeSec = '00'

                    } else if (timeSec > 9) {            

                        timeSec = ((((timeInSeconds / 3600 - Math.floor(timeInSeconds / 3600)) * 60) - Math.floor(((timeInSeconds / 3600 - Math.floor(timeInSeconds / 3600)) * 60))) * 60).toFixed(0);

                    } else {

                        timeSec = '0' +  ((((timeInSeconds / 3600 - Math.floor(timeInSeconds / 3600)) * 60) - Math.floor(((timeInSeconds / 3600 - Math.floor(timeInSeconds / 3600)) * 60))) * 60).toFixed(0);                    

                    }   
                
                } 

                currentTime.textContent = timeMin + ':' + timeSec

            }
        }