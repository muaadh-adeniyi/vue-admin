<template>
  <div class="medboard">
    <VueCal class="medboard-calender"
    style="height: 500px;" 
    default-view = "month"
    />
  </div>
</template>

<script setup>
import { VueCal } from 'vue-cal'
import 'vue-cal/style'

</script>

<style lang="scss" scoped>

.medboard {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  font-family: 'Inter', sans-serif;
   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }


</style>
