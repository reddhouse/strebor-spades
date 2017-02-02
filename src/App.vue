<template>
  <div id="app" class="container">

    <div class="title">Strebor St. Spades</div>
    <router-view></router-view>

  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['titleState'])
  },
  methods: {
    ...mapActions(['populateNewDeck'])
  },
  filters: {

  },
  components: {

  },
  mounted () {
    this.populateNewDeck()
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}

.title
{
  font-weight: 400;
  font-size: 1.5em;
  margin-bottom: 10px;
}

@media (min-width: 321px) {

  #app {
    margin-top: 40px;
  }
}

@media (min-width: 600px) {

  #app {
    margin-top: 60px;
  }
}

</style>
