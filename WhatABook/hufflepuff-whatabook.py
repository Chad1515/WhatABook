""" 
Title: Hufflepuff-WhatABook
Author: Carl Logan & Chad ONeal
Date: 12/09/2022
Description: Python for WhatABook app
"""

# import the MongoClient 
from pymongo import MongoClient

# connection to MongoDB 
client = MongoClient("mongodb+srv://whatabook_user:s3cret@bellevueuniversity.ox0t9kr.mongodb.net/WhatABook")

# variable to access web335DB
db = client['WhatABook']

# print all documents in books collection
for book in db.books.find():
  print(book)

# print list of books based on user's selected genre
genre_Select = input("Please enter a genre from above:  ")
if genre_Select == 'Horror' or genre_Select == 'Fantasy' or genre_Select == 'Fiction' or genre_Select == 'History' or genre_Select == 'Thriller' or genre_Select == 'Humor':
    for book in db.books.find({'genre': genre_Select}, {'title': 1, 'genre': 1}):
        print(book)
else:
    print("Please enter valid genre") 


# Display list of books by genre
select = input ('To view wishlist, please enter your customer ID. ')

if select == '1001' or select == '1002' or select == '1003':
    for wishlist in db.customers.find({'customerId': select}, {'wishlist': 1}):
        print(wishlist)
else:
    print("Please enter valid ID")