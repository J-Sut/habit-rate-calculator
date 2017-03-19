
//1 state management

//2 functions that modify state

function getDaysCounting() {
	result = Number($('.days-counting').val());
	return result;
};

function getDaysPracticed(){
	result = Number($('.days-practiced').val());
	return result;
}

function getDesiredPercentage() {
	result = Number($('.desired-percent').val());
	return result;
};

//3. functions that render state
function getToDesiredPercent(daysCounting, daysPracticed, desiredPercent, initDaysCounting) {
	if (daysPracticed/daysCounting < desiredPercent) {
		daysCounting += 1;
		daysPracticed += 1;
		getToDesiredPercent(daysCounting, daysPracticed, desiredPercent, initDaysCounting);
	} else {
		$('.days-display').removeClass('hidden');
		$('.days-display').text("To reach " + desiredPercent + ", you will need to practice for " + (daysCounting - initDaysCounting) + " days in a row.");
	}
};

//4. Event listeners
$('#checkButton').click(function() {
	var daysCounting = getDaysCounting();
	var initDaysCounting = daysCounting;
	var daysPracticed = getDaysPracticed();
	var desiredPercent = getDesiredPercentage();
	getToDesiredPercent(daysCounting, daysPracticed, desiredPercent, initDaysCounting);
});