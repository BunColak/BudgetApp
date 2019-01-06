<template>
  <div class="bill-details">{{ name }}</div>
</template>

<style lang="less" scoped></style>

<script>
import firebase from "../firebase";

const database = firebase.database();

export default {
  data() {
    return {
      id: "",
      name: "",
      amount: "",
      recursIn: "",
      startDate: ""
    };
  },
  created() {
    this.id = this.$route.params.id;

    database.ref("users/1/bills/" + this.id).on("value", snapshot => {
      const billDetails = snapshot.val();
      if (billDetails) {
        this.name = billDetails.name;
        this.amount = Number(billDetails.amount);
        this.recursIn = Number(billDetails.recursIn) || 1;
        this.startDate = Number(billDetails.startDate);
      }
    });
  }
};
</script>
