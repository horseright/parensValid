//checks if parentheses, braces, and brackets are valid

function bracesValid(str) {
	var newArr=[];
	for (var i=0; i<str.length; i++) {
		if (str[i]=="("||str[i]=="["||str[i]=="{") {
			newArr.push(str[i]); //if it finds an open parens/brace/bracket, will add to newArr
		}
		else if (str[i]==")") {
			if(newArr[newArr.length-1]=="(") {
				newArr.pop(); //if fit finds a closed parens, checks if last item in newArr is corresponding open parens
			}
			else {
				newArr.push(str[i]); //if last item isn't corresponding open parens, it adds closed parens to newArr
			}
		}
		else if (str[i]=="]") {
			if(newArr[newArr.length-1]=="[") {
				newArr.pop(); //if fit finds a closed bracket, checks if last item in newArr is corresponding open bracket
			}
			else {
				newArr.push(str[i]); //if last item isn't corresponding open bracket, it adds closed bracket to newArr
			}
		}
		else if (str[i]=="}") {
			if(newArr[newArr.length-1]=="{") {
				newArr.pop(); //if fit finds a closed brace, checks if last item in newArr is corresponding open brace
			}
			else {
				newArr.push(str[i]); //if last item isn't corresponding open brace, it adds closed brace to newArr
			}
		}
	} // end for-loop
	if (newArr.length===0) {
		return true; //if newArray is empty, that means all corresponding items were popped out, and string is valid
	}
	else {
		return false; //if anything remains in newArr, that means corresponding items weren't popped out, so the string is invalid
	}
}

var test_string="(])";
console.log(test_string,bracesValid(test_string));