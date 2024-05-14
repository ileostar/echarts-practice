<!--
 * @Author: your name
 * @Date: 2024-05-08 11:19:47
 * @LastEditors: your name
 * @LastEditTime: 2024-05-11 11:40:42
 * @Description:
 * @FilePath: \demo\src\components\BaseCard.vue
-->
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div gap-1 p3 shadow shadow-xl flex="~ col">
    <div flex="~ gap-3" items-center>
      <img src="../assets/png/img/titleImg.png" h-5 w-5>
      <h1 text-4 color-blue-5>
        {{ props.title }}
      </h1>
    </div>
    <div h-full w-full p="0.3">
      <slot />
    </div>
  </div>
</template>
