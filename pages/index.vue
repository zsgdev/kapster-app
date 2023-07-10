<script setup lang="ts">
import posts from '../mockdata/posts.json'
import Blog from './blog/index.vue'
import Navbar from '../components/Navbar.vue'
import { usePostStore } from '../stores/posts'

const postsStore = usePostStore()

function onClickPost(): void {
    postsStore.changedPosts(posts)
}

</script>
<template>
    <div style="font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif">
        <Navbar />
        <div v-for="post in posts" :key="post.id" class="col-12 container-fluid">
            <Blog class="mt-4" :post="post" @click="onClickPost()"></Blog>
        </div>
    </div>
</template>
