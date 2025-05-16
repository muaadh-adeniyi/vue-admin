<template>
  <div class="notecard">
    <div class="notecard-section">
      <img src="@/assets/time.png" class="notecard-img" alt="">
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
    <div class="notecard-section">
      <img src="@/assets/time.png" class="notecard-img" alt="">
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
    <div class="notecard-section">
      <img src="@/assets/time.png" class="notecard-img" alt="">
      <p>Lorem ipsum dolor sit amet...</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.notecard {
  background-color: #fff;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
  margin-left: 0;
  width: 100%;
}

.notecard-section {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.notecard-img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
</style>
