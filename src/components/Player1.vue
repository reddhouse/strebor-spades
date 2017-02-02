<template>
  <div class="player1-component">
    <p>Player 1</p>
    <div
      class="card-pics"
      v-for="(cardObject, index) in player1Hand">
      <single-card v-bind:card="cardObject"></single-card>
    </div>
  </div>
</template>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<script>
import { mapGetters, mapActions } from 'vuex'
import SingleCard from './SingleCard.vue'

export default {
  name: 'player1-component',
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters(['player1Hand'])
  },
  methods: {
    ...mapActions(['setTitle'])
  },
  components: {
    SingleCard
  }
}
</script>
<!--xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-->
<style scoped>

.card-pics {
  display: inline-block;
}

</style>
