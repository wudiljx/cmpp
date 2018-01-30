var base64 = require("../../image/base64");

Page({
  onLoad: function () {
    this.setData({
      icon20: base64.icon20,
      icon60: base64.icon60
    });
  },
  data: {
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  }
});