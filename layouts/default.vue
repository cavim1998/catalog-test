<template>
  <div>
    <div class="height: 245px">
      <div style="height: 50px" class="bg-info pb-3" />
      <div style="height: 195px">
        <b-row align-v="center" class="w-100 cs-bg-1 m-0 pt-3">
          <b-col cols="12" lg="4">
            <div class="text-center">
              <input
                v-model="textSearch"
                type="text"
                @keyup.enter="goToSearch"
              />
              <input type="button" value="Search" @click="goToSearch" />
            </div>
          </b-col>
          <b-col cols="12" lg="4" class="text-center">
            <p style="font-size: 40px; font-weight: 200">Catalog</p>
          </b-col>
          <b-col cols="12" lg="4" class="d-sm-none"></b-col>
        </b-row>
        <div
          class="d-flex cs-bg-1 justify-content-center mb-4 border-top"
          style="height: 45px"
        >
          <div class="menuNavbar" @click="goTo('/')">Home</div>
          <div class="menuNavbar" @click="goTo('/category')">Category</div>
        </div>
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      textSearch: null,
    }
  },
  methods: {
    goTo(url) {
      this.setSearchKey(null)
      this.textSearch = null
      this.$router.push(url)
    },
    goToSearch() {
      this.setSearch(true)
      this.setSearchKey(this.textSearch)
      this.$router.push('/search')
    },
    ...mapMutations({
      setSearch: 'app/setSearch',
      setSearchKey: 'app/setSearchKey',
    }),
  },
}
</script>

<style lang="scss" scoped>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.menuNavbar {
  width: 100px;
  text-align: center;
  padding-top: 0.5rem;
  height: 100%;
  font-weight: 800;
}

.menuNavbar:hover {
  cursor: pointer;
  color: #2f93a3;
}

.cs-bg-1 {
  background-color: #f7f7f7;
}
</style>
