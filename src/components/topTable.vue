<script setup>

</script>


<template>
  <div class="table-container">
    <table class="creative-table">
      <thead>
      <tr>
        <th>Patients</th>
        <th>E-mail</th>
        <th>Date</th>
        <th>Doctor</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>john Doe</td>
        <td>johndoe@gmail.com</td>
        <td>10-11-2025</td>
        <td>Reed</td>
      </tr>
      <tr>
        <td>Mark Henry</td>
        <td>markHenry@gmail.com</td>
        <td>10-11-2025</td>
        <td>Matt</td>
      </tr>
      <tr>
        <td>john Doe</td>
        <td>johndoe@gmail.com</td>
        <td>10-11-2025</td>
        <td>jack</td>
      </tr>
      <tr>
        <td>john Doe</td>
        <td>johndoe@gmail.com</td>
        <td>10-11-2025</td>
        <td>jack</td>
      </tr>
      <tr>
        <td>john Doe</td>
        <td>johndoe@gmail.com</td>
        <td>10-11-2025</td>
        <td>jack</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<style lang="scss" scoped>
.creative-table {
  width: 100%;
  border-collapse: collapse;
  // margin-top: 200px;
  margin-right: 50px;
  //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  // padding: 20px;
}

.creative-table th,
.creative-table td {
  padding: 8px 60px;
  text-align: left;
  // line-height: 1.2;
}

.creative-table th {
  background-color: #123ABC;
  color: white;
  // font-size: 1.1rem;
  font-weight: bold;
}

.creative-table tbody tr {
  background-color: #f9f9f9;
  margin: 40px;
}

.creative-table tbody tr:hover {
  background-color: #ADD8E6;
  transform: scale(1.02);
}

.creative-table tbody tr:nth-child(odd) {
  background-color: #f2f2f2;
}

.creative-table td {
  color: #555;
}

.creative-table tr:hover {
  background-color: #ADD8E6;
  cursor: pointer;
}

.table-container{
  width: 50%  ;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  border-radius: 12px;
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>