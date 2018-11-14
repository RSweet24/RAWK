$(document).ready(function(){

google.charts.load('current', {
    packages: ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Time', 'Temp', 'Expenses'],
      ['2004',  1000,      400],
      ['2005',  1170,      460],
      ['2006',  660,       1120],
      ['2007',  1030,      540]
    ]);

    var options = {
      title: 'Company Performance',
      curveType: 'function',
      legend: { position: 'bottom' },
      backgroundColor: '5a5a5a'
    };

    var chart = new google.visualization.LineChart(document.getElementById('weatherChart'));

    chart.draw(data, options);
  }
});