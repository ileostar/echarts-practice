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
          { value: 125, name: '长期空置' },
          { value: 280, name: '长期未外出' },
          { value: 484, name: '小孩独自出门超时' },
          { value: 420, name: '老人独自出门超时' },
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
      text: '近一周访客超市楼栋分布',
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
  const hexToRgba = (hex: string, opacity: number) => {
    let rgbaColor = ''
    const reg = /^#[\da-f]{6}$/i
    if (reg.test(hex)) {
      rgbaColor = `rgba(${Number.parseInt(`0x${hex.slice(1, 3)}`)},${Number.parseInt(
      `0x${hex.slice(3, 5)}`,
    )},${Number.parseInt(`0x${hex.slice(5, 7)}`)},${opacity})`
    }
    return rgbaColor
  }

  // 数据整理
  const xData = ['模型NAME1', '模型NAME2', '模型NAME3', '模型NAME4']
  const yData = [4757, 3254, 2454, 2011, 1654]
  const max = Math.max(...yData)
  const labelColor = ['#FD5360', '#FF962B', '#FFAA00']
  const emptyData = yData.map((v, i) => {
    const color = i > 2 ? '#2C6CD1' : labelColor[i]
    const item = {
      value: max,
      label: {
        formatter: `{a|${v}}`,
        position: 'right',
        distance: 20,
        rich: {
          a: {
            color,
            borderColor: color,
            borderWidth: 1,
            borderType: 'dashed',
            padding: [0, 0, 2, 0],
            width: 60,
            height: 18,
            align: 'center',
            verticalAlign: 'middle',
            backgroundColor: hexToRgba(color, 0.05),
          },
        },

      },
    }
    return item
  })
  const xDataFormat = xData.map((v, i) => {
    const color = i > 2 ? '#2C6CD1' : labelColor[i]
    const item = {
      value: v,
      textStyle: {
        rich: {
          a: {
            color,
            width: 20,
            height: 20,
            align: 'center',
            verticalAlign: 'middle',
            backgroundColor: '#fff',
            borderRadius: 10,
            borderColor: hexToRgba(color, 0.2),
            borderWidth: 1,
            shadowColor: hexToRgba(color, 0.1),
            shadowBlur: 5,
          },
          b: {
            padding: [0, 5],
          },
          value: {
            color: '#2C6CD1',
          },
        },
      },
    }
    return item
  })
  xData.reverse()
  xDataFormat.reverse()
  yData.reverse()
  emptyData.reverse()

  const option = {
    grid: {
      top: '5%',
      left: '1%',
      right: '15%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: [{
      type: 'value',
      splitLine: {
        show: true,
        lineStyle: {
          width: 0,
          color: '#C7DEFF',
        },
      },
      max(value: { max: any }) {
        return value.max
      },
      axisLine: {
        lineStyle: {
          width: 2,
          color: '#C7DEFF',
        },
      },
      axisLabel: {
        color: '#2C6CD1',
      },
      axisTick: {
        show: false,
      },
    }],
    yAxis: [{
      type: 'category',
      name: '',
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          width: 2,
          color: '#C7DEFF',
        },
      },
      axisLabel: {
        formatter(value: string) {
          // return '{a|' + value.substr(value.length - 1) + '}{b|}{value|' + value + '}'
          return ` {b|}{value|${value}}`
        },
      },
      data: xDataFormat,
    }, {
      type: 'category',
      name: '',
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      axisLabel: {
        show: false,
      },
      axisLine: {
        show: false,
      },
      data: xData,
    }],
    series: [{
      type: 'bar',
      barWidth: 40,
      yAxisIndex: 1,
      itemStyle: {
        normal: {
          // barBorderRadius: [0, 6, 6, 0],
          color: 'rgba(225,225,225,0.4)',
        },
        emphasis: {
          // barBorderRadius: [0, 6, 6, 0],
          color: 'rgba(225,225,225,0.4)',
        },
      },
      label: {
        show: true,
        position: 'right',
      },
      data: emptyData,
    }, {
      type: 'bar',
      barWidth: 40,
      zlevel: 1,
      itemStyle: {
        normal: {
          // barBorderRadius: [0, 6, 6, 0],
          color: new echarts.graphic.LinearGradient(0, 0, 1, 1, [{
            offset: 0,
            color: '#3B6ECA',
          }, {
            offset: 1,
            color: '#C2E0FC',
          }], false),
        },
      },
      data: yData,
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
        <BaseCard title="当代效能标识" h-35>
          <div h-full flex items-center justify-between>
            <div ref="cPieChart" h-full w-full mt="-1" />
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
        <BaseCard title="系统费用统计" h-50>
          <div ref="barChart" h-40 w-full mt="-1" />
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
        <BaseCard title="能源数据概况">
          <div ref="lineChart" h-40 w-full />
        </BaseCard>
        <BaseCard title="系统效能统计">
          能源数据概况
        </BaseCard>
      </div>
    </TransitionRightBox>
  </main>
</template>
