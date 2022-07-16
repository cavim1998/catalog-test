<template>
  <div class="vld-parent">
    <vueLoading
      :active="loading"
      :can-cancel="false"
      :is-full-page="fullPage"
      background-color="#bdc3c7"
      :opacity="0.3"
      color="red"
      :height="100"
      :width="100"
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'
import vueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
export default {
  components: { vueLoading },
  props: {
    fullPage: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapState({
      loading: (state) => state.app.loading,
    }),
  },
}
</script>
