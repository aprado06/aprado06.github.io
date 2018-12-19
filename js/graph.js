Data = []; 
d3.csv("https://data.cityofnewyork.us/resource/hvnc-iy6e.csv", function(info) {
    var data = info
    .map(function (row) {
      return [row['district'],
              row['ytd_attendance_avg_'],
             ];
    });     
     
for (i = 0; i < data.length; i++) {
  Data.push([i, parseInt(data[i][1])]);
            }
});    
console.log(Data);            

window.onload = function () {
    var chart1 = new CanvasJS.Chart("chartContainer1", {
      animationEnabled: true,
      backgroundColor: "dimgrey",    
      title:{
        text: "District Attendance",
        fontColor: "Black"  
      },
       axisX:{
       title: "District", 
       titleFontColor: "Black",       
       interval: 1,
       lineColor: "Black"       
      },
       axisY: {
       title: "Attendance Percent",
       titleFontColor: "Black",
       lineColor: "Black"   
      },
      data: [//array of dataSeries              
        { //dataSeries object

         /*** Change type "column" to "bar", "area", "line" or "pie"***/
         type: "column",
         dataPoints: [
         {label:1,y:91.18},
         {label:2,y:89.01},
         {label:3,y:89.28},
         {label:4,y:91.13},
         {label:5,y:89.08},
         {label:6,y:91.34},
         {label:7,y:86.75},
         {label:8,y:87.15},
         {label:9,y:89.27},
         {label:10,y:88.92},
         {label:11,y:89.84},
         {label:12,y:87.33},
         {label:13,y:89.56},
         {label:14,y:89.41},
         {label:15,y:91.27},
         {label:16,y:85.55},
         {label:17,y:89.67},
         {label:18,y:89.83},
         {label:19,y:87.81},
         {label:20,y:92.77},
         {label:21,y:90.5},
         {label:22,y:92.57},
         {label:23,y:86.98},
         {label:24,y:92.21},
         {label:25,y:91.9},
         {label:26,y:93.34},
         {label:27,y:89.88},
         {label:28,y:91.7},
         {label:29,y:92.14},
         {label:30,y:92.79},
         {label:31,y:90.98},
         {label:32,y:89.28}
         ]
       }
       ]
     });

    chart1.render();
  }