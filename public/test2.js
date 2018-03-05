var secureRate = document.getElementById("secureRate");

var myChart = echarts.init(secureRate);

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

var date = [];
var data = [];
var value = Math.random() * 1000;

for (var i = 0; i < 1000; i++) {
    data.push(randomData());
    date.push('')
}

option = {
    title: {
        text: '动态数据 + 时间坐标轴'
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

    myChart.setOption({
        xAxis: {
          data: date
        },
        series: [{
            data: data
        }]
    });
}, 1000);

if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
