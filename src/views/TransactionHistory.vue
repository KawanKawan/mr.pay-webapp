<template>
  <!-- /.transaction history-->
  <section class="section" style="padding-top: 0">
    <div class="container is-fluid">
      <h2 class="subtitle is-4 has-text-weight-semibold has-text-black">
        Transaction History
      </h2>
      <b-table :data="this.allPayments" :columns="columns"></b-table>
    </div>
  </section>
  <!-- /.transaction history-->
</template>
<script>
export default {
  name: "TransactionHistory",

  data() {
    return {
      searching: true,
      allPayments: {},
      allPaymentss: [],
      paymentToPay: {},
      paymentToReceive: {},
      user: {},

      columns: [
        {
          field: "amount",
          label: "Amount",
          centered: true,
        },
        {
          field: "payee_name",
          label: "Payee Name",
          centered: true,
        },
        {
          field: "payer_name",
          label: "Payer Name",
          centered: true,
        },
        {
          field: "date",
          label: "Date",
          centered: true,
        },
        {
          field: "event_name",
          label: "Event",
          centered: true,
        },
      ],
    };
  },
  created() {
    this.getPayment();
  },
  computed: {},
  methods: {
    // get all transactions made by the user
    async getPayment() {
      try {
        const response = await fetch(
          `http://localhost:3000/payment/1078844444`,

          {
            method: "GET",
          }
        ).then((response) => response.json());
        this.paymentToPay = response.paymentToPay;
        this.paymentToReceive = response.paymentToReceive;
        this.allPayments = response.paymentToPay;

        // to concat 2 arrays (paymentToPay and paymentToReceive) to get transactions involving user
        this.allPayments.push.apply(this.allPayments, this.paymentToReceive);
        this.allPaymentss = Object.values(this.allPayments);

        // console.log("pay", this.paymentToPay, this.paymentToReceive);
        console.log("hey", this.allPaymentss);
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

.is-paddingless-horizontal {
  padding-left: 0;
  padding-right: 0;
}

@media (max-width: 672px) {
  :root {
    font-size: 70%;
  }
}
</style>
