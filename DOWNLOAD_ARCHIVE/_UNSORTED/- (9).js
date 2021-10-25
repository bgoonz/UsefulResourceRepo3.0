var arr = [ 5, 5, 5, 5, 5, 5, 5, 5, 5 ];
function test(){
	for (i = 0; i < arr.length; i++){
		if (arr[i] === arr[i+1] && arr[i] === arr[i+2]){
			return false;
		}
	}
}
test(arr)