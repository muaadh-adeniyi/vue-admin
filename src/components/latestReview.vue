<template>
  <div class="latest-reviews-card">
    <h3>LATEST REVIEWS</h3>
    <ul class="review-list">
      <li v-for="review in latestReviews" :key="review.id" class="review-item">
        <div class="file-info">
          <span class="file-name">{{ review.file }}</span>
          <span class="reviewer">{{ review.user }}</span>
        </div>
        <button class="download-button">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7m-8 2v3h2v-3h4l-5-5-5 5h4z" />
          </svg>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const latestReviews = ref([
  { id: 1, file: 'Ultrasound 2.pdf', user: 'Mike' },
  { id: 2, file: 'Heart ECG.pdf', user: 'Jane' },
  { id: 3, file: 'Blood Test.pdf', user: 'Peter' },
  { id: 4, file: 'X-Ray Report.pdf', user: 'Alice' },
  { id: 5, file: 'Prescription.pdf', user: 'Bob' },
]);
</script>

<style scoped>
.latest-reviews-card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  padding: 15px;
  min-height: 50vh;
  min-width: 250px; 
}

.latest-reviews-card h3 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 1.2em;
  color: #333;
  font-weight: 600;
  width: 400px;
}

.review-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.review-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

.review-item:last-child {
  border-bottom: none;
}

.file-info {
  display: flex;
  flex-direction: column;
}

.file-info .file-name {
  font-weight: bold;
  color: #333;
  font-size: 0.95em;
}

.file-info .reviewer {
  color: #777;
  font-size: 0.85em;
}

.download-button {
  background-color: #28a745; 
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.2s ease;
}

.download-button:hover {
  background-color: #1e7e34;
}

.download-button svg {
  width: 16px;
  height: 16px;
  vertical-align: middle;
}
</style>