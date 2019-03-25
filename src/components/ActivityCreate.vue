<template>
  <div class="activities-create">
    <form @submit.prevent="save">
      <input type="text" v-model="title" placeholder="What did you do?">
      <input type="text" v-model="type" placeholder="What kind of work?">
      <input type="text" v-model="action" placeholder="What kind of action?">
      <input type="text" v-model="notes" placeholder="Any notes?">
      <input type="text" v-model="date" placeholder="When?">
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ActivityCreate",
  data() {
    return {
      title: "",
      type: "",
      action: "",
      notes: "",
      date: ""
    };
  },
  methods: {
    save() {
      return fetch(`${process.env.VUE_APP_API_URL}/activities`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: this.title,
          type: this.type,
          action: this.action,
          notes: this.notes,
          date: this.date
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
