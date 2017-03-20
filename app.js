
//1 state management

//2 functions that modify state

/*	result = Number($('.days-counting').val());
	return result;
};

function getDaysPracticed(){
	result = Number($('.days-practiced').val());
	return result;
}

function getDesiredPercentage() {
	result = Number($('.desired-percent').val());
	return result;
}; */

function getValue(from){
	value = Number($(from).val());
	return value;
};

function calculateNeededStreak(daysCounting, daysPracticed, desiredPercent, initDaysCounting) {
	if (daysPracticed/daysCounting < desiredPercent) {
		daysCounting += 1;
		daysPracticed += 1;
		calculateNeededStreak(daysCounting, daysPracticed, desiredPercent, initDaysCounting);
	} else {
		renderState(daysCounting, desiredPercent, initDaysCounting);
	}
};

//3. functions that render state
function renderState(daysCounting, desiredPercent, initDaysCounting){

		$('.days-display').removeClass('hidden');
		$('.days-display').text("To reach " + desiredPercent + ", you will need to practice for " + (daysCounting - initDaysCounting) + " days in a row.")
};

//4. Event listeners
$('#checkButton').click(function() {
	var daysCounting = getValue("input[name='days-counting']");
	var initDaysCounting = daysCounting;
	var daysPracticed = getValue("input[name='days-practiced']");
	var desiredPercent = getValue("input[name='desired-percent']");
	calculateNeededStreak(daysCounting, daysPracticed, desiredPercent, initDaysCounting);
});