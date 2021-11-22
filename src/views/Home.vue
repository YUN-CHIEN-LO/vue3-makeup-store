<template>
  <div class="home">
    <div class="home__cover is-full-page"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Home",
});
</script>
<style lang="scss" scoped>
.home {
  &__cover {
    background-color: #eee;
  }
}
</style>
