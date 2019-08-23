<template>
  <div class="container">
    <div class="text-center justify-content-center">
      <div style="height: 85vh; display: flex; align-items: center; justify-content: center;" class="card card-default card-body">
        <h1>Edit Item</h1>
        <br>
        <form @submit.prevent="updatePost">
          <div class="row">
            <div>
              <div class="form-group">
                <input type="text" style="width: 70vw; margin-bottom: 0.25rem;" class="form-control" v-model="post.title"/>
                <textarea class="form-control" v-model="post.body" rows="5"></textarea>
                <br>
                <button style="width: 45vw;" class="btn btn-success">Update</button>
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

  created() {
    let uri = `/api/post/edit/${this.$route.params.id}`;

    this.axios.get(uri).then(response => {
      this.post = response.data;
    });
  },

  methods: {
    updatePost() {
      let uri = `/api/post/update/${this.$route.params.id}`;

      this.axios.post(uri, this.post).then(response => {
        this.$router.push({ name: "posts" });
      });
    }
  }
};
</script>