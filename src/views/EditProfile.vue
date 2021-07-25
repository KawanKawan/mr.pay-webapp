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

        <!-- <b-field label="Required">
          <b-select required>
            <option value="PayNow" :selected="isPayNow">PayNow</option>
            <option value="PayLah!" :selected="isPayLah">PayLah!</option>
            <option value="Google Pay" :selected="isGoogle">Google Pay</option>
          </b-select>
        </b-field> -->

        <b-field label="Message">
          <b-input
            maxlength="100"
            type="textarea"
            v-model="userMessage"
          ></b-input>
        </b-field>

        <div class="field is-grouped">
          <div class="control">
            <button
              class="button is-info is-outlined"
              @click="submitModal = true"
            >
              Submit
            </button>
          </div>
          <b-modal v-model="submitModal" :width="400">
            <div class="card">
              <div class="card-content">
                <p class="is-size-4">Confirm all changes made?</p>
                <p class="is-size-6">click outside the box to cancel</p>
                <!-- <b-button label="Cancel" @click="$emit('close')" /> -->
                <b-button style="padding-top: 2" label="Confirm" />
              </div>
            </div>
          </b-modal>

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

<script>
export default {
  name: "EditProfile",
  data() {
    return {
      submitModal: false,
      userMessage: "",
      dd: "PayLah",
      isPayNow: false,
      isPayLah: true,
      isGoogle: false,
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    // get user details (custom message and payment method)
    async getUser() {
      try {
        const response = await fetch(
          `http://localhost:3000/user/1078844444`,

          {
            method: "GET",
          }
        ).then((response) => response.json());
        this.userMessage = response.user.message;

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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
.textarea {
  resize: none !important;
}
</style>
