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
  props: ["activities"],
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
    async save() {
      const data = this.getData();

      await fetch(`${process.env.VUE_APP_API_URL}/activities`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      this.addToList(this.activities, data);
      this.reset();
    },
    getData() {
      return {
        title: this.title,
        type: this.type,
        action: this.action,
        notes: this.notes,
        date: this.date
      };
    },
    addToList(list, data) {
      list.push(data);
    },
    reset() {
      this.title = "";
      this.type = "";
      this.action = "";
      this.notes = "";
      this.date = "";
    }
  }
};
</script>

<style scoped>
</style>
