function parensValid(str){
	var count=0;
	for(var i=0;i<str.length;i++){
        if (count<0){
          return false;
        }
        else if(str[i]=="("){
			count=count+1;
		}
		else if(str[i]==")"){
			count=count-1;
			}   
    }
  
	if(count!=0){
		return false;
	}
	else{
		return true;
	}
  }


console.log(parensValid("(sj(ddssd)f)k)s"))