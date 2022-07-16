export default {
  setItem(state, list) {
    state.items = list
  },
  setSearch(state, val) {
    state.isSearch = val
  },
  setSearchKey(state, val) {
    state.searchKey = val
  },
  setCategory(state, val) {
    state.category = val
  },
  setLoading(state) {
    state.loading = !state.loading
  },
}
