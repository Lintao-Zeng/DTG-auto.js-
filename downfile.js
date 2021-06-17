auto();

swipe(925,1135,39,1135,625);
sleep(1000);
var str = id("practice_content_text").findOne().text();
str = str.replace(/x/g,"");
str = str.replace(/ /g,"");
var str2 = id("explainSkillDescTv").findOne().text();
str2 = str2.replace(/ /g,"");

var r = http.get("https://fanyi.baidu.com/gettts?lan=zh&text=" + str+str2 + "&spd=5&source=wise", {
    headers: {
        'Accept-Language': 'zh-cn,zh;q=0.5',
        'User-Agent': 'Mozilla/5.0(Macintosh;IntelMacOSX10_7_0)AppleWebKit/535.11(KHTML,likeGecko)Chrome/17.0.963.56Safari/535.11'
    }
});
log("code = " + r.statusCode);

var num = files.read("/sdcard/1.txt");
files.writeBytes("/sdcard/aaa/" + num + ".mp3",r.body.bytes());
//media.playMusic("/sdcard/aaa/" + num + ".mp3");
//sleep(media.getMusicDuration());
num++;
files.write("/sdcard/1.txt", num);
