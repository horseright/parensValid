function parensValid(str){
  var count =0;
  for(var i=0;i<str.length();i++){
    if(str[i]=='('){
      count++;
    }
    else if(str[i]==')'){
      count--;
    }
    if(count==-1){
      return false;
    }
  }
  if(count==0){
    return true;
  }

  return false;
}



function bracesValid(str){
  var arr=[];//array to use as stack
  for(var i =0; i< str.length;i++){
    if((str[i]=='(')||(str[i]=='{')||(str[i]=='[')||(str[i]==')')||(str[i]==']')||(str[i]=='}')){//catches any braces
      if(str[i]=='('){//pushes corresponding close to (,[,{
        arr.push(')');
      }
      else if(str[i]=='['){
        arr.push(']');
      }
      else if(str[i]=='{'){
        arr.push('}');
      }
      else if(arr[arr.length-1]==str[i]){//pops if there is a match with the head and current position in string
        arr.pop();
      }
      else{
        return false; //return false if there isnt a match or a new (,[,{ to push
      }
    }
  }
  if(arr.length ==0){
    return true; //if stack is empty at the end of the loop then it is valid
  }

return false;
}





string = "{}[]([{}])";

if(bracesValid(string)){
  console.log("valid");
}
else{
  console.log("not valid")

}
