<template>
  <div class="mt-5">
    <customLoading :value="loading" />
    <b-row class="mx-auto" style="max-width: 1140px">
      <b-col sm="12" lg="6" class="text-center">
        <img :src="dataItem.image" alt="image item" height="455" />
      </b-col>
      <b-col sm="12" lg="6">
        <h1>{{ dataItem.title }}</h1>
        <h2>${{ dataItem.price }}</h2>
        <StarRating
          v-model="dataItem.rating.rate"
          :increment="0.5"
          :round-start-rating="false"
          :star-size="20"
          :glow="5"
          read-only
        />
        <p class="mt-4">{{ dataItem.description }}</p>
      </b-col>
    </b-row>
    <div class="mt-5 py-5">
      <h1 class="text-center mb-5">
        You may also be interested in the following product(s)
      </h1>
      <cardItem :list="interestedItems" />
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import StarRating from 'vue-star-rating'
import cardItem from '@/components/cardItem'
export default {
  components: {
    StarRating,
    cardItem,
  },
  data() {
    return {
      dataItem: {},
      interestedItems: [],
    }
  },
  computed: {
    ...mapState({
      items: (state) => state.app.items,
      loading: (state) => state.app.loading,
    }),
  },
  created() {
    const selectedId = parseInt(this.$route.query.id)
    const getItem = this.items.find((s) => s.id === selectedId)
    this.dataItem = getItem
    this.getById(this.dataItem.category).then((response) => {
      const data = response.data.filter((s) => s.id !== selectedId)
      if (data.length > 4) {
        while (this.interestedItems.length !== 4) {
          const getRandomNumber = Math.floor(
            Math.random() * (response.data.length - 1)
          )
          if (getRandomNumber !== selectedId) {
            const check = this.interestedItems.find(
              (s) => s.id === data[getRandomNumber].id
            )
            if (!check) this.interestedItems.push(data[getRandomNumber])
          }
        }
      } else {
        this.interestedItems = data
      }
    })
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
    ...mapActions({
      getById: 'category/getById',
    }),
  },
}
</script>
