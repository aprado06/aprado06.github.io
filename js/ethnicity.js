var chart3 = new CanvasJS.Chart("chartContainer3",
    {
     animationEnabled: true,
     backgroundColor: "dimgrey",
     title:{
      text: "Total Ethnicity",
      fontColor: "Black"      
    },
    axisX:{
       title: "District", 
       titleFontColor: "Black",       
       interval: 1,
       lineColor: "Black"       
      },
       axisY: {
       title: "Ethnicities",
       titleFontColor: "Black",
       lineColor: "Black"   
      },
    data: [
    {
     markerSize: 15,    
     type: "scatter",
     dataPoints: [

     { x: 1, y: 11 },
     { x: 2, y: 124 },
     { x: 3, y: 38 },
     { x: 4, y: 20 },
     { x: 5, y: 7 },
     { x: 6, y: 18 },
     { x: 7, y: 74 },
     { x: 8, y: 17 },
     { x: 9, y: 34 },
     { x: 10, y: 324 },
     { x: 11, y: 139 },
     { x: 12, y: 26 },
     { x: 13, y: 6 },
     { x: 14, y: 47 },
     { x: 15, y: 63 },
     { x: 16, y: 0 },
     { x: 17, y: 100 },
     { x: 18, y: 19 },
     { x: 19, y: 0 },
     { x: 20, y: 305 },
     { x: 21, y: 421 },
     { x: 22, y: 228 },
     { x: 23, y: 0 },
     { x: 24, y: 2 },
     { x: 25, y: 2 },
     { x: 26, y: 2 },
     { x: 27, y: 40 },
     { x: 28, y: 26 },
     { x: 29, y: 4 },
     { x: 30, y: 6 },
     { x: 31, y: 0 },
     { x: 32, y: 0 }     
     ]
   }
   ]
 });

chart3.render();