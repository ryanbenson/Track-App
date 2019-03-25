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
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
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

.content > div {
  flex-grow: 1;
  flex-basis: 100%;
  margin-right: 1rem;
}
.content > div:last-child {
  margin-right: 0;
}

input[type="text"],
input[type="url"] {
  padding: 0.5rem;
  width: 100%;
  margin-bottom: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
}
</style>
