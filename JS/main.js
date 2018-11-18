$(document).ready(function(){

google.charts.load('current', {
    packages: ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
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
  $(window).resize(function(){
    drawChart();
  });
});

