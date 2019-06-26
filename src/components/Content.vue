<template>
  <div class="hello">
    <div class="heading">
      <h1 class="display-2">{{ dataset.title }}</h1>
    </div>
      <p class="headline">{{ dataset.description }}</p>
    <PicList class="list" :dataset="dataset.restaurants" />
    <p>{{ dataset.footer }}</p>
  </div>
</template>

<script>
import PicList from "./PicList";

export default {
  name: "Content",
  components: {
    PicList
  },
  beforeCreate() {
    this.$store.dispatch("fetchData", {
      fileName: this.$route.params.name + ".json"
    });
  },
  computed: {
    dataset() {
      return this.$store.state.dataset;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-family: "Noto Serif SC", serif !important;
  padding: 10px 0;
  font-weight: normal;
}
a {
  color: #42b983;
}
.heading {
  color: #ffffff;
  padding: 20px 5px;
  background-color: #c23616;
}
.list {
  margin: 8px;
}
</style>
