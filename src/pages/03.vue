<!--
 * @Author: ileostar
 * @Date: 2024-05-08 18:21:38
 * @LastEditors: your name
 * @LastEditTime: 2024-05-11 15:07:50
 * @Description:
 * @FilePath: \demo\src\pages\03.vue
-->
<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import type { IPoliceInfo } from '~/components/PoliceList.vue'

onMounted(() => {
  initPieChart()
  initLineChart()
  initReBarChart()
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

/** 报警信息 */
const policeInfos: Array<IPoliceInfo> = [{
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
}]

/** 安防信息 */
const infos = ref([{
  name: '业主人数',
  value: '2318',
}, {
  name: '访客人数',
  value: '880',
}, {
  name: '外来人数',
  value: '174',
}])

/** 能源信息 */
const energyInfos = ref([{
  name: '本月总能耗（单位：km/h）',
  value: '11787',
}, {
  name: '本月总能耗（单位：km/h）',
  value: '210688',
}, {
  name: '本月总能耗（单位：km/h）',
  value: '73779',
}, {
  name: '本月总能耗（单位：km/h）',
  value: '10127',
}, {
  name: '本月总能耗（单位：km/h）',
  value: '5646',
}, {
  name: '本月总能耗（单位：km/h）',
  value: '203231',
}])

const lineChart = ref()
function initLineChart() {
  const myChart = echarts.init(lineChart.value)
  const option = {
    title: [{
      text: '近一月标题次数',
      x: '5%',
      textStyle: {
        fontWeight: 'normal',
        fontSize: 12,
        color: '#456DB2',
      },
      subtextStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#3ea1ff',
      },
    }, {
      text: '单位：千/km.h',
      right: '5%',
      textStyle: {
        fontWeight: 'normal',
        fontSize: 12,
        color: '#fff',
      },
      subtextStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#3ea1ff',
      },
    }],
    grid: {
      top: '14%',
      left: '1%',
      right: '1%',
      bottom: '4%',
      height: '84%',
      containLabel: true,
    },
    xAxis: [{
      type: 'category',
      boundaryGap: true,
      axisLine: { // 坐标轴轴线相关设置。数学上的x轴
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.6)',
        },
      },
      axisLabel: { // 坐标轴刻度标签的相关设置
        textStyle: {
          color: 'rgba(255,255,255,0.6)',
          margin: 15,
        },
      },
      axisTick: {
        show: false,
      },
      data: ['6-27', '6-27', '6-27', '6-27', '6-27', '6-27', '6-27', '6-27', '6-27'],
    }],
    yAxis: [{
      type: 'value',
      min: 0,
      // max: 140,
      splitNumber: 7,
      splitLine: {
        lineStyle: {
          color: 'rgba(127, 127, 127, 1)',
          type: 'dashed', // 线型为虚线
        },
      },
      axisLine: {
        show: false,
        lineStyle: {
          color: 'rgba(255,255,255,0.6)',
          width: 1,
          type: 'solid',
        },
      },
      axisTick: {
        show: false,
      },
    }],
    series: [{
      name: '累计推荐',
      type: 'line',
      symbol: 'circle', // 默认是空心圆（中间是白色的），改成实心圆
      showAllSymbol: true,
      symbolSize: 5,
      lineStyle: {
        color: '#28ffb3', // 线条颜色
      },
      itemStyle: {
        color: '#28ffb3',
        borderColor: '#fff',
      },
      tooltip: {
        show: true,
      },
      axisLabel: {
        fontSize: 3,
      },
      areaStyle: { // 区域填充样式
        // 线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: 'rgba(0,154,120,1)',
        }, {
          offset: 1,
          color: 'rgba(0,0,0, 0)',
        }], false),
        shadowColor: 'rgba(53,142,215, 0.9)', // 阴影颜色
        shadowBlur: 20, // shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
      },
      data: [20, 28, 40, 32, 68, 55, 43, 32, 11],
    }],
  }
  myChart.setOption(option)
}

