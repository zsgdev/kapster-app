export const usePostStore = defineStore('posts', {
    state: () => ({
        posts: [],
        selectedPost: []
    }),
    getters: {
      doubleCount: (state) => state.posts,
    },
    actions: {
      changedPosts(posts: any) {
        this.posts = posts
      },
      changeSelectedPost(selectedPost: any) {
        this.selectedPost = selectedPost
      },
    },
  })