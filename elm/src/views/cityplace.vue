<template>
  <div>
    <header style="line-height:40px; height:40px; background:#3190e8;color:#fff;">
      <div class="ele" style="float:left; font-size:16px;">
          ele.me
      </div>
      <router-link to="/register">
        <div class='dz' style="float:right;font-size:16px;">
        登录|注册
       </div>
      </router-link>
    </header>
    <!--  当前定位城市-->
    <div class="locationcity">
      <p class="location_l">当前定位城市：</p>
      <p class="location_r">定位不准确，请在城市列表中选择</p>
    </div>
    <!-- location北京 -->
    <div class="nowcity">
      <router-link :to="{name:'searchcity',query:{cityname:dwcities}}">
        <p class="beijng">{{dwcities}}</p>
        <p class="nowcityjt">&gt;</p>
      </router-link>
    </div>

    <!-- 热门城市 -->
    <div class="hotcities">热门城市</div>
    <ul class="hotcitieslist hotct clearfix">
      <router-link
        :to="{path:'searchcity',query:{cityname:i.name}}"
        v-for="(i,index) in hotcitylist"
        :key="index+'hotcitieslist'"
      >
        <li>{{i.name}}</li>
      </router-link>
    </ul>

    <!-- 按字母排序城市 -->
    <div>
      <div class="hotcitieslist clearfix" v-for="(item1,city) in letterslist">
        <div class="letter">{{city}}

		</div>

        <div>
          <router-link
            :to="{path:'searchcity',query:{cityname:j.name}}"
            v-for="(j,index) in item1"
            :key="index+'letter'" >
            <div class="letterbox">{{j.name}}</div>
          </router-link>
        </div>
      </div>
    </div>
    <footer-bar :num="0"></footer-bar>
  </div>
</template>
<script>
import { constants } from 'crypto';
import footerBar from '@/components/footerBar.vue'
export default {
  data() {
    return {
      hotcitylist: "",
      letterslist: [],
      dwcities: ""
    };
  },
  components: {footerBar
  },
  methods: {
    // 热门城市的接口
    hotjk() {
		console.log(this.$http);
      this.$http
        .get("http://elm.cangdu.org/v1/cities", {
          params: {
            type: "hot"
          }
        })
        .then(
          res => {
            this.hotcitylist = res.body;
          },
          err => {
            console.log(err);
          }
        );
    },
    // 按字母排序的接口
    zmjk() {
      this.$http
        .get("http://elm.cangdu.org/v1/cities", {
          params: {
            type: "group"
          }
        })
        .then(
          res => {
            // console.log(res)
            var obj = res.data;
            this.letterslist = this.group_s(obj);
          },
          err => {
            console.log(err);
          }
        );
    },
    dwcity() {
      this.$http
        .get("https://elm.cangdu.org/v1/cities?", {
          params: {
            type: "guess"
          }
        })
        .then(
          res => {
            //console.log(res)
            this.dwcities = res.data.name;
          },
          err => {
            console.log(err);
          }
        );
    },
    // 把所有字母a-z排序
    group_s(obj) {
      var keys = Object.keys(obj).sort();
      var newObj = {};
      for (var i = 0; i < keys.length; i++) {
        var index = keys[i];
        newObj[index] = obj[index];
      }
      return newObj;
    }
  },
  created() {
    this.hotjk();
    this.zmjk();
    this.dwcity();
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.clearfix:after,
.clearfix:before {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box {
  width: 730px;
  height: 60px;
  line-height: 60px;
  padding: 5px;
  font-size: 26px;
  background: #3190e8;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100px;
}
.locationcity {
  width: 100%;
  height: 60px;
  padding: 5px;
  border-bottom: 1px solid grey;
  line-height: 60px;
  font-size: 26px;
}
.locationcity {
  width: 100%;
  height: 60px;
  padding: 5px;
  border-bottom: 1px solid grey;
  line-height: 60px;
  font-size: 26px;
}
.location_r {
  float: right;
  color: #9f9f9f;
  font-size: 20px;
}
.location_l {
  float: left;
}
.nowcity {
  width: 100%;
  height: 60px;
  padding: 5px;
  border-bottom: 1px solid grey;
  line-height: 60px;
  font-size: 26px;
  color: #3190e8;
  margin-bottom: 10px;
}
.beijng {
  float: left;
  color: #3190e8;
}
.nowcityjt {
  float: right;
}
.t_head_left {
  width: 50%;
  height: 60px;
  float: left;
}
.t_head_right {
  width: 50%;
  height: 60px;
  float: right;
}
.hotcities {
  width: 740px;
  height: 60px;
  padding: 5px;
  line-height: 60px;
  font-size: 26px;
}
.hotcities {
  color: #666;
  margin-bottom: 10px;
}
.hotcitieslist li,
.letterbox {
  width: 24.8%;
  height: 60px;
  float: left;
  border: 1px solid grey;
  border-left: none;
  /* border-bottom: none */
  font-size: 26px;
  text-align: center;
  line-height: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666;
}
.hotcitieslist .letter {
  width: 740px;
  height: 40px;
  padding: 5px;
  line-height: 40px;
  font-size: 26px;
  background: #9e9e9e4f;
}
.hotcities {
  width: 740px;
  height: 60px;
  padding: 5px;
  line-height: 60px;
  font-size: 26px;
}
.hotcities {
  color: #666;
  margin-bottom: 10px;
}
.hotcitieslist li,
.letterbox {
  width: 24.8%;
  height: 60px;
  float: left;
  border: 1px solid grey;
  border-left: none;
  /* border-bottom: none */
  font-size: 26px;
  text-align: center;
  line-height: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666;
}
.hotcitieslist .letter {
  width: 100%;
  height: 40px;
  padding: 5px;
  line-height: 40px;
  font-size: 26px;
  background: #9e9e9e4f;
}
</style>