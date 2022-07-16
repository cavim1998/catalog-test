<template>
  <div class="container">
    <customLoading :value="loading" />
    <b-form-select
      v-model="selectedCategory"
      :options="store.category"
      class="mb-3"
    />
    <cardItem is-category />
  </div>
</template>
<script>
import { mapActions, mapState, mapMutations } from 'vuex'
import cardItem from '@/components/cardItemWithPagination'
export default {
  components: {
    cardItem,
  },
  data() {
    return {
      selectedCategory: null,
      store: {
        category: [],
      },
    }
  },
  computed: {
    ...mapState({
      category: (state) => state.app.category,
      loading: (state) => state.app.loading,
    }),
  },
  watch: {
    selectedCategory: {
      immediate: true,
      handler(newVal) {
        this.setCategory(newVal)
      },
    },
  },
  created() {
    this.list().then((response) => {
      const data = response.data
      this.store.category = data
    })
  },
  methods: {
    ...mapActions({
      list: 'category/list',
    }),
    ...mapMutations({
      setCategory: 'app/setCategory',
    }),
  },
}
</script>
