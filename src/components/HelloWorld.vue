<template>
  <div class="hello">
    <div class="heading">
      <div>
        <h1 class="display-2">{{ dataset.title }}</h1>
        <p class="headline">{{ dataset.description }}</p>
      </div>
    </div>
    <PicList class="list" :dataset="dataset.restaurants" />
    <p>{{ dataset.footer }}</p>
  </div>
</template>

<script>
import PicList from "./PicList";

export default {
  name: "HelloWorld",
  components: {
    PicList
  },
  beforeCreate() {
    this.$store.dispatch("fetchData");
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
  padding: 50px 5px;
  z-index: 0;
  position: relative;
  background: url("https://tblg.k-img.com/restaurant/images/Rvw/78702/640x640_rect_78702197.jpg")
    no-repeat center;
  background-size: cover;
  background-color: #555555;
  overflow: hidden;
}
.heading:before {
  content: "";
  background: inherit;
  filter: blur(5px);
  position: absolute;
  top: -5px;
  left: -5px;
  bottom: -5px;
  right: -5px;
  z-index: -1;
}
.list {
  margin: 8px;
}
</style>
