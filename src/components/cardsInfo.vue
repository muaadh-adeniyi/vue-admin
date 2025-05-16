<template>
  <div class="info-card">
    <div class="card-content">
      <h4 class="card-title">{{title}}</h4>
      <h5 class="card-value">{{value}}</h5>
    </div>
  </div>
</template>

<script setup>

defineProps({
  title: String,
  value: [String, Number],
})

</script>

<style lang="scss" scoped>
.info-card {
  width: 200px;
  height: 70px;
  background-color: lightblue; 
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08); 
  display: flex;
  flex-direction: column;
  align-items: start; 
  justify-content: center; 
  padding: 15px;
  text-align: center;
}

.card-icon {
  font-size: 2rem; 
  color: #007bff; 
  margin-bottom: 8px;
}

.card-title {
  font-size: 1rem;
  color: #555;
  margin-bottom: 2px;
  font-weight: 500;
}

.card-value {
  font-size: 1.6rem;
  font-weight: bold;
  color: #333;
  margin-top: 0;
}
</style>