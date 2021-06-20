<template>
  <!-- /.form -->
  <section class="section" style="padding-top: 0">
    <div class="container is-fluid">
      <h2 class="title is-3 has-text-weight-semibold has-text-black">
        Notification Settings
      </h2>

      <div class="field is-horizontal">
        <label class="label has-text-left"
          >Receive Daily Reminder to Pay?</label
        >
        <div class="field-body">
          <div class="field">
            <div class="control has-text-right">
              <label class="radio">
                <input type="radio" name="personal" checked />
                Yes
              </label>
              <label class="radio">
                <input type="radio" name="personal" />
                No
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <label class="label has-text-left">Send Reminders to Payee?</label>
        <div class="field-body">
          <div class="field">
            <div class="control has-text-right">
              <label class="radio">
                <input type="radio" name="request" checked />
                Yes
              </label>
              <label class="radio">
                <input type="radio" name="request" />
                No
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label has-text-left">Reminder Frequency</label>
        </div>
        <div class="field has-addons">
          <p class="control">
            <input class="input" type="text" placeholder="2" />
          </p>
          <p class="control">
            <a class="button is-static"> days </a>
          </p>
        </div>
      </div>

      <div class="field is-grouped is-grouped-centered">
        <p class="control">
          <a class="button is-info"> Save </a>
        </p>
        <p class="control">
          <a class="button is-light"> Cancel </a>
        </p>
      </div>

      <!-- <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label has-text-left">Department</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control has-text-right">
              <div class="select">
                <select>
                  <option>Business development</option>
                  <option>Marketing</option>
                  <option>Sales</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div> -->
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
