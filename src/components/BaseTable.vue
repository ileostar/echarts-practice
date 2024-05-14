<!--
 * @Author: your name
 * @Date: 2024-05-14 19:19:47
 * @LastEditors: your name
 * @LastEditTime: 2024-05-14 19:40:42
 * @Description:
 * @FilePath: \demo\src\components\BaseTable.vue
-->
<script setup lang="ts">

</script>

<template>
  <table w-full text-2 class="table rounded-lg bg-transparent p-1 color-white shadow">
    <thead w-full>
      <tr>
        <th class="whitespace-nowrap p-1 font-normal">
          名称
        </th>
        <th class="whitespace-nowrap p-1 font-normal">
          总电量
        </th>
        <th class="whitespace-nowrap p-1 font-normal">
          总电费
        </th>
        <th class="whitespace-nowrap p-1 font-normal">
          总负债
        </th>
        <th class="whitespace-nowrap p-1 font-normal">
          平均能耗
        </th>
      </tr>
    </thead>
    <tbody w-full>
      <tr v-for="item in 8" :key="item" :class="item % 2 === 0 ? '' : 'bg-blue-700/20'">
        <td p1>
          无人主机
        </td>
        <td p1>
          10462.7
        </td>
        <td p1>
          5620.3
        </td>
        <td p1>
          1.8
        </td>
        <td p1>
          2.3
        </td>
      </tr>
    </tbody>
  </table>
</template>
