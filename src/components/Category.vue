<template>
  <div>
    <span class="big">
      <h3
        v-on:click="
          sort('title', titleBoolean);
          titleBoolean = !titleBoolean;
        "
      >
        Title
      </h3>
    </span>
    <span class="big">
      <h3
        v-on:click="
          sort('author', authorBoolean);
          authorBoolean = !authorBoolean;
        "
      >
        Author
      </h3>
    </span>
    <span>
      <h3
        v-on:click="
          sort('read', readBoolean);
          readBoolean = !readBoolean;
        "
      >
        Read
      </h3>
    </span>
    <span class="invisible">
      <h3>Delete</h3>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleBoolean: true,
      authorBoolean: true,
      readBoolean: true,
    };
  },
  methods: {
    sort(x, y) {
      this.$emit('sort', x, y);
    },
  },
};
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

h3:hover {
  cursor: pointer;
}

.invisible {
  color: white;
  text-decoration: none;
}
</style>
