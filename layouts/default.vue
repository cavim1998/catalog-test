<template>
  <div>
    <div style="height: 50px" class="bg-info mb-3" />
    <div style="height: 195px">
      <b-row align-v="center" class="w-100">
        <b-col cols="12" lg="4">
          <div class="text-center">
            <input v-model="textSearch" type="text" />
            <input type="button" value="Search" />
          </div>
        </b-col>
        <b-col cols="12" lg="4" class="text-center">
          <p style="font-size: 40px; font-weight: 200">Catalog</p>
        </b-col>
        <b-col cols="12" lg="4" class="d-sm-none"></b-col>
      </b-row>
      <!-- <div class="navbar">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#" @click="goTo('/')">Home</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </div> -->

      <!-- <b-navbar toggleable="lg" type="light" variant="light">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="mx-auto">
            <b-nav-item href="#" @click="goTo('/')">Home</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar> -->
      <div
        class="d-flex bg-light justify-content-center mt-3"
        style="height: 45px"
      >
        <div class="menuNavbar" @click="goTo('/')">Home</div>
        <div class="menuNavbar dropdown-toggle" @click="goTo('/category')">
          Category
        </div>
        <div class="dropdown">
          <button
            class="btn-success btn dropdown-toggle"
            type="button"
            data-toggle="dropdown"
          >
            Click on me
          </button>
          <div class="dropdown-menu" style="z-index: 1">
            <a href="#" class="dropdown-item">Cats</a>
            <a href="#" class="dropdown-item">Dogs</a>
            <a href="#" class="dropdown-item">Rabbits</a>
            <a href="#" class="dropdown-item">Alpacas</a>
          </div>
        </div>
      </div>
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textSearch: null,
    }
  },
  methods: {
    goTo(url) {
      this.$router.push(url)
    },
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

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
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
</style>
