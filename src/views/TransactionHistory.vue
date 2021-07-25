<template>
  <!-- /.transaction history-->
  <section class="section" style="padding-top: 0">
    <div class="container is-fluid">
      <h2 class="subtitle is-4 has-text-weight-semibold has-text-black">
        Transaction History
      </h2>
      <b-table :data="this.allPayments" :columns="columns">
        <!-- <b-table-column field="payer_name" label="Last Name" sortable>
          {{ payer_name }}
        </b-table-column> -->
      </b-table>
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
      allPayments: [],
      allPyamentss: {},
      paymentToPay: {},
      paymentToReceive: {},
      user: {},

      columns: [
        {
          field: "amount",
          label: "Amount",
          centered: true,
          sortable: true,
          class: "classObject",
        },
        {
          field: "payee_name",
          label: "Payee Name",
          sortable: true,
          centered: true,
        },
        {
          field: "payer_name",
          label: "Payer Name",
          sortable: true,
          centered: true,
        },
        {
          field: "date",
          label: "Date",
          sortable: true,
          centered: true,
        },
        {
          field: "event_name",
          label: "Event",
          sortable: true,
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
        this.allPaymentss = response.paymentToPay;

        // to concat 2 arrays (paymentToPay and paymentToReceive) to get transactions involving user
        this.allPaymentss.push.apply(this.allPaymentss, this.paymentToReceive);
        this.allPayments = Object.values(this.allPaymentss);

        // function to convet epoch time to normal local date and format it
        for (var j = 0; j < this.allPayments.length; j++) {
          var date = this.allPayments[j].date;
          console.log(this.allPayments[j]);
          // has to times 1000 cause it's in seconds
          var d = new Date(date._seconds * 1000);

          // formatting to dd/mm/yyyy
          var dd = d.getDate();
          var mm = d.getMonth() + 1;
          var yyyy = d.getFullYear();
          if (dd < 10) {
            dd = "0" + dd;
          }
          if (mm < 10) {
            mm = "0" + mm;
          }
          var dateFormatted = dd + "/" + mm + "/" + yyyy;
          this.allPayments[j].date = dateFormatted;
        }

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
