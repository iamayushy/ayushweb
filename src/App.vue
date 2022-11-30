<script>
import NavBar from './components/NavBar.vue';
export default{
  components : {
  NavBar
  }
}
</script>

<template>
 <div class="content">
  <nav-bar/>
  <h1>Ayush Yadav</h1>
  <p>Work In Progress</p>
 </div>
</template>

<style scoped>

.content h1{
  margin-top: 10rem;
  font-size: 5rem;
  text-align: center;
  margin: 10rem auto;
  width: fit-content;
  position: relative;
}

.content h1::after{

content: '';
position: absolute;
height: 4px;
bottom: 0;
background-color: rgb(62, 255, 220);
left: 0;
animation: loader 7s infinite linear forwards reverse;
border-radius: 8px;
}
.content p{
 width: fit-content;
 font-size: 3rem;
 text-align: center;
 position: relative;
 margin: 0 auto;
}
.content p::after{

 content: '';
 position: absolute;
 height: 4px;
 bottom: 0;
 background-color: rgb(255, 138, 138);
 left: 0;
 animation: loader 7s infinite linear forwards;
 border-radius: 8px;
}
@keyframes loader {
 0%{
 width: 0;
}
100%{
width: 100%;
}
}
</style>
