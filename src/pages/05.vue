<!--
 * @Author: your name
 * @Date: 2024-05-08 18:21:38
 * @LastEditors: your name
 * @LastEditTime: 2024-05-11 18:28:35
 * @Description:
 * @FilePath: \demo\src\pages\05.vue
-->
<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'
import centerImg from '~/assets/png/img/yz.png'

/** 渲染C状饼图 */
const cPieChart = ref()
function initCPieChart() {
  const mycharts = echarts.init(cPieChart.value)

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

/** 饼图 */
const pieChart = ref()
function initPieChart() {
  const myChart = echarts.init(pieChart.value)
  const option = {
    title: {
      text: '业主关怀',
      x: '18.5%',
      y: '32%',
      textStyle: {
        fontWeight: 'normal',
        fontSize: 9,
        color: '#548CB0',
      },
      subtextStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#3ea1ff',
      },
    },
    grid: {
      width: '70%',
      left: '15%',
    },
    graphic: [
      {
        z: 4,
        type: 'image',
        id: 'logo',
        top: '48%', // 调整图片位置
        left: '22%', // 调整图片位置
        bounding: 'raw',
        rotation: 0, // 旋转
        origin: [64.5, 32.5], // 中心点
        scale: [1.0, 1.0], // 缩放
        // 设置图片样式
        style: {
          image: centerImg,
          width: 22,
          height: 22,
          opacity: 1,
        },
      },
    ],
    tooltip: {
      trigger: 'item',
    },
    legend: {
      right: '20%',
      width: '5%',
      itemGap: 5,
      itemWidth: 14,
      itemHeight: 7,
      top: 'center',
      textStyle: {
        color: '#fff',
        rich: {
          a: {
            fontSize: 12,
            padding: [1, 0, 0, 0],
            width: 85,
          },
          b: {
            fontSize: 10,
            width: 55,
          },
        },
      },
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        left: 0,
        width: '50%',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'left',
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 125, name: '天棚主机' },
          { value: 280, name: '天棚水泵' },
          { value: 125, name: '新风主机' },
          { value: 125, name: '新风水系' },
          { value: 484, name: '地源水泵' },
          { value: 420, name: '冷却水泵' },
        ],
      },
    ],
  }
  myChart.setOption(option)
}

/** 柱状图 */
const barChart = ref()
function initBarChart() {
  const myChart = echarts.init(barChart.value)
  const option = {
    title: {
      text: '元/天',
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
    },
    grid: {
      width: '90%',
      height: '80%',
      containLabel: true,
      top: '25',
      left: '5%',
    },
    xAxis: {
      type: 'category',
      data: ['6-27', '6-28', '6-29', '6-27', '6-27', '6-27', '6-27'],
      axisLine: {
        show: false,
        lineStyle: {
          color: 'rgba(255,255,255,0.6)',
          width: 1,
          type: 'solid',
        },
      },
    },
    yAxis: {
      type: 'value',
      axisLine: {
        show: false,
        lineStyle: {
          color: 'rgba(255,255,255,0.6)',
          width: 1,
          type: 'solid',
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(127, 127, 127, 1)',
          type: 'dashed', // 线型为虚线
        },
      },
    },
    series: [
      {
        data: [20, 50, 190, 320, 395, 340, 210],
        type: 'bar',
        barWidth: 25, // 柱子宽度
        barGap: 3, // 柱子之间间距
        itemStyle: {
          normal: {
            color(params: { dataIndex: number }) {
              // 条件判断，当params.dataIndex为特定值时设置颜色
              if (params.dataIndex % 2 === 0)
                return '#4C81DD' // 设置为红色
              else
                return '#38D9D0' // 其他条形保持原有颜色
            },
          },
        },
      },
    ],
  }
  myChart.setOption(option)
}

/** 折线图 */
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

/** 横向柱状图 */
const reBarChart = ref()
function initReBarChart() {
  const mycharts = echarts.init(reBarChart.value)
  const proName = ['初始', '最高', '最低', '当前']

  const option = {
    grid: {
      left: '3%',
      right: '5%',
      bottom: '10%',
      top: '15%',
      containLabel: true,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'none',
      },
      formatter(params: {
        [x: string]: string
        value: string
      }[]) {
        return `${params[0].name} : ${params[0].value}`
      },
    },
    legend: {
      data: ['地热平衡', '节能环保'],
      icon: 'circle',
      x: 'center',
      top: 0,
      textStyle: {
        color: '#fff',
      },
    },
    xAxis: {
      show: true,
      splitLine: {
        show: true,
        textStyle: {
          color: '#333',
        },
        lineStyle: {
          color: '#8c8c8c',
          type: 'dashed',
        },
      },
      axisLine: {
        show: true,
        textStyle: {
          color: '#333',
        },
        lineStyle: {
          color: '#8c8c8c',
          type: 'dashed',
        },
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        show: true,
      },
      type: 'value',
    },
    yAxis: [{
      type: 'category',
      inverse: true,
      boundaryGap: true,
      axisLabel: {
        show: true,
        lineStyle: {
          color: '#f2f2f2',
        },
      },
      splitLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      data: proName,
    }],
    series: [{
      name: '地热平衡',
      type: 'bar',
      zlevel: 1,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: 'rgb(57,89,255,1)',
          }, {
            offset: 1,
            color: 'rgb(46,200,207,1)',
          }]),
        },
      },
      barWidth: 8,
      data: [88, 48, 150, 130],
    }, {
      name: '节能环保',
      type: 'bar',
      zlevel: 1,
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
            offset: 0,
            color: '#1AB2DC',
          }, {
            offset: 1,
            color: '#1CCC9D',
          }]),
        },
      },
      barWidth: 8,
      data: [32, 63, 100, 110],
    }],
  }
  mycharts.setOption(option)
}

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

onMounted(() => {
  initCPieChart()
  initPieChart()
  initLineChart()
  initBarChart()
  initReBarChart()
})
</script>

<template>
  <main>
    <TransitionLeftBox>
      <div class="left" fixed left-0 h-full w-80 p1 pt8>
        <BaseCard title="当代效能标识" h-40>
          <div flex="~ col" h-full w-full gap1>
            <div flex justify-between gap-1 text-3 color-white>
              <span h-4 w-7>低</span>
              <span v-for="i in 5" :key="i" h-4 w-7 border="1 solid blue" />
              <span h-4 w-7>高</span>
              <span h-4 w-7 bg-blue> 一级 </span>
            </div>
            <div flex="~ 1" h-30 w-full items-center justify-between>
              <div ref="cPieChart" h-full flex-1 mt="-1" />
              <div flex="~ col 1" items-start gap-2 text-2 color-white>
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
          </div>
        </BaseCard>
        <BaseCard title="系统费用统计" h-40>
          <div ref="barChart" h-full w-full />
        </BaseCard>
        <BaseCard title="各类型费用占比" h-40>
          <div ref="pieChart" h-full w-full />
        </BaseCard>
        <BaseCard title="能源分析" h-40>
          <div ref="reBarChart" h-full w-full />
        </BaseCard>
      </div>
    </TransitionLeftBox>
    <TransitionRightBox>
      <div class="right" fixed right-0 h-full w-80 p2 pt8>
        <BaseCard title="能源数据概况">
          <ul grid grid-cols-2 gap="0.5" color-white>
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
        <BaseCard title="能源数据概况">
          <div ref="lineChart" h-35 w-full />
        </BaseCard>
        <BaseCard title="系统效能统计">
          <BaseTable />
        </BaseCard>
      </div>
    </TransitionRightBox>
  </main>
</template>
