<template>
  <div>
    <div
      v-if="store.item.length !== 0"
      class="d-flex flex-wrap align-items-center justify-content-around"
    >
      <div v-for="g of store.item" :key="g.id" class="my-2">
        <div
          class="cs-card p-3"
          style="height: 400px; width: 300px"
          @click="goTo(g.id)"
        >
          <img :src="g.image" height="270" class="mb-3" />
          <span class="text-truncate">{{ g.title }}</span>
          <span>${{ g.price }}</span>
          <StarRating
            v-model="g.rating.rate"
            :increment="0.5"
            :round-start-rating="false"
            :star-size="20"
            :glow="5"
            read-only
            class="mx-auto"
          />
        </div>
      </div>
    </div>
    <h5 v-else class="text-center">Tidak ada data</h5>
    <b-pagination
      v-if="totalItem > perPage"
      v-model="currentPage"
      :total-rows="totalItem"
      :per-page="perPage"
      class="mx-auto mt-2"
    />
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import StarRating from 'vue-star-rating'
export default {
  components: { StarRating },
  props: {
    isCategory: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      store: {
        item: [],
      },
      totalItem: 0,
      perPage: 9,
      currentPage: 1,
    }
  },
  computed: {
    ...mapState({
      items: (state) => state.app.items,
      isSearch: (state) => state.app.isSearch,
      searchKey: (state) => state.app.searchKey,
      category: (state) => state.app.category,
      loading: (state) => state.app.loading,
    }),
  },
  watch: {
    currentPage: {
      immediate: true,
      handler() {
        this.getList()
      },
    },
    isSearch: {
      immediate: true,
      handler(newVal) {
        if (newVal) this.getList()
      },
    },
    category: {
      immediate: true,
      handler() {
        this.getList()
      },
    },
  },
  created() {
    this.totalItem = this.items.length
    this.getList()
  },
  methods: {
    goTo(id) {
      this.$router.push({
        name: 'detail',
        query: {
          id,
        },
      })
    },
    getList() {
      if (this.totalItem === 0) return
      this.setLoading()
      const startNum = this.currentPage * this.perPage - this.perPage
      const endNum = this.currentPage * this.perPage - 1
      this.store.item = []
      if (!this.isSearch) {
        if (this.isCategory && this.category) {
          this.getById(this.category).then((response) => {
            const data = response.data
            this.store.item = data
            this.totalItem = data.length
            this.setLoading()
          })
        } else {
          const setPopular = this.$_.sortBy(this.items, (item) => {
            return item.rating.count
          })
          for (let i = startNum; i <= endNum; i++) {
            if (setPopular[i]) this.store.item.push(setPopular[i])
          }
          this.setLoading()
        }
      } else {
        this.store.item = this.items.filter((s) =>
          s.title.toLowerCase().includes(this.searchKey.toLowerCase())
        )
        this.totalItem = this.store.item.length
        this.setSearch(false)
        this.setLoading()
      }
    },
    ...mapActions({
      getById: 'category/getById',
    }),
    ...mapMutations({
      setSearch: 'app/setSearch',
      setLoading: 'app/setLoading',
    }),
  },
}
</script>
