import Admin from '../components/admin'

function AdminLogin(props) {
    return ( 
        <div>
            <Admin blogs={props.blogs}/>
        </div>
     );
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/blogs')
    const blogs = await res.json()

    return {
        props: {
            blogs: blogs
        }
    }
}

export default AdminLogin;