<template>
  <div class="achievement">
    <h3>{{title}}</h3>
    <p>{{due}}</p>
    <p>{{week}}</p>
    <p>{{year}}</p>
    <p>{{level}}</p>
  </div>
</template>

<script>
export default {
  name: "Achievement",
  props: {
    title: String,
    due: Date,
    week: String,
    year: String,
    level: String
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
