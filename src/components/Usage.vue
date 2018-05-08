<template>
  <div class="usage">
    <h4 :id="name">{{name}}</h4>
    <p>{{ description }}</p>
    <code>
        console.assert(
            {{name}}("
            <input type="text" v-model="input" placeholder="Awie imlu gurisK Awie imlu qU myry gurU ky ipAwry ]" />
            ")
                ===
            '{{ callFn(input) }}'
        );
    </code>
  </div>
</template>

<script>
import * as anvaad from "anvaad-js";

export default {
  name: "Usage",
  props: {
    name: String,
    description: String
  },
  data: () => ({
    input: ""
  }),
  methods: {
    callFn(text) {
      if (this.name.indexOf(".") > -1) {
        const [fn, language] = this.name.split(".");
        return anvaad[fn](text, language);
      }
      return anvaad[this.name](text);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
input {
  border: none;
  padding: 5px;
}
code {
  font-size: 15px;
  background-color: lightgrey;
  padding: 10px;
  border-radius: 6px;
}
</style>
