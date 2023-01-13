<template>
  <div @click.self="postsStore.closeModal" class="modal">
    <div class="modal__content">
      <p>Value is required</p>
    </div>
  </div>
</template>

<script setup>
import {usePostsStore} from "../stores/posts";

let postsStore = usePostsStore()

</script>
