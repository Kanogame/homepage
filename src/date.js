const Time = document.querySelector(".date");

Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + 
    (this.getMonth()+1) +"/"+ this.getFullYear();
}

Date.prototype.timeNow = function (plus) {
     return (((this.getHours() + plus) < 10)?"0":"") + (this.getHours() + plus) +":"+ ((this.getMinutes() < 10)?"0":"") + 
     this.getMinutes() +":"+ ((this.getSeconds() < 10)?"0":"") + this.getSeconds();
}

function GetTime() {
    var currentdate = new Date();
        var datetime = `UTC +7: ${currentdate.today()} @ ${currentdate.timeNow(0)}/ Moscow: ${currentdate.timeNow(-4)}`;
    Time.innerHTML = datetime;
}

setInterval(GetTime, 1000)