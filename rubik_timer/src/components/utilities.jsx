export var blue = "#619DDD";
export var darkBlue = "#083668";
export var orange = "#FFA343"

export const formatNumber = (num) => {
	return ("0" + num).slice(-2);
}

export const displayTime = (min, sec, msec) => {
	let minFormat = min !== 0 ? min : null;
	let secFormat = min !== 0 ? formatNumber(sec) : sec;
	let msecFormat = formatNumber(msec);

	minFormat = !!(min) ? minFormat + ":": "";
	return `${minFormat}${secFormat}.${msecFormat}`;
}

export const convertSec = (min, sec, msec) => {
	return min * 60 + sec + msec / 100;
}

export const separateSec = (time) => {
	return {min: Math.floor(time / 60), sec: Math.floor(time) % 60, msec: ((time-Math.floor(time)) % 1).toFixed(2).substring(2)};
}

//average of 5 for times drop the fastest and slowest time
export const avg5 = (times) => {
	let avg;
	let min = null, sec = null, msec = null;
	if (times.length > 4){
		avg = times.slice(-5);
		avg.sort((x,y) => (x - y)); //sort in ascending order
		avg = avg.slice(1,4).reduce((acc, curr) => acc + curr) / 3; //average of middle 3
		({min, sec, msec} = separateSec(avg));
	}

	return {min, sec, msec};
}

//average of 12 for times drop the fastest and slowest time
export const avg12 = (times) => {
	let avg;
	let min = null, sec = null, msec = null;
	if (times.length > 11){
        avg = times.slice(-12);
		avg.sort((x,y) => (x - y)); //sort in ascending order
		avg = avg.slice(1,11).reduce((acc, curr) => acc + curr) / 10; //average of middle 10
		({min, sec, msec} = separateSec(avg));
	}

	return {min, sec, msec};
}

export const getCurDate = () => {
	let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	let date = new Date();
	let day = String(date.getDate()).padStart(2, '0');
	let month = months[date.getMonth()];
	let year = date.getFullYear();
	let hour = String(date.getHours()).padStart(2, '0');
	let minute = String(date.getMinutes()).padStart(2, '0');
	return `${hour}:${minute} UTC | ${day}-${month}-${year}`; 
}