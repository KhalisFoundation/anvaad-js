<template>
  <div class="body">
    <h3>Installation</h3>
    <blockquote>
      <code>npm i anvaad-js</code>
    </blockquote>

    <h3>Usage</h3>

    <Usage name="ascii" description="Returns a comma-separated string of ascii codes for a string of Gurmukhi characters." />
    <Usage name="firstLetters" description="Retrieve the first letter of each word from a string." />
    <Usage name="mainLetters" description="Removes vowel symbols from a Gurmukhi string." />
    <Usage name="translit.english" description="Returns an english transliteration of Gurmukhi script" />
    <Usage name="unicode" description="Convert Gurmukhi script to Unicode" />
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
