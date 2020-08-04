<template>
  <div class="container">
    <i class="material-icons" v-on:click="changeMenuOverlay">menu</i>
    <transition name="slide" appear>
      <div class="menuOverlay" v-if="menuOverlay">
        <span class="fantasy">Fantasy</span>
        <span class="sci-fi">Sci-Fi</span>
        <span class="fiction">Fiction</span>
        <span class="history">History</span>
        <span class="biography">Biography</span>
      </div>
    </transition>
    <header>
      <h1>Oisín's Library</h1>
    </header>
  </div>
</template>

<script>
export default {
  props: ["menuOverlay"],
  methods: {
    changeMenuOverlay() {
      this.$emit("changeMenuOverlay", this.menuOverlay);
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
  background-color: orange;
  align-items: center;
}

header {
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5vh;
}

h1 {
  color: black;
  font-size: 3vh;
}

i {
  font-size: 5vh;
  position: absolute;
  -webkit-transition: -webkit-transform 0.8s ease-in-out;
  transition: transform 0.8s ease-in-out;
  cursor: pointer;
  margin: 15px 10px;
  background-color: transparent;
  z-index: 99;
}

i:active {
  transform: scale(1.1);
}

span:hover {
  cursor: pointer;
}

.menuOverlay {
  position: absolute;
  z-index: 98;
  margin: 0 auto;
  padding: 15px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5vh;
  background-color: rgb(172, 170, 170);
  width: 100%;
  font-weight: 900;
}

.fantasy {
  color: var(--genre-color-fantasy);
}

.sci-fi {
  color: var(--genre-color-sci-fi);
}

.fiction {
  color: var(--genre-color-fiction);
}

.history {
  color: var(--genre-color-history);
}

.biography {
  color: var(--genre-color-biography);
}

.slide-enter-active {
  transition: 1s;
}

.slide-leave-active {
  transition: 1s;
}

.slide-enter {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(-100%);
}

@media only screen and (max-width: 768px) {
  .menuOverlay {
    flex-direction: column;
    top: 8%;
    width: 100%;
    height: 80%;
    font-size: 4vh;
  }

  span {
    border-bottom: 3px dotted orange;
  }
}
</style>

<!--

Put in animation fro genre bar thingsw appearing!

-->