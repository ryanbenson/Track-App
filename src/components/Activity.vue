<template>
  <div class="activity">
    <h3>{{activity.title}}</h3>
    <Tag :text="activity.type"/>
    <Tag :text="activity.action"/>
    <Tag :text="activity.date | formatDate"/>
    <p>{{activity.notes}}</p>
  </div>
</template>

<script>
import Tag from "./Tag";
export default {
  name: "Activity",
  components: {
    Tag
  },
  props: {
    activity: Object
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
.activity {
  padding: 0.25rem;
  display: flex;
}
.activity h3 {
  padding: 0;
  margin: 0;
  flex-grow: 2;
}
</style>
