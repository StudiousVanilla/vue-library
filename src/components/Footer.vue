<template>
  <footer v-on:click="changeAddBook">
    <button>+</button>
    <p>Add book</p>
  </footer>
</template>

<script>
export default {
  props: ["addBook"],
  data() {
    return {};
  },
  methods: {
    changeAddBook() {
      this.$emit("changeAddBook", true);
    },
  },
};
</script>

<style scoped>
footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(172, 170, 170);
  height: 4vh;
  font-size: 4vh;
  padding: 2vh 0vh 2vh 0vh;
  bottom: 0;
  position: fixed;
  width: 100%;
  z-index: 2;
  border-top: 0.6vh solid orange;
  min-width: 250px;
}

button {
  background: white;
  border-radius: 99999999px;
  width: 6vh;
  height: 6vh;
  font-size: 6vh;
  text-align: center;
  line-height: 4vh;
  color: orange;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: gray;
  padding: 0 0 0.5vh 0;
}

button:hover {
  background: rgb(255, 235, 209);
}

p {
  margin: 0 10px;
}

@media only screen and (max-width: 768px) {
  footer {
    height: 6vh;
    font-size: 5vh;
  }
  button {
    width: 6vh;
    height: 6vh;
    font-size: 7vh;
  }
}
</style>