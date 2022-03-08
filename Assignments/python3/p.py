# Python code to demonstrate enumerations

# # importing enum for enumerations
# import enum

# # creating enumerations using class
# class Animal(enum.Enum):
# 	dog = 1
# 	cat = 2
# 	lion = 3

# # printing enum member as string
# print ("The string representation of enum member is :",end = "")
# print (Animal.dog)

# # printing enum member as repr
# print ("The repr representation of enum member is : ",end="")
# print (repr(Animal.dog))

# # printing the type of enum member using type()
# print ("The type of enum member is : ",end ="")
# print (type(Animal.dog))

# # printing name of enum member using "name" keyword
# print ("The name of enum member is : ",end ="")
# print (Animal.dog.name)

# Python program to illustrate
# *args for variable number of arguments


# def myFun(*argv):
# 	for arg in argv:
#             for x in arg:
#                 print(x)
	


# myFun('Hello', 'Welcome', 'to', 'GeeksforGeeks')


# x = 'aksh'

# for y in x:
#     print(y)

# Python program to illustrate
# *kwargs for variable number of keyword arguments


# def myFun(**kwargs):
# 	for key, value in kwargs.items():
# 		print("%s == %s" % (key, value))


# # Driver code
# myFun(first='Geeks', mid='for', last='Geeks')


# def myfunction(**kwargs):
#     for key,value in kwargs.items():
#         print("%s == %s" % (key,value))

# myfunction(first = 'prachi',second = 'shah')

# list1 = [1,2,3,4,5]
# p = [i for i in list1]
# print(p)

# print('First line.\nSecond line.')

# with open('file_.txt') as f:
#     read_data = f.read()

# f = open("new",'w')
# open the file using open() function
# file = open("file1.txt")

# # Reading from file
# print(file.read())
# open the file using open() function
# file = open("sample.txt", 'w')

# # Overwrite the file
# file.write(" All content has been overwritten !")
# file.write("\n")
# # file.read()
# file.write("...")

# names = {"name" : "prachi" , "surname" : "shah"}
# for i,j in names.copy().items():
#     if j == "shah":
#         del names[i]

# print(names)
# users = {'Hans': 'active', '123': 'inactive'}
# for user, status in users.copy().items():
#     if status == 'inactive':
#         del users[user]
# # active_users = {}
# # for user, status in users.items():
# #     if status == 'active':
# #         active_users[user] = status
# print(users)



# x = input("enter your name")
# print("welcome " + x)prepare_child


# def make_inc(n):
#     return lambda x : x+n

# f = make_inc(142)
# print(f(2))

# x = 1
# match x:
#     case 1 : print("hi")
#     case _ : print("enter valid num")
arr = [1,2,3]
del arr[0]
print(arr)