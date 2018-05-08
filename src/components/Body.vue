<template>
  <div class="body">
    <h3>Installation</h3>
    <blockquote>
      <code>npm i anvaad-js</code>
    </blockquote>

    <h3>Usage</h3>

    <Usage name="ascii" />
    <Usage name="firstLetters" />
    <Usage name="mainLetters" />
    <Usage name="translit.english" />
    <Usage name="unicode" />
  </div>
</template>

<script>
import Usage from "./Usage.vue";

export default {
  name: "Body",
  components: {
    Usage
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
code {
  font-size: 15px;
  background-color: lightgrey;
  padding: 10px;
  border-radius: 6px;
}
</style>
