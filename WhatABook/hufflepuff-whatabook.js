/** 
=========================================
 ; Title: Hufflepuff-whatabook.js
 ; Authors: Carl Logan & Chad ONeal
 ; Date: 12/08/2022
 ; Description: Script & queries for WhatABook project
 ==========================================
*/

// connection to MongoDB mongosh "mongodb+srv://bellevueuniversity.ox0t9kr.mongodb.net/WhatABook" --apiVersion 1 --username whatabook_user

// Delete the books, customers, and wishlist collections.
db.books.drop();
db.customers.drop();
db.wishlist.drop();


// Create the books, customers, and wishlist collections using Document Validation.
db.createCollection("books", {
	validator: { 
    $jsonSchema: {
		  bsonType: "object",
		  properties: {
			 genre: {
				bsonType: "string"
			 },
			 author: {
				bsonType: "string"
			 },
			 title: {
				bsonType: "string"
			 },
       bookId: {
				bsonType: "string"
			},
		}
	}}
});

db.createCollection("customers", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      properties: {
        customerId: {
          bsonType: "string",
        },
        firstName: {
          bsonType: "string",
        },
        lastName: {
          bsonType: "string",
        },
        wishlist: {
          bsonType: "array",
          properties: {
            bookId: {
              bsonType: "string",
            },
            genre: {
              bsonType: "string",
            },
            title: {
              bsonType: "string",
            },
            author: {
              bsonType: "string",
            },
          },
        },
      },
    },
  },
});


// Books
horror = {
  bookId: "ISBN 9781681774664",
  genre: "Horror",
  title: "Rosemary's Baby",
  author: "Ira Levin",
},

horror2 = {
  bookId: "ISBN 9781512308051",
  genre: "Horror",
  title: "Frankenstein",
  author: "Mary Shelley",
};

fantasy= {
  bookId: "ISBN 9780147509079",
  genre: "Fantasy",
  title: "Alice in Wonderland",
  author: "Lewis Carol",
};

fantasy2 = {
  bookId: "ISBN 9780007263493",
  genre: "Fantasy",
  title: "The Sword in the Stone",
  author: "T.H. White",
}; 

fiction = {
  bookId: "ISBN 9780141439518",
  genre: "Fiction",
  title: "Pride and Prejudice",
  author: "Jane Austin",
};

fiction2 = {
  bookId: "ISBN 9780451524935",
  genre: "Fiction",
  title: "1984",
  author: "George Orwell",
}

history = {
  bookId: "ISBN 9780333977019",
  genre: "History",
  title: "What is History",
  author: "Edward Carr",
};

history2 =  {
  bookId: "ISBN 9798675712243",
  genre: "History",
  title: "The Communist Manifesto",
  author: "Karl Marx",
}

thriller = {
  bookId: "ISBN 9780061007224",
  genre: "Thriller",
  title: "The Exorcist",
  author: "William Peter Blatty",
};

thriller2 = {
  bookId: "ISBN 9781543617672",
  genre: "Thriller",
  title: "I am Watching You",
  author: "Teresa Driscoll",
};

humor = {
  bookId: "ISBN 9780307768735",
  genre: "Humor",
  title: "A Christmas Story",
  author: "Jean Shepherd",
};

humor2 = {
  bookId: "ISBN 978-250268129",
  genre: "Humor",
  title: "The Panic Years",
  author: "Nell Frizzell",
};

// Insert the books documents.
db.books.insertOne(horror);
db.books.insertOne(fantasy);
db.books.insertOne(fiction);
db.books.insertOne(history);
db.books.insertOne(thriller);
db.books.insertOne(humor);
db.books.insertOne(horror2);
db.books.insertOne(fantasy2);
db.books.insertOne(fiction2);
db.books.insertOne(history2);
db.books.insertOne(thriller2);
db.books.insertOne(humor2);

// Customers
bozeman = {
  customerId: "1001",
  firstName: "Anna",
  lastName: "Bozeman",
  wishlist: [
    {
      bookId: "ISBN 9780307768735",
      genre: "Humor",
      title: "A Christmas Story",
      author: "Jean Shepherd",
    },
    {
      bookId: "ISBN 9780061007224",
      genre: "Thriller",
      title: "The Exorcist",
      author: "William Peter Blatty",
    },
    {
      bookId: "ISBN 9780333977019",
      genre: "History",
      title: "What is History",
      author: "Edward Carr",
    },    
  ],
};

gonzalez = {
  customerId: "1002",
  firstName: "Sofia",
  lastName: "Gonzalez",
  wishlist: [
    {
      bookId: "ISBN 9781681774664",
      genre: "Horror",
      title: "Rosemary's Baby",
      author: "Ira Levin", 
    },
    {
      bookId: "ISBN 9780147509079",
      genre: "Fantasy",
      title: "Alice in Wonderland",
      author: "Lewis Carol", 
    },   
    {
      bookId: "ISBN 9781512308051",
      genre: "Horror",
      title: "Frankenstein",
      author: "Mary Shelley", 
    }, 
  ],
};

constanza = {
  customerId: "1003",
  firstName: "Marco",
  lastName: "Constanza",
  wishlist: [
    {
      bookId: "ISBN 978-250268129",
      genre: "Humor",
      title: "The Panic Years",
      author: "Nell Frizzell",
    }, 
    {
      bookId: "ISBN 9780141439518",
      genre: "Fiction",
      title: "Pride and Prejudice",
      author: "Jane Austin", 
    },
    {
      bookId: "ISBN 9781543617672",
      genre: "Thriller",
      title: "I am Watching You",
      author: "Teresa Driscoll",
    },    
  ],
};

// Insert the customers documents.
db.customers.insertOne(bozeman);
db.customers.insertOne(gonzalez);
db.customers.insertOne(constanza);

// Insert the wishlist documents.
db.wishlist.insertOne(bozeman);
db.wishlist.insertOne(gonzalez);
db.wishlist.insertOne(constanza);

//query to display a list of all books  
db.books.find();

//query to display a list of books by genre
db.books.find({ "genre": "Horror"}); 

//query to display a list of books by author
db.books.find({ "author": "Ira Levin"});

//query to display a book by bookId
db.books.find({ "bookId": "ISBN 9781543617672"}); 

//query to display a wishlist by customerId
db.customers.find({ customerId: "1001" }, { wishlist: 1 })

//add book to customers wishlistItems
db.customers.updateOne({ customerId: "1002" }, { $push: { "wishlist": { bookId: "ISBN 978-250268129",
genre: "Humor", title: "The Panic Years", author: "Nell Frizzell"},},});

//remove a book from a customer's wishlistItems
db.customers.updateOne({ customerId: "1003" }, { $pull: {"wishlist": { title: "I am Watching You",
genre: "Thriller", author: "Teresa Driscoll", bookId: "ISBN 9781543617672",},},});