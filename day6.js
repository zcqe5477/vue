let data = {
  menu: [
    { type: "Alpha", title: "自由時報29日報導", link: "javascript" },
    { type: "Alpha", title: "護國神山」台積電", link: "javascript" },
    { type: "Alpha", title: "義務役男有重任", link: "javascript" },
    { type: "Alpha", title: "肺疫情燒進", link: "javascript" },
    { type: "Bravo", title: "，元旦起對中國", link: "javascript" },
    { type: "Bravo", title: "1年役期役男將是守備旅", link: "javascript" },
    { type: "Bravo", title: "備任務，包括油、電等國家重", link: "javascript" },
    { type: "Bravo", title: "、論文案、黑金、抗中保台", link: "javascript" },
    {
      type: "Bravo",
      title: "大官股券商在封關倒數第三個交易日大",
      link: "javascript",
    },
    {
      type: "Charlie",
      title: "買超67億元居受託買超第一名",
      link: "javascript",
    },
    {
      type: "Charlie",
      title: "著景氣下行慢慢沉澱，等待利",
      link: "javascript",
    },
    {
      type: "Charlie",
      title: "買超金額前12檔個股台積電、聯",
      link: "javascript",
    },
    { type: "Echo", title: "整體護盤金額達97億", link: "javascript" },
    { type: "Echo", title: "整投資組合的機會。", link: "javascript" },
    { type: "Echo", title: "年景氣不確定性升", link: "javascript" },
  ],
};

new Vue({
  el: "#app",
  data,
  computed: {
    typeList() {
      let obj = {
        sort: [],
        map: {},
      };
      this.menu.forEach(({ type, title, link }, index) => {
        if (!obj.map[type]) {
          obj.sort.push(type);
          obj.map[type] = {
            sort: [],
            map: {},
          };
        }
        obj.map[type].sort.push(title);
        obj.map[type].map[title] = { index, link };
      });
      return obj;
    },
  },
});
