<template>
  <div class="achievements">
    <div v-if="!hasAchievements" class="achievements--none">
      <p>No achievements found</p>
    </div>
    <div v-else class="achievements--list">
      <Achievement
        v-for="(achievement, index) in achievements"
        class="achievements--item"
        :key="index"
        :achievement="achievement"
      />
    </div>
  </div>
</template>

<script>
import Achievement from "./Achievement.vue";
export default {
  name: "Achievements",
  components: {
    Achievement
  },
  data() {
    return {
      achievements: []
    };
  },
  computed: {
    hasAchievements() {
      if (this.achievements && this.achievements.length > 0) return true;
      return false;
    }
  },
  async mounted() {
    const url = `${process.env.VUE_APP_API_URL}/achievements`;
    let response = await fetch(url);
    let data = await response.json();
    this.achievements = data;
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
