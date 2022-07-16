<template>
  <div class="container pb-5">
    <customLoading :value="loading" />
    <carousel :list="bestItem" />
    <h4 class="mt-5 text-left">Popular Items</h4>
    <cardItem />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import cardItem from '@/components/cardItemWithPagination'
import carousel from '@/components/carousel'
export default {
  components: {
    cardItem,
    carousel,
  },
  data() {
    return {
      bestItem: [],
    }
  },
  computed: {
    ...mapState({
      items: (state) => state.app.items,
      loading: (state) => state.app.loading,
    }),
  },
  created() {
    const filterItem = this.$_.sortBy(this.items, (item) => {
      return item.rating.count && item.rating.rate
    }).reverse()
    this.bestItem = [filterItem[0], filterItem[1], filterItem[2]]
  },
  methods: {},
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
