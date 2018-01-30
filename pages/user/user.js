var base64 = require("../../image/base64");
Page({
    onLoad: function(){
        this.setData({
            icon: base64.icon20
        });
    }
});