<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :lg="6" class="mb-4">
        <el-card shadow="hover">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-gray-500">总用户数</div>
              <div class="text-2xl font-bold mt-2">{{ sumUserNumber }}</div>
            </div>
            <el-icon class="text-blue-500" :size="40">
              <user />
            </el-icon>
          </div>
        </el-card>
      </el-col>
      <!-- 其他统计卡片类似 -->
    </el-row>

    <el-card class="mt-4">
      <template #header>
        <span>访问趋势</span>
      </template>
      <div id="chart-container" style="height: 300px"></div>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import * as echarts from 'echarts'
import { getGround } from '@/api'

const sumUserNumber = ref(0)
const dailyList = ref([])

// 异步获取数据并渲染图表
let getGroundData = async () => {
  let response = (await getGround()).data
  sumUserNumber.value = response.data.count
  dailyList.value = response.data.dailyViewing
  renderChart(dailyList.value)
}
getGroundData()
const renderChart = (dailyData) => {
  const chart = echarts.init(document.getElementById('chart-container'))
  chart.setOption({
    xAxis: {
      type: 'category',
      data: dailyData.map(item => new Date(item.viewData).toLocaleDateString()) // 格式化日期
    },
    yAxis: { type: 'value' },
    series: [{
      data: dailyData.map(item => item.viewNum),
      type: 'line'
    }]
  })
}
</script>
