/*
 * 常量配置
 */

var now = new Date();
var oneDay = 24 * 3600 * 1000;

/*
 * 初始化
 */

var heartRate = document.getElementById("heartRate");
var bloodOxygen = document.getElementById("bloodOxygen");
var electrocardio = document.getElementById("electrocardio");
var secureRate = document.getElementById("secureRate");

var heartRateChart = echarts.init(heartRate);
var bloodOxygenChart = echarts.init(bloodOxygen);
var electrocardioChart = echarts.init(electrocardio);
var secureRateChart = echarts.init(secureRate);

var data = [
  {name:'2016/12/18 6:38:08', value:['2016/12/18 6:38:08', 80]},
  {name:'2016/12/18 16:18:18', value:['2016/12/18 16:18:18', 60]},
  {name:'2016/12/18 19:18:18', value:['2016/12/18 19:18:18', 90]},
  {name:'2016/12/19 6:38:08', value:['2016/12/19 6:38:08', 10]},
  {name:'2016/12/19 16:18:18', value:['2016/12/19 16:18:18', 70]},
  {name:'2016/12/19 19:18:18', value:['2016/12/19 19:18:18', 60]}
];
var anchor = [
  {name:'2016/12/18 00:00:0', value:['2016/12/18 00:00:0', 0]},
  {name:'2016/12/19 00:00:0', value:['2016/12/19 00:00:0', 0]}
];

secureRateOption = {
    title: {
    text: '动态数据 + 时间坐标轴'
  },
  tooltip: {
    trigger: 'axis',
    formatter: function (params) {
      params = params[0];
      var date = new Date(params.name);
      return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ':' + params.value[1];
    },
    axisPointer: {
      animation: false
    }
  },
  xAxis: {
    type: 'time',
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
    splitLine: {
      show: false
    }
  },
  series: [{
    name: '模拟数据',
    type: 'line',
    showSymbol: false,
    hoverAnimation: false,
    data: data
  }]
};
/*
 * 数据生成
 */

var data = [];
var value = Math.random() * 1000;

for (var i = 0; i < 100; i++) {
    data.push(randomData());
}

function randomData() {
    now = new Date(+now + oneDay);
    value += Math.random() * 10 - 5;
    return {
        name: now.toString(),
        value: [
            [now.getFullYear(), now.getMonth(), now.getDate()+1].join('/'),
            Math.round(value)
        ]
    }
}

/*
 * 图表渲染
 */

var heartRateOption = {
    title: {
        text: '心率'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data
    }]
};
var bloodOxygenOption = {
    title: {
        text: '血氧'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data
    }]
};
var electrocardioOption = {
    title: {
        text: '心电'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'time',
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        }
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: data
    }]
};
/*var secureRateOption = {
    title: {
        text: '安全指数'
    },
    tooltip: {
        /*trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            var date = new Date(params.name);
            return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + ' : ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'value',
        splitLine: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
            show: false
        },
    },
    series: [{
        name: '模拟数据',
        type: 'line',
        showSymbol: false,
        hoverAnimation: false,
        data: [0,1,2,3,4]
    }]
};
*/
setInterval(function () {
    for (var i = 0; i < 1; i++) {
        data.shift();
        data.push(randomData());
    }

    heartRateChart.setOption({
        series: [{
            data: data
        }]
    });
    bloodOxygenChart.setOption({
        series: [{
            data: data
        }]
    });
    electrocardioChart.setOption({
        series: [{
            data: data
        }]
    });
    secureRateChart.setOption({
      series: [{
          data: data
      }]
    });
}, 1000);

if (heartRateOption && typeof heartRateOption === "object") {
    heartRateChart.setOption(heartRateOption, true);
}
if (bloodOxygenOption && typeof bloodOxygenOption === "object") {
    bloodOxygenChart.setOption(bloodOxygenOption, true);
}
if (electrocardioOption && typeof electrocardioOption === "object") {
    electrocardioChart.setOption(electrocardioOption, true);
}
if (secureRateOption && typeof secureRateOption === "object") {
    secureRateChart.setOption(secureRateOption, true);
}
