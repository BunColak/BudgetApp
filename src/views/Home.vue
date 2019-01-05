<template>
  <div class="home"><budget :bills="bills" :salary="salary"></budget></div>
</template>

<script>
import Budget from "../components/Budget";

let billId = 0;

export default {
  name: "home",
  components: {
    Budget
  },
  data() {
    return {
      salary: 0,
      bills: [
        {
          id: ++billId,
          name: "Spotify",
          startDate: Date.now(),
          amount: 14.99
        },
        {
          id: ++billId,
          name: "VPN",
          startDate: Date.now() - 2629743000,
          amount: 144.99,
          recursIn: 12
        }
      ]
    };
  }
};
</script>
