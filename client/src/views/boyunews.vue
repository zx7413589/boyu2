<template>
  <div style="padding-top: 90px">
    <div class="content">
      <div class="nav">
        <a href="#">首页 </a> &gt;<a href="/news"> 泊寓动态 </a>
      </div>
      <div class="list-sub-title" @click="selectlist($event)">
        <span :class="this.$store.state.active == 1 ? 'select' : ''"
          >泊寓+</span
        >
        <span :class="this.$store.state.active == 2 ? 'select' : ''"
          >泊友故事</span
        >
      </div>
      <div :style="display1">
        <div class="content-title">
          泊寓+
          <span>点点滴滴</span>
        </div>
        <div class="list-box">
          <router-link
            :to="`/news/dd-detail/${item.id}`"
            v-for="(item, index) in this.$store.state.boyudd"
            :key="index"
            class="list-item"
            @click="getdetail(item.id)"
          >
            <div class="list-item-img">
              <img :src="item.title_img" alt="" style="" />
            </div>
            <div class="list-item-title">
              <span>{{ item.title }}</span>
            </div>
          </router-link>
        </div>
        <div class="list-page-wrap" @click="changepage($event)">
          <span>首页</span>
          <span>上一页</span>
          <span
            v-for="(item, index) in this.page"
            :key="index"
            :class="actived == index + 1 ? 'checked' : ''"
            >{{ item }}</span
          >
          <span>下一页</span>
          <span>末页</span>
        </div>
      </div>
      <div :style="display2">
        <div class="content-title">
          泊友故事
          <span>大城小事</span>
        </div>
        <div class="list-box">
          <router-link
            to=""
            v-for="(item, index) in this.$store.state.story"
            :key="index"
            class="list-item"
          >
            <div class="list-item-img">
              <img :src="item.title_img" alt="" style="" />
            </div>
            <div class="list-item-title">
              <span>{{ item.title }}</span>
            </div>
          </router-link>
        </div>
        <div class="list-page-wrap" @click="changepage2($event)">
          <span>首页</span>
          <span>上一页</span>
          <span
            v-for="(item, index) in this.page2"
            :key="index"
            :class="actived2 == index + 1 ? 'checked' : ''"
            >{{ item }}</span
          >
          <span>下一页</span>
          <span>末页</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  width: 1200px;
  margin: 0px auto;
  padding-bottom: 60px;
}
a {
  text-decoration: none;
  outline: none;
}
.nav {
  width: 1200px;
  height: 75px;
  line-height: 75px;
  color: #b8b8b8;
  font-size: 14px;
}
.nav a {
  color: #b8b8b8;
  font-size: 14px;
}
.list-sub-title {
  height: 42px;
}
.list-sub-title span {
  display: inline-block;
  font-size: 18px;
  /* height: 42px; */
  margin: 0 30px;
  cursor: pointer;
  color: #333;
  padding-bottom: 14px;
}
.list-sub-title .select {
  border-bottom: 4px solid #ff6e2e;
}
.list-sub-title span:first-child {
  margin-left: 20px;
}
.content-title {
  color: #333;
  font-size: 24px;
  margin-bottom: 30px;
  padding-top: 30px;
}
.content-title span {
  font-weight: lighter;
  color: #c6ac9c;
  display: inline-block;
  margin-left: 10px;
}
/* 列表元素 */
.list-box {
  width: 1260px;
  margin: 0 auto;
  /* box-sizing: border-box; */
}
.list-item {
  width: 250px;
  float: left;
  margin-right: 60px;
  /* flex: 0 0 22%; */
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(121, 121, 121, 0.16);
  margin-bottom: 40px;
}
.list-item-img {
  width: 250px;
  overflow: hidden;
}
.list-item-img img {
  height: 245px;
  transition: 0.6s;
  width: 100%;
}
.list-item img:hover {
  transform: scale(1.06);
}
.list-item-title {
  height: 84px;
  font-size: 16px;
  color: #666;
  padding: 10px 20px;
  line-height: 2em;
  overflow: hidden;
}
/* 分页按钮 */
.list-page-wrap {
  margin: 50px auto;
  width: 100%;
  display: flex;
  justify-content: center;
}
.list-page-wrap span {
  display: block;
  color: #333;
  font-size: 12px;
  border: 1px solid #e0e0e0;
  padding: 4px 10px 3px;
  cursor: pointer;
  margin: 0 4px;
  -webkit-transition: 0.2s;
  transition: 0.2s;
}
.list-page-wrap span:not(.checked):hover {
  border-color: #ff6e2e;
  color: #ff6e2e;
}
.list-page-wrap .checked {
  color: #fff;
  background-color: #ff6e2e;
  border-color: #ff6e2e;
}
</style>

