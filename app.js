
//1 state management

//functions that. modify state.. 


function getDaysCounting() {
	result = $('.days-counting').val()
	console.log("DC " + result);
	return result;

};

function getDaysMeditated(){
	result = $('.days-practiced').val();
	console.log("DM " + result);
	return result;
}

function getDesiredPercentage() {
	result = $('.desired-percent').val();
	console.log("DP " + result);
	return result;
};

//var myDaysCounting = 541;
//var myDaysMeditated = 324;

//var desiredPercent = 0.775;

function getTo70(daysCounting, daysMeditated, desiredPercent) {
	console.log("from event function " + daysCounting + " " + daysMeditated + " " + desiredPercent);
	if (daysMeditated/daysCounting < desiredPercent) {
		daysCounting += 1;
		daysMeditated += 1;
		console.log(daysCounting, daysMeditated);
		//getTo70(daysCounting, daysMeditated, desiredPercent);
	} else {
		$('.days-display').text(daysCounting - 541);
	}
};

//3. functions that render state


//4. Event listeners
$('#checkButton').click(function() {
	var daysCounting = getDaysCounting();
	var daysMeditated = getDaysMeditated();
	var desiredPercent = getDesiredPercentage();
	//console.log("from event listener " + daysCounting + " " + daysMeditated + " " + desiredPercent);
	getTo70(daysCounting, daysMeditated, desiredPercent);
});