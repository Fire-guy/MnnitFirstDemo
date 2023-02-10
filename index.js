var Ghanta=document.getElementById("timer");
var ChaluObject=document.getElementById("start-btn");
var BandObject=document.getElementById("reset-btn");
var isTimerRunning=false;

BandObject.addEventListener("click",function(){
    console.log("reset button clicked")
    Ghanta.textContent="00:00"
    isTimerRunning=false
})

ChaluObject.addEventListener("click",()=>{
    console.log("start button clicked.");
    if (isTimerRunning){
        ChaluObject.textContent="Start";
        isTimerRunning=false;
    }
    else{
        ChaluObject.textContent="Stop";
        isTimerRunning=true;
        interval=setInterval(()=>{
            var timerText=Ghanta.textContent
            var timerArr=timerText.split(":")
            var minutes=Number(timerArr[0])
            var seconds=Number(timerArr[1])
            seconds++;
            if(seconds==60){
                minutes++
                seconds=0
            }
            if(minutes<10){
                minutes="0"+minutes
            }
            if(seconds<10){
                seconds="0"+seconds
            }
            Ghanta.textContent=minutes+":"+seconds
            console.log("hi")

        },1000)
    }
    
})