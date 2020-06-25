<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Alert msg="Welcome to Your Vue.js App" />
    <ExemploCreate msg="Welcome to Your Vue.js App" />
    <ExemploList msg="Welcome to Your Vue.js App" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Alert from "@/components/Alert.vue";
import ExemploList from "@/components/ExemploList.vue";
import ExemploCreate from "@/components/ExemploCreate.vue";

export default {
  name: "Hello",
  components: {
    HelloWorld,
    Alert,
    ExemploList,
    ExemploCreate
  }
};
</script>
