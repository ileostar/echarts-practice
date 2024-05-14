<script setup lang="ts">
/** 报警信息 */
const props = defineProps({
  infos: {
    type: Array<IPoliceInfo>,
  },
})

/** 获取徽标颜色 */
function getBadgeColor(str: string) {
  switch (str) {
    case '待派遣':
      return 'bg-purple-6'
    case '处理中':
      return 'bg-blue'
    case '已消警':
      return 'bg-blue-6'
  }
}

export interface IPoliceInfo {
  monitorId: string
  position: string
  time: string
  status: string
}
</script>

<template>
  <ul p1 color-gray flex="~ col  gap-1">
    <li v-for="i in props.infos" :key="i.monitorId" flex="~" justify-between border-l="12 solid blue-6/85" px3 py="0.5">
      <div class="content" flex="~ 1 col" items-start justify-center text-3>
        <p>{{ i.monitorId }}：{{ i.position }}</p>
        <p>{{ i.time }}</p>
      </div>
      <div :class="getBadgeColor(i.status)" h4 w8 flex items-center justify-center rd="0.5" bg-blue-5 text-center text-2>
        <p flex-1 color-white>
          {{ i.status }}
        </p>
      </div>
    </li>
  </ul>
</template>
