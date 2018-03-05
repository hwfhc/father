var secureRate = document.getElementById("secureRate");
var heartRate = document.getElementById("heartRate");
var bloodOxygen = document.getElementById("bloodOxygen");
var electrocardio = document.getElementById("electrocardio");

var secureRateChart = echarts.init(secureRate);
var heartRateChart = echarts.init(heartRate);
var bloodOxygenChart = echarts.init(bloodOxygen);
var electrocardioChart = echarts.init(electrocardio);

var date = [];
var data = [];
var value = Math.random() * 1000;

//生成数据
for (var i = 0; i < 100; i++) {
    data.push(randomData());
    date.push('')
}

const secureRateOption = {
    title: {

        text: '安全指数'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            return params.value[0] + ' / ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: date
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
const heartRateOption = {
    title: {
        text: '心率'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            return params.value[0] + ' / ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: date
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
const bloodOxygenOption = {
    title: {
        text: '血氧'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            return params.value[0] + ' / ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: date
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
const electrocardioOption = {
    title: {
        text: '心电'
    },
    tooltip: {
        trigger: 'axis',
        formatter: function (params) {
            params = params[0];
            return params.value[0] + ' / ' + params.value[1];
        },
        axisPointer: {
            animation: false
        }
    },
    xAxis: {
        type: 'category',
        splitLine: {
            show: false
        },
        data: date
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

setInterval(function () {
    var _data = randomData();
    data.shift();
    date.shift();
    data.push(_data);
    date.push(_data.value[0])

    secureRateChart.setOption({
        xAxis: {
          data: date
        },
        series: [{
            data: data
        }]
    });
    heartRateChart.setOption({
        xAxis: {
            data: date
        },
        series: [{
            data: data
        }]
    });
    bloodOxygenChart.setOption({
        xAxis: {
            data: date
        },
        series: [{
            data: data
        }]
    });
    electrocardioChart.setOption({
        xAxis: {
            data: date
        },
        series: [{
            data: data
        }]
    });
}, 1000);

if (secureRateOption && typeof secureRateOption === "object") {
    secureRateChart.setOption(secureRateOption, true);
}
if (heartRateOption && typeof heartRateOption === "object") {
    heartRateChart.setOption(heartRateOption, true);
}
if (bloodOxygenOption && typeof bloodOxygenOption === "object") {
    bloodOxygenChart.setOption(bloodOxygenOption, true);
}
if (electrocardioOption && typeof electrocardioOption === "object") {
    electrocardioChart.setOption(electrocardioOption, true);
}

function randomData() {
    var now = new Date();
    value = value + Math.random() * 21 - 10;
    return {
        value: [
            [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
            Math.round(value)
        ]
    }
}