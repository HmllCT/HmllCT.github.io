function desenhaGraficopie () {
    $("#gpie").highcharts({
    title: {
        text: "Memória utilizada",
    },
    chart:{
        type: "pie"
    },
    xAxis: {
        categories: ["Windows XP","Windows Vista","Windows 7"]
    },
    series: [{
        name: 'Memória utilizada em MB',
        colorByPoint: true,
        data: [{
            name: 'Windows XP',
            y: 244,
        }, {
            name: 'Windows Vista',
            y: 449
        }, {
            name: 'Windows 7',
            y: 440
        }]
    }]
  });
  $("#gpietmp").highcharts({
    title: {
        text: "Tempo de arranque",
    },
    chart:{
        type: "pie"
    },
    xAxis: {
        categories: ["Windows XP","Windows Vista","Windows 7"]
    },
    series: [{
        name: 'Tempo em segundos e milissegundos',
        colorByPoint: true,
        data: [{
            name: 'Windows XP',
            y: 10.40
        }, {
            name: 'Windows Vista',
            y: 40.40
        }, {
            name: 'Windows 7',
            y: 24.40
        }]
    }]
  });
};


window.onload = desenhaGraficopie;
    