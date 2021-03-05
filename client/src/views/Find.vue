<template>
  <div>
    <div class="bd">
      <div class="page-breadcrumb">
        <div>
          <router-link to="/">首页</router-link>
          <span>&gt;</span>
          <span>找房</span>
        </div>
        <div class="list_title" @click="listIsSelected($event)">
          <span :class="this.$store.state.findseleced == 1? 'selected' : ''">按门店展示</span>
          <span :class="this.$store.state.findseleced == 2 ? 'selected' : ''">按户型展示</span>
        </div>
        <div class="select_city">
          <span class="area">区域</span>
          <ul class="area_list" @click="select_area($event)">
            <li
              v-for="(v, k) of this.$store.state.countarea"
              :key="k"
              :class="v.label == op_li ? 'col' : ''"
            >
              {{ v.label }}
            </li>
          </ul>
        </div>
        <div class="money">
          <span>排序</span>
          <ul @click="getMoney($event, active)">
            <li :class="active == 1 ? 'col' : ''">租金从低到高</li>
            <li :class="active == 2 ? 'col' : ''">租金从高到低</li>
          </ul>
        </div>
        <!-- 门店主体 -->
        <div class="list_content" :class="isSelected == 1 ? '' : 'dis_none'">
          <router-link
            :to="`/shopname/detail/${v.id}`"
            v-for="(v, k) of this.$store.state.shops"
            :key="k"
          >
            <div style="width: 240px; height: 180px">
              <img :src="v.bg" style="width: 100%" />
            </div>
            <div class="list_info">
              <p class="list_t">{{ v.title }}</p>
              <p class="list_sub">{{ v.count }}个户型</p>
              <p class="list_address">{{ v.address }}</p>
            </div>
            <div class="price">
              {{ v.price }}<span class="sub">&nbsp;&nbsp;元/月起</span>
            </div>
          </router-link>
          <div class="el-pagination" @click="change($event)">
            <span :class="list_active == '首页' ? 'bg_color' : ''">首页</span>
            <span :class="list_active == '上一页' ? 'bg_color' : ''"
              >上一页</span
            >
            <div
              class="list_style"
              v-for="v of this.$store.state.pageCount"
              :key="v"
            >
              <span :class="list_active == v ? 'bg_color' : ''">{{ v }}</span>
            </div>
            <span :class="list_active == '下一页' ? 'bg_color' : ''"
              >下一页</span
            >
            <span :class="list_active == '末页' ? 'bg_color' : ''">末页</span>
          </div>
        </div>
        <!-- 按户型查找 -->
        <div :class="isSelected == 2 ? '' : 'dis_none'" class="list_content">
          <router-link
            :to="`/layout/detail/${v.id}`"
            v-for="(v, k) of this.$store.state.houses"
            :key="k"
          >
            <div style="width: 240px; height: 180px">
              <img :src="v.img" style="width: 100%; height: 180px" />
            </div>
            <div class="list_info">
              <p class="house_title">{{ v.title }}</p>
              <p class="house_detail">
                <span style="margin-right: 20px">{{ v.layout }}</span>
                <span style="margin-right: 20px">|</span>
                <span>{{ v.square }}㎡</span>
              </p>
              <p class="house_layout">{{ v.methods }}</p>
            </div>
            <div class="house_price">
              <p class="price">
                <span>{{ v.min_price }}-{{ v.max_price }}</span>
                <span class="sub">元/月起</span>
              </p>
            </div>
          </router-link>
          <div class="el-pagination" @click="change2($event)">
            <span :class="list_active == '首页' ? 'bg_color' : ''">首页</span>
            <span :class="list_active == '上一页' ? 'bg_color' : ''"
              >上一页</span
            >
            <div
              class="list_style"
              v-for="v of this.$store.state.housePageCount"
              :key="v"
            >
              <span :class="list_active == v ? 'bg_color' : ''">{{ v }}</span>
            </div>
            <span :class="list_active == '下一页' ? 'bg_color' : ''"
              >下一页</span
            >
            <span :class="list_active == '末页' ? 'bg_color' : ''">末页</span>
          </div>
          F
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  margin: 0;
  padding: 0;
  /* overflow: hidden; */
}
.bd {
  width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
  /* position: relative; */
}
.page-breadcrumb {
  margin: 0 auto;
  /* margin-top: 120px; */
  /* position: absolute; */
  width: 1200px;
  font-size: 14px;
}
.page-breadcrumb > div:first-child a {
  display: inline-block;
  color: #b8b8b8;
}
.page-breadcrumb > div:first-child a:hover {
  color: #ff6e2e;
}
.page-breadcrumb > div:first-child span {
  display: inline-block;
  color: #b8b8b8;
  margin-left: 3px;
}
.list_title {
  width: 1200px;
  /* margin-left: 20px;     */
}
.list_title span {
  display: inline-block;
  cursor: pointer;
  font-size: 18px;
  margin: 30px 30px;
}
.selected {
  color: #ff6e2e;
  border-bottom: 4px solid #ff6e2e;
  padding-bottom: 14px;
}
.select_city {
  margin-top: 20px;
  width: 1200px;
  display: flex;
}
.area {
  display: inline-block;
  color: #b8b8b8;
  font-size: 14px;
  margin-right: 30px;
}
.area_list {
  list-style: none;
}
.area_list li {
  display: inline-block;
  font-size: 14px;
  margin-right: 30px;
  cursor: pointer;
}
.area_list li:last-child {
  margin-right: 0;
}
.area_list li:hover {
  color: #ff6e2e;
}
.col {
  color: #ff6e2e;
}
.money {
  margin-top: 30px;
  width: 1200px;
  display: flex;
}
.money span {
  display: inline-block;
  color: #b8b8b8;
  font-size: 14px;
  margin-right: 30px;
}
.money ul {
  list-style: none;
}
.money ul li {
  display: inline-block;
  font-size: 14px;
  margin-right: 30px;
  cursor: pointer;
}
.money ul li:hover {
  color: #ff6e2e;
}
.list_content {
  width: 900px;
  margin-top: 40px;
}
.list_content a {
  display: inline-block;
  width: 100%;
  height: 190px;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgb(121 121 121 / 16%);
  background-color: #fff;
  transition: 0.2s;
  cursor: pointer;
  position: relative;
  padding: 10px;
  text-decoration: none;
}
.list_content a:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 14px rgba(121, 121, 121, 0.2);
  /* transform: rotateZ(0); */
}
.list_info {
  height: 150px;
  position: absolute;
  left: 300px;
  top: 20px;
}
.list_t {
  font-size: 22px;
  color: #333;
  height: 32px;
  line-height: 32px;
  margin: 10px 0 18px 0;
}
.list_sub {
  font-size: 14px;
  margin: 18px 0;
  color: #666;
}
.list_address {
  font-size: 14px;
  margin: 18px 0;
  color: #666;
}
.price {
  position: absolute;
  right: 0px;
  top: 0px;
  margin: 50px 20px 0 0;
  font-size: 24px;
  color: #ff6e2e;
}
.sub {
  font-size: 14px;
}
.el-pagination {
  margin-bottom: 220px;
  margin-left: 400px;
}
.el-pagination span {
  width: 50px;
  height: 30px;
  border: 1px solid lightgray;
  margin-right: 5px;
  display: inline-block;
  text-align: center;
  cursor: pointer;
}
.el-pagination span:not(.bg_color):hover {
  color: #ff6e2e;
  border: 0px;
  border: 1px solid #ff6e2e;
}
.list_style {
  display: inline-block;
}
.bg_color {
  background-color: #ff6e2e;
  color: white;
}
.dis_none {
  display: none;
}
.house_title {
  font-size: 22px;
  color: #333;
  height: 32px;
  line-height: 32px;
  margin: 0px 0 18px 0;
}
.house_detail {
  font-size: 14px;
  margin: 18px 0;
  color: #666;
}
.house_layout {
  font-size: 14px;
  border: 1px solid #e0e0e0;
  color: #333;
  width: 50px;
  height: 25px;
  line-height: 25px;
  text-align: center;
}
</style>

