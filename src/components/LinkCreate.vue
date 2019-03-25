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
  props: ["links"],
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
    async save() {
      const data = this.getData();

      await fetch(`${process.env.VUE_APP_API_URL}/links`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      this.addToList(this.links, data);
      this.reset();
    },
    getData() {
      return {
        title: this.title,
        link: this.link,
        read: this.read,
        tags: this.tags.split(","),
        read_at: this.read_at
      };
    },
    addToList(list, data) {
      list.push(data);
    },
    reset() {
      this.title = "";
      this.link = "";
      this.read = false;
      this.tags = [];
      this.read_at = "";
    }
  }
};
</script>

<style scoped>
</style>
