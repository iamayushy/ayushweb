<script>
export default {
  name: "nav-bar",
};
</script>
<template>
  <div class="cont">
    <div class="container">
      <section class="links">
        <a href="#">Work</a>
      </section>
      <section class="links">
        <a href="#">About</a>
      </section>
      <section class="links">
        <a href="#">Contact</a>
      </section>
    </div>

    <div class="icons">
      <section>
        <a href="https://www.github.com/iamayushy" target="_blank">
        <img
          src="../assets/GitHub-Mark-Light-120px-plus.png"
          alt="github-icon"
          width="30px"
        />
    </a>
      </section>
      <section>
        <a href="https://www.github.com/iamayushy" target="_blank">
        <img
        
          src="../assets/linkedin.png"
          alt="linkedin-icon"
          width="30px"
        />
    </a>
      </section>
    </div>
  </div>
</template>
<style scoped>
.cont {
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
}
.container {
  margin: 0 auto;
  width: 90%;
  display: flex;
  gap: 4rem;
  margin-left: 4rem;
}
.icons {
  display: flex;
  gap: 2rem;
  margin-right: 4rem;
}
.links {
  position: relative;
}
.links a {
  color: white;
  text-decoration: none;
  font-size: 1.3rem;
  cursor: pointer;
}
.links:hover::after {
  position: absolute;
  content: "";
  background-color: white;
  height: 2px;
  border-radius: 8px;
  bottom: -2%;
  left: 0;
  margin-top: 0.5rem;
  animation: fill 0.3s linear forwards;
}
@keyframes fill {
  0% {
    width: 3%;
  }
  100% {
    width: 100%;
  }
}
</style>
