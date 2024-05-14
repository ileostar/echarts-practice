<script setup lang="ts">
const router = useRouter()
function isAction(str: string) {
  return router.currentRoute.value.fullPath === str ? 'action' : ''
}

function go(route: string) {
  router.replace(route)
}
</script>

<template>
  <ul flex="~ gap-4" items-end justify-center color-white>
    <li :class="isAction('/')" border="2 solid blue-5" skew-x-25 bg="black/30" hover:bg="black/70" cursor-pointer rd-1 p1 px3 @click="go('/')">
      <p skew-x="-25">
        社区管理
      </p>
    </li>
    <li :class="isAction('/02')" border="2 solid blue-5" skew-x-15 bg="black/30" hover:bg="black/70" cursor-pointer rd-1 p1 px3 @click="go('02')">
      <p skew-x="-15">
        安保监控
      </p>
    </li>
    <li :class="isAction('/03')" border="2 solid blue-5" bg="black/30" hover:bg="black/70" cursor-pointer rd-1 p="1.5" px3 @click="go('03')">
      <p>CIM平台</p>
    </li>
    <li :class="isAction('/04')" border="2 solid blue-5" skew-x="-15" bg="black/30" hover:bg="black/70" cursor-pointer rd-1 p1 px3 @click="go('04')">
      <p skew-x-15>
        能源检测
      </p>
    </li>
    <li :class="isAction('/05')" border="2 solid blue-5" skew-x="-25" bg="black/30" hover:bg="black/70" cursor-pointer rd-1 p1 px3 @click="go('05')">
      <p skew-x-25>
        节能分析
      </p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.action {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
