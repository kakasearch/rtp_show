// var xlsx = require('xlsx')
// var xlsx_style = require('xlsx-style')

var xlsx = XLSX
var xlsx_style = XLSXX
var workbook
half_area = {//半面积表
    "路堤":[
[[0.00,-2.07],[0.00,-1.88],[0.00,-1.64],[0.00,-1.36],[0.00,-1.01],[0.00,-0.57],[0.00,0.00],[0.81,0.00],[1.96,0.00],[3.73,0.00],[6.85,0.00],[13.69,0.00],[41.07,0.00]],
[[0.21,-1.23],[0.25,-0.98],[0.31,-0.70],[0.42,-0.40],[0.63,-0.10],[1.18,0.00],[2.04,0.00],[3.20,0.00],[4.87,0.00],[7.44,0.00],[11.94,0.00],[21.84,0.00],[61.45,0.00]],
[[0.83,-0.60],[1.00,-0.38],[1.25,-0.16],[1.67,-0.01],[2.37,0.00],[3.27,0.00],[4.45,0.00],[6.04,0.00],[8.31,0.00],[11.82,0.00],[17.97,0.00],[31.49,0.00],[85.57,0.00]],
[[1.88,-0.20],[2.25,-0.06],[2.81,0.00],[3.58,0.00],[4.51,0.00],[5.70,0.00],[7.24,0.00],[9.32,0.00],[12.30,0.00],[16.89,0.00],[24.94,0.00],[42.64,0.00],[113.45,0.00]],
[[3.33,-0.01],[3.99,0.00],[4.79,0.00],[5.76,0.00],[6.95,0.00],[8.45,0.00],[10.40,0.00],[13.04,0.00],[16.81,0.00],[22.64,0.00],[32.85,0.00],[55.29,0.00],[145.07,0.00]],
[[5.17,0.00],[6.01,0.00],[7.00,0.00],[8.20,0.00],[9.67,0.00],[11.52,0.00],[13.94,0.00],[17.20,0.00],[21.87,0.00],[29.07,0.00],[41.69,0.00],[69.44,0.00],[180.45,0.00]],
[[7.23,0.00],[8.24,0.00],[9.44,0.00],[10.89,0.00],[12.68,0.00],[14.93,0.00],[17.85,0.00],[21.81,0.00],[27.46,0.00],[36.19,0.00],[51.47,0.00],[85.09,0.00],[219.57,0.00]],
[[9.49,0.00],[10.69,0.00],[12.12,0.00],[13.85,0.00],[15.98,0.00],[18.65,0.00],[22.14,0.00],[26.85,0.00],[33.58,0.00],[43.98,0.00],[62.19,0.00],[102.24,0.00],[262.45,0.00]],
[[11.94,0.00],[13.36,0.00],[15.04,0.00],[17.07,0.00],[19.56,0.00],[22.71,0.00],[26.80,0.00],[32.33,0.00],[40.24,0.00],[52.46,0.00],[73.85,0.00],[120.89,0.00],[309.07,0.00]],
[[14.59,0.00],[16.24,0.00],[18.19,0.00],[20.54,0.00],[23.44,0.00],[27.09,0.00],[31.84,0.00],[38.26,0.00],[47.44,0.00],[61.62,0.00],[86.44,0.00],[141.04,0.00],[359.45,0.00]],
[[17.44,0.00],[19.33,0.00],[21.57,0.00],[24.27,0.00],[27.60,0.00],[31.80,0.00],[37.25,0.00],[44.63,0.00],[55.17,0.00],[71.46,0.00],[99.97,0.00],[162.69,0.00],[413.57,0.00]],
[[20.49,0.00],[22.64,0.00],[25.19,0.00],[28.26,0.00],[32.05,0.00],[36.83,0.00],[43.04,0.00],[51.44,0.00],[63.44,0.00],[81.98,0.00],[114.44,0.00],[185.84,0.00],[471.45,0.00]],
[[23.73,0.00],[26.16,0.00],[29.04,0.00],[32.51,0.00],[36.79,0.00],[42.19,0.00],[49.20,0.00],[58.69,0.00],[72.24,0.00],[93.19,0.00],[129.85,0.00],[210.49,0.00],[533.07,0.00]],
[[27.17,0.00],[29.89,0.00],[33.12,0.00],[37.02,0.00],[41.82,0.00],[47.87,0.00],[55.74,0.00],[66.38,0.00],[81.58,0.00],[105.07,0.00],[146.19,0.00],[236.64,0.00],[598.45,0.00]],
[[30.81,0.00],[33.84,0.00],[37.44,0.00],[41.79,0.00],[47.14,0.00],[53.88,0.00],[62.65,0.00],[74.51,0.00],[91.46,0.00],[117.64,0.00],[163.47,0.00],[264.29,0.00],[667.57,0.00]],
[[34.65,0.00],[38.01,0.00],[42.00,0.00],[46.82,0.00],[52.74,0.00],[60.22,0.00],[69.94,0.00],[83.08,0.00],[101.87,0.00],[130.89,0.00],[181.69,0.00],[293.44,0.00],[740.45,0.00]],
[[38.68,0.00],[42.39,0.00],[46.79,0.00],[52.10,0.00],[58.64,0.00],[66.88,0.00],[77.60,0.00],[92.10,0.00],[112.81,0.00],[144.82,0.00],[200.85,0.00],[324.09,0.00],[817.07,0.00]],
[[45.46,0.00],[49.04,0.00],[53.35,0.00],[58.65,0.00],[65.32,0.00],[73.98,0.00],[85.67,0.00],[102.32,0.00],[127.94,0.00],[172.43,0.00],[268.82,0.00],[635.13,0.00],[854.50,0.00]],
[[49.61,0.00],[53.57,0.00],[58.35,0.00],[64.22,0.00],[71.62,0.00],[81.22,0.00],[94.18,0.00],[112.63,0.00],[141.02,0.00],[190.33,0.00],[297.18,0.00],[703.18,0.00],[933.00,0.00]],
[[53.98,0.00],[58.34,0.00],[63.61,0.00],[70.09,0.00],[78.24,0.00],[88.83,0.00],[103.12,0.00],[123.47,0.00],[154.78,0.00],[209.16,0.00],[326.99,0.00],[774.73,0.00],[1011.50,0.00]],
[[58.55,0.00],[63.35,0.00],[69.13,0.00],[76.24,0.00],[85.19,0.00],[96.81,0.00],[112.50,0.00],[134.84,0.00],[169.21,0.00],[228.91,0.00],[358.26,0.00],[849.78,0.00],[1090.00,0.00]],
[[63.34,0.00],[68.58,0.00],[74.91,0.00],[82.68,0.00],[92.47,0.00],[105.17,0.00],[122.32,0.00],[146.74,0.00],[184.32,0.00],[249.58,0.00],[390.99,0.00],[928.33,0.00],[1168.50,0.00]],
[[68.35,0.00],[74.05,0.00],[80.94,0.00],[89.40,0.00],[100.06,0.00],[113.90,0.00],[132.57,0.00],[159.18,0.00],[200.10,0.00],[271.18,0.00],[425.18,0.00],[1010.38,0.00],[1247.00,0.00]],
[[73.56,0.00],[79.76,0.00],[87.23,0.00],[96.42,0.00],[107.99,0.00],[123.00,0.00],[143.27,0.00],[172.14,0.00],[216.55,0.00],[293.69,0.00],[460.82,0.00],[1095.93,0.00],[1325.50,0.00]],
[[78.99,0.00],[85.69,0.00],[93.78,0.00],[103.72,0.00],[116.23,0.00],[132.47,0.00],[154.40,0.00],[185.63,0.00],[233.68,0.00],[317.12,0.00],[497.93,0.00],[1184.98,0.00],[1404.00,0.00]],
[[84.63,0.00],[91.86,0.00],[100.58,0.00],[111.30,0.00],[124.80,0.00],[142.32,0.00],[165.97,0.00],[199.65,0.00],[251.47,0.00],[341.48,0.00],[536.49,0.00],[1277.53,0.00],[1482.50,0.00]],
[[90.49,0.00],[98.27,0.00],[107.65,0.00],[119.17,0.00],[133.69,0.00],[152.54,0.00],[177.98,0.00],[214.21,0.00],[269.94,0.00],[366.75,0.00],[576.51,0.00],[1373.58,0.00],[1561.00,0.00]],
[[96.56,0.00],[104.90,0.00],[114.97,0.00],[127.33,0.00],[142.91,0.00],[163.13,0.00],[190.42,0.00],[229.29,0.00],[289.09,0.00],[392.95,0.00],[617.99,0.00],[1473.13,0.00],[1639.50,0.00]],
[[102.85,0.00],[111.77,0.00],[122.54,0.00],[135.78,0.00],[152.45,0.00],[174.09,0.00],[203.30,0.00],[244.90,0.00],[308.91,0.00],[420.07,0.00],[660.93,0.00],[1576.18,0.00],[1718.00,0.00]],
[[109.34,0.00],[118.88,0.00],[130.38,0.00],[144.51,0.00],[162.32,0.00],[185.42,0.00],[216.62,0.00],[261.05,0.00],[329.40,0.00],[448.11,0.00],[705.32,0.00],[1682.73,0.00],[1796.50,0.00]],
[[116.05,0.00],[126.21,0.00],[138.47,0.00],[153.54,0.00],[172.51,0.00],[197.13,0.00],[230.38,0.00],[277.72,0.00],[350.56,0.00],[477.07,0.00],[751.18,0.00],[1792.78,0.00],[1875.00,0.00]],
[[122.98,0.00],[133.78,0.00],[146.82,0.00],[162.84,0.00],[183.02,0.00],[209.21,0.00],[244.57,0.00],[294.93,0.00],[372.40,0.00],[506.95,0.00],[798.49,0.00],[1906.33,0.00],[1953.50,0.00]],
[[130.11,0.00],[141.59,0.00],[155.42,0.00],[172.44,0.00],[193.86,0.00],[221.66,0.00],[259.20,0.00],[312.66,0.00],[394.91,0.00],[537.75,0.00],[847.26,0.00],[2023.38,0.00],[2032.00,0.00]],
[[137.46,0.00],[149.62,0.00],[164.29,0.00],[182.32,0.00],[205.02,0.00],[234.49,0.00],[274.27,0.00],[330.93,0.00],[418.09,0.00],[569.48,0.00],[897.49,0.00],[2143.93,0.00],[2110.50,0.00]],
[[145.03,0.00],[157.89,0.00],[173.41,0.00],[192.49,0.00],[216.51,0.00],[247.69,0.00],[289.77,0.00],[349.72,0.00],[441.94,0.00],[602.12,0.00],[949.18,0.00],[2267.98,0.00],[218.90,0.00]],
[[152.81,0.00],[166.40,0.00],[182.79,0.00],[202.94,0.00],[228.32,0.00],[261.25,0.00],[305.72,0.00],[369.05,0.00],[466.47,0.00],[635.69,0.00],[1002.32,0.00],[2395.53,0.00],[226.75,0.00]],
[[160.80,0.00],[175.13,0.00],[192.42,0.00],[213.68,0.00],[240.45,0.00],[275.20,0.00],[322.10,0.00],[388.90,0.00],[491.68,0.00],[670.18,0.00],[1056.93,0.00],[2526.58,0.00],[234.60,0.00]],
[[169.00,0.00],[184.10,0.00],[202.32,0.00],[224.71,0.00],[252.91,0.00],[289.51,0.00],[338.92,0.00],[409.29,0.00],[517.55,0.00],[705.58,0.00],[1112.99,0.00],[2661.13,0.00],[242.45,0.00]],
[[177.42,0.00],[193.31,0.00],[212.47,0.00],[236.03,0.00],[265.69,0.00],[304.20,0.00],[356.18,0.00],[430.21,0.00],[544.10,0.00],[741.91,0.00],[1170.51,0.00],[2799.18,0.00],[250.30,0.00]],
[[186.05,0.00],[202.74,0.00],[222.88,0.00],[247.63,0.00],[278.80,0.00],[319.25,0.00],[373.87,0.00],[451.65,0.00],[571.32,0.00],[779.16,0.00],[1229.49,0.00],[2940.73,0.00],[258.15,0.00]],
[[194.89,0.00],[212.41,0.00],[233.54,0.00],[259.52,0.00],[292.23,0.00],[334.69,0.00],[392.00,0.00],[473.63,0.00],[599.21,0.00],[817.33,0.00],[1289.93,0.00],[3085.78,0.00],[266.00,0.00]],
[[203.95,0.00],[222.32,0.00],[244.47,0.00],[271.70,0.00],[305.99,0.00],[350.49,0.00],[410.57,0.00],[496.14,0.00],[627.78,0.00],[856.43,0.00],[1351.82,0.00],[3234.33,0.00],[273.85,0.00]]
],
    "路堑":[
[[0,-37.81],[0,-12.60],[0,-6.30],[0,-3.44],[0,-1.80],[0,-0.74],[0,0],[0.81,0],[1.96,0],[3.73,0],[6.85,0],[13.69,0],[41.07,0]],
[[0,-57.43],[0,-20.45],[0,-11.21],[0,-7.01],[0,-4.60],[0,-3.05],[0,-1.96],[0,-1.13],[0.91,-0.63],[2.68,-0.42],[5.52,-0.31],[11.60,-0.25],[35.72,-0.21]],
[[0,-80.81],[0,-29.80],[0,-17.05],[0,-11.26],[0,-7.94],[0,-5.80],[0,-4.30],[0,-2.55],[0,-2.20],[0.41,-1.67],[3.18,-1.25],[8.60,-1.00],[29.47,-0.83]],
[[0,-107.93],[0,-40.65],[0,-23.83],[0,-16.19],[0,-11.82],[0,-8.99],[0,-7.01],[0,-3.54],[0,-3.40],[0,-3.18],[0,-2.79],[3.60,-2.25],[19.06,-1.88]],
[[0,-138.81],[0,-53.00],[0,-31.55],[0,-21.80],[0,-16.23],[0,-12.62],[0,-10.10],[0,-4.08],[0,-4.06],[0,-4.02],[0,-3.95],[0,-3.80],[4.47,-3.33]],
[[0,-173.43],[0,-66.85],[0,-40.21],[0,-28.10],[0,-21.18],[0,-16.70],[0,-13.56],[0,-4.19],[0,-4.18],[0,-4.18],[0,-4.17],[0,-4.15],[0,-4.07]],
[[0,-211.81],[0,-82.20],[0,-49.80],[0,-35.07],[0,-26.66],[0,-21.21],[0,-17.40],[0,-3.85],[0,-3.77],[0,-3.65],[0,-3.45],[0,-3.00],[0,-1.19]],
[[0,-253.93],[0,-99.05],[0,-60.33],[0,-42.73],[0,-32.68],[0,-26.17],[0,-21.61],[0,-3.07],[0,-2.82],[0,-2.45],[0,-1.79],[0,-0.35],[0,-5.43]],
[[0,-299.81],[0,-117.40],[0,-71.80],[0,-51.07],[0,-39.23],[0,-31.56],[0,-26.20],[0,-1.85],[0,-1.34],[0,-0.56],[0,-0.80],[0,-3.80],[0,-15.81]],
[[0,-349.43],[0,-137.25],[0,-84.21],[0,-60.10],[0,-46.32],[0,-37.40],[0,-31.16],[0,-1.90],[0,-0.68],[0,-2.01],[0,-4.33],[0,-9.45],[0,-29.93]],
[[0,-402.81],[0,-158.60],[0,-97.55],[0,-69.80],[0,-53.94],[0,-43.68],[0,-36.50],[0,-1.92],[0,-3.23],[0,-5.26],[0,-8.80],[0,-16.60],[0,-47.81]],
[[0,-459.93],[0,-181.45],[0,-111.83],[0,-80.19],[0,-62.10],[0,-50.40],[0,-42.21],[0,-4.46],[0,-6.32],[0,-9.19],[0,-14.21],[0,-25.25],[0,-69.43]],
[[0,-520.81],[0,-205.80],[0,-127.05],[0,-91.26],[0,-70.80],[0,-57.56],[0,-48.30],[0,-7.45],[0,-9.94],[0,-13.80],[0,-20.55],[0,-35.40],[0,-94.81]],
[[0,-585.43],[0,-231.65],[0,-143.21],[0,-103.01],[0,-80.03],[0,-65.17],[0,-54.76],[0,-10.87],[0,-14.10],[0,-19.10],[0,-27.83],[0,-47.05],[0,-123.93]],
[[0,-653.81],[0,-259.00],[0,-160.30],[0,-115.44],[0,-89.80],[0,-73.21],[0,-61.60],[0,-14.74],[0,-18.80],[0,-25.07],[0,-36.05],[0,-60.20],[0,-156.81]],
[[0,-725.93],[0,-287.85],[0,-178.33],[0,-128.55],[0,-100.10],[0,-81.70],[0,-68.81],[0,-19.05],[0,-24.03],[0,-31.73],[0,-45.21],[0,-74.85],[0,-193.43]],
[[0,-801.81],[0,-318.20],[0,-197.30],[0,-142.35],[0,-110.94],[0,-90.62],[0,-76.40],[0,-23.80],[0,-29.80],[0,-39.07],[0,-55.30],[0,-91.00],[0,-233.81]],
[[0,-881.43],[0,-350.05],[0,-217.21],[0,-156.82],[0,-122.32],[0,-99.99],[0,-84.36],[0,-28.99],[0,-36.10],[0,-47.10],[0,-66.33],[0,-108.65],[0,-277.93]],
[[0,-964.81],[0,-383.40],[0,-238.05],[0,-171.98],[0,-134.23],[0,-109.80],[0,-92.70],[0,-34.62],[0,-42.94],[0,-55.80],[0,-78.30],[0,-127.80],[0,-325.81]],
[[0,-1051.93],[0,-418.25],[0,-259.83],[0,-187.82],[0,-146.68],[0,-120.05],[0,-101.41],[0,-40.70],[0,-50.32],[0,-65.19],[0,-91.21],[0,-148.45],[0,-377.43]],
[[0,-1142.81],[0,-454.60],[0,-282.55],[0,-204.35],[0,-159.66],[0,-130.74],[0,-110.50],[0,-47.20],[0,-58.23],[0,-75.26],[0,-105.05],[0,-170.60],[0,-432.81]],
[[0,-1237.43],[0,-492.45],[0,-306.21],[0,-221.55],[0,-173.18],[0,-141.87],[0,-119.96],[0,-54.17],[0,-66.68],[0,-86.01],[0,-119.83],[0,-194.25],[0,-491.93]],
[[0,-1335.81],[0,-531.80],[0,-330.80],[0,-239.44],[0,-187.23],[0,-153.45],[0,-129.80],[0,-61.56],[0,-75.66],[0,-97.44],[0,-135.55],[0,-219.40],[0,-554.81]],
[[0,-1437.93],[0,-572.65],[0,-356.33],[0,-258.01],[0,-201.82],[0,-165.46],[0,-140.01],[0,-69.40],[0,-85.18],[0,-109.55],[0,-152.21],[0,-246.05],[0,-621.43]],
[[0,-1543.81],[0,-615.00],[0,-382.80],[0,-277.26],[0,-216.94],[0,-177.92],[0,-150.60],[0,-77.68],[0,-95.23],[0,-122.35],[0,-169.80],[0,-274.20],[0,-691.81]],
[[0,-1653.43],[0,-658.85],[0,-410.21],[0,-297.19],[0,-232.60],[0,-190.81],[0,-161.56],[0,-86.40],[0,-105.82],[0,-135.82],[0,-188.33],[0,-303.85],[0,-765.93]],
[[0,-1766.81],[0,-704.20],[0,-438.55],[0,-317.80],[0,-248.80],[0,-204.15],[0,-172.90],[0,-95.56],[0,-116.94],[0,-149.98],[0,-207.80],[0,-335.00],[0,-843.81]],
[[0,-1883.93],[0,-751.05],[0,-467.83],[0,-339.10],[0,-265.53],[0,-217.93],[0,-184.61],[0,-105.17],[0,-128.60],[0,-164.82],[0,-228.21],[0,-367.65],[0,-925.43]],
[[0,-2004.81],[0,-799.40],[0,-498.05],[0,-361.07],[0,-282.80],[0,-232.15],[0,-196.70],[0,-115.21],[0,-140.80],[0,-180.35],[0,-249.55],[0,-401.80],[0,-1010.81]],
[[0,-2129.43],[0,-849.25],[0,-529.21],[0,-383.73],[0,-300.60],[0,-246.81],[0,-209.16],[0,-125.70],[0,-153.53],[0,-196.55],[0,-271.83],[0,-437.45],[0,-1099.93]],
[[0,-2257.81],[0,-900.60],[0,-561.30],[0,-407.07],[0,-318.94],[0,-261.92],[0,-222.00],[0,-136.62],[0,-166.80],[0,-213.44],[0,-295.05],[0,-474.60],[0,-1192.81]],
[[0,-2389.93],[0,-953.45],[0,-594.33],[0,-431.10],[0,-337.82],[0,-277.46],[0,-235.21],[0,-147.99],[0,-180.60],[0,-231.01],[0,-319.21],[0,-513.25],[0,-1289.43]],
[[0,-2525.81],[0,-1007.80],[0,-628.30],[0,-455.80],[0,-357.23],[0,-293.45],[0,-248.80],[0,-159.80],[0,-194.94],[0,-249.26],[0,-344.30],[0,-553.40],[0,-1389.81]],
[[0,-2665.43],[0,-1063.65],[0,-663.21],[0,-481.19],[0,-377.18],[0,-309.87],[0,-262.76],[0,-172.05],[0,-209.82],[0,-268.19],[0,-370.33],[0,-595.05],[0,-1493.93]],
[[0,-2808.81],[0,-1121.00],[0,-699.05],[0,-507.26],[0,-397.66],[0,-326.74],[0,-277.10],[0,-184.74],[0,-225.23],[0,-287.80],[0,-397.30],[0,-638.20],[0,-1601.81]],
[[0,-2955.93],[0,-1179.85],[0,-735.83],[0,-534.01],[0,-418.68],[0,-344.05],[0,-291.87],[0,-197.87],[0,-241.18],[0,-308.10],[0,-425.21],[0,-682.85],[0,-1713.43]],
[[0,-3106.81],[0,-1240.20],[0,-773.55],[0,-561.44],[0,-440.23],[0,-361.80],[0,-306.90],[0,-211.45],[0,-257.66],[0,-329.07],[0,-454.05],[0,-729.00],[0,-1828.81]],
[[0,-3261.43],[0,-1302.05],[0,-812.21],[0,-589.55],[0,-462.32],[0,-379.99],[0,-322.36],[0,-225.46],[0,-274.68],[0,-350.73],[0,-483.83],[0,-776.65],[0,-1947.93]],
[[0,-3419.81],[0,-1365.40],[0,-851.80],[0,-618.35],[0,-484.94],[0,-398.62],[0,-338.20],[0,-239.92],[0,-292.23],[0,-373.07],[0,-514.55],[0,-825.80],[0,-2070.81]],
[[0,-3581.93],[0,-1430.25],[0,-892.33],[0,-647.82],[0,-508.10],[0,-417.70],[0,-354.41],[0,-254.81],[0,-310.32],[0,-396.10],[0,-546.21],[0,-876.45],[0,-2197.43]],
[[0,-3747.81],[0,-1496.60],[0,-933.80],[0,-677.98],[0,-531.80],[0,-437.21],[0,-371.00],[0,-270.15],[0,-328.94],[0,-419.80],[0,-578.80],[0,-928.60],[0,-2327.81]],
[[0,-3917.43],[0,-1564.45],[0,-976.21],[0,-708.82],[0,-556.03],[0,-457.17],[0,-387.96],[0,-285.93],[0,-348.10],[0,-444.19],[0,-612.33],[0,-982.25],[0,-2461.93]],
[[0,-4090.81],[0,-1633.80],[0,-1019.55],[0,-740.35],[0,-580.80],[0,-477.56],[0,-405.30],[0,-302.15],[0,-367.80],[0,-469.26],[0,-646.80],[0,-1037.40],[0,-2599.81]],
[[0,-4267.93],[0,-1704.65],[0,-1063.83],[0,-772.55],[0,-606.10],[0,-498.40],[0,-423.01],[0,-318.81],[0,-388.03],[0,-495.01],[0,-682.21],[0,-1094.05],[0,-2741.43]],
[[0,-4448.81],[0,-1777.00],[0,-1109.05],[0,-805.44],[0,-631.94],[0,-519.68],[0,-441.10],[0,-335.92],[0,-408.80],[0,-521.44],[0,-718.55],[0,-1152.20],[0,-2886.81]],
[[0,-4633.43],[0,-1850.85],[0,-1155.21],[0,-839.01],[0,-658.32],[0,-541.40],[0,-459.56],[0,-353.46],[0,-430.10],[0,-548.55],[0,-755.83],[0,-1211.85],[0,-3035.93]],
[[0,-4821.81],[0,-1926.20],[0,-1202.30],[0,-873.26],[0,-685.23],[0,-563.56],[0,-478.40],[0,-371.45],[0,-451.94],[0,-576.35],[0,-794.05],[0,-1273.00],[0,-3188.81]],
[[0,-5013.93],[0,-2003.05],[0,-1250.33],[0,-908.19],[0,-712.68],[0,-586.17],[0,-497.61],[0,-389.87],[0,-474.32],[0,-604.82],[0,-833.21],[0,-1335.65],[0,-3345.43]],
[[0,-5209.81],[0,-2081.40],[0,-1299.30],[0,-943.80],[0,-740.66],[0,-609.21],[0,-517.20],[0,-408.74],[0,-497.23],[0,-633.98],[0,-873.30],[0,-1399.80],[0,-3505.81]],
[[0,-5409.42],[0,-2161.25],[0,-1349.21],[0,-980.10],[0,-769.18],[0,-632.70],[0,-537.16],[0,-428.05],[0,-520.68],[0,-663.82],[0,-914.33],[0,-1465.45],[0,-3669.93]],
[[0,-5612.81],[0,-2242.60],[0,-1400.05],[0,-1017.07],[0,-798.23],[0,-656.62],[0,-557.50],[0,-447.80],[0,-544.66],[0,-694.35],[0,-956.30],[0,-1532.60],[0,-3837.81]]
], 
}
function log(...argument) {
    // body...
    console.log(argument.join(" "))
}
function str2licheng(i){

     let item = /[a-zA-Z]*?(\d+)\+?(\d*)/.exec(i)
     if( /[a-zA-Z]/.test(i)){
        return parseInt(item[1])*1000+(item[2]?parseInt(item[2]):0 )
     }else{
        return i?parseInt(i):0 
     }
}
function xxnc(xs,ys,d){
    //x线性内插
    if(xs[xs.length-1]<xs[0]){
            xs = xs.reverse();
            ys = ys.reverse();
        }
    for (var i = 0; i < xs.length-1; i++) {
        if( xs[i]<=d && xs[i+1]>=d)
            return ys[i]+(d-xs[i])*(ys[i+1]-ys[i])/(xs[i+1]-xs[i])
    }
    return "error:超限"
}
function sum(arr){
    //add all the number in arr
    let sum1 = 0
    for (var i = 0; i < arr.length; i++) {
        sum1 += arr[i]
    }
    return sum1
}
function xxnc2d(x1,x2,x3,x4,d1,d2,y1,y2,w1,w2){
    //     y1 w2 y2
    // d1  x1    x2
    // w1
    // d2  x3    x4
    // xxnc w1,w2
    // console.log(x1,x2,x3,x4,d1,d2,y1,y2,w1,w2)
    
    let xxnc_1 = xxnc([d1,d2],[x1,x3],w1)
    let xxnc_2 =  xxnc([d1,d2],[x2,x4],w1)
    return xxnc([y1,y2],[xxnc_1,xxnc_2],w2)
}

