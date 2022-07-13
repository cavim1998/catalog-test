<template>
  <div class="container">
    <div class="d-flex flex-wrap align-items-center justify-content-around">
      <div v-for="g of listItems" :key="g.id" class="my-2">
        <div class="cs-card p-3" style="height: 400px; width: 300px">
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
import { mapActions } from 'vuex'
import StarRating from 'vue-star-rating'
export default {
  components: {
    StarRating,
  },
  data() {
    return {
      listItems: [],
    }
  },
  created() {
    this.listProduct().then((response) => {
      const data = response.data
      this.listItems = data
    })
  },
  methods: {
    ...mapActions({
      listProduct: 'product/list',
    }),
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.cs-card {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border-radius: 0.25rem;
}

.cs-card:hover {
  cursor: pointer;
  border: 1px solid grey;
}
</style>