<script>
export default {
  data() {
    return {
      isSelected: "1",
      //选择区域
      //选择金额
      active: 0,
      shops: [],
      page: 1,
      pagesize: 5,
      pageCount: 0, //门店总页数
      housePageCount: 0, //房型总页数
      list_active: 1,
      op_li: "全部",
      cityName: "",
      houses: [],
    };
  },
  methods: {
    listIsSelected(e) {
      let inner = e.target.innerHTML;
      if (inner == "按门店展示") {
        this.isSelected=1;
        this.$store.commit('changefindseleced',1);
        this.active = 0;
      } else {
        this.isSelected=2;
        this.$store.commit('changefindseleced',2);
        this.active = 0;
      }
    },
    //切换区域
    select_area(e) {
      let area = e.target.innerHTML;
      
        this.op_li = area.trim();
        //获取页数
        this.getPageCount(area);
        this.getShop(1);
        this.getHousePageCount(area);
        this.getHouse(1);
        this.active=0;
      // }
    },
    //切换金额排序
    getMoney(e) {
      let area = e.target.innerHTML;
      //门店信息
      if (area == "租金从低到高" && this.isSelected == 1) {
        this.active = 1;
        for (let i = 0; i < this.shops.length; i++) {
          for (let j = i + 1; j < this.shops.length; j++) {
            if (parseInt(this.shops[i].price) > parseInt(this.shops[j].price)) {
              let a = this.shops[i];
              this.shops[i] = this.shops[j];
              this.shops[j] = a;
            }
          }
        }
      } else if (area == "租金从高到低" && this.isSelected == 1) {
        this.active = 2;
        for (let i = 0; i < this.shops.length; i++) {
          for (let j = i + 1; j < this.shops.length; j++) {
            if (parseInt(this.shops[i].price) < parseInt(this.shops[j].price)) {
              let a = this.shops[i];
              this.shops[i] = this.shops[j];
              this.shops[j] = a;
            }
          }
        }
      } else if (area == "租金从低到高" && this.isSelected == 2) {
        this.active = 1;
        for (let i = 0; i < this.houses.length; i++) {
          for (let j = i + 1; j < this.houses.length; j++) {
            if (
              parseInt(this.houses[i].min_price) >
              parseInt(this.houses[j].min_price)
            ) {
              let a = this.houses[i];
              this.houses[i] = this.houses[j];
              this.houses[j] = a;
            }
          }
        }
      } else if (area == "租金从高到低" && this.isSelected == 2) {
        this.active = 2;
        for (let i = 0; i < this.houses.length; i++) {
          for (let j = i + 1; j < this.houses.length; j++) {
            if (
              parseInt(this.houses[i].min_price) <
              parseInt(this.houses[j].min_price)
            ) {
              let a = this.houses[i];
              this.houses[i] = this.houses[j];
              this.houses[j] = a;
            }
          }
        }
      }
    },
    //获取页数
    getPageCount() {
      this.axios
        .get("/findShopCount", {
          params: { cityName: this.$store.state.cityNames, area:this.op_li.trim(),page:this.page },
        })
        .then((res) => {
          this.pageCount = Math.ceil(res.data.result.length / 5);
          this.$store.commit("setPageCount", this.pageCount);
        });
    },
    //点击更换门店数据
    getShop(page) {
      //加载门店
      this.axios
        .get("/findShop", {
          params: {
            cityName: this.$store.state.cityNames,
            area: this.op_li.trim(),
            page: page,
            pagesize: this.pagesize,
          },
        })
        .then((res) => {
          this.shops = [];
          // console.log(res.data.result);
          for (let i = 0; i < res.data.result.length; i++) {
            let shopObj = {};
            shopObj.title = res.data.result[i].shopname;
            shopObj.address = res.data.result[i].address;
            shopObj.price = res.data.result[i].price;
            shopObj.bg = res.data.result[i].bg;
            shopObj.count = res.data.result[i].count;
            shopObj.id = res.data.result[i].id;
            this.shops.push(shopObj);
          }
          this.$store.commit("getShop", this.shops);
        });
    },
    //获取房型条数
    getHousePageCount() {
      this.axios
        .get("/findHouseCount", {
          params: { cityName: this.$store.state.cityNames, area: this.op_li.trim() },
        })
        .then((res) => {
          this.housePageCount = Math.ceil(res.data.result.length / 5);
          this.$store.commit("setHousePageCount", this.housePageCount);
        });
    },
    //获取房型数据
    getHouse(page) {
      this.axios
        .get("/findHouse", {
          params: {
            cityName: this.$store.state.cityNames,
            area: this.op_li.trim(),
            page: page,
            // pagesize: this.pagesize
          },
        })
        .then((res) => {
          this.houses = [];
          for (let i = 0; i < res.data.result.length; i++) {
            let house = {};
            house.title = res.data.result[i].title;
            house.address = res.data.result[i].address_details;
            house.img = res.data.result[i].avator;
            house.min_price = res.data.result[i].min_price;
            house.max_price = res.data.result[i].max_price;
            house.shop_name = res.data.result[i].shop_name;
            house.layout = res.data.result[i].layout;
            house.square = res.data.result[i].square;
            house.detail = res.data.result[i].detail;
            house.methods = res.data.result[i].methods;
            house.id=res.data.result[i].lid;
            this.houses.push(house);
          }
          this.$store.commit("getHouse", this.houses);
        });
    },
    //获取
    change2(e) {
      let a = e.target.innerHTML;
      // console.log(a)
      // console.log(this.$store.state.housePageCount)
      if (a == "首页") {
        this.page = 1;
        this.list_active = 1;
        this.getShop(this.page);
        this.getHouse(this.page);
        this.active = 0;
      } else if (a == "上一页") {
        if (this.page > 1) {
          this.page--;
          this.list_active--;
          this.getShop(this.page);
          this.getHouse(this.page);
          this.active = 0;
        }
      } else if (a == "下一页") {
        if (this.page < this.$store.state.housePageCount) {
          this.page++;
          this.list_active++;
          this.getShop(this.page);
          this.getHouse(this.page);
          this.active = 0;
        }
      } else if (a == "末页") {
        this.page = this.$store.state.housePageCount;
        this.list_active = this.pageCount;
        this.getShop(this.page);
        this.getHouse(this.page);
        this.active = 0;
      }
      for (let i = 1; i <= this.$store.state.housePageCount; i++) {
        if (a == i) {
          this.page = i;
          this.list_active = a;
          this.getShop(this.page);
          this.getHouse(this.page);
          this.active = 0;
        }
      }
      // console.log(this.list_active)
    },
    change(e) {
      let a = e.target.innerHTML;
      if (a == "首页") {
        this.page = 1;
        this.list_active = 1;
        this.getShop(this.page);
        this.getHouse(this.page);
        this.active = 0;
      } else if (a == "上一页") {
        if (this.page > 1) {
          this.page--;
          this.list_active--;
          this.getShop(this.page);
          this.getHouse(this.page);
          this.active = 0;
        }
      } else if (a == "下一页") {
        if (this.page < this.$store.state.pageCount) {
          this.page++;
          this.list_active++;
          this.getShop(this.page);
          this.getHouse(this.page);
          this.active = 0;
        }
      } else if (a == "末页") {
        this.page = this.$store.state.pageCount;
        this.list_active = this.pageCount;
        this.getShop(this.page);
        this.getHouse(this.page);
        this.active = 0;
      }
      for (let i = 1; i <= this.$store.state.pageCount; i++) {
        if (a == i) {
          this.page = i;
          this.list_active = a;
          this.getShop(this.page);
          this.getHouse(this.page);
          this.active = 0;
        }
      }
      // console.log(this.lis)
    },
  },
  mounted() {
    // console.log(this.$store.state.shops)
    this.$store.commit("changeheaderactive", 2);
    let area=this.$route.params.area;
    this.op_li=area;
    this.cityName = this.$store.state.cityNames;
    this.axios
      .get(`countarea?city_name=${this.$store.state.cityNames}`)
      .then((res) => {
        this.$store.state.countarea = [];
        let arr = [{ value: 1, label: "全部" }];
        for (let i = 0; i < res.data.length; i++) {
          let countarea = {};
          countarea.value = i + 2;
          countarea.label = res.data[i].area;
          let option = [];
          arr.push(countarea);
        }
        this.$store.commit("countarea", arr);
      });
    //获取当前数据总条数，计算出页数
    this.axios
      .get("/findShopCount", {
        params: { cityName: this.$store.state.cityNames, area: this.op_li },
      })
      .then((res) => {
        this.pageCount = Math.ceil(res.data.result.length / 5);
        this.$store.commit("setPageCount", this.pageCount);
      });
      
    //加载门店
    this.axios
      .get("/findShop", {
        params: {
          cityName: this.$store.state.cityNames,
          area: area,
          page: this.page,
          pagesize: this.pagesize,
        },
      })
      .then((res) => {
        this.shops = [];
        for (let i = 0; i < res.data.result.length; i++) {
          let shopObj = {};
          shopObj.title = res.data.result[i].shopname;
          shopObj.address = res.data.result[i].address;
          shopObj.price = res.data.result[i].price;
          shopObj.bg = res.data.result[i].bg;
          shopObj.count = res.data.result[i].count;
          shopObj.id=res.data.result[i].id;
          this.shops.push(shopObj);
        }
        this.$store.commit("getShop", this.shops);
      });
    //获取所有户型的总条数，计算出页数
    this.axios
      .get("/findHouseCount", {
        params: { cityName: this.$store.state.cityNames, area: this.op_li.trim() },
      })
      .then((res) => {
        this.housePageCount = Math.ceil(res.data.result.length / 5);
        this.$store.commit("setHousePageCount", this.housePageCount);
      });
    //获取所有房型数据
    this.axios
      .get("/findHouse", {
        params: {
          cityName: this.$store.state.cityNames,
          area: area,
          page: this.page,
          pagesize: this.pagesize,
        },
      })
      .then((res) => {
        this.houses = [];
        for (let i = 0; i < res.data.result.length; i++) {
          let house = {};
          house.title = res.data.result[i].title;
          house.address = res.data.result[i].address_details;
          house.img = res.data.result[i].avator;
          house.min_price = res.data.result[i].min_price;
          house.max_price = res.data.result[i].max_price;
          house.shop_name = res.data.result[i].shop_name;
          house.layout = res.data.result[i].layout;
          house.square = res.data.result[i].square;
          house.detail = res.data.result[i].detail;
          house.methods = res.data.result[i].methods;
          house.id=res.data.result[i].lid;
          this.houses.push(house);
        }
        this.$store.commit("getHouse", this.houses);
      });
  },
  updated() {
    this.shops = this.$store.state.shops;
    this.houses = this.$store.state.houses;
    if (this.cityName != this.$store.state.cityNames) {
      this.op_li = "全部";
      this.active = 0;
      this.cityName = this.$store.state.cityNames;
      this.list_active = 1;
      this.getPageCount(this.op_li.trim());
    }
  },
};
</script>

