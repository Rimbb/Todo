<template>
  <div class="container">
    <div class="text-center justify-content-center">
      <div style="height: 85vh; display: flex; align-items: center; justify-content: center;" class="card card-default card-body">
            <navigationMenu></navigationMenu>
      </div>
    </div>
  </div>
</template>

<script>
  import navigationMenu from './MenuComponent.vue'
  export default {
    data() {
      return {
        //
      }
    },
    components: {
      navigationMenu
    }
  }
</script>