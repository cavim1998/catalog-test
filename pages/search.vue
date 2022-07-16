<template>
  <div class="container pb-5">
    <cardItem />
  </div>
</template>

<script>
import cardItem from '@/components/cardItemWithPagination'
export default {
  components: {
    cardItem,
  },
  data() {
    return {
      bestItem: [],
    }
  },
  computed: {},
  created() {},
  methods: {},
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
