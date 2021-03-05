<template>
  <div>
    <!-- 轮播图及选择器 -->
    <div class="block" style="height: 500px; ">
      <el-carousel indicator-position="outside" height="500px" width="100%">
        <el-carousel-item v-for="item in this.$store.state.navImgs" :key="item">
          <div :style="item" class="background-img"></div>
        </el-carousel-item>
      </el-carousel>
      <div class="input-select">
        <el-select
          v-model="value"
          placeholder="选择您想住的区域"
          class="el-select select"
        >
          <el-option
            class="el-option"
            v-for="item in this.$store.state.countarea"
            :key="item.value"
            :label="item.label"
            :value="item.label"
          >
          </el-option>
        </el-select>
        <el-button type="primary" class="el-button" @click="searchArea()"
          >搜 索</el-button
        >
      </div>
    </div>
    <!-- 推荐门店 -->
    <!-- title -->
    <div class="list">
      <table></table>
      <div class="title">
        <span class="title-wrap">推荐门店</span>
        <span class="sub"> 为您精选</span>
      </div>
      <router-link to="/find/全部" class="more">更多门店 &gt;&gt;</router-link>
    </div>
    <!-- 主体 -->
    <div class="list-content">
      <router-link
        :to="`/shopname/detail/${items.id}`"
        class="list-content-box"
        v-for="(items, index) in this.$store.state.shopnames"
        :key="index"
      >
        <img class="box-bg" :src="items.bg" />
        <p class="box-name">{{ items.shopname }}</p>
        <p class="box-address">{{ items.address }}</p>
        <p class="box-price">{{ items.price }} 元/起</p>
      </router-link>
    </div>
    <!-- <-- 推荐户型 -->
    <!-- title -->
    <div class="list">
      <table></table>
      <div class="title">
        <span class="title-wrap">推荐户型</span>
        <span class="sub"> 选你所需</span>
      </div>
      <router-link to="/find/全部" @click.native="changefind" class="more">更多户型 &gt;&gt;</router-link>
    </div>
    <!-- 主体 -->
    <div class="list-content">
      <router-link
        :to="`/layout/detail/${items.id}`"
        class="list-content-box list-content-box-layout"
        v-for="(items, index) in this.$store.state.layout"
        :key="index"
      >
        <img class="box-bg box-bg-layout" :src="items.avator" />
        <p class="box-name">{{ items.title }}</p>
        <p class="box-address">
          {{ items.shop_address }}{{ items.address_details }}
        </p>
        <p class="box-price">
          {{ items.min_price }} - {{ items.max_price }} 元/
        </p>
      </router-link>
    </div>
    <div class="info">
      <div class="info-box">
        <div class="info-box-icon icon-1"></div>
        <div class="info-box-title">免佣金</div>
        <div class="info-box-sub">品牌直营，无中介，安心放心</div>
      </div>
      <div class="info-box">
        <div class="info-box-icon icon-2"></div>
        <div class="info-box-title">全国布局</div>
        <div class="info-box-sub">多城市选择，可拎包入住</div>
      </div>
      <div class="info-box">
        <div class="info-box-icon icon-3"></div>
        <div class="info-box-title">省时省心</div>
        <div class="info-box-sub">看房、预约、签约，提供一站式线上服务</div>
      </div>
    </div>
    <!-- 点点滴滴 -->
    <div class="list">
      <table></table>
      <div class="title">
        <span class="title-wrap">泊寓+</span>
        <span class="sub"> 点点滴滴</span>
      </div>
      <span  class="more" @click="changeactive()">更多动态 &gt;&gt;</span>
    </div>
    <!-- 主体 -->
    <div class="list-content">
      <router-link
        :to="`/news/dd-detail/${items.id}`"
        class="list-content-box"
        v-for="(items, index) in this.$store.state.boyudd"
        :key="index"
      >
        <img class="box-bg" :src="items.title_img" />
        <p class="box-name box-title">{{ items.title }}</p>
      </router-link>
    </div>
    <!-- 泊寓故事 -->
    <div class="list">
      <table></table>
      <div class="title">
        <span class="title-wrap">泊友故事</span>
        <span class="sub"> 大城小事</span>
      </div>
      <router-link :to="`/news/boyustory`" class="more" @click.native="changeactive2()">更多故事 &gt;&gt;</router-link>
    </div>
    <!-- 主体 -->
    <div class="list-content">
      <router-link
        to="/"
        class="list-content-box"
        v-for="(items, index) in this.$store.state.story"
        :key="index"
      >
        <img class="box-bg" :src="items.title_img" />
        <p class="box-name box-title">{{ items.title }}</p>
      </router-link>
    </div>
    <div class="video">
      <div class="video-inner">
        <div class="video-paly" @click="play()"></div>
        <div class="video-content">
          <h2>选择泊寓 选择我们</h2>
          <p>
            深圳市泊寓租赁服务有限公司服务于有态度、有活力的城市青年，致力于为漂泊在外的“奋青”们营造公寓式的“家”。在泊寓，拎包入住是基础，品牌家电随你用，健身房、书吧、休闲室就怕你不来，从清雅隔间到豪华loft，装载各式各样的梦。泊寓，出租的不是房间，而是房间里的欢笑跟态度。
          </p>
        </div>
      </div>
      <div
        @click="close($event)"
        :style="display"
        style="
          width: 100%;
          height: 100%;
          opacity: 0.7;
          background: black;
          z-index: 500000;
          position: fixed;
          left: 0;
          top: 0;
        "
      ></div>

      <div
        class="video-wrap"
        :style="display"
        style="
          width: 80%;
          z-index: 500000;
          position: fixed;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background-position: center;
        "
      >
        <video
          muted
          autoplay
          controls
          style="width: 100%"
          src="https://xiaobokeji-static.oss-cn-shenzhen.aliyuncs.com/pc/by.mp4"
        ></video>
      </div>
    </div>
  </div>
