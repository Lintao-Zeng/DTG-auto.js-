auto();

var index;
var num;
while(true){
index = id("practice_indicator_text").findOne().text();
index = index.replace(/\/.*/g, "");
index = index.replace(/ /g, "");
num = files.read("/sdcard/2.txt");

if (index != num && media.isMusicPlaying()) {
    media.stopMusic();
    //log("线程终止");
    threads.shutDownAll();
}

threads.start(function() {
    if (index != num) {
        files.write("/sdcard/2.txt", index);
        media.playMusic("/sdcard/aaa/" + index + ".mp3");
        sleep(media.getMusicDuration());
    }
});

threads.shutDownAll();
sleep(100);
}