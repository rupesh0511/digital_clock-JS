function showTime(){
    let date= new Date();
    let hrs= date.getHours();
    let mins= date.getMinutes();
    let secs= date.getSeconds();
    let sessions= "AM"

    if(hrs==0){
         hrs=12;
    }
    if(hrs>12){
        hrs=hrs-12;
        sessions= "PM";
    }

    hrs = (hrs < 10) ? "0" + hrs : hrs;
    mins = (mins < 10) ? "0" + mins : mins;
    secs = (secs < 10) ? "0" + secs : secs;

    let time= hrs + ":" + mins + ":" + secs + " " + sessions;

    let timedisplay= document.getElementById('MyClockDisplay');
    timedisplay.innerText= time;
}

setInterval(showTime,1000);
showTime();