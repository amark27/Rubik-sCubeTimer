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
	return {min: Math.floor(time / 60), sec: Math.floor(time) % 60, msec: Math.floor((time - Math.floor(time)) * 100)};
}

export const avg5 = (times) => {
	let avg;
	let min = null, sec = null, msec = null;
	if (times.length > 4){
        avg = times.slice(-5).reduce((acc, curr) => acc + curr) / 5;
		({min, sec, msec} = separateSec(avg));
	}

	return {min, sec, msec};
}

export const avg12 = (times) => {
	let avg;
	let min = null, sec = null, msec = null;
	if (times.length > 11){
        avg = times.slice(-12).reduce((acc, curr) => acc + curr) / 12;
		({min, sec, msec} = separateSec(avg));
	}

	return {min, sec, msec};
}