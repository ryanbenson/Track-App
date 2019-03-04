<template>
  <div class="task">
    <p>{{task.title}}</a>
    <p>{{task.tags}}</p>
    <p>{{task.read}}</p>
    <p>{{task.read_at}}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object
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
