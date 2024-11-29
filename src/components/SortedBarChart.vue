<template>
    <div ref="chart" style="width: 100%; height: 500px; margin-top: 30px" class="chart"></div>
</template>
  
<script setup lang = "ts">
import * as echarts from 'echarts';
import { ProgramRecord } from "@/components/DataTable.vue"
import { useTemplateRef, onMounted } from 'vue'

const props = defineProps<{
    data: ProgramRecord[]
}>()

onMounted(() => {
    initChart();
}) 

const barChart = useTemplateRef('chart')


function initChart() {
      const chart = echarts.init(barChart.value);

      // Sort data by `uniqueClients` in descending order
      const sortedData = props.data.sort((a, b) => - b.uniqueClients + a.uniqueClients);

      // Extract program names and unique client counts
      const programs = sortedData.map(item => item.program);
      const uniqueClients = sortedData.map(item => item.uniqueClients);

      // Configure the chart
      const option = {
        title: {
          text: 'Просмотров от уникальных клиентов',
          left: 'center',
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        yAxis: {
          type: 'category',
          data: programs,
          axisLabel: {
            rotate: 0,
            interval: 0,
          },
        },
        xAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Уникальные клиенты',
            type: 'bar',
            data: uniqueClients,
            itemStyle: {
              color: '#5470C6',
            },
          },
        ],
      };

      // Set the options
      chart.setOption(option);

      // Make the chart responsive
      window.addEventListener('resize', ()=>{chart.resize()});
      chart.resize();
}
</script>

<style scoped>
.chart {
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
}
</style>
