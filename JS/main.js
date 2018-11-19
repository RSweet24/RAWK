$(document).ready(function(){

google.charts.load('current', {
    packages: ['corechart']
});
google.charts.setOnLoadCallback(weatherChart);
google.charts.setOnLoadCallback(stockGraph);

function weatherChart() {
    var data = google.visualization.arrayToDataTable([
      ['Day', 'Temp'],
      ['M',  95,],
      ['T',  65,],
      ['W',  65,],
      ['T',  67,],
      ['F',  80,],
      ['S',  75,],
      ['S',  75,],
      ['M',  23,],
      ['T',  28,],
      ['W',  30,]
    ]);

    var options = {
      title: 'Previous 10 Day Forecast',
      curveType: 'function',
      legend: { position: 'bottom' },
      backgroundColor: '#FFA500',
      vAxis: {title: 'Fahrenheit'}
    };

    var chart = new google.visualization.LineChart(document.getElementById('weatherChart'));

    chart.draw(data, options);
  }
  function stockGraph(){
    var stockData = google.visualization.arrayToDataTable([
      ['Day', 'Price'],
      ['M', 108,],
      ['T', 105,],
      ['W', 103,],
      ['T', 107,],
      ['F', 102,],
      ['S', 98.7,],
      ['S', 103.3,]
    ]);

    var stockOptions = {
      title: 'Full Week stock rundown',
      curveType: 'function',
      legend: { position: 'bottom' },
      backgroundColor: '#7FFF00',
      vAxis: {title: 'Stock Price'}
    };
    var stockChart = new google.visualization.LineChart(document.getElementById('stockGraph'));
    stockChart.draw(stockData, stockOptions);
  }
  
  $(window).resize(function(){
    weatherChart();
    stockGraph();
  });
});

