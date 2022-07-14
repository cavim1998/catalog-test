export default async function (context) {
  if (context.store.state.app.items.length === 0) {
    const getList = (await context.$axios.get('/products')).data
    context.store.commit('app/setItem', getList)
  }
}
