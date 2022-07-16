<template>
  <div>
    <h4 class="text-left">Best Seller</h4>
    <Flickity ref="flickity" :options="flickityOptions">
      <div
        v-for="g of list"
        :key="g.id"
        class="carousel-cell"
        @click="goTo(g.id)"
      >
        <img
          :src="g.image"
          alt="image item"
          class="position-relative"
          style="height: 300px"
        />
        <div class="backText font-weight-bold">
          {{ g.title }}
        </div>
      </div>
    </Flickity>
  </div>
</template>
<script>
import Flickity from 'vue-flickity'
export default {
  components: {
    Flickity,
  },
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      flickityOptions: {
        draggable: false,
        autoPlay: true,
      },
    }
  },
  methods: {
    next() {
      this.$refs.flickity.next()
    },

    previous() {
      this.$refs.flickity.previous()
    },
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
<style lang="scss" scoped>
.backText {
  position: absolute;
  background-color: rgba($color: #dfe6e9, $alpha: 0.6);
  bottom: 100px;
  margin-bottom: -100px;
  height: 100px;
  width: 100%;
  font-size: 24px;
}

.slide:hover {
  cursor: pointer;
}

.flickity-page-dots {
  bottom: -22px;
}
/* dots are lines */
.flickity-page-dots .dot {
  height: 4px;
  width: 40px;
  margin: 0;
  border-radius: 0;
}

.carousel-cell {
  width: 100%; /* full width */
  margin-right: 10px;
}
</style>
