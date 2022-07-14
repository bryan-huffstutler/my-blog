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
            const newBlog = new Blog(req.body)
            newBlog.save()
            break;
        default: 
            res.status(400).send(json({success: false}))
            break;
    }
}