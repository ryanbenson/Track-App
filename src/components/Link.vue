<template>
  <div class="link">
    <p>
      <a :href="link.link" target="_blank">{{link.title}}</a>
    </p>
    <p>{{link.tags}}</p>
    <p>{{link.read}}</p>
    <p>{{link.read_at}}</p>
  </div>
</template>

<script>
export default {
  name: "Link",
  props: {
    link: Object
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