<script>
export default {
  data() {
    return {
      // active: 1,
      actived: 1,
      actived2: 1,
      display1: "display:block",
      display2: "display:none",
      pagesize: 1,
      pagesize2: 1,
      pagecount: 0,
      page: [],
      page2: [],
      active: 1,
    };
  },
  methods: {
    selectlist(e) {
      let val = e.target.innerHTML;
      if (val == "泊寓+") {
        this.$store.state.active = 1;
      } else {
        this.$store.state.active = 2;
      }
      if (this.$store.state.active == 1) {
        this.display1 = "display:block";
        this.display2 = "display:none";
      } else {
        this.display2 = "display:block";
        this.display1 = "display:none";
      }
    },
    changepage2(e) {
      let val = e.target.innerHTML;
      if (val == "首页") {
        this.pagesize2 = 1;
        this.actived2 = 1;
      } else if (!isNaN(val)) {
        this.pagesize2 = val;
        if (val == this.pagesize2) {
          this.actived2 = this.pagesize2;
        }
      } else if (val == "上一页" && this.pagesize2 != 1) {
        this.pagesize2--;
        this.actived2 = this.pagesize2;
      } else if (val == "下一页" && this.pagesize2 < this.page2.length) {
        this.pagesize2++;
        this.actived2 = this.pagesize2;
      } else if (val == "末页") {
        this.pagesize2 = this.page2.length;
        this.actived2 = this.page2.length;
      }
      this.axios
        .get(
          `/storylimit?cityname=${this.$store.state.cityNames}&pagesize2=${this.pagesize2}`
        )
        .then((res) => {
          let story = [];
          for (let i = 0; i < res.data.result.length; i++) {
            let obj = {};
            obj.title = res.data.result[i].title;
            obj.title_img = res.data.result[i].title_img;
            story.push(obj);
          }
          this.$store.commit("changestory", story);
        });
      // console.log(this.pagesize2,this.actived)
    },
    changepage(e) {
      let val = e.target.innerHTML;
      if (val == "首页") {
        this.pagesize = 1;
        this.actived = 1;
      } else if (val == "上一页" && this.pagesize != 1) {
        this.pagesize--;
        this.actived = this.pagesize;
      } else if (val == "下一页" && this.pagesize < this.page.length) {
        this.pagesize++;
        this.actived = this.pagesize;
      } else if (!isNaN(val)) {
        this.pagesize = val;
        if (val == this.pagesize) {
          this.actived = this.pagesize;
        }
      } else if (val == "末页") {
        this.pagesize2 = this.page.length;
        this.actived = this.page.length;
      }
      this.axios
        .get(
          `/boyuddlimit?cityname=${this.$store.state.cityNames}&pagesize=${this.pagesize}`
        )
        .then((res) => {
          let boyudd = [];

          for (let i = 0; i < res.data.result.length; i++) {
            let obj = {};
            obj.title = res.data.result[i].title;
            obj.title_img = res.data.result[i].title_img;
            boyudd.push(obj);
          }
          this.$store.commit("changeboyudd", boyudd);
        });
    },
    getdetail(e) {
      // console.log(e);
    },
  },
  mounted() {
    this.$store.commit("changeheaderactive",3);
    this.axios
      .get(
        `/boyuddlimit?cityname=${this.$store.state.cityNames}&pagesize=${this.pagesize}`
      )
      .then((res) => {
        if (this.$store.state.active == 1) {
          this.display1 = "display:block";
          this.display2 = "display:none";
          
        } else {
          this.display2 = "display:block";
          this.display1 = "display:none";
        }
        let boyudd = [];
        this.pagecount = res.data.pageCount;
        for (let i = 1; i < this.pagecount + 1; i++) {
          let page = "";
          page = i;
          this.page.push(page);
        }
        // console.log(this.page)
        for (let i = 0; i < res.data.result.length; i++) {
          let obj = {};
          obj.title = res.data.result[i].title;
          obj.title_img = res.data.result[i].title_img;
          obj.id = res.data.result[i].id;
          boyudd.push(obj);
        }
        this.$store.commit("changeboyudd", boyudd);
        // console.log(boyudd);
      });
    this.axios
      .get(
        `/storylimit?cityname=${this.$store.state.cityNames}&pagesize2=${this.pagesize2}`
      )
      .then((res) => {
        if (this.$store.state.active == 1) {
          this.display1 = "display:block";
          this.display2 = "display:none";
        } else {
          this.display2 = "display:block";
          this.display1 = "display:none";
        }
        let page = "";
        for (let i = 1; i < res.data.pageCount + 1; i++) {
          page = i;
          this.page2.push(page);
        }
        // console.log(this.page2);
        let story = [];
        for (let i = 0; i < res.data.result.length; i++) {
          let obj = {};
          obj.title = res.data.result[i].title;
          obj.title_img = res.data.result[i].title_img;
          story.push(obj);
        }
        // console.log(story);
        this.$store.commit("changestory", story);
      });
    
  },
};
</script>