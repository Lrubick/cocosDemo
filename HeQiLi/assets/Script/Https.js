//const Global = require("Global");

var HTTPs = cc.Class({
    extends: cc.Component,

    statics: {
        sessionId: 0,
        userId: 0,
        url: "http://192.168.1.120:55151",
        //网络接口（地址、数据、成功回调、超时回调、）
        sendRequest: function (path, data, handler, timeoutHandler) {
            // var xhr = cc.loader.getXMLHttpRequest();
            var xhr = new XMLHttpRequest();
            xhr.timeout = 0;
            var str = "";
            // if (data != null) {
            //     for (var k in data) {
            //         if (str != "?") {
            //             str += "&";
            //         }
            //         str += k + "=" + data[k];
            //     }
            // }
            //          if (extraUrl == "gone_init") {s
            //              extraUrl = HTTP.url;
            //          }else if(extraUrl == "gone_play" || extraUrl == "gone_playlog"){
            //          	extraUrl = Global.XZ_URL;
            //          }
            var requestURL;
            //          if(data == null){
            //      	 	requestURL = extraUrl + path;
            //          }else{
            //          	requestURL = extraUrl + path + encodeURI(str);
            //          }
            if (data === null) {
                str = '';
            }
            requestURL = path + encodeURI(str);
            // encodeURI转码中文转特殊字符安全
            console.log("RequestURL:" + requestURL);

            xhr.open("POST", requestURL, true);
            // xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')




            if (cc.sys.isNative) {
                xhr.setRequestHeader("Accept-Encoding", "gzip,deflate", "text/html;charset=UTF-8");
            }

            var timeout = false;//是否超时
            var timer = setTimeout(function () {
                timeout = true;
                xhr.abort();//请求中止
                if (timeoutHandler) {
                    timeoutHandler();
                } else {
                    console.log("超时！");
                }
            }, 8000);

            xhr.onreadystatechange = function () {
                // console.log(xhr.status);
                if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {
                    if (timeout) {
                        return
                    };//忽略中止请求
                    clearTimeout(timer);//取消等待的超时
                    console.log("http res(" + xhr.responseText.length + "):" + xhr.responseText);
                    try {
                        var ret = JSON.parse(xhr.responseText);
                        if (handler !== null) {
                            handler(ret);
                        }
                    } catch (e) {
                        console.log("err:" + e);
                        handler("err:" + e);
                    }
                    finally {
                        if (cc.vv && cc.vv.toast) {

                        }
                    }
                } else {
                    console.log("失败");
                }
            };
            xhr.send(data);
            return xhr;
        },
    },
});