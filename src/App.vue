<script setup>
import PostsList from "./components/PostsList.vue";
import TheModal from "./components/TheModal.vue"
import PostForm from "./components/PostForm.vue";
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import EmptySection from "./components/EmptySection.vue";
import PostsTop from "./components/PostsTop.vue";


import {usePostsStore} from "./stores/posts";

let postsStore = usePostsStore()

</script>
<template>
  <TheHeader/>
  <main class="main">
    <div class="container">
      <PostForm/>
      <PostsTop/>
      <PostsList v-if="postsStore.posts.length"/>
      <EmptySection v-else/>
      <Transition>
        <TheModal v-if="postsStore.showModal"/>
      </Transition>
    </div>
  </main>
  <TheFooter/>
</template>
