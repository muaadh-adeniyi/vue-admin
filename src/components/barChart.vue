<template>
  <div class="graph-section">
    <h2 class="graph-title">Overview</h2>
    <div class="graph-container">
      <canvas ref="chartCanvas"></canvas>
    </div>
    <div class="metrics">
      <div class="metric-item">
        <span class="metric-label">Total Revenue:</span>
        <span class="metric-value">$1,250,000</span>
      </div>
      <div class="metric-item">
        <span class="metric-label">Sales:</span>
        <span class="metric-value">5,000</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

// Ref for the canvas element
const chartCanvas = ref(null);

onMounted(() => {
  if (!chartCanvas.value) return;

  new Chart(chartCanvas.value, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      },
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  });
});
</script>

<style scoped>
.graph-section {
  background-color: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
  height: 300px;
  /* width: 60%; */
}

.graph-title {
  font-size: 1.6rem;
  font-weight: 600;
  color: #222;
  margin-bottom: 1rem;
}

.graph-container {
  height: 200px;
  /* //position: relative; */
  /* margin-bottom: 1.5rem; */
}

/* canvas {
  //width: 100% !important;
  //height: 100% !important;
} */

.metrics {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
}

.metric-item {
  text-align: center;
}

.metric-label {
  font-weight: bold;
  color: #555;
}

.metric-value {
  font-size: 1.2rem;
  font-weight: 600;
  color: #333;
}
</style>