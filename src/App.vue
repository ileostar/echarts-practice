<!--
 * @Author: your name
 * @Date: 2024-05-08 10:22:48
 * @LastEditors: your name
 * @LastEditTime: 2024-05-10 14:22:52
 * @Description:
 * @FilePath: \demo\src\App.vue
-->
<template>
  <main font-sans text="center gray-700 dark:gray-200">
    <div class="background">
      <div relative class="env" flex="~ col" color-blue-5>
        <RouterView />
      </div>
      <footer fixed bottom-0 h-16 w-full>
        <Footer />
      </footer>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.background {
  background-image: url('./assets/png/main.jpg');
  background-size: cover;
  width: 100vw;
  height: 100vh;
  .env {
    width: 100%;
    height: 100%;
    background: radial-gradient(transparent, black);
  }
}
</style>
