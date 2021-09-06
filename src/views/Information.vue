<template>
  <main>
    <wired-card elevation="5">
      <h1>wired-elements demo</h1>
    </wired-card>
    <section>
      <wired-input placeholder="your name" ref="nameInput" />
      <wired-button elevation="2" v-on:click="greet">Submit</wired-button>
    </section>
  </main>
</template>

<script>
// 	import "wired-elements";

export default {
  name: "HelloWiredElements",
  props: {
    name: String,
  },
  methods: {
    greet: function (event) {
      alert(`Hello ${this.$refs.nameInput.value}!`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main {
	font-family: "Gloria Hallelujah", cursive;
  padding: 16px;
  text-align: center;
}

wired-card {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  display: block;
}

section {
  max-width: 400px;
  margin: 0 auto;
  padding: 60px 0;
}

wired-button {
  background: yellow;
  color: red;
  margin: 8px;
}
wired-input {
  width: 200px;
  /* font-family: inherit; */
}
</style>
