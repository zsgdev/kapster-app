<script setup lang="ts">
const { id } = useRoute().params
const postsStore = usePostStore()

function parseHTMLContent() {
    let content = document.getElementsByClassName('content');
    content[0].innerHTML = postsStore.selectedPost?.content
}
onMounted(() => {
    parseHTMLContent();
})

</script>
<template>
    <div>
        <Navbar />
        <div class="mt-4">
            <div class="blog-slider">
                <div class="blog-slider__wrp swiper-wrapper" style="font-size: 1em; text-overflow: ellipsis;">
                    <div class="blog-slider__item swiper-slide">
                        <div class="blog-slider__img">
                            <img :src="postsStore.selectedPost?.image_preview" alt="">
                        </div>
                        <div class="blog-slider__content">
                            <span class="blog-slider__code"></span>
                            <div class="blog-slider__title">{{ postsStore.selectedPost?.title }}</div>
                            <div class="blog-slider__text content" >
                            {{ postsStore.selectedPost?.content }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="blog-slider__pagination"></div>
            </div>

        </div>
    </div>
</template>