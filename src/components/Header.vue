<template>
  <div class="header">
    <Logo/>
  </div>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  name: "Header",
  components: {
    Logo
  }
};
</script>

<style scoped>
.header {
  background-color: white;
  padding: 0.5rem;
}
</style>