</template>
<style scoped>
/* 底部视频播放器 */
* {
  margin: 0;
  padding: 0;
}
a {
  outline: none;
}
.video-wrap {
  display: flex;
  align-items: center;
}
video {
  height: 750px;
}
* {
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
  outline: none;
}
.video {
  width: 1500px;
  height: 692px;
  margin: 70px auto;
  background-image: url("https://static.inboyu.com/pc/web/images/index-map.jpg?v=202008211515");
  background-repeat: no-repeat;
  position: relative;
}
.video-inner {
  width: 1200px;
  margin: 0 auto;
}
.video-paly {
  width: 112px;
  height: 117px;
  background-image: url("https://static.inboyu.com/pc/web/images/index-play.png?v=202008211515");
  background-size: 112px 234px;
  position: absolute;
  top: 200px;
  left: 625px;
  z-index: 500;
}
.video-paly:hover {
  background-position: 0 117px;
  cursor: pointer;
}
.video-content {
  position: absolute;
  padding: 70px 200px 0 670px;
  top: 95px;
}
.video-content h2 {
  display: block;
  font-size: 1.5em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-size: 30px;
  color: #333;
  font-weight: normal;
}
.video-content p {
  font-size: 14px;
  line-height: 1.8em;
  margin-top: 1em;
  color: #666;
}

/* //轮播图选择器 */
.input-select .el-button {
  height: 50px;
  width: 150px;
  padding: 0 !important;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  font-size: 18px;
  color: white;
  position: absolute;
  top: 0px;
}

