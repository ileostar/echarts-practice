<script setup lang="ts">
import * as echarts from 'echarts'
import centerImg from '~/assets/png/img/yz.png'

onMounted(() => {
  initPieChart()
  initLineChart()
  initBarChart()
})

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
}, {
  monitorId: '监控8',
  position: '大西门云台',
  time: '07:12:18',
  status: '处理中',
}, {
  monitorId: '监控9',
  position: '大西门云台',
  time: '07:12:18',
  status: '处理中',
}, {
  monitorId: '监控10',
  position: '大西门云台',
  time: '07:12:18',
  status: '处理中',
}])
</script>

<template>
  <main relative h-full w-full>
    <TransitionLeftBox>
      <div class="left" flex="~ col gap-1" fixed left-0 h-full w-80 p2 color-white>
        <BaseCard title="安防概况" h-35>
          <ul flex="~ gap-5" h-full w-full>
            <li flex="~ col gap-1" flex-1>
              <div flex="~ 1" h-full w-full items-center justify-center>
                <img src="../assets/png/img/title.png" h-12 w-auto alt="">
              </div>
              <div p="0.5" w-full bg-blue-6 text-2>
                业主人数
              </div>
              <p text-2 color-blue>
                880
              </p>
            </li>
            <li flex="~ col gap-1" flex-1>
              <div flex="~ col gap-1" flex-1 items-center justify-center>
                <p color-blue text="2.5">
                  当前社区人数
                </p>
                <p text-5 color-blue font-bold>
                  12530
                </p>
              </div>
              <div p="0.5" w-full bg-blue-6 text-2>
                访客人数
              </div>
              <p text-2 color-blue>
                880
              </p>
            </li>
            <li flex="~ col gap-1" flex-1>
              <div flex="~ col gap-1" flex-1 items-center justify-center>
                <p color-blue text="2.5">
                  黑名单
                </p>
                <p text-5 color-blue font-bold>
                  12530
                </p>
              </div>
              <div p="0.5" w-full bg-blue-6 text-2>
                外来人数
              </div>
              <p text-2 color-blue>
                880
              </p>
            </li>
          </ul>
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
      <div class="right" fixed right-0 h-full w-80 p2 color-white>
        <BaseCard title="黑名单数据" h-25>
          <div flex items-center justify-between gap-2 px2>
            <img src="../assets/png/img/user.png" h-10 w-auto alt="">
            <span text="2.5">近一月出现黑名单次数</span>
            <span text-5 color-blue-6>754</span>
          </div>
        </BaseCard>
        <BaseCard title="超时访客数据" h-50>
          <div ref="barChart" h-40 w-full mt="-1" />
        </BaseCard>
        <BaseCard title="业主关怀" h-40>
          <div ref="pieChart" h-full w-full />
        </BaseCard>
        <BaseCard title="报警数据" h-55>
          <div ref="lineChart" h-full w-full />
        </BaseCard>
      </div>
    </TransitionRightBox>
  </main>
</template>
