<template>
  <div id="app">
    <my-swiper />
    <!-- <cascad-menu :menus="menus"></cascad-menu> -->
    <!-- <barousel
      class="barousel"
      :list="setData()"
      :width="900"
      :height="260"
      @sliderClick="sliderClick">
    </barousel> -->
    <!-- <div class="content">
      <h1>在线翻译</h1>
      <h5 class="text-muted">简单 / 易用 / 便捷</h5>
      <translateForm v-on:formSubmit="translateText"></translateForm>
      <translateOutput v-text="translatedText"></translateOutput>
    </div>
    <div class="hello">
    <scroll class="content" ref="scroll" :data="list" :pullup="pullup">
      <div>
        <ul>
          <li v-for="(item, index) in list" :key="index">
            <div class="name">{{item.name}}</div>
          </li>
        </ul>
      </div>
    </scroll>
  </div> -->
  </div>
</template>

<script>
import axios from 'axios'
import Scroll from './components/scroll.vue'
import CascadMenu from './components/cascad-menu.vue'
import Barousel from './components/barousel.vue'
import TranslateForm from './components/TranslateForm'
import TranslateOutput from './components/TranslateOutput'
import MySwiper from './components/my-swiper'

export default {
  name: 'app',
  components: {
    MySwiper,
    TranslateForm,
    TranslateOutput,
    Barousel,
    CascadMenu,
    Scroll
  },
  data () {
    return {
      menus: [
        {
          name: '菜单1',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单8',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单2',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单3',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单4',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单5',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单6',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单7',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单8',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        },
        {
          name: '菜单9',
          data: [
            {
              name: '1.1'
            },
            {
              name: '1.2'
            },
            {
              name: '1.3'
            },
            {
              name: '1.4'
            },
            {
              name: '1.5'
            },
            {
              name: '1.6'
            }
          ]
        }
      ],
      translatedText: "",
      list: [],
      pullup: true
    }
  },
  // created () {
  //   this.getlist().then(res => {
  //     this.list = res.data.result
  //   })
  // },
  methods: {
    setData() {
      let list = [];
      for(let i = 0 ; i < 9;i++){
        list.push({
          title: i,
          src: 'static/img/'+i+'.jpg'
        })
      }
      return list;
    },
    sliderClick (i) {
      alert(i);
    },
    translateText: function(text, language) {
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170929T110341Z.55bdd4c0d6e2af6d.43b4aec6bcf42c014f55519bfb6201d768302be9&lang='+ language + '&text=' + text)
      .then(response => {
          console.log(response.body.text[0]);
          this.translatedText = response.body.text[0];
      });
    },
    // getlist () {
    //   let url = 'http://localhost:3000/personalized'
    //   return axios.get(url).then(res => {
    //     return Promise.resolve(res)
    //   })
    // }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 100px; */
}
.barousel {
  margin: 0 auto;
  width: 1000px;
}
li {
  list-style: none;
  height: 60px;
}
.content {
  height: 100%;
  overflow: hidden;
}
.name {
  line-height: 60px;
  text-align: left;
}
</style>
