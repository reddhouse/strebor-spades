<template>
  <div class="home">
    <div class="title">Strebor St. Spades</div>
    <div class="sub-title">Lewis Powell Style</div>
    <img id="logo" src="https://s3-us-west-2.amazonaws.com/strebor-spades-images/BJ.svg"></img>
    <img id="logo" src="https://s3-us-west-2.amazonaws.com/strebor-spades-images/SJ.svg"></img>
    <img id="logo" src="https://s3-us-west-2.amazonaws.com/strebor-spades-images/2S.svg"></img>
    <img id="logo" src="https://s3-us-west-2.amazonaws.com/strebor-spades-images/AS.svg"></img>
    <img id="logo" src="https://s3-us-west-2.amazonaws.com/strebor-spades-images/KS.svg"></img>
    <div class="divider"></div>
    <div><router-link to="/table">Card Table</router-link></div>
    <div><router-link to="/player1">Player 1</router-link></div>
    <div>Player 2</div>
    <div>Player 3</div>
    <div>Player 4</div>
    <a href="https://hangouts.google.com/group/6Uq6vjaSjgj4u3IC2" target="_blank">Join Hangout</a>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.title
{
  font-weight: 400;
  font-size: 1.5em;
}

.sub-title
{
  font-style: oblique;
  margin-top: 2px;
  margin-bottom: 10px;
}

#logo {
  max-height: 75px;
}

.divider {
  margin-bottom: 10px
}

</style>
