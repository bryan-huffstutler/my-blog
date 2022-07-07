import dbConnect from '../../../utils/dbConnect'
import Blog from '../../../models/Blog'

dbConnect()

export default async (req, res) => {
    const {
        query: {id},
        method
    } = req;

    switch(method){
        case 'GET':
            try {
                const blog = await Blog.findById(id)

                if(!blog) {
                    return res.status(400).send("Not found in database")
                }

                res.status(200).send(blog)
            } catch (error) {
                res.status(400).send(error.message)
            }
            break;
        case 'PUT':
            try {
                const blog = await Blog.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })

                if(!blog) {
                    res.status(400).send("Not found in database")
                }

                res.status(201).send(blog)
            } catch (error) {
                res.status(400).send(error.message)
            }
            break;
        case 'DELETE':
            try {
                const deletedBlog = await Blog.deleteOne({_id: id})

                if(!deletedBlog) {
                    res.status(400).send("Not found in database")
                }

                res.status(200).send("Successfully deleted from database")
            } catch (error) {
                res.status(400).send(error.message)
            }
            break;
        default: 
            res.status(400).send("Failed")
            break;
    }
}