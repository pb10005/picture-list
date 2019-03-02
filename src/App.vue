<template>
  <v-app id="app"><HelloWorld /></v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=M+PLUS+1p|M+PLUS+Rounded+1c|Noto+Serif+SC");
body {
  margin: 0;
}
#app {
  font-family: "M PLUS 1p", sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  cursor: pointer;
}
</style>
