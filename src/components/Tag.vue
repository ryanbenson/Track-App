<template>
  <div class="tag">{{this.text}}</div>
</template>

<script>
export default {
  name: "Tag",
  props: {
    text: String
  }
};
</script>

<style scoped>
.tag {
  background-color: gray;
  margin: 0.25rem;
}
</style>
