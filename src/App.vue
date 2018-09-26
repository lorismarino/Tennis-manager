<template>
  <div id="app">
    <div class="header">
      <h1>Tennis manager</h1>
      <h2>Manage your tennis game more easily !</h2>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import 'assets/scss/utils/colors';

* {
  box-sizing: border-box;
  &:not(input) {
    user-select: none;
  }
}

html,
body {
  height: 100%;
}

#app {
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;

  position: relative;
  z-index: 1;

  width: 100%;
  min-height: 100%;

  color: $ceramic;
  background-image: url('assets/img/bg.jpg');
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  &::before {
    position: absolute;
    z-index: -1;

    width: 100%;
    height: 100%;

    content: '';

    background-color: rgba($big-stone, 0.7);
  }

  .header {
    padding-top: 50px;

    text-align: center;
    @media (max-width: 575px) {
      padding: 0 15px;
    }
    h1 {
      margin: 0;
      padding: 10px;
    }
  }
}

input {
  padding: 10px;

  border: none;
  border-radius: 2px;
  background-color: $ceramic;
  box-shadow: 0 12px 32px -15px $big-stone;

  &:focus {
    outline-width: 2px;
    outline-color: $pewter;
  }
}

button {
  cursor: pointer;

  color: inherit;
  border: none;
  background: transparent;

  &:focus {
    outline: none;
  }
}
</style>
