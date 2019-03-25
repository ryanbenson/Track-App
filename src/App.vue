<template>
  <div id="app">
    <Header/>
    <div class="content">
      <Achievements/>
      <Links/>
      <Tasks/>
      <Activities/>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Achievements from "./components/Achievements.vue";
import Links from "./components/Links.vue";
import Tasks from "./components/Tasks.vue";
import Activities from "./components/Activities.vue";

export default {
  name: "app",
  components: {
    Header,
    Achievements,
    Links,
    Tasks,
    Activities
  }
};
</script>

<style>
body,
html {
  padding: 0;
  margin: 0;
  background: #e4e4e4;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.content {
  padding: 2rem;
  display: flex;
}
</style>
