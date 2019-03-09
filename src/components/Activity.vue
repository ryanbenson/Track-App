<template>
  <div class="activity">
    <p>{{activity.title}}</p>
    <p>{{activity.type}}</p>
    <p>{{activity.action}}</p>
    <p>{{activity.notes}}</p>
    <p>{{activity.date}}</p>
  </div>
</template>

<script>
export default {
  name: "Activity",
  props: {
    activity: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
