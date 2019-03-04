<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Achievements/>
  </div>
</template>

<script>
import Achievements from "./components/Achievements.vue";

export default {
  name: "app",
  components: {
    Achievements
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
