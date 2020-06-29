<template>

  <div class="alert">
    <div class="alert alert-primary" role="alert">
        {{ msg }}
      </div>
      <div class="alert alert-secondary" role="alert">
        A simple secondary alert—check it out!
      </div>
      <div class="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>
      <div class="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
      <div class="alert alert-warning" role="alert">
        A simple warning alert—check it out!
      </div>
      <div class="alert alert-info" role="alert">
        A simple info alert—check it out!
      </div>
      <div class="alert alert-light" role="alert">
        A simple light alert—check it out!
      </div>
      <div class="alert alert-dark" role="alert">
        A simple dark alert—check it out!
      </div>
    
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    msg: String
  },
  data() { 
    return { 
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
