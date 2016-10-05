//checks if parentheses are valid within a given string

function parensValid(str) {
	var count=0;
	for (var i=0; i<str.length; i++) {
		if (str[i]=="(") {
			count++;
		}
		else if (str[i]==")") {
			count--;
		}
		if (count<0) { //if count<0, that means there was a closed parens first, so string is invalid
			return false;
		}
	} // end for-loop
	if (count==0) { 
		return true; //if count==0, that means each open parens has a corresponding closed parens, making string valid
	}
	else {
		return false //if count !=0, the string is invalid because there weren't corresponding pairs of parentheses
	}
}


//Test Cases
console.log("(utjrkajklg(jgs(0))jgak(kioa)m)s", parensValid("(utjrkajklg(jgs(0))jgak(kioa)m)s"));
console.log("())(", parensValid("())("));