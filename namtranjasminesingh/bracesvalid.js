//checks if parentheses, braces, and brackets are valid

function bracesValid(str) {
	var newArr=[];
	for (var i=0; i<str.length; i++) {
		if (str[i]=="("||str[i]=="["||str[i]=="{") {
			newArr.push(str[i]);
		}
		else if (str[i]==")") {
			if(newArr[newArr.length-1]=="(") {
				newArr.pop();
			}
			else {
				newArr.push(str[i]);
			}
		}
		else if (str[i]=="]") {
			if(newArr[newArr.length-1]=="[") {
				newArr.pop();
			}
			else {
				newArr.push(str[i]);
			}
		}
		else if (str[i]=="}") {
			if(newArr[newArr.length-1]=="{") {
				newArr.pop();
			}
			else {
				newArr.push(str[i]);
			}
		}
	} // end for-loop
	if (newArr.length===0) {
		return true;
	}
	else {
		return false;
	}
}

var test_string="(])";
console.log(test_string,bracesValid(test_string));