<template>
  <router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Kosugi+Maru&family=M+PLUS+Rounded+1c:wght@300;400&display=swap');
* {
  font-family: 'Kosugi Maru', sans-serif;
  user-select: none;
}
body,
html {
  font-weight:400;
  background-color: $theme_background;
  box-sizing: border-box;
  overflow: hidden;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  transform: translate3d(0, 0, 0);
  padding: 0;
  margin: 0;
}
#app {
  height: 100%;
  overflow: hidden;
}
</style>
