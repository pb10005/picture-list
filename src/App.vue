<template>
  <v-app id="app"><router-view /></v-app>
</template>

<script>
export default {
  name: "App"
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
