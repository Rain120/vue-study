<template>
  <div class="cascad-menu" ref="cascadMenu">
    <scroll
      class="left-menu"
      :data="menus"
      ref="leftMenu">
      <div class="left-menu-container">
        <ul>
          <li
            class="left-item"
            ref="leftItem"
            :class="{'current': currentIndex === index}"
            @click="selectLeft(index, $event)"
            v-for="(menu, index) in menus"
            :key="index">
            <p class="text">{{menu.name}}</p>
          </li>
        </ul>
      </div>
    </scroll>
    <scroll
      class="right-menu"
      :data="menus" 
      ref="rightMenu"
      @scroll="scrollHeight"
      :listenScroll="true"
      :probeType="3">
      <div class="right-menu-container">
        <ul>
          <li class="right-item" ref="rightItem" v-for="(menu, i) in menus" :key="i">
            <div class="title">{{menu.name}}</div>
            <ul>
              <li v-for="(item, j) in menu.data" :key="j">
                <div class="data-wrapper">
                  <div class="data">{{item.name}}</div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Scroll from './scroll'
export default {
  data() {
    return {
      rightTops: [],
      scrollY: 0,
      leftScrollY: 0
    }
  },
  props: {
    menus: {
      required: true,
      type: Array,
      default () {
        return []
      }
    }
  },
  computed: {
    currentIndex () {
      const { scrollY, rightTops } = this
      let index = rightTops.findIndex((height, index) => {
        return scrollY >= rightTops[index] && scrollY < rightTops[index + 1]
      })
      if (scrollY > rightTops[index] + 50) {
        index++;
      }
      return index
    }
  },
  created() {
    this.$nextTick(() => {
      this._calculateHeight()
    })
  },
  methods: {
    selectLeft (index, event) {
      console.log(index);
      if (!event._constructed) {
        return
      }
      let rightItem = this.$refs.rightItem
      let el = rightItem[index]
      this.$refs.rightMenu.scrollToElement(el, 300)
    },
    scrollHeight (pos) {
      console.log(pos);
      this.scrollY = Math.abs(Math.round(pos.y))
    },
    _calculateHeight() {
      let lis = this.$refs.rightItem;
      console.log(lis)
      let height = 0
      this.rightTops.push(height)
      Array.prototype.slice.call(lis).forEach(li => {
        height += li.clientHeight
        this.rightTops.push(height)
      })
      console.log(this.rightTops)
    }
  },
  components: {
    Scroll
  }
}
</script>

<style lang="stylus" scoped>
  .cascad-menu
    display flex
    position absolute
    top 100px
    bottom 100px
    width 100%
    border 1px solid red
    overflow hidden
    .left-menu
      flex 0 0 80px
      width 80px
      background #f3f5f7
      .left-item
        height 54px
        width 100%
        margin-left -20px
        &.current
          width 200%
          margin-left -40px
          background #fff
        .text
          width 100%
          line-height 54px
    .right-menu
      flex 1
      .right-item
        height 100%
        margin-left -40px
        border 1px solid #ccc
        .title
          border-bottom 1px solid #ccc
          height 20px
        .data-wrapper
          .data
            line-height 40px
            height 40px
            margin-left -40px
</style>
