<template>
  <div id="app">
    <div id="nav">
      <!-- .navbar -->
      <section class="section" style="padding-top: 1em">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <router-link to="/">
              <img src="@/assets/mrpay.png" class="image is-64x64" />
              <!-- @todo change to our own logo -->
            </router-link>

            <a
              role="button"
              class="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarMenu"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
              <div class="navbar-item dropdown is-hoverable">
                <div class="dropdown-trigger">
                  <button
                    class="button"
                    aria-haspopup="true"
                    aria-controls="dropdown-menu4"
                  >
                    <span class="icon is-small">
                      <i class="fas fa-bell" aria-hidden="true"></i>
                    </span>
                  </button>
                </div>
                <div class="dropdown-menu" id="dropdown-menu4" role="menu">
                  <div class="dropdown-content">
                    <div class="dropdown-item">
                      <p>
                        <strong>Jessica</strong> has paid for
                        <strong>Lunch at Orchard</strong>
                      </p>
                    </div>
                    <hr class="dropdown-divider" />
                    <div class="dropdown-item">
                      <p>
                        <strong>Ben</strong> created a new event
                        <strong>Dinner at Sentosa</strong>
                      </p>
                    </div>
                    <hr class="dropdown-divider" />
                    <div class="dropdown-item">
                      <p>
                        You still owe <strong>Claire</strong> for
                        <strong>Ice-skating</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link"> {{ this.user.name }} </a>

              <div class="navbar-dropdown">
                <router-link to="/EditProfile">
                  <a class="navbar-item"> Edit Profile </a>
                </router-link>
                <router-link to="/Settings">
                  <a class="navbar-item"> Settings </a>
                </router-link>
                <hr class="navbar-divider" />
                <div></div>
                <a class="navbar-item"> Logout </a>
              </div>
            </div>

            <div class="modal" v-bind:class="{ 'is-active': isShowModal }">
              <div
                class="modal-background"
                v-on:click="isShowModal = false"
              ></div>
              <div class="modal-card">
                <header class="modal-card-head">
                  <p class="modal-card-title">Modal title</p>
                  <button
                    class="delete"
                    aria-label="close"
                    v-on:click="isShowModal = false"
                  ></button>
                </header>
                <section class="modal-card-body">Modal Content</section>
                <footer class="modal-card-foot">
                  <button class="button" v-on:click="isShowModal = false">
                    Cancel
                  </button>
                </footer>
              </div>
            </div>
          </div>
        </nav>
      </section>
      <!-- /.navbar -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

<script>
export default {
  data() {
    return {
      searching: true,
      user: {},
      data: {
        isShowModal: false,
      },
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    async getUser() {
      try {
        const response = await fetch(
          `http://localhost:3000/user/12345678`,

          {
            method: "GET",
          }
        ).then((response) => response.json());
        console.log("hahaha");
        this.user = response.user;
        console.log("user", this.user);

        // if (!response.ok) throw new Error(response.error);
        // Set response onto search_result obj of this vue component for auto UI update
        // Remove loader once search result is received
        this.searching = false;
      } catch (error) {
        this.searching = false;
        console.error(error);
        alert("Something went wrong!");
      }
    },
  },
};
</script>
