// complete the given function

function palindrome(str){

	let i=0;
	let j=str.length-1;
	while(i<=j){
		if (strs[i]===" ") {
			i++;
		}
		if (str[j]===" ") {
			j--;
		}

		if(str[i]===str[j]){
			i++;
			j--;
		}else{
			return false;
		}
	}
	return true;
}
module.exports = palindrome
