#Amy's code
myStr = 'ab(cde)ef)'

def parensValid(Str):
	count =0
	for i in range (len(Str)):
		if (count<0):
			return False
		elif (Str[i]=='('):
			count =count+1
		elif (Str[i]==')'):
			count=count-1
	if (count!=0):
		return False
	else:
		return True

print parensValid(myStr)
