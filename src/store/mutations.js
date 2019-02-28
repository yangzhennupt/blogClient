export const MUTATIONS = {
  filterBlog (state, type) {
    state.blogType = type
  },
  getBlog (state, articles) {
    state.articleList = articles
  }
}
