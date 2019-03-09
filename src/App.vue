<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Achievements/>
    <Links/>
    <Tasks/>
    <Activities/>
  </div>
</template>

<script>
import Achievements from "./components/Achievements.vue";
import Links from "./components/Links.vue";
import Tasks from "./components/Tasks.vue";
import Activities from "./components/Activities.vue";

export default {
  name: "app",
  components: {
    Achievements,
    Links,
    Tasks,
    Activities
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
