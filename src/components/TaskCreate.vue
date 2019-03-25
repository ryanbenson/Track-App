<template>
  <div class="tasks-create">
    <form @submit.prevent="save">
      <input type="text" v-model="title" placeholder="What do you need to do?">
      <input type="text" v-model="completed" placeholder="Is it done?">
      <input type="text" v-model="due" placeholder="When is it due?">
      <input type="text" v-model="completed_at" placeholder="When was it completed?">
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "TaskCreate",
  data() {
    return {
      title: "",
      completed: false,
      due: "",
      completed_at: ""
    };
  },
  methods: {
    save() {
      return fetch(`${process.env.VUE_APP_API_URL}/tasks`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: this.title,
          completed: this.completed,
          due: this.due,
          completed_at: this.completed_at
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
