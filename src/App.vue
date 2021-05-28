<template>
  <div id="app">
    <div id="nav">
      <!-- .navbar -->
      <section class="section">
        <nav class="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <router-link to="/">
              <img src="@/assets/mrpay.png" width="90" height="150" />
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
                        You still owe <strong>Ben</strong> for
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
              <a class="navbar-link"> Jessica </a>

              <div class="navbar-dropdown">
                <router-link to="/EditProfile">
                  <a class="navbar-item"> Edit Profile </a>
                </router-link>
                <a class="navbar-item"> Settings </a>
                <hr class="navbar-divider" />
                <a class="navbar-item"> Logout </a>
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
