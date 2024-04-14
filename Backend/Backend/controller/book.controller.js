import Book from "../model/book.model.js";

export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};

export const addbooks = async(req, res) => {
    try{
        const {name, price, category, image, title} = req.body;
        const newBook = new Book({
            name, price, category, image, title
        })
        if(newBook){
            await newBook.save();
            res.status(201).json({
                _id:newBook._id,
                name: newBook.name,
                price: newBook.price,
                category: newBook.category,
                title:newBook.title,
                message:"new book added successfully"

            })
        }
    } catch(error){
        res.status(500).send(error.message)
    }
}