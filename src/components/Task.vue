<template>
  <div class="task">
    <h3>{{task.title}}</h3>
    <Tag :text="task.due | formatDate"/>
    <p v-if="task.completed">{{task.completed_at}}</p>
  </div>
</template>

<script>
import Tag from "./Tag";
export default {
  name: "Task",
  components: {
    Tag
  },
  props: {
    task: Object
  },
  filters: {
    formatDate(date) {
      const d = new Date(date);
      return `${d.getMonth()}/${d.getDay()}/${d.getFullYear()}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.task {
  padding: 0.25rem;
  display: flex;
}
.task h3 {
  padding: 0;
  margin: 0;
  flex-grow: 2;
}
</style>
