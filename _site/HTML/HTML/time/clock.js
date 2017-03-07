// SNAPSVG.JS Clock Layout 


	//clock 4
	var clock4   = Snap("#clock4");
	var hours4   = clock4.rect(79, 35, 3, 55).attr({fill: "#282828", transform: "r" + 10 * 30 + "," + 80 + "," + 80});
	var minutes4 = clock4.rect(79, 20, 3, 70).attr({fill: "#535353", transform: "r" + 10 * 6 + "," + 80 + "," + 80});
	var seconds4 = clock4.rect(80, 10, 1, 80).attr({fill: "#ff6400"});
	var middle4 =   clock4.circle(81, 80, 3).attr({fill: "#535353"});
	//
	var timestamp=document.getElementById("timestamp");
	var _date=document.getElementById("date");
	var countdown_Milliseconds=document.getElementById("countdown_Milliseconds");
	var countdown_Seconds=document.getElementById("countdown_Seconds");
	var countdown_Minutes=document.getElementById("countdown_Minutes");
	var countdown_Hours=document.getElementById("countdown_Hours");
	var countdown_Date=document.getElementById("countdown_Date");
	

	
	// CLOCK Timer
	var updateClock = function(_clock, _hours, _minutes, _seconds) {
		var hour, minute, second;
		
		second = new Date().getSeconds();
		minute = new Date().getMinutes();
		hour = new Date().getHours();
		hour = (hour > 12)? hour - 12 : hour;
		hour = (hour == '00')? 12 : hour;

		if(second == 0){
			//got to 360deg at 60s
			second = 60;
		}else if(second == 1 && _seconds){
			//reset rotation transform(going from 360 to 6 deg)
			_seconds.attr({transform: "r" + 0 + "," + 80 + "," + 80});
		}
		if(minute == 0){
			minute = 60;
		}else if(minute == 1){
			_minutes.attr({transform: "r" + 0 + "," + 80 + "," + 80});
		}
		_hours.animate({transform: "r" + hour * 30 + "," + 80 + "," + 80}, 200, mina.elastic);
		_minutes.animate({transform: "r" + minute * 6 + "," + 80 + "," + 80}, 200, mina.elastic);
		if(_seconds){
			_seconds.animate({transform: "r" + second * 6 + "," + 80 + "," + 80}, 500, mina.elastic);
		}
	}
	
	var nextyear = new Date();
	nextyear.setFullYear(new Date().getFullYear()+1,0,1);
	nextyear.setHours(0,0,0,0);
	var updateTime = function() {
		timestamp.innerHTML=new Date().getTime();
		_date.innerHTML=new Date().Format("yyyy-MM-dd hh:mm:ss.S");
		nextyear.setFullYear(new Date().getFullYear()+1,0,1);
		nextyear.setHours(0,0,0,0);
		var countdown_time=nextyear.getTime()-new Date().getTime();
		countdown_Milliseconds.innerHTML=countdown_time;
		countdown_Seconds.innerHTML=(countdown_time/(1000)).toFixed(0);
		countdown_Minutes.innerHTML=(countdown_time/(1000*60)).toFixed(0);
		countdown_Hours.innerHTML=(countdown_time/(1000*60*60)).toFixed(0);
		countdown_Date.innerHTML=(countdown_time/(1000*60*60*24)).toFixed(0);
		
	}
	function redcountdown(endTime){
		$('#rC_B').redCountdown({
			end: endTime,
			labels: true,
			style: {
				element: "",
				textResponsive: .5,
				daysElement: {
					gauge: {
						thickness: .03,
						bgColor: "rgba(255,255,255,0.05)",
						fgColor: "#1abc9c"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#fff;'
				},
				hoursElement: {
					gauge: {
						thickness: .03,
						bgColor: "rgba(255,255,255,0.05)",
						fgColor: "#2980b9"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#fff;'
				},
				minutesElement: {
					gauge: {
						thickness: .03,
						bgColor: "rgba(255,255,255,0.05)",
						fgColor: "#8e44ad"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#fff;'
				},
				secondsElement: {
					gauge: {
						thickness: .03,
						bgColor: "rgba(255,255,255,0.05)",
						fgColor: "#f39c12"
					},
					textCSS: 'font-family:\'Open Sans\'; font-size:25px; font-weight:300; color:#fff;'
				}

			},
			onEndCallback: function() {
				console.log("Time out!");
				nextyear.setFullYear(new Date().getFullYear()+1,0,1);
				nextyear.setHours(0,0,0,0);
				redcountdown(nextyear);
			}
		});
	}
	setInterval(function(){
		updateClock(clock4, hours4, minutes4, seconds4);
	}, 1000);
	setInterval(function(){
		updateTime();
	}, 1);

	redcountdown(nextyear.getTime());


// 对Date的扩展，将 Date 转化为指定格式的String 
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
// 例子： 
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423 
// (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
Date.prototype.Format = function(fmt) 
{ //author: meizz 
	var o = { 
    "M+" : this.getMonth()+1,                 //月份 
    "d+" : this.getDate(),                    //日 
    "h+" : this.getHours(),                   //小时 
    "m+" : this.getMinutes(),                 //分 
    "s+" : this.getSeconds(),                 //秒 
    "q+" : Math.floor((this.getMonth()+3)/3), //季度 
}; 
if(/(y+)/.test(fmt)) 
	fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
if(/(S)/.test(fmt)){ 
	o["S"]=""+this.getMilliseconds();//毫秒
	while(o["S"].length < 3){
		o["S"]="0"+o["S"];
	}
	fmt=fmt.replace(RegExp.$1, o["S"]);
}
for(var k in o){
	if(new RegExp("("+ k +")").test(fmt)){
		fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length))); 
	}
}
return fmt; 
}  