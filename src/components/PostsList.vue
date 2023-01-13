<template>
  <div class="posts">
    <TransitionGroup name="list">
      <PostItem :post="post" v-for="post in postsStore.posts" :key="post.id"/>
    </TransitionGroup>
  </div>
</template>

<script setup>

import {usePostsStore} from "../stores/posts";
import PostItem from "./PostItem.vue";

let postsStore = usePostsStore()

</script>
