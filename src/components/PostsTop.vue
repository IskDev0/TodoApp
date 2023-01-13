<template>
  <div class="posts__top">
    <p class="posts__top-text blue">Total tasks <span class="amount">{{ postsStore.posts.length }}</span></p>
    <button class="blue" @click="postsStore.deleteAll">Delete All</button>
    <button class="purple" @click="postsStore.deleteFinished">Delete Finished</button>
    <p class="posts__top-text purple">Finished<span class="amount">{{postsStore.finishedPosts}} of {{ postsStore.posts.length }}</span></p>
  </div>
</template>

<script setup>
import {usePostsStore} from "../stores/posts";

let postsStore = usePostsStore()
</script>

