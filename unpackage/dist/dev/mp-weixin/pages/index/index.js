"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_commonTitle2 = common_vendor.resolveComponent("commonTitle");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_commonTitle2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_commonTitle = () => "../../components/commonTitle/commonTitle.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uni_icons + _easycom_uni_dateformat + _easycom_commonTitle + _easycom_theme_item)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const bannerUrls = common_vendor.ref([]);
    const dayRandomUrls = common_vendor.ref([]);
    const noticeList = common_vendor.ref([]);
    const classifyList = common_vendor.ref([]);
    const getBanner = async () => {
      try {
        let res = await api_apis.apiGetBanner();
        bannerUrls.value = res.data;
      } catch (err) {
        common_vendor.index.__f__("error", "at pages/index/index.vue:85", "请求出错:", err);
      }
    };
    const getDayRandom = async () => {
      try {
        let res = await api_apis.apiGetDayRandom();
        dayRandomUrls.value = res.data;
      } catch (err) {
        common_vendor.index.__f__("error", "at pages/index/index.vue:94", "请求出错:", err);
      }
    };
    const getNoticeList = async () => {
      try {
        let res = await api_apis.apiGetNoticeList({ select: true });
        noticeList.value = res.data;
      } catch (err) {
        common_vendor.index.__f__("error", "at pages/index/index.vue:103", "请求出错:", err);
      }
    };
    const getClassify = async () => {
      try {
        let res = await api_apis.apiGetClassify({ select: true });
        common_vendor.index.__f__("log", "at pages/index/index.vue:110", res);
        classifyList.value = res.data;
      } catch (err) {
        common_vendor.index.__f__("error", "at pages/index/index.vue:113", "请求出错:", err);
      }
    };
    const goPreview = () => {
      common_vendor.index.navigateTo({
        url: "/pages/preview/preview"
      });
    };
    common_vendor.onShareAppMessage((e) => {
      return {
        title: "瞬间视觉",
        path: "/pages/classify/classify"
      };
    });
    getClassify();
    getDayRandom();
    getBanner();
    getNoticeList();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(bannerUrls.value, (item, k0, i0) => {
          return {
            a: item.picurl,
            b: item._id
          };
        }),
        b: common_vendor.p({
          type: "fire-filled",
          color: "$uni-color-error",
          size: "28"
        }),
        c: common_vendor.f(noticeList.value, (i, k0, i0) => {
          return {
            a: common_vendor.t(i.title),
            b: i._id
          };
        }),
        d: common_vendor.p({
          type: "right",
          size: "16"
        }),
        e: common_vendor.p({
          type: "calendar-filled",
          size: "30"
        }),
        f: common_vendor.p({
          date: Date.now(),
          format: "dd"
        }),
        g: common_vendor.f(dayRandomUrls.value, (i, k0, i0) => {
          return {
            a: i.smallPicurl,
            b: common_vendor.o(goPreview, i._id),
            c: i._id
          };
        }),
        h: common_vendor.f(classifyList.value, (i, k0, i0) => {
          return {
            a: i._id,
            b: "1cf27b2a-7-" + i0,
            c: common_vendor.p({
              item: i
            })
          };
        }),
        i: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
_sfc_main.__runtimeHooks = 2;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
