<template>
  <div>
    <div class="d-flex flex-wrap align-items-center justify-content-around">
      <div v-for="g of list" :key="g.id" class="my-2">
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
  </div>
</template>
<script>
import StarRating from 'vue-star-rating'
export default {
  components: { StarRating },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
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
  },
}
</script>
