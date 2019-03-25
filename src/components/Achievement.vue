<template>
  <div class="achievement">
    <h3>{{achievement.title}}</h3>
    <Tag class="achievement-date" :text="achievement.date | formatDate"/>
    <Tag class="achievement-level" :text="achievement.level"/>
  </div>
</template>

<script>
import Tag from "./Tag";
export default {
  name: "Achievement",
  components: {
    Tag
  },
  props: {
    achievement: Object
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
.achievement {
  padding: 0.25rem;
  display: flex;
}

.achievement h3 {
  padding: 0;
  margin: 0;
  text-align: left;
  flex-grow: 2;
}

h3 span {
  font-weight: normal;
  padding: 0 0.25rem;
}
</style>
