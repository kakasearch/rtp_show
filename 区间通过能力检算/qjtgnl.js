/*
 * @Descripttion: 牵引计算
 * @version: 
 * @Author: kaka
 * @Date: 2021-8-26
 */

 //////////////////
 //data
 const params_qjtgnl =  {
	"ss_1":{
	"qy":[
		[0,10,20,30,40,41.2,43,57.4,60,70,80,90,95,100],
		[17.61,17.61,16.26,15.47,14.91,14.86,12.05,8.31,7.33,4.62,2.86,1.28,0.64,0]
	],
	"zd":[[10,20,30,37.7,50,60,70,80,90],
		[5.07,9.17,13.29,16.48,12.91,11.26,10.26,9.55,9.09],
	]
	},
	"ss_3":{
		"qy":[
			[0,10,20,30,40,47,48,60,66,70,80,90,104.9,107.37],
			[16.74,16.74,13.31,14.69,14.15,13.83,12.04,9.10,4.42,6.51,3.76,2.25,2]
		],
		"zd":[[10,23.6,30,33.5,47.5,60,66,70,80,90,100],
			[6.56,14.16,11.53,10.50,14.55,12.12,10.99,10.92,10.09,9.50,9.05],
		]
		},
	"ss_4":{
		"qy":[
			[0,10,20,30,40,50,51.5,73.2,80,90,100,101.05],
			[16.51,16.49,15.22,14.46,13.92,13.47,12.19,7.60,5.35,3.28,2.12,2]
		],
		"zd":[[10,20,28.7,36.7,47,60,70,80,90,100],
			[6.42,11.79,16.58,13.34,16.88,13.72,12.28,11.24,10.56,10.10],
		]},
	"ss_7":{
		"qy":[
			[5,10,20,30,40,46,48,50,60,70,80,85,90,100],
			[15.89,14.88,13.72,13.04,12.55,12.30,12.02,12.14,9.09,7.31,5.90,5.29,4.72,0.41]
		],
		"zd":[[5,10.4,20,30,40,44.8,60,70,81,85,90,100],
			[6.71,12.72,12.91,13.14,13.39,13.53,10.44,9.39,8.82,4.41,4.55,3.22],
		]
		},
	"DF_4B_goods":{
		"qy":[
			[10,19,20,30,40,50,60,70,80,90,100],
			[13.57,13.76,12.91,8.65,6.05,4.41,3.16,2.07,0.96,-0.09,-1.15]
		],
		"zd":[[10,18.5,20,22.5,30,35,40,50,58,60,70,80,90,100],
			[7.13,12.26,10.71,8.48,11.05,12.69,10.61,8.78,7.77,7.01,5.28,4.28,3.66,3.26],
		]
		},
	"DF_4C":{
		"qy":[
			[10,20,21.5,30,40,50,60,70,80,90,100],
			[14.94,14.3,14.24,9.67,6.83,5.07,3.77,2.70,1.85,1.07,0.35]
		],
		"zd":[[10,18.5,20,22.5,30,35,40,50,58,60,70,80,90,100],
			[7.37,12.68,11.08,8.73,11.42,13.12,10.96,9.06,8.01,7.22,5.41,4.37,3.70,3.29],
		]
		},
	"DF_8":{
		"qy":[
			[10,20,27.6,30,40,50,60,70,80,90,100],
			[14.79,14.17,,13.91,12.55,9.15,6.85,5.29,4.14,3.14,2.05,0.65]
		],
		"zd":[[10,20,21,27.2,30,39,40,50,60,70,80,85,90,100],
			[6.17,10.50,10.88,8.57,4.94,11.29,11.09,9.44,8.21,7.48,7.14,5.57,5.07,4.30],
		]
		}
	}
	
//////////////////
// tools
function log(...argument) {
    // body...
    console.log(argument.join(" "))
}
function sum(arr) {
  var s = 0;
  arr.forEach(function(val, idx, arr) {
    s += val;
  }, 0);
  
  return s;
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
//////////////////////
//code
var data = []
var sum_ = 0
function cal_alone(){
    let result = 'error!'
    let l = parseFloat(document.querySelector("#l").value)
    let i_j = parseFloat(document.querySelector("#i_j").value)
    let jiche_type = document.querySelector("#jiche_type").value
    if(i_j >2){
        let qy = params_qjtgnl[jiche_type].qy
        result = xxnc(qy[1],qy[0],i_j)
    }
    else if(i_j>0){
        let qy = params_qjtgnl[jiche_type].qy
       result = xxnc(qy[1],qy[0],i_j) > 85+0.8*i_j?85+0.8*i_j:xxnc(qy[1],qy[0],i_j)
    }else{
        result = 85+0.8*i_j
        
    }
    data.push({"l":l,"i_j":i_j,"result":result})
    let show_data = document.querySelector("#show_data")
    show_data.style.display = "block"
    try{
        result.toFixed(2)
    }catch(err){
        result = 85+0.8*i_j
    }
    show_data.innerHTML += ` <tr>
                            <td  style="color: green;">${l}</td>
                            <td  style="color: green;">${i_j}</td>
                            <td  style="color: green;">${result.toFixed(2)}</td>
                            <td  style="color: green;">${(60/result).toFixed(2)}</td>
                            <td  style="color: green;">${(60/result*l).toFixed(2)}</td>
                            </tr>`
    sum_ += 60/result*l
    document.querySelector("#show_data_sum").innerHTML = "区间走行时分(min):"+sum_.toFixed(2)
    document.querySelector("#CalAlone").value = "继续计算"
    document.querySelector("#l").value = ""
    document.querySelector("#i_j").value = ""
}

function cal_tgnl(){
    let T_t = parseFloat(document.querySelector("#T_t").value)
    let T_z = parseFloat(document.querySelector("#T_z").value)
    let show_tgnl = document.querySelector("#show_tgnl")
    let tgnl = (1440-T_t)/T_z
    show_tgnl.innerHTML = `当前区间通过能力：${tgnl.toFixed(2)}}对/d,取${Math.floor(tgnl)}对/d`
}

function cal_ssnl(){
    let N = parseFloat(document.querySelector("#N").value)
    let N_K = parseFloat(document.querySelector("#N_K").value)
    let N_Z = parseFloat(document.querySelector("#N_Z").value)
    let N_L = parseFloat(document.querySelector("#N_L").value)
    let N_KH = parseFloat(document.querySelector("#N_KH").value)
    let show_ssnl = document.querySelector("#show_ssnl")
    let N_PT = (N/1.2)-(N_K*+1.3+2*N_L+N_Z*1.5+N_KH*1.2)
    let N_H = N_PT + N_L*0.5+0.75*N_Z+0.75*N_KH
    show_ssnl.innerHTML = `当前区间输送能力：${N_H.toFixed(2)}Mt/a`
}
















///////////////////////////////////////////////算例 ///////////////////////////////////////////////////////////////////////

