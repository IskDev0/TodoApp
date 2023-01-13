<template>
  <form @submit.prevent="postsStore.createPost" class="form">
    <input v-model="postsStore.title" type="text" class="form__input" placeholder="Add new task">
    <button class="form__submit">Create <img src="../assets/icons/plus.svg" alt=""></button>
  </form>
</template>

<script setup>
import {usePostsStore} from "../stores/posts";

let postsStore = usePostsStore()

</script>
