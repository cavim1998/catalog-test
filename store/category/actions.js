export default {
  list(_context) {
    return this.$axios.get(`/products/categories`)
  },
  getById(_context, id) {
    return this.$axios.get(`/products/category/${id}`)
  },
}
