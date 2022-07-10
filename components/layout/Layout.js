import { AppBar, Button, Toolbar, Typography, ButtonGroup } from "@material-ui/core";
import Link from 'next/link'
import {useRouter} from 'next/router'

function Layout(props) {
    const router = useRouter()

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant='h5' style={{ width: '30%' }}>
                        @Bryan_FS_Dev's Blog
                    </Typography>

                    <ButtonGroup color="inherit" variant="text" fullWidth >
                        <Button onClick = {()=> router.push('/')}>Home</Button>
                        <Button onClick = {()=> router.push('/allblogs')}>All Blogs</Button>
                    </ButtonGroup>
                </Toolbar>
            </AppBar>
            <main>
                {props.children}
            </main>
        </div>
    );
}

export default Layout;