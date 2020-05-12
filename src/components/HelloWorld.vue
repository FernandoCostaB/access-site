<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1> URL_API: {{ url }} </h1>
    <h1> Title: {{ title }} </h1>
    <h1> Version: {{ version }} </h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() { 
    return { 
        url: process.env.VUE_APP_ROOT_API, 
        title: process.env.VUE_APP_TITLE,
        version: process.env.VUE_APP_VERSION 
    }
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
