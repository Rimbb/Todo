<template>
  <div class="container">
    <div class="text-center justify-content-center">
      <div style="height: auto; display: flex;" class="card card-default card-body">
        <h1>Your Todo List :</h1>
        <br>
        <div style="margin-bottom: 0.25rem;" class="card" v-for="post in posts" :key="post.id">
          <div style="background : rgba(192,192,192,0.1);" class="card-body">
            <h2 class="card-title"><b>{{ post.title }}</b></h2>
            <p class="card-text"><i>{{ post.body }}</i></p>
            <router-link :to="{name: 'edit', params: { id: post.id }}" class="btn btn-primary">Edit</router-link>
            <button class="btn btn-danger" @click.prevent="deletePost(post.id)">Delete</button>
          </div>
        </div>
        <br>
        <router-link :to="{ name: 'create' }" style="width: 45vw; align-self:center;" class="btn btn-success">Add more</router-link>
      </div>
    </div>
  </div>
</template>

  

<script>
export default {
  data() {
    return {
      posts: []
    };
  },

  created() {
    let uri = "/api/posts";

    this.axios.get(uri).then(response => {
      this.posts = response.data.data;

      console.log(this.posts);

      console.log("prout");
    });
  },

  methods: {
    deletePost(id) {
      let uri = `/api/post/delete/${id}`;

      this.axios.delete(uri).then(response => {
        this.posts.splice(this.posts.indexOf(id), 1);
      });
    }
  }
};
</script>