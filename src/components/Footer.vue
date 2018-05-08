<template>
    <div class="footer">
        <a href="https://github.com/khalisfoundation/anvaad-js" target="_blank">GitHub</a>
        <div>&copy; <a href="https://khalisfoundation.org/" target="_blank">Khalis Foundation</a> {{ new Date().getFullYear() }}</div>
    </div>
</template>
<style>
.footer {
  margin-top: 10vh;
  padding: 20px;
  text-align: center;
  background: linear-gradient(90deg, #fa9d1d, #00669b);
  display: flex;
  justify-content: space-between;
  border-top: 1px solid grey;
  color: white;
}
a {
  color: white;
  text-decoration: none;
}
</style>
