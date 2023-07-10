<script lang="ts" setup>
const props = defineProps({
  post: Object
})

const postsStore = usePostStore()

function getPost(post: Object) {
  postsStore.changeSelectedPost(post)
};

const formatDate = computed(() => {
  return props?.post?.published_at.slice(0, 10)
});

</script>
<template>
  <div>
    <div class="blog-slider">
      <div class="blog-slider__wrp swiper-wrapper" style="font-size: 1em; text-overflow: ellipsis;">
        <div class="blog-slider__item swiper-slide">
          <div class="blog-slider__img">
            <img :src="post?.image_preview" alt="">
          </div>
          <div class="blog-slider__content" >
            <span class="blog-slider__code">{{ formatDate }}</span>
            <div class="blog-slider__title">{{ post?.title }}</div>
            <div class="blog-slider__text">{{ post?.short }}</div>
            <nuxt-link class="blog-slider__button" :to="`/blog/${post?.id}`" @click.native="getPost(post)">Узнать
              больше</nuxt-link>
          </div>
        </div>
      </div>
      <div class="blog-slider__pagination"></div>
    </div>

  </div>
</template>