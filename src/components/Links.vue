<template>
  <div class="links">
    <button @click="toggleNew">{{createButtonText}}</button>
    <LinkCreate v-if="showForm"/>
    <div v-if="!hasLinks" class="links--none">
      <p>No links found</p>
    </div>
    <div v-else class="links--list">
      <Link v-for="(link, index) in links" class="link--item" :key="index" :link="link"/>
    </div>
  </div>
</template>

<script>
import Link from "./Link.vue";
import LinkCreate from "./LinkCreate.vue";
export default {
  name: "Links",
  components: {
    Link,
    LinkCreate
  },
  data() {
    return {
      links: [],
      showForm: false
    };
  },
  methods: {
    toggleNew() {
      this.showForm = !this.showForm;
    }
  },
  computed: {
    hasLinks() {
      if (this.links && this.links.length > 0) return true;
      return false;
    },
    createButtonText() {
      if (this.showForm) return "Close";
      return "Create New Link?";
    }
  },
  async mounted() {
    const url = `${process.env.VUE_APP_API_URL}/links`;
    let response = await fetch(url);
    let data = await response.json();
    this.links = data;
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
