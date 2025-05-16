<template>
  <div class="first-page">
    <sideBar />
    
    <div class="content-area">
      <div class="first-row">
        <div>
          <firstChart/>
        </div>
        <div>
          <patientsInfo/>
        </div>
      </div>
      <div class="second-row">
        <div class="first-child">
          <topTable/>
        </div>
        <div class="last-child">
          <latestReports/>
        </div>
      </div>
    </div>
  </div> 
</template>

<script setup>
import firstChart from '@/components/firstChart.vue';
import sideBar from '@/components/sideBar.vue';
import topTable from '@/components/topTable.vue';
import patientsInfo from '@/components/patientsInfo.vue';
// import latestReview from '@/components/latestReview.vue';
import latestReports from '@/components/latestReports.vue';
</script>

<style lang="scss" scoped>
.first-page {
  display: flex;
  height: 100vh;
  // overflow: no];
}

.content-area {
  flex: 1;
  padding: 1rem;
  background-color: #f5f7fa;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

sideBar {
  width: 700px;
  background-color: #2d3e50; // example background
  flex-shrink: 0;
}

.first-row,
.second-row {
  display: flex;
  gap: 1rem;
  overflow: hidden;
}

.first-row > div {
  flex: 1;
  background: white; 
  padding: 1rem;
  // border-radius: 8px;
}

.second-row > div:first-child{
  // flex: 0.5;
  width: 70%;
  background-color: white;

}

.second-row > div:last-child{
  width: 20%;
  background-color: white;
  padding-left: 1rem;
}

</style>


