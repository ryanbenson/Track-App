<template>
  <div class="activities">
    <ActivityCreate/>
    <div v-if="!hasActivities" class="activities--none">
      <p>No activities found</p>
    </div>
    <div v-else class="activities--list">
      <Activity
        v-for="(activity, index) in activities"
        class="activity--item"
        :key="index"
        :activity="activity"
      />
    </div>
  </div>
</template>

<script>
import Activity from "./Activity.vue";
import ActivityCreate from "./ActivityCreate.vue";
export default {
  name: "Activities",
  components: {
    Activity,
    ActivityCreate
  },
  data() {
    return {
      activities: []
    };
  },
  computed: {
    hasActivities() {
      if (this.activities && this.activities.length > 0) return true;
      return false;
    }
  },
  async mounted() {
    const url = `${process.env.VUE_APP_API_URL}/activities`;
    let response = await fetch(url);
    let data = await response.json();
    this.activities = data;
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
