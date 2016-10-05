my_Str = 'W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!'

def bracesValid(str):
	arr=[]
	x=True
	for i in range (len(str)):
		if (str[i]=='{' or str[i]=='}' or str[i]=='(' or str[i]==')' or str[i]=='[' or str[i]==']' ):
			arr.append (str[i])
	for j in range (len(arr)):
		if (arr[j]!=arr[len(arr)-1-j]):
			x = False
	return x

print bracesValid (my_Str)