document.getElementById('file').addEventListener('change', function(e) {
    var files = e.target.files;
    if(files.length == 0) return;
    var f = files[0];
    if(!/\.xlsx$/g.test(f.name)) {
        alert('仅支持读取xlsx格式！');
        return;
    }
    var reader = new FileReader();
     reader.onload = function(e) {
        var data = e.target.result;
        workbook = xlsx_style.read(data, { type: 'binary', cellStyles: true, cellHTML: true });
        start_cal();
     };

     reader.readAsBinaryString(f);

});

function start_cal(){
                //上传完就开是计算
        handle_excel()
         var wbout = xlsx_style.write(workbook, { bookType: 'xlsx', bookSST: false, type: 'binary' })
         saveAs(new Blob([s2ab(wbout)], { type: "" }), "处理结果.xlsx")
}

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
function s2ab(s) {
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}


function handle_excel(R_S,l_0){
    const worksheet = workbook.Sheets["Sheet1"];
    workbook.SheetNames = ["Sheet1"]
    const data = xlsx.utils.sheet_to_json(worksheet)
    const maxrow = parseInt(/:.+?(\d+)/.exec(worksheet["!ref"])[1])

    //读取数据

    var result = [{
        "licheng":{
            "str":data[3]['1'],
            "num":str2licheng(data[3]['1'])
        },
        "gao_t":data[3]['2'],//高程 填方
        "gao_w":data[3]['3'],//高程 挖方
        "po_zuo":data[3]['4']?data[3]["4"]:0, //左坡
        "po_you":data[3]['5']?data[3]["5"]:0,//右坡

    }]
    for (var i = 4; i < maxrow-1; i++) {
        if((!data[i])||(!data[i]['1'])||(data[i]['1']=='')) continue
        let item = {
            "licheng":{
                "str":data[i]['1'],
                "num":/[a-zA-Z]/.test(data[i]['1'])?str2licheng(data[i]['1']):str2licheng(data[i]['1'])+parseInt(result[result.length-1]['licheng']['num']/1000)*1000
            },
            "gao_t":data[i]['2'],//高程 填方
            "gao_w":data[i]['3'],//高程 挖方
            "po_zuo":data[i]['4']?data[i]["4"]:0, //左坡
            "po_you":data[i]['5']?data[i]["5"]:0,//右坡
        }

        result.push(item)
    }

    //计算半面积
    pos = [-0.6,-0.5,-0.4,-0.3,-0.2,-0.1,0,0.1,0.2,0.3,0.4,0.5,0.6]
    for(item of result){
        tian = []
        wa = []
        // 填挖都0 或者一个为空，不能一个有值拎一个为0
       // if(item["gao_t"]!== '' && item["gao_t"]!== 0 && item["gao_w"] == 0){
       //      item["gao_w"] == ''
       //  }else if(item["gao_w"]!== '' && item["gao_w"]!== 0 && item["gao_t"] == 0){
       //      item["gao_t"] == ''
       //  }
       // if(item["licheng"]["num"]==85000){
       //  console.log(item)
       // }
        if(item["gao_t"]!== ''){
            item["gao_t"]= Math.abs(item["gao_t"])
            //范围 23.3 =》 23-23.5
            zhengshu = parseInt(item["gao_t"])
            range = []
            if(item["gao_t"]-zhengshu>0.5){
                range = [(zhengshu+0.5)*2,(zhengshu+1)*2,zhengshu+0.5,zhengshu+1]
            }else{
                range = [2*zhengshu,(zhengshu+0.5)*2,zhengshu,zhengshu+0.5]
            }
            po_range = []
            for(let i=0;i<pos.length-1;i++){
                if(pos[i]<=item.po_zuo && pos[i+1]>=item.po_zuo){
                    po_range = [Math.ceil((pos[i]+0.6)*10),Math.ceil((pos[i+1]+0.6)*10),pos[i],pos[i+1]]
                    break
                }
            }
            if(po_range.length==0){
                log("error:左坡超限")
            }
            console.log(item,range,po_range)
            let  x1 = half_area["路堤"][range[0]][po_range[0]]
            let  x2 = half_area["路堤"][range[0]][po_range[1]]
            let  x3 = half_area["路堤"][range[1]][po_range[0]]
            let  x4 = half_area["路堤"][range[1]][po_range[1]]


            let zuo_tian = xxnc2d(x1[0],x2[0],x3[0],x4[0],range[2],range[3],po_range[2],po_range[3],item["gao_t"],item["po_zuo"])
            //log(zuo_tian)
           // exit()
            let zuo_wa = xxnc2d(x1[1],x2[1],x3[1],x4[1],range[2],range[3],po_range[2],po_range[3],item["gao_t"],item["po_zuo"])
            tian.push(zuo_tian)
            wa.push(zuo_wa)
            //线路右侧造成的填方
            po_range = []
            for(let i=0;i<pos.length-1;i++){
                if(pos[i]<=item.po_you && pos[i+1]>=item.po_you){
                    po_range = [Math.ceil((pos[i]+0.6)*10),Math.ceil((pos[i+1]+0.6)*10),pos[i],pos[i+1]]
                    break
                }
            }
            if(po_range.length==0){
                log("error:右坡超限")
            }
            x1 = half_area["路堤"][range[0]][po_range[0]]
            x2 = half_area["路堤"][range[0]][po_range[1]]
            x3 = half_area["路堤"][range[1]][po_range[0]]
            x4 = half_area["路堤"][range[1]][po_range[1]]
            let you_tian = xxnc2d(x1[0],x2[0],x3[0],x4[0],range[2],range[3],po_range[2],po_range[3],item["gao_t"],item["po_you"])
            let you_wa = xxnc2d(x1[1],x2[1],x3[1],x4[1],range[2],range[3],po_range[2],po_range[3],item["gao_t"],item["po_you"])
            tian.push(you_tian)
            wa.push(you_wa)
           }


        if(item["gao_w"]!== ''){
            item["gao_w"]= Math.abs(item["gao_w"])
            zhengshu = parseInt(item["gao_w"])
            range = []
            if(item["gao_w"]-zhengshu>0.5){
                range = [(zhengshu+0.5)*2,(zhengshu+1)*2,zhengshu+0.5,zhengshu+1]
            }else{
                range = [2*zhengshu,(zhengshu+0.5)*2,zhengshu,zhengshu+0.5]
            }
            po_range = []
            for(let i=0;i<pos.length-1;i++){
                if(pos[i]<=item.po_you && pos[i+1]>=item.po_you){
                    po_range = [Math.ceil((pos[i]+0.6)*10),Math.ceil((pos[i+1]+0.6)*10),pos[i],pos[i+1]]
                    break
                }
            }
            if(po_range.length==0){
                log("error:you坡超限")
            }

            let x1 = half_area["路堑"][range[0]][po_range[0]]
            let x2 = half_area["路堑"][range[0]][po_range[1]]
            let x3 = half_area["路堑"][range[1]][po_range[0]]
            let x4 = half_area["路堑"][range[1]][po_range[1]]

            //线路右侧造成的填方
            let you_tian = xxnc2d(x1[0],x2[0],x3[0],x4[0],range[2],range[3],po_range[2],po_range[3],item["gao_w"],item["po_you"])
            let you_wa = xxnc2d(x1[1],x2[1],x3[1],x4[1],range[2],range[3],po_range[2],po_range[3],item["gao_w"],item["po_you"])
            tian.push(you_tian)
            wa.push(you_wa)

            //线路zuo侧造成的挖方
            po_range = []
            for(let i=0;i<pos.length-1;i++){
                if(pos[i]<=item.po_zuo && pos[i+1]>=item.po_zuo){
                    po_range = [Math.ceil((pos[i]+0.6)*10),Math.ceil((pos[i+1]+0.6)*10),pos[i],pos[i+1]]
                    break
                }
            }
            if(po_range.length==0){
                log("error:zuo坡超限")
            }

            x1 = half_area["路堑"][range[0]][po_range[0]]
            x2 = half_area["路堑"][range[0]][po_range[1]]
            x3 = half_area["路堑"][range[1]][po_range[0]]
            x4 = half_area["路堑"][range[1]][po_range[1]]
            let zuo_tian = xxnc2d(x1[0],x2[0],x3[0],x4[0],range[2],range[3],po_range[2],po_range[3],item["gao_w"],item["po_zuo"])

            let zuo_wa = xxnc2d(x1[1],x2[1],x3[1],x4[1],range[2],range[3],po_range[2],po_range[3],item["gao_w"],item["po_zuo"])
            tian.push(zuo_tian)
            wa.push(zuo_wa)

           }
        item["tian"] =Math.abs(sum(tian))
        item["wa"] =Math.abs(sum(wa))
    }
    let mdata= []
    for(item of result){
        mdata.push([parseFloat(item["tian"].toFixed(5)),parseFloat(item["wa"].toFixed(5))])
        mdata.push(['',''])
    }
    xlsx.utils.sheet_add_aoa(worksheet,mdata , {origin: "F5"});
    cal_result = []
    total_tian=[]
    total_wa = []
    for(var i = 0; i < 2*result.length-2;){

        let beizhu = worksheet['N'+(i+6)]?worksheet['N'+(i+6)].v:''
        let avg_area_tian =( result[i/2]["tian"]+result[i/2+1]["tian"])/2
        let avg_area_wa =( result[i/2]["wa"]+result[i/2+1]["wa"])/2
        let juli = result[i/2+1]["licheng"]["num"]-result[i/2]["licheng"]["num"]
        let result_tian = juli*avg_area_tian
        let result_wa = juli*avg_area_wa
        i = i+2
        if (/桥|隧道/.test(beizhu)){
            cal_result.push(['','',juli,'',''])
        }else{
            total_wa.push(result_wa)
            total_tian.push(result_tian)
            cal_result.push([avg_area_tian,avg_area_wa,juli,result_tian,result_wa])
        }
        if(/\d/.test(beizhu)){
            try{
                tmp = parseFloat(beizhu)
                if (tmp<0) {
                    total_wa.push(-tmp)
                }else{
                    total_tian.push(tmp)
                }
            }catch(err){
                log(err)
                log(beizhu)
                alert("备注数据识别出错")
            }
            
        }
        cal_result.push(['','','','',''])
        
    }
    total_tian = sum(total_tian)
    total_wa = sum(total_wa)

    xlsx.utils.sheet_add_aoa(worksheet,cal_result , {origin: "H6"});
    xlsx.utils.sheet_add_aoa(worksheet,[["总填方",total_tian],["总挖方",total_wa]] , {origin: "O14"});
    for (var i = 5; i < maxrow; i++) {
        for(j of 'FGHIJKL'){
            if( worksheet[j+i]){
                 worksheet[j+i]['s'] = worksheet["B5"].s 
            }
           
        }
    }
}