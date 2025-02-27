<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :lg="6" class="mb-4">
        <el-card shadow="hover">
          <div class="flex items-center justify-between">
            <div>
              <div class="text-gray-500">总用户数</div>
              <div class="text-2xl font-bold mt-2">1,234</div>
            </div>
            <el-icon class="text-blue-500" :size="40"><user /></el-icon>
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
import { User } from '@element-plus/icons-vue'
import * as echarts from 'echarts'
import { onMounted } from 'vue'

onMounted(() => {
  const chart = echarts.init(document.getElementById('chart-container'))
  chart.setOption({
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [{ data: [820, 932, 901, 934, 1290, 1330, 1320], type: 'line' }]
  })
})
</script>