window.Global = {


    // 开启/关闭 debug日志输出
    DEBUG: false,

    // 版本号
    VERSION: "v1.0",
    //获得随机整数


};
cc.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
