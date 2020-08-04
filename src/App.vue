<template>
  <div>
    <App-Overlay
      v-bind:addBook="addBook"
      v-on:changeAddBook="updateAddBook($event)"
      v-on:addBookToLibrary="addBookToLibrary($event)"
    ></App-Overlay>
    <App-Header
      v-bind:menuOverlay="menuOverlay"
      v-on:changeMenuOverlay="changeMenuOverlay($event)"
    ></App-Header>
    <App-Category></App-Category>
    <App-Library
      v-bind:books="books"
      v-on:removeBook="removeBook($event)"
    ></App-Library>
    <App-Footer
      v-bind:addBook="addBook"
      v-on:changeAddBook="updateAddBook($event)"
    ></App-Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Category from './components/Category.vue';
import Library from './components/Library.vue';
import Overlay from './components/Overlay.vue';
export default {
  components: {
    'App-Header': Header,
    'App-Footer': Footer,
    'App-Category': Category,
    'App-Library': Library,
    'App-Overlay': Overlay,
  },
  data() {
    return {
      books: [],
      addBook: false,
      menuOverlay: false,
    };
  },
  methods: {
    updateAddBook(updatedAddBook) {
      this.addBook = updatedAddBook;
    },
    addBookToLibrary(newBook) {
      this.books.push(newBook);
      console.log('poop');
      this.$http.post(
        'https://oisin-vue-library.firebaseio.com/fireBooks.json',
        newBook
      );
    },
    removeBook(bookToBeRemoved) {
      this.books = this.books.filter((book) => book !== bookToBeRemoved);
      console.log(bookToBeRemoved.fireId);
      // update database with book array next
    },
    changeMenuOverlay(status) {
      this.menuOverlay = !this.menuOverlay;
    },
  },

  created() {
    this.$http
      .get('https://oisin-vue-library.firebaseio.com/fireBooks.json')
      .then(function(data) {
        return data.json();
      })
      .then(function(data) {
        let fireBooksArray = [];
        for (let key in data) {
          data[key].fireId = key;
          fireBooksArray.push(data[key]);
        }
        this.books = fireBooksArray;
      });
  },
};

// sort by title, author, read, genre

// edit 'read' status

// routers video for search and extra infor on books (editing perhaps)?
</script>

<style>
:root {
  --genre-color-fiction: rgb(238, 23, 23);
  --genre-color-fantasy: rgb(25, 250, 17);
  --genre-color-sci-fi: rgb(199, 19, 223);
  --genre-color-history: rgb(229, 233, 14);
  --genre-color-biography: rgb(13, 245, 206);
}

* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
}

div {
  background-color: white;
}
</style>
