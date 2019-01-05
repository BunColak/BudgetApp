<template>
  <div>
    <div class="bill-list">
      <bill-list-item
        v-for="bill in bills"
        v-bind="bill"
        :key="bill.id"
      ></bill-list-item>
    </div>
    <router-link to="/addSubscription">
      <button class="uk-button uk-button-primary">Add new subscription</button>
    </router-link>
    <div class="uk-alert-danger" uk-alert>
      <p>
        Total this month: <strong>{{ monthlyTotalBill }}₺</strong>
      </p>
    </div>
  </div>
</template>

<style lang="less" scoped>
.bill-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  grid-gap: 15px;
}

button {
  margin-top: 15px;
}
</style>

<script>
import BillListItem from "./BillListItem";
import { differenceInCalendarMonths } from "date-fns";

export default {
  components: {
    BillListItem
  },
  props: {
    bills: {
      type: Array,
      required: true
    }
  },
  computed: {
    monthlyTotalBill() {
      return this.bills.reduce((total, bill) => {
        if (bill.recursIn == 1 || bill.recursIn == undefined) {
          return total + bill.amount;
        } else {
          if (differenceInCalendarMonths(Date.now(), this.startDate) < 1) {
            return total + bill.amount;
          } else {
            return total;
          }
        }
      }, 0);
    }
  },
  methods: {
    willOccurThisMonth(bill) {
      return (
        bill.recursIn == 1 ||
        bill.recursIn == undefined ||
        differenceInCalendarMonths(Date.now(), bill.startDate) < 1
      );
    }
  }
};
</script>
