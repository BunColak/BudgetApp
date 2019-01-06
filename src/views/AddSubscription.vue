<template>
  <div class="add-form uk-card uk-card-default">
    <form @submit.prevent="addSubscibtion">
      <label class="uk-text-emphasis" for="name">Name</label>
      <input
        v-model="name"
        class="uk-input"
        type="text"
        name="name"
        id="name"
        required
      />

      <label class="uk-text-emphasis" for="amount">Amount</label>
      <input
        v-model="amount"
        class="uk-input"
        type="number"
        name="amount"
        id="amount"
        required
      />

      <label class="uk-text-emphasis" for="recurrence"
        >Recurrence (in months)</label
      >
      <input
        v-model="recurrence"
        class="uk-input"
        type="number"
        name="recurrence"
        id="recurrence"
        required
      />

      <label class="uk-text-emphasis" for="date">Start Date</label>
      <datepicker
        input-class="uk-input"
        id="date"
        v-model="startDate"
      ></datepicker>

      <button type="submit" class="uk-button uk-button-primary">
        Add Subsciption
      </button>
    </form>
  </div>
</template>

<script>
import firebase from "../firebase.js";
import Datepicker from "vuejs-datepicker";
import { format } from "date-fns";

const database = firebase.database();

export default {
  components: {
    Datepicker
  },
  data() {
    return {
      name: "",
      amount: 0,
      recurrence: 1,
      startDate: Date.now()
    };
  },
  methods: {
    addSubscibtion() {
      console.log();

      const bill = {
        name: this.name.trim(),
        amount: this.amount,
        recursIn: this.recurrence,
        startDate: format(this.startDate, "x")
      };
      database
        .ref("users/1/bills")
        .push(bill)
        .then(() => {
          this.$router.push("/");
        });
    }
  }
};
</script>

<style lang="less" scoped>
.add-form {
  width: 80%;
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 30px;

  .label-group {
    margin-top: 20px;
  }

  button {
    margin-top: 20px;
  }
}
</style>
