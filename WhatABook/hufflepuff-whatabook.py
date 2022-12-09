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

# print genre document with genre equal to Horror
print(db.books.find_one( { "genre": "horror" } ))    