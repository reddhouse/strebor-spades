<template>
  <div class="home">
    <img id="logo" src="../assets/BJ.svg"></img>
    <img id="logo" src="../assets/SJ.svg"></img>
    <img id="logo" src="../assets/2S.svg"></img>
    <img id="logo" src="../assets/AS.svg"></img>
    <img id="logo" src="../assets/KS.svg"></img>
    <div class="divider"></div>
    <div><router-link to="/table">Card Table</router-link></div>
    <div><router-link to="/foo">Go to Foo</router-link></div>
    <div>Player 2</div>
    <div>Player 3</div>
    <div>Player 4</div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#logo {
  max-height: 75px;
}

.divider {
  margin-bottom: 10px
}

</style>
