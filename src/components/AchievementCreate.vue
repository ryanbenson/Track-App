<template>
  <div class="achievements-create">
    <form @submit.prevent="save">
      <input type="text" v-model="title" placeholder="What did you acheive?">
      <input type="text" v-model="date" placeholder="What was the date?">
      <input type="text" v-model="year" placeholder="Which year?">
      <input type="text" v-model="week" placeholder="What week number?">
      <input type="text" v-model="level" placeholder="How big?">
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AchievementCreate",
  props: ["achievements"],
  data() {
    return {
      title: "",
      date: "",
      year: "",
      week: "",
      level: ""
    };
  },
  methods: {
    async save() {
      const data = this.getData();

      await fetch(`${process.env.VUE_APP_API_URL}/achievements`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      this.addToList(this.achievements, data);
      this.reset();
    },
    getData() {
      return {
        title: this.title,
        date: this.date,
        year: this.year,
        week: this.week,
        level: this.level
      };
    },
    addToList(list, data) {
      list.push(data);
    },
    reset() {
      this.title = "";
      this.date = "";
      this.year = "";
      this.week = "";
      this.level = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
