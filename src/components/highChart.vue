<template>
  <div class="card chart-card">
    <div class="card-header">
      <h3>Hospital Earnings Overview</h3>
    </div>
    <div class="card-body">
      <canvas ref="chart1"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Chart } from 'chart.js/auto'

const chart1 = ref(null)

let chartInstance1 = null

function createMiniChart(ctx, data) {
  return new Chart(ctx, {
    type: 'line',
    data: data,
    options: {
      responsive: false,
      maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { display: false },
        y: { display: false, beginAtZero: true },
      },
      elements: {
        line: {
          borderColor: '#4ea1f7',
          backgroundColor: 'rgba(78, 161, 247, 0.15)',
          tension: 0.4,
          fill: true,
          borderWidth: 2,
        },
        point: { radius: 0 }
      },
      animation: false,
      hover: { mode: null }
    }
  })
}

onMounted(() => {
  const data1 = {
    labels: ['W1', 'W2', 'W3', 'W4'],
    datasets: [{ data: [1200, 1500, 1000, 1800] }]
  }

  chartInstance1 = createMiniChart(chart1.value.getContext('2d'), data1)

})

onBeforeUnmount(() => {
  chartInstance1?.destroy()
})
</script>

<style scoped>
.chart-card {
  background-color: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 1px 4px rgba(0,0,0,0.1);
  margin-top: 20px;
  height: 300px;
}
.card-header h3 {
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
}

/* Each mini chart canvas: full width and moderate height */
.card-body canvas {
  width: 80% ;
  height: 250px ;
  border-radius: 8px;
  background: #e6f0ff; /* subtle light blue background */
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  display:flex;
  /* align-items: center; */
}
</style>
