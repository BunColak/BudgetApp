<template>
  <div class="home"><budget :bills="bills" :salary="salary"></budget></div>
</template>

<script>
import Budget from "../components/Budget";
import firebase from "../firebase.js";

const database = firebase.database();

export default {
  name: "home",
  components: {
    Budget
  },
  data() {
    return {
      salary: 0,
      bills: []
    };
  },
  created() {
    database.ref("users/1/salary").on("value", snapshot => {
      this.salary = snapshot.val();
    });

    database.ref("users/1/bills").on("value", snapshot => {
      const bills = [];
      snapshot.forEach(childSnapshot => {
        const billDetails = childSnapshot.val();
        bills.push({
          id: childSnapshot.key,
          name: billDetails.name,
          amount: Number(billDetails.amount),
          recursIn: Number(billDetails.recursIn) || 1,
          startDate: Number(billDetails.startDate)
        });
      });
      this.bills = bills;
    });
  }
};
</script>
