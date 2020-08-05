<template>
  <div>
    <ul>
      <li v-for="(book, index) in books" :key="index" v-bind:class="book.genre">
        <span class="big">{{ book.title }}</span>
        <span class="big">{{ book.author }}</span>
        <button id="button1" v-on:click="book.read = !book.read; updateRead(book);">
          <i class="material-icons">
            {{
            book.read ? 'bookmark' : 'bookmark_border'
            }}
          </i>
        </button>
        <button id="button2" v-on:click="book.keep = !book.keep">
          <i class="material-icons" v-on:click="removeBook(book)">remove_circle_outline</i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["books"],
  data() {
    return {};
  },
  methods: {
    removeBook(book) {
      this.$emit("removeBook", book);
    },
    updateRead(book) {
      this.$emit("updateRead", book);
    },
  },
};
</script>

<style scoped>
div {
  margin: 2% 2% 10% 2%;
  position: relative;
}

@media only screen and (max-width: 768px) {
  div {
    margin: 2% 2% 20% 2%;
  }
}

.fiction {
  border-left: 0.5vh solid var(--genre-color-fiction);
}

.fantasy {
  border-left: 0.5vh solid var(--genre-color-fantasy);
}

.sci-fi {
  border-left: 0.5vh solid var(--genre-color-sci-fi);
}

.history {
  border-left: 0.5vh solid var(--genre-color-history);
}

.biography {
  border-left: 0.5vh solid var(--genre-color-biography);
}

li {
  display: flex;
  justify-content: space-between;
  text-align: center;
  font-size: 2vh;
  margin-bottom: 2vh;
  border-left: 0.5vh solid var(--genre-color-history);
  padding: 10px 0px 10px 10px;
  background-color: white;
  box-shadow: 5px 10px 18px #888888;
}

li:hover {
  transform: scale(1.01);
}

span {
  width: 16%;
}

button {
  width: 16%;
}

.big {
  width: 32%;
}

ul {
  margin-bottom: 5vh;
}
</style>
