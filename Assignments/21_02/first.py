# a = int(input('asdfhgvuy:   '))
# print(a)

# for x in range(1,11):
#     print('{0:2d} {1:3d} {2:4d}'.format(x,x*x,x*x*x))

# a = 5
# print((repr(a)))

# array = ['h','prachi','hii']
# for i in array:
#     print(i,len(i))

# users = {'Hans': 'active', 'Éléonore': 'inactive', '景太郎': 'active'}

# # Strategy:  Iterate over a copy
# for user, status in users.copy().items():
#     if status == 'inactive':
#         del users[user]

# # Strategy:  Create a new collection
# active_users = {}
# for user, status in users.items():
#     if status == 'active':
#         active_users[user] = status

# print(users)
# print(active_users)

# print(list(range(1,7)))
# arr= [1,2,3]
# print(len(arr))
# print(sum(range(1,4)))

# for n in range(2,10):
#     for i in range(2,n):
#         if n%i == 0:
#             print("prime")
#             break
#         else:
#             print("not prime")

# def http_error(status):
#     match status:
#         case 400:
#             return "Bad request"
#         case 404:
#             return "Not found"
#         case 418:
#             return "I'm a teapot"
#         case _:
#             return "Something's wrong with the internet"

# print(http_error(400))

# a = -11
# print(~a)

# def cheeseshop(kind, *arguments, **keywords):
#     print("-- Do you have any", kind, "?")
#     print("-- I'm sorry, we're all out of", kind)
#     for arg in arguments:
#         print(arg)
#     print("-" * 40)
#     for kw in keywords:
#         print(kw, ":", keywords[kw])

# cheeseshop("Limburger", "It's very runny, sir.",
#            "It's really very, VERY runny, sir.",
#            shopkeeper="Michael Palin",
#            client="John Cleese",
#            sketch="Cheese Shop Sketch")

# pairs = [(7, 'one'), (2, 'two'), (3, 'three'), (4, 'four')]
# pairs.sort(key = lambda x : x[1])
# print(pairs)
# i =16
# if (i > 15):
#     print("10 is less than 15")
# print("I am Not in if")

# Explicit function
# def digitSum(n):
# 	dsum = 0
# 	for ele in str(n):
# 		dsum += int(ele)
# 	return dsum


# # Initializing list
# List = [367, 111, 562, 945, 6726, 873]

# # Using the function on odd elements of the list
# newList = [digitSum(i) for i in List if i & 1]

# # Displaying new list
# print(newList)

# Python program to illustrate short hand if-else
# i = 10
# print(True) if i < 15 else print(False)
# def myfunc(*argv):
#     for i in argv:
#         print(i)
# myfunc(["h","e","l","l","o"])

# Python code to illustrate the cube of a number
# using lambda function


def cube(x): return x*x*x

# cube_v2 = lambda x : x*x*x

print(cube(7))
# print(cube_v2(7))
