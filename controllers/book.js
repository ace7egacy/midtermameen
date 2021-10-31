// create a reference to the model
const book = require('../models/book');
let Book = require('../models/book');

// Gets all books from the Database and renders the page to list all books.
module.exports.bookList = function(req, res, next) {  
    Book.find((err, bookList) => {
        // console.log(bookList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(bookList);
            res.render('book/list', {
                title: 'Book List', 
                books: bookList
            })            
        }
    });
}

// Gets a book by id and renders the details page.
module.exports.details = (req, res, next) => {
    
    let id = req.params.id;

    Book.findById(id, (err, bookToShow) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('book/details', {
                title: 'Book Details', 
                book: bookToShow
            })
        }
    });
}

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {
    
    router.get('/add', bookController.displayAddPage);   

}

// Processes the data submitted from the Add form to create a new book
module.exports.processAddPage = (req, res, next) => {

    // router.post('book/add_edit',
    // title: 'Add a new Item',
    // bookController.processAddPage);

}

// Gets a book by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    books.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
    else
        {
            console.log(itemToEdit);
        //show the edit view
        res.render('book/add_edit',{
            title: 'Edit Item',
            item: itemToEdit
        })
    }
});
}

// Processes the data submitted from the Edit form to update a book
module.exports.processEditPage = (req, res, next) => {
    
    router.post('/edit/:id', bookController.processEditPage);
    
}

// Deletes a book based on its id.
module.exports.performDelete = (req, res, next) => {
    
    router.get('/details/:id', bookController.details);

}