<script>

</script>

<template>
 <div class="content">
  
  <h1>Ayush Yadav</h1>
  <p>Work In Progress</p>
 </div>
</template>

<style scoped>
.content {
  color: rgb(74, 255, 216);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
  align-items: center;
  font-size: 3rem;


}
.content h1{
  text-transform: uppercase;
  animation: flow 1s infinite ease-in-out forwards;
}
.content p {
  color: rgb(255, 7, 247);
  /* border: 2px solid red; */
  padding: 1rem;
  border-radius: 10px;
  animation: rotate 4s infinite linear;
}
@keyframes flow {
  0%{
    color: rgb(74, 255, 216);
    transform: scale(105%);
  }
  100%{
    color: rgb(69, 255, 122);
    
  }
}
@keyframes rotate {
  0%{
    border-top: 4px solid rgb(211, 34, 255);
  }
  25%{
    border-right: 4px solid rgb(175, 255, 207);
  }
  50%{
    border-bottom: 4px solid rgb(255, 238, 194);
  }
  75%{
    border-left: 4px solid rgb(255, 108, 55);
  }
 100%{
  border: 4px solid rgb(255, 255, 255);
 }

}
</style>
