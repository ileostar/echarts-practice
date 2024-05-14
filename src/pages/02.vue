<!--
 * @Author: your name
 * @Date: 2024-05-08 10:40:57
 * @LastEditors: your name
 * @LastEditTime: 2024-05-11 09:13:41
 * @Description:
 * @FilePath: \demo\src\pages\02.vue
-->
<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

onMounted(() => {
  initPieChart()
})

const pieChart = ref()

/** 渲染饼图 */
function initPieChart() {
  const mycharts = echarts.init(pieChart.value)

  const option = {
    title: [{
      text: '覆盖区域',
      x: 'center',
      y: '38%',
      textStyle: {
        fontWeight: 'normal',
        fontSize: 9,
        color: '#427392',
      },
      subtextStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#3ea1ff',
      },
    }, {
      text: '80%',
      x: 'center',
      y: '50%',
      textStyle: {
        fontWeight: 'normal',
        fontSize: '12',
        color: '#FFFFFF',
        foontWeight: '30',
      },
    }],
    series: [{
      name: ' ',
      type: 'pie',
      radius: ['50%', '70%'],
      startAngle: 45,
      color: [new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        offset: 0,
        color: '#00a2ff',
      }, {
        offset: 1,
        color: '#70ffac',
      }]), 'transparent'],
      hoverAnimation: false,
      legendHoverLink: false,
      itemStyle: {
        normal: {
          borderColor: 'transparent',
          borderWidth: '40',
        },
        emphasis: {
          borderColor: 'transparent',
          borderWidth: '40',
        },
      },
      z: 10,
      labelLine: {
        normal: {
          show: false,
        },
      },
      data: [{
        value: 75,
      }, {
        value: 25,
      }],
    }],
  }

  mycharts.setOption(option)
}

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

interface IPoliceInfo {
  monitorId: string
  position: string
  time: string
  status: string
}

/** 徽标信息 */
const badge = ref<Array<IPoliceInfo>>([{
  monitorId: '监控1',
  position: '大西门云台',
  time: '07:12:18',
  status: '待派遣',
}, {
  monitorId: '监控2',
  position: '大西门云台',
  time: '07:12:18',
  status: '处理中',
}, {
  monitorId: '监控3',
  position: '大西门云台',
  time: '07:12:18',
  status: '已消警',
}, {
  monitorId: '监控4',
  position: '大西门云台',
  time: '07:12:18',
  status: '待派遣',
}, {
  monitorId: '监控5',
  position: '大西门云台',
  time: '07:12:18',
  status: '已消警',
}, {
  monitorId: '监控6',
  position: '大西门云台',
  time: '07:12:18',
  status: '处理中',
}, {
  monitorId: '监控7',
  position: '大西门云台',
  time: '07:12:18',
  status: '处理中',
}])
</script>

<template>
  <main relative>
    <TransitionLeftBox>
      <div class="left" fixed left-0 h-full w-80 p1 pt8>
        <BaseCard title="摄像头概述总览" h-35>
          <div flex="~ col gap-2" items-start text="2.5" color-white>
            <div flex="~ 1 gap1" items-center justify-center>
              <img src="../assets/png/img/title.png" h-12>
              <div>
                <p text-2 color-blue-5>
                  摄像有总数量
                </p>
                <p text-5 color-blue-3 mt="-1">
                  53
                </p>
              </div>
            </div>
            <ul flex="~ gap-2" w-full justify-between text-2>
              <li v-for="i in 3" :key="i">
                <div class="box" bg-blue-5 p="0.5" px2>
                  人脸识别摄像头
                </div>
                <p>1</p>
              </li>
            </ul>
          </div>
        </BaseCard>
        <BaseCard title="摄像头覆盖占比" h-40>
          <div h-full flex items-center justify-between>
            <div ref="pieChart" h-full flex-1 />
            <div flex="~ col 1" items-start gap-2 text-2 color-white>
              <div flex gap-2>
                <p>覆盖区域显示</p>
                <label class="relative inline-flex cursor-pointer items-center">
                  <input class="peer sr-only" value="" type="checkbox">
                  <div class="peer h-3 w-6 rounded-full bg-slate-700 outline-none duration-100 after:absolute after:h-3 after:w-3 after:flex after:items-center after:justify-center after:rounded-full after:bg-white after:text-sky-800 after:font-bold after:outline-none peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-500 after:duration-500 after:content-[''] peer-checked:after:translate-x-3 peer-checked:after:border-white peer-checked:after:content-['']" />
                </label>
              </div>
              <div flex="~ col gap1">
                <p>人脸识别区域：32%</p>
                <div h1 w-full bg-transparent>
                  <div w-10 bg-gray>
                    32%
                  </div>
                </div>
              </div>
              <div mt1 flex="~ col gap1">
                <p>可控摄像头区域：53.685%</p>
                <div h1 w-full bg-transparent>
                  <div w-18 bg-gray>
                    53.685%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BaseCard>
        <BaseCard title="报警讯息列表">
          <ul p1 color-gray flex="~ col  gap-1">
            <li v-for="i in badge" :key="i.monitorId" flex="~" justify-between border-l="12 solid blue-6/85" px3 py="0.5">
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
        </BaseCard>
      </div>
    </TransitionLeftBox>
    <TransitionRightBox>
      <div class="right" fixed right-0 h-full w-80 p2 pt8>
        <BaseCard title="摄像头">
          <div grid grid-cols-2 mt2 gap-2 color-white>
            <VideoItem v-for="i in 8" :key="i" desc="demo" />
          </div>
        </BaseCard>
      </div>
    </TransitionRightBox>
  </main>
</template>
