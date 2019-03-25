<template>
  <div class="links-create">
    <form @submit.prevent="save">
      <input type="text" v-model="title" placeholder="What is this about?">
      <input type="url" v-model="link" placeholder="What is the URL?">
      <input type="text" v-model="read" placeholder="Has this been read?">
      <input type="text" v-model="tags" placeholder="Comma separated tags?">
      <input type="text" v-model="read_at" placeholder="When did you read it?">
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LinkCreate",
  data() {
    return {
      title: "",
      link: "",
      read: false,
      tags: [],
      read_at: ""
    };
  },
  methods: {
    save() {
      return fetch(`${process.env.VUE_APP_API_URL}/links`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: this.title,
          link: this.link,
          read: this.read,
          tags: this.tags.split(","),
          read_at: this.read_at
        })
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
