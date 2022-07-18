import Admin from '../components/admin'
import dbConnect from '../utils/dbConnect'
import Blog from '../models/Blog'

function AdminLogin(props) {
    const blogs = JSON.parse(props.blogs)
    return ( 
        <div>
            <Admin blogs={blogs}/>
        </div>
     );
}

export async function getStaticProps() {
    dbConnect()
    const data = await Blog.find()
    const blogs = JSON.stringify(data)

    return {
        props: {
            blogs: blogs
        }
    }
}

export default AdminLogin;