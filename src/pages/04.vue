<!--
 * @Author: your name
 * @Date: 2024-05-08 18:21:38
 * @LastEditors: your name
 * @LastEditTime: 2024-05-11 15:32:42
 * @Description:
 * @FilePath: \demo\src\pages\04.vue
-->
<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

onMounted(() => {
  initReBarChart()
  initLineChart()
  initBarChart()
})

/** 热泵图标信息 */
const heatPumpIconInfos = ref([
  {
    imgPath: '/src/assets/png/img/gl.png',
    name: '功率',
    value: '211.8',
  },
  {
    imgPath: '/src/assets/png/img/dl.png',
    name: '电量',
    value: '272322.2',
  },
])

/** 热崩徽标信息 */
const heatPumpBadgeInfos = ref([{
  name: '机组运行工况',
  value: '制热',
}, {
  name: '机组运行状态',
  value: '运行',
}, {
  name: 'C1启动状态',
  value: '启动',
}, {
  name: 'C2启动状态',
  value: '启动',
}])

/** 获取热崩信息的徽标颜色 */
function getHeatPumpColor(state: string) {
  return state === '制热' ? 'bg-amber' : 'bg-gray'
}

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
      width: '100%',
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
</script>

<template>
  <div>
    <TransitionLeftBox>
      <div class="left" fixed left-0 h-full w-80 p1 pt8>
        <BaseCard v-for="e in 4" :key="e" title="4#天棚热泵主机" h-38>
          <div flex="~ col" w-full items-center justify-center gap2>
            <div flex="~ 1" w-full items-center justify-between gap-2>
              <div v-for="i in heatPumpIconInfos" :key="i.name" flex items-center justify-between gap-2>
                <img :src="i.imgPath" h-9 w-auto>
                <div flex="~ col" items-start>
                  <h4 text-2 color-blue-3>
                    {{ i.name }}
                  </h4>
                  <p text-5 color-white>
                    {{ i.value }}
                  </p>
                </div>
              </div>
            </div>
            <ul grid grid-cols-2 w-full justify-between gap2>
              <li v-for="i in heatPumpBadgeInfos" :key="i.name" flex justify-between color-white>
                <span text="2.5">
                  {{ i.name }}
                </span>
                <span px1 :class="getHeatPumpColor(i.value)" text-2 p="0.5">
                  {{ i.value }}
                </span>
              </li>
            </ul>
          </div>
        </BaseCard>
      </div>
    </TransitionLeftBox>
    <TransitionRightBox>
      <div class="right" fixed right-0 h-full w-80 p2 pt8>
        <select id="demo" name="demo" border="2 solid blue-5" w-full rd-1 bg-transparent p1 text-3 color-white outline-none>
          <option value="" hidden>
            请选择
          </option>
        </select>
        <BaseCard title="三相电压" h-50>
          <div ref="reBarChart" h-40 w-full />
        </BaseCard>
        <BaseCard title="能源数据概况" w-full>
          <div ref="lineChart" h-40 w-full />
        </BaseCard>
        <BaseCard title="系统效能统计">
          <div ref="barChart" h-40 w-full mt="-1" />
        </BaseCard>
      </div>
    </TransitionRightBox>
  </div>
</template>
