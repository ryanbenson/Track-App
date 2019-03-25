<template>
  <div class="link">
    <h3>
      <a :href="link.link" target="_blank">{{link.title}}</a>
    </h3>
    <Tag v-for="(tag, index) in link.tags" :key="index" :text="tag"/>
  </div>
</template>

<script>
import Tag from "./Tag.vue";
export default {
  name: "Link",
  components: {
    Tag
  },
  props: {
    link: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.link {
  display: flex;
}
.link h3 {
  padding: 0;
  margin: 0;
  flex-grow: 2;
}
</style>
