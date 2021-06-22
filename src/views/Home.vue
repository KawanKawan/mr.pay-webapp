<template>
  <div>
    <!-- /. budget progress bar-->
    <section class="section" style="padding-top: 0">
      <div class="container">
        <h2
          class="
            subtitle
            is-4
            has-text-weight-semibold has-text-blac has-text-left
          "
        >
          Budget
        </h2>
        <p class="title is-size-4 has-text-info has-text-left">
          $150.40<span
            class="is-size-6 has-text-weight-light has-text-grey-dark"
          >
            left for this month</span
          >
        </p>
        <progress class="progress is-small is-info" value="45" max="100">
          45%
        </progress>
      </div>
    </section>
    <!-- /. budget progress bar-->

    <!-- /.information cards-->
    <section class="section" style="padding-top: 0">
      <div class="container">
        <div class="columns is-desktop">
          <div class="column">
            <div class="notification">
              <div class="center-column">
                <p class="subtitle is-size-6 has-text-weight-semibold">
                  People who owe you
                </p>
                <p class="title is-size-3 has-text-info">
                  9
                  <!-- <span class="is-size-7 has-text-weight-light has-text-grey-dark"> people</span> -->
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="notification">
              <div class="center-column">
                <p class="subtitle is-size-6 has-text-weight-semibold">
                  People you owe
                </p>
                <p class="title is-size-3 has-text-info">
                  4
                  <!-- <span class="is-size-7 has-text-weight-light has-text-grey-dark"> people</span> -->
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="notification">
              <div class="center-column">
                <p class="subtitle is-size-6 has-text-weight-semibold">
                  Total transactions
                </p>
                <p class="title is-size-3 has-text-info">
                  16<span
                    class="is-size-7 has-text-weight-light has-text-grey-dark"
                  >
                    (this month)</span
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="notification">
              <div class="center-column">
                <p class="subtitle is-size-6 has-text-weight-semibold">
                  Budget left
                </p>
                <p class="title is-size-3 has-text-info">
                  $200
                  <span
                    class="is-size-7 has-text-weight-light has-text-grey-dark"
                  >
                    (this month)</span
                  >
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="notification">
              <div class="center-column">
                <p class="subtitle is-size-6 has-text-weight-semibold">
                  Expenses
                </p>
                <p class="title is-size-3 has-text-info">
                  $2,345
                  <span
                    class="is-size-7 has-text-weight-light has-text-grey-dark"
                  >
                    (this year)</span
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- /.information cards -->

    <!-- /.transaction history-->
    <section class="section" style="padding-top: 0">
      <div class="container">
        <h2 class="subtitle is-4 has-text-weight-semibold has-text-black">
          Transaction History
        </h2>
        <table class="table is-fullwidth">
          <!-- <thead>
                    <tr>
                        <th><abbr title="Position">Pos</abbr></th>
                        <th>Event</th>
                        
                        <th>Payer</th>
                        <th>Payee</th>
                        <th>Payer</th>
                        <th>Payer</th>
                    </tr>
                </thead> -->

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
          </tbody>
        </table>
        <div class="has-text-centered">
          <router-link to="/TransactionHistory"
            ><a
              class="button is-info is-outlined is-rounded"
              href="file:///Users/jessicajacelyn/orbital/mrpay-webapp/views/TransactionHistory.html"
              >Show More</a
            ></router-link
          >
        </div>
      </div>
    </section>
    <!-- /.transaction history-->

    <!-- /.bar chart-->
    <!-- @todo: make chart scrollable for mobile decvices -->
    <section class="section" style="padding-top: 0">
      <div class="container">
        <div class="columns is-desktop is-centered">
          <chart
            id="chart"
            :type="'bar'"
            :data="data"
            :options="options"
          ></chart>
        </div>
      </div>
    </section>
    <!-- /.bar chart-->
  </div>
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

/* .chartWrapper {
  position: relative;
}

.chartWrapper > chart {
  position: absolute;
  left: 0;
  top: 0;
  pointer-events: none;
} */

.chartAreaWrapper {
  width: 1000px;
  overflow-x: scroll;
}

@media (max-width: 672px) {
  :root {
    font-size: 60%;
  }
}
</style>

<script>
// @ is an alias to /src
import Chart from "vue-bulma-chartjs";

export default {
  name: "Home",
  components: {
    Chart,
  },

  data() {
    return {
      data: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            label: "Income",
            data: [90, 40, 50, 70, 90, 40, 50, 70, 90, 40, 50, 70],
            backgroundColor: "#7792bd",
          },
          {
            label: "Expense",

            data: [50, 70, 40, 80, 50, 70, 40, 80, 50, 70, 40, 80],
            backgroundColor: "#a1b2d1",
          },
        ],
      },
      options: {
        segmentShowStroke: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  },
};
</script>
