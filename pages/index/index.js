//index.js
//获取应用实例
const app = getApp()

Page({
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  },
  showWorkspace(e) {
    const workspaceId = e.currentTarget.dataset.id;

    wx.navigateTo({
      url: `/pages/space/space?id=${workspaceId}`,
    });
  },
  goToWorkspacesPage: function() {
    wx.switchtab({
      url: '/pages/workspaces/workspaces'
    })
    console.log("click")
  }
})