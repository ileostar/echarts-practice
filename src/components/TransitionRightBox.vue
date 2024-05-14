<!--
 * @Author: your name
 * @Date: 2024-05-08 18:21:38
 * @LastEditors: your name
 * @LastEditTime: 2024-05-10 11:33:12
 * @Description:
 * @FilePath: \demo\src\components\TransitionRightBox.vue
-->
<template>
  <Transition appear name="slide-right-fade">
    <slot />
  </Transition>
</template>

<style lang="scss" scoped>
/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
.slide-right-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-right-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-right-fade-enter-from,
.slide-right-fade-leave-to {
  transform: translateX(500px);
  opacity: 0;
}
</style>