.input-select {
  width: 700px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  bottom: 200px;
  z-index: 2021;
}
.el-button {
  background: linear-gradient(to bottom, #ff7f41, #ff5b23) !important;
  border: 0 !important;
  margin-left: 0px !important;
}
.el-select .el-input.is-focus .el-input__inner {
  border: none !important;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.el-input .el-input__inner {
  border: none !important;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.el-input.is-active,
.el-input__inner:focus {
  border: none !important;
}
.el-input {
  width: 504px !important;
}
.el-select {
  font-size: 18px !important;
  color: #999 !important;
  height: 50px !important;
  width: 504px !important;
  border: none;
}
.el-input__inner {
  height: 50px !important;
}
.el-scrollbar__view {
  width: 504px !important;
}
.el-scrollbar {
  height: 200px !important;
}
.el-select-dropdown__list {
  height: 100px;
  padding: 0 !important;
}
.el-scrollbar__wrap {
  overflow: scroll !important;
  overflow-x: hidden !important;
  height: inherit !important;
}
.el-option {
  width: 504px;
  margin: 0;
  color: linear-gradient(to bottom, #ff7f41, #ff5b23);
  font-size: 16px;
}
.el-option:hover {
  background: linear-gradient(to bottom, #ff7f41, #ff5b23);
  color: white;
}
.el-select-dropdown__item.selected {
  color: #ff5b23 !important ;
}
.el-carousel__item img {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 500px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: white;
}
.background-img {
  display: block;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}
.el-carousel__indicators {
  position: relative !important;
  left: 650px !important;
  bottom: 50px !important;
}
.el-carousel__button {
  width: 15px !important;
  height: 15px !important;
  border-radius: 50% !important;
}
/* //list头部 */
.list {
  width: 1200px;
  margin: 80px auto;
}
.title {
  float: left;
  color: #333;
  font-size: 30px;
}
.title-wrap {
  font-weight: bold;
}
.sub {
  color: #c6ac9c;
  font-weight: lighter;
}
.more {
  display: block;
  text-decoration: none;
  font-size: 18px;
  color: #333;
  float: right;
  cursor: pointer;
}
.more:hover {
  color: #ff5b23;
}
/* list主体 */
.list-content {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.list-content-box {
  display: block;
  width: 249px;
  flex: 0 0 20%;
  transition: 0.2s;
  box-shadow: 0 4px 8px rgba(121, 121, 121, 0.16);
}
.list-content-box:hover {
  transform: scale(1.2);
  box-shadow: 0 24px 29px rgba(121, 121, 121, 0.2);
}
.box-bg {
  height: 246.5px;
  width: 249px;
}
.box-name {
  color: #333;
  font-size: 16px;
  margin: 13px 18px;
}
.box-address {
  color: #b8b8b8;
  font-size: 14px;
  margin: 13px 18px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.box-price {
  color: #ff6e2e;
  font-size: 14px;
  margin: 13px 18px;
}
/* 推荐户型 */

.list-content .list-content-box-layout {
  display: block;
  width: 370px;
  flex: 0 0 28%;
  transition: 0.2s;
}
.list-content .list-content-box:hover {
  transform: scale(1.1);
}

.list-content .box-bg-layout {
  height: 277.5px;
  width: 370px;
}
/* //icon */
.info {
  margin: 80px 0;
  width: 100%;
  height: 290px;
  background: linear-gradient(to right, #ff551f, #ff8547);
  display: flex;
  justify-content: center;
}
.info-box {
  width: 400px;
  font-size: 14px;
  color: #fff;
  text-align: center;
}
.info-box-title {
  font-size: 18px;
  margin-bottom: 14px;
}
.info .info-box .info-box-icon {
  width: 88px;
  height: 80px;
  background-image: url("https://static.inboyu.com/pc/web/images/index-info.png?v=202008211515");
  margin: 70px auto 35px auto;
  transition: 0.5s;
  background-size: 88px 241px;
}
.info .info-box .info-box-icon:hover {
  transform: translateY(-10px);
}
.info .info-box .icon-2 {
  background-position: 0 -80px;
}
.info .info-box .icon-3 {
  background-position: 0 -160px;
}
/* 泊寓title */
.box-title {
  padding: 20px 10px 40px 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
</style>

<script>
export default {
  data() {
    return {
      options: [{ value: "选项1", label: "全部" }],
      value: "全部",
      item: [],
      shop_imgs: [],
      areaNames: [],
      layout: [],
      boyudd: [],
      story: [],
      display: "display:none",
    };
  },

  mounted() {
    
    this.$store.commit("changeheaderactive", 1);
    this.axios
        .get(`/backgroundimg?cityname=${this.$store.state.cityNames}`)
        .then((res) => {
          // console.log(res.data.result[0].url);
          this.$store.state.navImg=[];
          let bg = [];
          for (let i = 0; i < res.data.result.length; i++) {
            let bgimg = `background-image:url('${res.data.result[i].url}')`;
            bg.push(bgimg);
          }
          // console.log(bg);
          this.$store.commit("changebackground", bg);
          // console.log()
        });
      this.axios
        .get(`countarea?city_name=${this.$store.state.cityNames}`)
        .then((res) => {
          this.$store.state.countarea = [];
          let arr = [{ value: 1, label: "全部" }];
          // console.log(res.data)
          for (let i = 0; i < res.data.length; i++) {
            let countarea = {};
            countarea.value = i + 2;
            countarea.label = res.data[i].area;
            let option=[];
            arr.push(countarea);
          }
          this.$store.commit("countarea", arr);
        });
      this.axios
        .get(`/shopname?city_name=${this.$store.state.cityNames}`)
        .then((res) => {
          this.$store.state.shopnames = [];
          let shopname = [];
          for (let i = 0; i < 4; i++) {
            let obj={}
            obj.address=res.data.result[i].address;
            obj.bg=res.data.result[i].bg;
            obj.price=res.data.result[i].price;
            obj.shopname=res.data.result[i].shopname;
            obj.id=res.data.result[i].id;
            shopname.push(obj);
          }
          this.$store.commit("changeshopname", shopname);
        });
      this.axios
        .get(`/layout?city_name=${this.$store.state.cityNames}`)
        .then((res) => {
          let layout = [];
          for (let i = 0; i < 3; i++) {
            let obj={}
            obj.address_details=res.data.result[i].address_details;
            obj.avator=res.data.result[i].avator;
            obj.max_price=res.data.result[i].max_price;
            obj.min_price=res.data.result[i].min_price;
            obj.shop_address=res.data.result[i].shop_address;
            obj.title=res.data.result[i].title;
            obj.id=res.data.result[i].lid;      
            layout.push(obj);
          }
          this.$store.commit("changelayout", layout);
        });
        this.axios
        .get(`/boyudd?cityName=${this.$store.state.cityNames}`)
        .then((res) => {
          let boyudd = [];
          for (let i = 0; i < 4; i++) {
            let obj={};
            obj.title=res.data.result[i].title;
            obj.title_img=res.data.result[i].title_img;
            obj.id=res.data.result[i].id;
            boyudd.push(obj);
            // console.log(layout);
          }
          this.$store.commit("changeboyudd", boyudd);
        });
        this.axios
        .get(`/story?cityName=${this.$store.state.cityNames}`)
        .then((res) => {
          let story = [];
          for (let i = 0; i < 4; i++) {
            let obj={};
            obj.title=res.data.result[i].title;
            obj.title_img=res.data.result[i].title_img;
            obj.id=res.data.result[i].id
            story.push(obj);
            // console.log(layout);
          }
          this.$store.commit("changestory", story);
        });
        // console.log(this.$store.state.countarea)
  },
  methods: {
    changefind(){
      this.$store.commit('changefindseleced',2)
    },
    changeactive(){
      let active=1;
      this.$store.commit('changeactive',active)
      this.$router.push("/news/boyudd")
      // console.log(this.$store.state.active);
    },
    // 更多故事
    changeactive2(){
      let active=2;
      this.$store.commit('changeactive',active)
      // console.log(this.$store.state.active);
    },
    searchArea() {
      this.$router.push(`/find/${this.value}`)
    },

    play() {
      this.display = "display:block";
      // console.log(this.display);
    },
    close(e) {
      e.stopPropagation();
      e.preventDefault();
      this.display = "display:none";
      // console.log(1111);
    },
  },
};
</script>

