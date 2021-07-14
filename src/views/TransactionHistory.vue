<template>
  <!-- /.transaction history-->
  <section class="section" style="padding-top: 0">
    <div class="container is-fluid">
      <h2 class="subtitle is-4 has-text-weight-semibold has-text-black">
        Transaction History
      </h2>
      <b-table :data="this.allPayments" :columns="columns"></b-table>

      <!-- <table class="table is-fullwidth">
        <tbody>
          <tr class="is-selected has-background-light has-text-grey-dark">
            <th>-$21.05</th>
            <td><strong>Jessica</strong><br />Lunch at Sentosa</td>
            <td>06/05/2021</td>
            <td>by PayNow</td>
          </tr>
          <tr class="is-selected has-background-light has-text-grey-dark">
            <th>-$75.05</th>
            <td><strong>Bob</strong><br />Brunch at Orchard</td>
            <td>06/04/2021</td>
            <td>by PayNow</td>
          </tr>
          <tr>
            <th>$59.99</th>
            <td><strong>Tan</strong><br />Wild Wild West</td>
            <td>06/12/2020</td>
            <td>by PayNow</td>
          </tr>
          <tr>
            <th>$92.00</th>
            <td><strong>Kate</strong><br />Hiking day</td>
            <td>04/12/2020</td>
            <td>by PayLah!</td>
          </tr>
          <tr class="is-selected has-background-light has-text-grey-dark">
            <th>-$20.40</th>
            <td><strong>Smith</strong><br />Dinner at Bugis</td>
            <td>11/08/2020</td>
            <td>by PayPal</td>
          </tr>
          <tr>
            <th>$45.87</th>
            <td><strong>Jane</strong><br />Gardens by the Bay</td>
            <td>02/02/2020</td>
            <td>by PayNow</td>
          </tr>
          <tr>
            <th>$59.99</th>
            <td><strong>Tan</strong><br />Wild Wild West</td>
            <td>06/12/2020</td>
            <td>by PayNow</td>
          </tr>
          <tr>
            <th>$92.00</th>
            <td><strong>Kate</strong><br />Hiking day</td>
            <td>04/12/2020</td>
            <td>by PayLah!</td>
          </tr>
          <tr class="is-selected has-background-light has-text-grey-dark">
            <th>-$20.40</th>
            <td><strong>Smith</strong><br />Dinner at Bugis</td>
            <td>11/08/2020</td>
            <td>by PayPal</td>
          </tr>
          <tr>
            <th>$45.87</th>
            <td><strong>Jane</strong><br />Gardens by the Bay</td>
            <td>02/02/2020</td>
            <td>by PayNow</td>
          </tr>
        </tbody>
      </table> -->
      <nav class="pagination" role="navigation" aria-label="pagination">
        <a class="pagination-previous">Previous</a>
        <a class="pagination-next">Next page</a>
        <ul class="pagination-list">
          <li>
            <a class="pagination-link" aria-label="Goto page 1">1</a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 45">4</a>
          </li>
          <li>
            <a
              class="pagination-link is-current"
              aria-label="Page 46"
              aria-current="page"
              >5</a
            >
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 47">6</a>
          </li>
          <li>
            <span class="pagination-ellipsis">&hellip;</span>
          </li>
          <li>
            <a class="pagination-link" aria-label="Goto page 86">12</a>
          </li>
        </ul>
      </nav>
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

        // console.log("pay", this.paymentToPay, this.paymentToReceive);
        // console.log("hey", this.allPayments);
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
