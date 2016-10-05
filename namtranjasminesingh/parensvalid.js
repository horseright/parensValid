//checks if parentheses are valid

function parensValid(str) {
	var count=0;
	for (var i=0; i<str.length; i++) {
		if (str[i]=="(") {
			count++;
		}
		else if (str[i]==")") {
			count--;
		}
		if (count<0) { //if count<0, that means there was a closed parens first
			return false;
		}
	} // end for-loop
	if (count==0) { 
		return true;
	}
	else {
		return false
	}
}

console.log("(utjrkajklg(jgs(0))jgak(kioa)m)s", parensValid("(utjrkajklg(jgs(0))jgak(kioa)m)s"));
console.log("())(", parensValid("())("));