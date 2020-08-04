<template>
  <div>
    <span class="big">
      <h3>Title</h3>
    </span>
    <span class="big">
      <h3>Author</h3>
    </span>
    <span>
      <h3>Read</h3>
    </span>
    <span class="invisible">
      <h3>Delete</h3>
    </span>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin: 3% 2% 2% 2%;
}

@media only screen and (max-width: 768px) {
  div {
    margin: 3% 2% 4% 2%;
  }
}

span {
  font-size: 2vh;
  width: 16%;
  text-decoration: underline double orange;
}

.big {
  width: 32%;
}

.invisible {
  color: white;
  text-decoration: none;
}
</style>