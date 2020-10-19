var launchAppUrl = "s1945ii://";
var timer;
var schinterval;

MyApp();

function MyApp(){
    function clearTimers(){
        clearInterval(heartbeat);
        clearTimeout(timer);
    }

    function intervalHeartbeat(){
        if(document.webkitHidden || document.hidden){
            clearTimers();
            document.write("<meta http-equiv='refresh' content='0;url=https://leeyonggi.github.io/s1945ii_1010_mnc/'>");
        }
    }

    heartbeat = setInterval(intervalHeartbeat, 200);
    var delay = 1000;
    timer = setTimerout(function() {
        console.log('앱이 없습니다.');
        document.write("<h1>제목1</h1>");
    }, delay);
}