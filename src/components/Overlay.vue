<template>
  <div class="container">
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="addBook" v-on:click="changeAddBook"></div>
    </transition>
    <transition name="slide" appear>
      <div class="book-form" v-if="addBook">
        <button class="cancelBtn" v-on:click="changeAddBook">
          <span class="material-icons">cancel</span>
        </button>
        <form @submit.prevent="checkInputs">
          <input name="titleInput" type="text" placeholder="Title" v-model="inputTitle" />
          <input name="authorInput" type="text" placeholder="Author" v-model="inputAuthor" />
          <div id="selectHolder">
            <label id="genreLabel" for="genre">Choose a genre:</label>
            <select id="genreInput" name="genre" v-model="inputGenre">
              <option disabled="disabled" selected="selected">select</option>
              <option value="fantasy">Fantasy</option>
              <option value="sci-fi">Sci-Fi</option>
              <option value="fiction">Fiction</option>
              <option value="history">History</option>
              <option value="biography">Biography</option>
            </select>
          </div>
          <div id="checkHolder">
            <label for="readInput" id="readLabel">Have you read this book?</label>
            <input name="readInput" type="checkbox" id="readCheck" v-model="inputRead" />
          </div>
          <div>
            <input type="submit" name="submitBook" id="submitBook" value="Add" />
          </div>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["addBook"],
  data() {
    return {
      inputTitle: "",
      inputAuthor: "",
      inputGenre: "",
      inputRead: "",
    };
  },

  methods: {
    changeAddBook() {
      this.$emit("changeAddBook", false);
    },
    addBookToLibrary() {
      this.$emit("addBookToLibrary", {
        title: this.inputTitle,
        author: this.inputAuthor,
        genre: this.inputGenre,
        read: this.inputRead,
        keep: true,
      });
    },
    checkInputs() {
      if (this.inputTitle == "") {
        alert("You must include a Title");
      } else {
        this.addBookToLibrary();
        this.changeAddBook();
      }
    },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background-color: rgb(228, 222, 222, 0.9);
}

.fade-enter-active,
.fade-leave-active {
  transition: 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.book-form {
  position: fixed;
  left: 25%;
  bottom: 30%;
  z-index: 99;
  width: 100%;
  max-width: 45vw;
  background-color: white;
  border-radius: 16px;
  padding: 10px 25px 25px 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.material-icons {
  font-size: 36px;
}

form {
  text-align: center;
}

input {
  width: 80%;
  padding: 5px 2px;
  margin: 8px 2px;
  border-bottom: 1px solid black;
}

#selectHolder {
  margin: 20px 10px 2px 10px;
}

#genreInput {
  margin-top: 10px;
  width: fit-content;
}

#checkHolder {
  margin: 20px 10px 10px 10px;
}

#readCheck {
  width: 10%;
}

#submitBook {
  border-radius: 10px;
  width: 20%;
  margin-top: 30px;
  color: white;
  background-color: green;
  font-size: larger;
  font-weight: 600;
}

.cancelBtn {
  color: red;
  margin-left: 99%;
}

.slide-enter-active {
  transition: 0.7s;
}

.slide-leave-active {
  transition: 0.5s;
}

.slide-enter {
  transform: translateY(300%);
}

.slide-leave-to {
  transform: translateY(500%);
}

@media only screen and (max-width: 766px) {
  .book-form {
    left: 10%;
    bottom: 30%;
    max-width: 65vw;
  }
  .material-icons {
    font-size: 24px;
  }

  #submitBook {
    width: 40%;
  }
}

@media only screen and (min-width: 767px) and (max-width: 1025px) {
  .book-form {
    font-size: 2.5vh;
    max-width: 55vw;

    left: 15%;
    bottom: 30%;
    max-width: 65vw;
  }
}
</style>