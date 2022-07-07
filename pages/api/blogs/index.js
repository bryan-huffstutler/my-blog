import dbConnect from '../../../utils/dbConnect'
import Blog from '../../../models/Blog'

dbConnect()

export default async (req, res) => {
    const {method} = req

    switch(method) {
        case 'GET':
            try {
                const blogs = await Blog.find({})
                
                res.status(200).send(blogs)
            } catch (error) {
                res.status(400).send(error.message)
            }
            break;
        case 'POST':
            try {
                const blog = await Blog.create(req.body)

                res.status(200).send(blog)
            } catch (error) {
                res.status(400).send(error.message)
            }
            break;
        default: 
            res.status(400).send(json({success: false}))
            break;
    }
}