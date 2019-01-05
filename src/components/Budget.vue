<template>
  <bill-list :bills="bills" :salary="salary"></bill-list>
</template>

<script>
import BillList from "./BillList";

export default {
  components: {
    BillList
  },
  props: {
    salary: {
      type: Number,
      required: true
    },
    bills: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
