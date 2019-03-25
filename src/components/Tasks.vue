<template>
  <div class="tasks">
    <button @click="toggleNew">{{createButtonText}}</button>
    <TaskCreate v-if="showForm" :tasks="tasks"/>
    <div v-if="!hasTasks" class="tasks--none">
      <p>No tasks found</p>
    </div>
    <div v-else class="tasks--list">
      <Task v-for="(task, index) in tasks" class="task--item" :key="index" :task="task"/>
    </div>
  </div>
</template>

<script>
import Task from "./Task.vue";
import TaskCreate from "./TaskCreate.vue";
export default {
  name: "Tasks",
  components: {
    Task,
    TaskCreate
  },
  data() {
    return {
      tasks: [],
      showForm: false
    };
  },
  methods: {
    toggleNew() {
      this.showForm = !this.showForm;
    }
  },
  computed: {
    hasTasks() {
      if (this.tasks && this.tasks.length > 0) return true;
      return false;
    },
    createButtonText() {
      if (this.showForm) return "Close";
      return "Create New Task?";
    }
  },
  async mounted() {
    const url = `${process.env.VUE_APP_API_URL}/tasks`;
    let response = await fetch(url);
    let data = await response.json();
    this.tasks = data;
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
