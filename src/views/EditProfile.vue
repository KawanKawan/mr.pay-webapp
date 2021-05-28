<template>
  <!-- /.form -->
  <section class="section" style="padding-top: 0">
    <div class="container is-fluid">
      <div class="field">
        <h2 class="title is-3 has-text-weight-semibold has-text-black">
          Edit Profile
        </h2>

        <div class="field">
          <label class="label">Preferred payment method</label>
          <div class="control">
            <div class="select">
              <select>
                <option>PayNow</option>
                <option>PayLah!</option>
                <option>Google Pay</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Custom Message</label>
          <div class="control">
            <textarea
              class="textarea has-fixed-size is-info"
              placeholder="Hii, do not forget to transfer me!"
            ></textarea>
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-info is-outlined" data-target="#modal">
              Submit
            </button>
          </div>
          <div id="modal" class="modal">
            <div class="modal-background"></div>
            <div class="modal-content">
              <div class="box">
                <article class="media">
                  <div class="media-left">
                    <figure class="image is-64x64">
                      <img
                        src="https://www.tutorialspoint.com/bootstrap/images/64.jpg"
                        alt="Image"
                      />
                    </figure>
                  </div>
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>Will Smith</strong>
                        <small>@wsmith</small>
                        <small>31m</small>
                        <br />
                        This is simple text. This is simple text. This is simple
                        text. This is simple text.
                      </p>
                    </div>
                    <nav class="level">
                      <div class="level-left">
                        <a class="level-item">
                          <span class="icon is-small">
                            <i class="fa fa-reply"></i>
                          </span>
                        </a>
                        <a class="level-item">
                          <span class="icon is-small">
                            <i class="fa fa-retweet"></i>
                          </span>
                        </a>
                      </div>
                    </nav>
                  </div>
                </article>
              </div>
            </div>
            <button class="modal-close is-large" aria-label="close"></button>
          </div>
          <div class="control">
            <router-link to="/">
              <a class="button is-info is-outlined">Cancel</a>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- /.form -->
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.is-paddingless-horizontal {
  padding-left: 0;
  padding-right: 0;
}

@media (max-width: 672px) {
  :root {
    font-size: 70%;
  }
}
.container {
  height: 800px;
  width: 800px;
  display: flex;
  flex-direction: column;
}
</style>

<script>
// @ is an alias to /src

export default {
  name: "EditProfile",
  components: {},
};
</script>
