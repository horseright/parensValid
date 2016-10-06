function bracesValid(str){
	for(var i=0;i<str.length;i++){
		var new_array=[];
		var new_array2=[];
		for(var i=0;i<str.length;i++){
			if(str[i]=="("||str[i]=="["||str[i]=="{"){
				new_array.push(str[i]);
			}
		}
		for (var j=str.length-1; j>=0; j--){
			if(str[j]==")"||str[j]=="]"||str[j]=="}"){
				new_array2.push(str[j]);
			}
		}
	}
  
    var new_array3=mapping(new_array);
    for(var u=0;u<new_array3.length;u++){
      if(new_array2[u]!=new_array3[u]){
        return false;
      }
    }
    return true;
}

function mapping(arr){
	for (var i=0; i<arr.length; i++) {
		if(arr[i]=="("){
			arr[i]=")";
		}
		if(arr[i]=="["){
			arr[i]="]";
		}
		if(arr[i]=="{"){
			arr[i]="}";
		}
	}
    return arr;
}

console.log(bracesValid("(sj(d[ds{s}d])fk)s"))