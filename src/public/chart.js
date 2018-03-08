var secureRate = document.getElementById("secureRate");
var heartRate = document.getElementById("heartRate");
var bloodOxygen = document.getElementById("bloodOxygen");
var electrocardio = document.getElementById("electrocardio");

var secureRateChart = echarts.init(secureRate);
var heartRateChart = echarts.init(heartRate);
var bloodOxygenChart = echarts.init(bloodOxygen);
var electrocardioChart = echarts.init(electrocardio);

var date = [];
var dataOfSecureRateOption = [];
var dataOfHeartRate = [];
var dataOfBloodOxygen = [];
var dataOfElectrocardio = [];

var valueOfSecureRate = 100;
var valueOfHeartRate = 80;
var valueOfBloodOxygen = 98;
var valueOfElectrocardio = 1000;


//生成数据
for(var i=0;i<1000;i++){
    var now = new Date();

    dataOfSecureRateOption.push({
        value:[
            [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
            randomDataOfSecureRate()
        ]
    });
    dataOfHeartRate.push({
        value:[
            [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
            randomDataOfHeartRate(),
        ]
    });
    dataOfBloodOxygen.push({
        value:[
            [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
            randomDataOfBloodOxygen(),
        ]
    });
    dataOfElectrocardio.push({
        value:[
            [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
            randomDataOfElectrocardio()
        ]
    });
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
        data: dataOfSecureRateOption
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
        data: dataOfHeartRate
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
        data: dataOfBloodOxygen
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
        data: dataOfElectrocardio
    }]
};

setInterval(function () {
    var now = new Date();

    var newDate =  [now.getHours(), now.getMinutes(), now.getSeconds()].join(':');
    date.shift();
    date.push(newDate)

    dataOfSecureRateOption.shift();
    dataOfHeartRate.shift();
    dataOfBloodOxygen.shift();
    dataOfElectrocardio.shift();

    var newData = randomDataOfSecureRate();
    dataOfSecureRateOption.push({
        value: [
            newDate,newData
        ]
    });

    var newData = randomDataOfHeartRate();
    dataOfHeartRate.push({
        value: [
            newDate,newData
        ]
    });

    var newData = randomDataOfBloodOxygen();
    dataOfBloodOxygen.push({
        value: [
            newDate,newData
        ]
    });

    var newData = randomDataOfElectrocardio();
    dataOfElectrocardio.push({
        value: [
            newDate,newData
        ]
    });

    secureRateChart.setOption({
        xAxis: {
          data: date
        },
        series: [{
            data: dataOfSecureRateOption
        }]
    });
    heartRateChart.setOption({
        xAxis: {
            data: date
        },
        series: [{
            data: dataOfHeartRate
        }]
    });
    bloodOxygenChart.setOption({
        xAxis: {
            data: date
        },
        series: [{
            data: dataOfBloodOxygen
        }]
    });
    electrocardioChart.setOption({
        xAxis: {
            data: date
        },
        series: [{
            data: dataOfElectrocardio
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

function randomDataOfSecureRate() {
    valueOfSecureRate += Math.random() * 2 - 1;
    return Math.round(valueOfSecureRate);
}
function randomDataOfHeartRate() {
    valueOfHeartRate += Math.random() * 2 - 1;
    return Math.round(valueOfHeartRate);
}
function randomDataOfBloodOxygen() {
    valueOfBloodOxygen += Math.random() * 2 - 1;
    return Math.round(valueOfBloodOxygen);
}
function randomDataOfElectrocardio() {
    valueOfElectrocardio += Math.random() * 2 - 1;
    return Math.round(valueOfElectrocardio);
}

