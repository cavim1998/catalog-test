export default {
  list(_context) {
    return this.$axios.get(`/products`)
  },
}
