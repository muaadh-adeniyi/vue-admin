<template>
  <div class="third-page">
    <div class="first-row">
      <div class="top-right">
        <highchart/>
      </div>
      <div class="top-left">
        <barChart/>
      </div>
    </div>
    <div class="second-row">
      <div class="top-second">
        <topTable/>
      </div>
      <div class="last-second">
        <latestReview/>
      </div>
    </div>
    <div class="third-row">
      <div class="third-first">
        <chartSection/>
      </div>
      <div class="third-second">
        <PatientsInfo/>
      </div>
    </div>
    <div class="last-row">
      <div>
        <topTable/>
      </div>
      <div>
        <latestReports/>
      </div>
    </div>
  </div>
</template>

<script setup>
import highchart from '@/components/highChart.vue';
import barChart from '@/components/barChart.vue';
import topTable from '@/components/topTable.vue';
import latestReview from '@/components/latestReview.vue';
import chartSection from '@/components/chartSection.vue';
import PatientsInfo from '@/components/patientsInfo.vue';
import latestReports from '@/components/latestReports.vue';
</script>


<style lang="scss" scoped>
.third-page{
  display: grid;
}

.first-row{
  display: flex;
  gap: 2rem;
}

.top-right{
  width: 50%;
  // height: 500px;
}

.top-left{
  width: 50%;
  // height: 900px;
}

.second-row{
  display: flex;
}

.last-sesond{
  width: 100px;
}

.third-row{
  display: flex;
  gap: 6rem;
}

.last-row{
  display: flex;
}

.second-row > div,
.third-row > div,
.last-row > div {
  flex: 1;
}

// .third-first{
//   width: 50%;
// }

.third-second{
  margin-top: 40px;
  height: 500px;
  width: 50%;
}

</style>