<template>
  <aside class="sidebar">
    <div >
      <img alt="" src="../assets/image.jpg" id="top-image">
    </div>
    <nav class="sidebar-component">
      <a href="#">Dashboard</a>
      <a href="#">Appointments</a>
      <a href="#">Patients</a>
      <a href="#">Doctors</a>
      <a href="#">Nurses</a>
      <a href="#">Pharmacists</a>
      <a href="#">Reports</a>
      <a href="#">Billing</a>
      <a href="#">Analytics</a>
      <a href="#">Settings</a>
    </nav>


  </aside>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.sidebar{
  width: 210px;
  min-height: 100vh;
  background-color: #005bff;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  color: white;
  //  position: fixed
}

#top-image {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border: 3px solid #fff;
  border-radius: 50%;
  margin-bottom: 2rem;
}

.sidebar-component{
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}

.sidebar-component a{
  color: white;
  text-decoration: none;
}

.sidebar-component a:hover{
  background-color: white;
  opacity: 1;
}
</style>