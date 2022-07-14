export default {
  list(_context) {
    return this.$axios.get(`/products`)
  },
  getById(_context, id) {
    return this.$axios.get(`/products/${id}`)
  },
}
