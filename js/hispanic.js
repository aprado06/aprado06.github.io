var chart3 = new CanvasJS.Chart("chartContainer3",
    {
     animationEnabled: true,
     backgroundColor: "dimgrey",
     title:{
      text: "Percentage Hispanic",
      fontColor: "Black"      
    },
    axisX:{
       title: "District", 
       titleFontColor: "Black",       
       interval: 1,
       lineColor: "Black"       
      },
       axisY: {
       title: "Percent hispanic",
       titleFontColor: "Black",
       lineColor: "Black"   
      },
    data: [
    {
     markerSize: 15,    
     type: "scatter",
     dataPoints: [

     { x: 1, y: 0.09 },
     { x: 2, y: 0.23 },
     { x: 3, y: 0.47 },
     { x: 4, y: 0.2 },
     { x: 5, y: 0.14 },
     { x: 6, y: 0.67 },
     { x: 7, y: 0.41 },
     { x: 8, y: 0.65 },
     { x: 9, y: 0.5 },
     { x: 10, y: 0.51 },
     { x: 11, y: 0.32 },
     { x: 12, y: 0.38 },
     { x: 13, y: 0 },
     { x: 14, y: 0.04 },
     { x: 15, y: 0.03 },
     { x: 16, y: 0 },
     { x: 17, y: 0 },
     { x: 18, y: 0.11 },
     { x: 19, y: 0 },
     { x: 20, y: 0 },
     { x: 21, y: 0.05 },
     { x: 22, y: 0.07 },
     { x: 23, y: 0 },
     { x: 24, y: 0 },
     { x: 25, y: 0.5 },
     { x: 26, y: 0.5 },
     { x: 27, y: 0.03 },
     { x: 28, y: 0.12 },
     { x: 29, y: 0 },
     { x: 30, y: 0.83 },
     { x: 31, y: 0 },
     { x: 32, y: 0 }     
     ]
   }
   ]
 });

chart3.render();