

  const ctx = document.getElementById('myChart').getContext('2d');
  Chart.defaults.font.size = 13;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['8 Feb', '15 Feb', '22 Feb', '1 Mar','3 Mar','5 Mar'],
      datasets: [{
        labelColor: '#C4C4C4',
        data: [18, 20, 23, 25, 20, 30],
        pointBorderWidth: 1,
        borderWidth:5,
        fill: true,
        fillColor:'#809a8acc',
        backgroundColor: '#809a8acc',
        borderColor: '#14CE8B',
        lineTension: .5,
        pointRadius: .1,
        
      }]
    },
    options: {
      animation: {
        animationScale:true
      },
        layout: {
            padding: 20
        },
        plugins: {
            title: {
              font:{
                size:15,
              },  
              text: 'CHARTS',
              display: true,
              color: '#C4C4C4',
              align:'start',
            }
          },
          legend:{
            display:false
          },
    }
  });





  
  const ctx2 = document.getElementById('myChart-2');

  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Strong Sell', 'Sell', 'Hold', 'Buy','Strong Buy'],
      datasets: [{
        labelColor: '#C4C4C4',
        data: [18, 20, 23, 25,28],
        borderWidth: 3,
        fill: true,
        backgroundColor:['#F6544C', 'rgba(246, 84, 76, 0.5)', '#323438', 'rgba(21, 227, 181, 0.5)','#15E3B5'] ,
        backgroundWidth:20,
        borderColor: 'rgba(196, 196, 196, 0.1)',
        tension: .5,
        pointRadius: 1,
        
      }]
    },
    options: {
      animation: {
        animationScale:true
      },
      cutOutPercentage:10,
        layout: {
            padding: 10
        },
        plugins: {
            title: {
              font:{
                size:15,
              },
              text: 'ANALYSTS RECOMMENDATIONS',
              display: true,
              color: '#C4C4C4',
              align:'start',
            },
            legend:{
              position:'right'
            },
          },
          
    }
  });




   
  const ctx3 = document.getElementById('myChart-3');

  new Chart(ctx3, {
    type: 'bar',
    data: {
      labels: ['Jule 20', 'Aug 20', 'Sept 20', 'Oct 20','Nov 20','Dec 20'],
      datasets: [{
        labelColor: '#C4C4C4',
        data: [28, 26, 25, 22,19,18],
        borderWidth: 3,
        fill: true,
        backgroundColor:['#F6544C', 'rgba(246, 84, 76, 0.5)', '#323438', 'rgba(21, 227, 181, 0.5)','#15E3B5', '#034839'] ,
        backgroundWidth:20,
        tension: .5,
        borderRadius:5
      }]
    },
    options: {
      animation: {
        animationScale:true
      },
      cutOutPercentage:10,
        layout: {
            padding: 10
        },
        plugins: {
            title: {
              font:{
                size:15,
              },
              text: 'NUMBER OF ANALYSTS',
              display: true,
              color: '#C4C4C4',
              align:'start',
              padding:20
            },
            legend:{
              display:false
            },
          },
          
    }
  });



  const ctx4 = document.getElementById('myChart-4');

  new Chart(ctx4, {
    type: 'line',
    data: {
      labels: ['Jule 20', 'Aug 20', 'Sept 20', 'Oct 20','Nov 20','Dec 20'],
      datasets: [{
        labelColor: '#C4C4C4',
        data: [28, 28,28,28,28,28],
        borderWidth: 3,
        borderColor:'rgba(196, 196, 196, 0.5)',
        tension: .5,
      }]
    },
    options: {
      animation: {
        animationScale:true
      },
      cutOutPercentage:10,
        layout: {
            padding: 10
        },
        plugins: {
            title: {
              font:{
                size:15,
              },
              text: 'PRICE TARGET',
              display: true,
              color: '#C4C4C4',
              align:'start',
              padding:20
            },
            legend:{
              display:false
            },
          },
          
    }
  });






