<template>
  <div class="container">
    <div class="text-center justify-content-center">
      <div style="height: 85vh; display: flex; align-items: center; justify-content: center;" class="card card-default card-body">
        <h1>Start creating your list now.</h1>
        <br>
        <router-link :to="{ name: 'create' }" style="width: 45vw; align-self:center;" class="btn btn-success">Create</router-link>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  mounted() {
    console.log('Component mounted.')
  }
}
</script>
