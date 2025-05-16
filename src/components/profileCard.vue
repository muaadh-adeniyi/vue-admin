<template>
  <div class="profile-div">
    <div >
    <img src="../assets/doctor.jpg" alt="Image of a doctor" id="doctor-image">
  </div>
  <div>
    <img src="../assets/profile.jpg" alt="" id="doctor-profile-image">
    <h2>Anny Fariha</h2>
    <h5>Doctor</h5>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
    <button id="doctor-buttton">Book</button>
  </div>
  <div>
    
  </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

#doctor-image{
  width: 200px;
  margin-top: 20px;
}

#doctor-profile-image{
  width: 70px;
  border-radius: 50%;
  object-fit: cover;
  height: 70px;
  border: 3px solid blue;
  justify-content: center;
  margin-left: 50px;
  margin-top: -30px;
}

.profile-div{
  display: flex;
  flex-direction: column;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  border-radius:12px;
  width:100%;
  height:500px;
}

#doctor-button{
  background-color: blue;
  width: 80px;
}
</style>