const reBarChart = ref()
function initReBarChart() {
  const myChart = echarts.init(reBarChart.value)
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
      },
      formatter(params: string | any[], ticket: any, callback: (arg0: any, arg1: any) => void) {
        let res = params[0].name
        for (let i = 0, l = params.length; i < l; i++)
          res += `<br/>${params[i].seriesName} : ${Math.abs(params[i].value)}`

        setTimeout(() => {
          // 仅为了模拟异步回调
          callback(ticket, res)
        }, 500)
        return 'loading...'
      },
    },
    legend: {
      data: ['出水温度', '进水温度'],
      textStyle: {
        color: 'rgba(255,255,255,0.6)',
      },
    },
    grid: {
      left: '3%',
      right: '4%',
      height: '80%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [
      {
        axisLabel: { formatter(value: number) {
          return Math.abs(value)// 显示的数值都取绝对值
        },
        },
        type: 'value',
      },
    ],
    yAxis: [
      {
        type: 'category',
        axisTick: { show: false },
        data: ['冷凝器', '蒸发器'],
      },
    ],
    series: [
      {
        name: '出水温度',
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            position: 'right',
            color: '#fff',
          },
        },
        itemStyle: {
          normal: {
            color: '#4C81DD',
          },
        },
        data: [-120, -302],
      },
      {
        name: '进水温度',
        type: 'bar',
        stack: '总量',
        barWidth: '20',
        label: {
          normal: {
            show: true,
            position: 'left',
            formatter(v: { data: number }) { return Math.abs(v.data) },
            color: '#fff',
          },
        },
        itemStyle: {
          normal: {
            color: '#0CA9D9',
          },
        },
        data: [120, 300],
      },
    ],
  }
  myChart.setOption(option)
}
</script>

<template>
  <main>
    <TransitionLeftBox>
      <div class="left" fixed left-0 h-full w-80 p1 pt8>
        <BaseCard title="安防概况" h-35>
          <div flex="~ col gap2" items-start text="2.5" color-white>
            <div flex="~ 1 gap2" items-end justify-center>
              <img src="../assets/png/img/title.png" h-12>
              <div>
                <p text-2 color-blue-5>
                  当前社区总人数
                </p>
                <p text-5 color-blue-3 mt="-1">
                  12530
                </p>
              </div>
            </div>
            <ul flex="~ gap-2" w-full justify-between text-2>
              <li v-for="i in infos" :key="i.name">
                <div class="box" bg-blue-5 p="0.5" px3>
                  {{ i.name }}
                </div>
                <p color-blue>
                  {{ i.value }}
                </p>
              </li>
            </ul>
          </div>
        </BaseCard>
        <BaseCard title="摄像头视频监控" h-35>
          <ul flex="~ gap-2" h-full items-center justify-between>
            <li v-for="i in 3" :key="i">
              <video controls autoplay h-15 w-20 bg-black>
                <source src="../assets/png/img/videoDemo.mp4" type="video/mp4">
              </video>
              <p mt-1 text-3 color-white>
                星云广场云台
              </p>
            </li>
          </ul>
        </BaseCard>
        <BaseCard title="报警讯息列表">
          <PoliceList :infos="policeInfos" />
        </BaseCard>
      </div>
    </TransitionLeftBox>
    <TransitionRightBox>
      <div class="right" fixed right-0 h-full w-78 p2 pt8>
        <BaseCard title="舒适度数据统计" h-32>
          <div h-20 flex mt="-2" items-center justify-between>
            <div ref="pieChart" h-full flex-1 />
            <div flex="~ col 1" items-start gap-2 text-2 color-white>
              <div flex="~ col gap1">
                <p>室内空气：32%</p>
                <div h1 w-full bg-transparent>
                  <div w-10 bg-gray>
                    32%
                  </div>
                </div>
              </div>
              <div mt1 flex="~ col gap1">
                <p>室内温度：53.685%</p>
                <div h1 w-full bg-transparent>
                  <div w-18 bg-gray>
                    53.685%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </BaseCard>
        <BaseCard title="能源数据概况" h-45>
          <ul grid grid-cols-2 gap1 color-white>
            <li v-for="i in energyInfos" :key="i.name">
              <h2 text="2.5">
                {{ i.name }}
              </h2>
              <p text-5 color-blue>
                {{ i.value }}
              </p>
            </li>
          </ul>
        </BaseCard>
        <BaseCard title="系统效能统计" h-45>
          <div ref="lineChart" h-full w-full />
        </BaseCard>
        <BaseCard title="机主运行情况" h-40>
          <div flex="~" h-full w-full gap2 color-white>
            <div ref="reBarChart" h-full flex-1 />
            <div flex="~ col" h-full items-center justify-center gap1>
              <div bg="#202856" px2>
                <p text="2.5">
                  1#冷战
                </p>
                <p text-2>
                  (1#主机)
                </p>
              </div>
              <div px1>
                <p text-2>
                  开启状态
                </p>
                <p bg-gray-4 px2 text-2>
                  启动
                </p>
              </div>
              <div px1>
                <p text-2>
                  运行状态
                </p>
                <p bg-gray-4 px2 text-2>
                  运行
                </p>
              </div>
            </div>
          </div>
        </BaseCard>
      </div>
    </TransitionRightBox>
  </main>
</template>
