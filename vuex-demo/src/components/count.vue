<template>
  <div class="hello">
    <h3>{{ $store.state.count }}</h3>
    <h3>{{ count }}</h3>
    <button @click="$store.commit('add', 10)">+</button>
    <button @click="reduce">-</button>
    <button @click="addAction">+</button>
    <button @click="reduceAction">-</button>
  </div>
</template>

<script>
import store from 'store/store'
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['count'])
    // count () {
    //   return this.$store.getters.count
    // }
  },
  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction', 'reduceAction'])
  },
  store
}
</script>
