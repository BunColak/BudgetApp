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

      <button type="submit" class="uk-button uk-button-primary">
        Add Subsciption
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      amount: 0,
      recurrence: 1
    };
  },
  methods: {
    addSubscibtion() {
      // add new to firebase with data
      console.log("Added the thing");
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
