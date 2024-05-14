<script setup lang="ts">
const props = defineProps({
  desc: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div flex="~ col" items-center justify-center>
    <video controls h-25 w-30 bg-black>
      <source src="../assets/png/img/videoDemo.mp4" type="video/mp4">
    </video>
    <p text-5>
      {{ props.desc }}
    </p>
  </div>
</template>

<style scoped>

</style>
