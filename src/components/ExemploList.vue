<template>
  <ul v-if="posts && posts.length">
    <li v-for="post in posts" v-bind:key="post.id">
      <p><strong>{{post.title}}</strong></p>
      <p>{{post.body}}</p>
    </li>
  </ul>
</template>

<script>
import axios from 'axios';

export default {
    name: "ExemploList",
    data() {
        return {
        posts: [],
        errors: []
        }
    },

  // Fetches posts when the component is created.
  created() {
    let uri = 'http://jsonplaceholder.typicode.com/posts';
    axios.get(uri).then(response => {
            this.posts = response.data;
    })
    .catch(e => {
      this.errors.push(e)
    })

    // async / await version (created() becomes async created())
    //
    // try {
    //   const response = await axios.get(`http://jsonplaceholder.typicode.com/posts`)
    //   this.posts = response.data
    // } catch (e) {
    //   this.errors.push(e)
    // }
  }
}
</script>
