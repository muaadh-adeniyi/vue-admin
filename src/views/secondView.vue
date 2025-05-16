<template>
  <div class="second-page">
    <div class="top-bar">
      <!-- <h1>Hello</h1>
      <h1>Hello</h1> -->
    </div>
    <div class="cards-container">
      <cardsInfo
      v-for="(card,index) in cardData"
      :key="index"
      :title="card.title"
      :value="card.value"
      />
    </div>
    <div class="middle-row">
      <div class="right">
        <chartSection/>
      </div>
      <div class="left">
        <CalenderSection/>
      </div>
      <div class="end">
        <profileCard/>
      </div>
    </div>
  </div>
</template>

<script setup>
import CalenderSection from '@/components/calenderSection.vue';
import cardsInfo from '@/components/cardsInfo.vue';
import chartSection from '@/components/chartSection.vue';
import profileCard from '@/components/profileCard.vue';

const cardData = [
  {title:"DOCTORS",value:"4567"},
  {title:"NURSES",value:"4567"},
  {title:"PATIENTS",value:"4567"},
  {title:"PHARMACISTS",value:"4567"},
]
</script>

<style lang="scss" scoped>
.top-bar{
  background-color: blue;
  padding: 0;
  display: flex;
  flex-direction: row;
  gap: 5rem;
  height: 70px;
}

.second-page{
  display: grid;
}

.cards-container{
  display: flex;
  flex-direction: row;
  float: 1;
  margin-top: 30px;
  gap: 8rem;
}

.middle-row{
  display: flex;
  gap: 3rem; 
  max-width: 100%; 
  box-sizing: border-box; 
  padding: 0 1rem; 
  margin-top: 40px;
}

.right{
  display: flex;
}

.left{
  display: flex;
  margin-top: 40px;
}

.end{
  margin-top: 40px;
}
</style>

<style>
body{
  margin: 0%;
}
</style>