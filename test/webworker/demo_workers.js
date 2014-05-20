var i = 0;

function timedCount(){
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()", 500);
}

timedCount();

//返回都为undefined 无法访问
console.log(typeof window);
console.log(typeof document);
console.log(typeof parent);

console.log(typeof postMessage);
console.log(typeof addEventListener);

addEventListener("message", function(event){
	
	console.log(event.data);
},false);

/*** 
 	这里主要测试了几个接口 postMessage, addEventListener
 	w.postMessage, w.addEventListener, w.onmessage(w为webworker的一个实力)
 	
 */
