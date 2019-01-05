<template>
  <div
    class="budget-list-item uk-card uk-card-default uk-card-body uk-card-small uk-card-hover"
  >
    <h4 class="uk-card-title">{{ name }}</h4>
    <div class="bill-details">
      <div class="info">
        <p class="uk-text-muted">Subscribed at</p>
        <p class="uk-text-emphasis">{{ startDateString }}</p>
      </div>

      <div class="info">
        <p class="uk-text-muted">Recurs</p>
        <p class="uk-text-emphasis">{{ recursInString }}</p>
      </div>

      <div class="info">
        <p class="uk-text-muted">Yearly cost</p>
        <p class="uk-text-emphasis">{{ yearlyCost }}₺</p>
      </div>

      <div
        v-if="willOccurThisMonth"
        class="uk-align-right uk-label uk-label-danger"
      >
        <strong>{{ amount }}₺</strong>
      </div>
    </div>
  </div>
</template>

<style lang="less">
.budget-list-item {
  &:hover {
    cursor: pointer;
  }

  p {
    margin: 0;
  }

  .info {
    margin-bottom: 10px;
  }
}
</style>

<script>
import { format, differenceInCalendarMonths } from "date-fns";

export default {
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    startDate: {
      type: Number,
      required: true
    },
    recursIn: {
      type: Number,
      default: 1
    }
  },
  computed: {
    startDateString() {
      return format(this.startDate, "DD MMMM YYYY");
    },
    yearlyCost() {
      const yearlyCost = (this.amount / this.recursIn) * 12;
      return yearlyCost - this.amount < 0.0001 ? this.amount : yearlyCost;
    },
    recursInString() {
      const inYears = this.recursIn / 12;
      if (inYears % 1 == 0) {
        return inYears == 1 ? "Yearly" : "Every " + inYears + " years";
      } else {
        return this.recursIn == 1
          ? "Monthly"
          : "Every " + this.recursIn + " months";
      }
    },
    willOccurThisMonth() {
      return (
        this.recursIn == 1 ||
        this.recursIn == undefined ||
        differenceInCalendarMonths(Date.now(), this.startDate) / 12 < 1
      );
    }
  }
};
</script>
