<template>
  <div class="container">
    <div class="text-center justify-content-center">
      <div style="height: 85vh; display: flex; align-items: center; justify-content: center;" class="card card-default card-body">
        <h1>What would like to add to your list?</h1>
        <br>
        <form @submit.prevent="addPost">
          <div class="row">
            <div>
              <div class="form-group">
                <input type="text" style="width: 70vw; margin-bottom: 0.25rem;" class="form-control" v-model="post.title" placeholder="New task"/>
                <textarea class="form-control" v-model="post.body" rows="5" placeholder="Description"></textarea>
                <br>
                <button style="width: 45vw;" class="btn btn-success">Add</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      post: {}
    };
  },

  methods: {
    addPost() {
      let uri = "/api/post/create";

      this.axios.post(uri, this.post).then(response => {
        this.$router
          .push({ name: "posts" })

          .catch(error => {
            console.log("shit happen");
          });
      });
    }
  }
};
</script>