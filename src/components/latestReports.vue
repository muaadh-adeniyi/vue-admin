<template>
  <div class="latest-review">
    <h3 class="title">Latest Reports</h3>
    <table>
      <thead>
        <tr>
          <th>Patient</th>
          <th>Report</th>
          <th>Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(report, index) in reports" :key="index">
          <td>{{ report.name }}</td>
          <td>{{ report.type }}</td>
          <td>{{ report.date }}</td>
          <td>
            <button
              :class="['status-btn', report.status === 'Checked' ? 'checked' : 'pending']"
            >
              {{ report.status }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const reports = ref([
  { name: 'James Smith', type: 'Heart ECG', date: '2025-05-13', status: 'Checked' },
  { name: 'Emily White', type: 'Blood Test', date: '2025-05-14', status: 'Pending' },
  { name: 'Robert Brown', type: 'MRI Scan', date: '2025-05-12', status: 'Checked' },
  { name: 'Laura Black', type: 'CT Scan', date: '2025-05-11', status: 'Pending' },
]);
</script>

<style scoped>
.latest-review {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.05);
  font-family: 'Segoe UI', sans-serif;
}

.title {
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
}

table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
}

th, td {
  text-align: left;
  padding: 0.6rem 0.5rem;
  border-bottom: 1px solid #eee;
}

.status-btn {
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: default;
  font-size: 0.8rem;
}

.status-btn.checked {
  background-color: #4caf50;
  color: white;
}

.status-btn.pending {
  background-color: #f44336;
  color: white;
}
</style>
