<template>
  <div class="header">
    <a href="http://banidb.com/" target="_blank">
      <img alt="BaniDB logo" src="../assets/logo.png">
    </a>

    <h1> Welcome to anvaad-js (ਅਨੁਵਾਦ-ਜੇਅੈਸ) </h1>

    <p>A JavaScript utility to translit gurmukhi, and convert it between ascii to unicode with ease!</p>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  background: linear-gradient(45deg, #fa9d1d, #00669b);
  background-position: fixed;
  padding: 10vh 0;
  color: white;
}
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
