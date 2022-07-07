import { AppBar, Button, Toolbar, Typography, ButtonGroup } from "@material-ui/core";
import Link from 'next/link'
function Layout(props) {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant='h5' style={{ width: '30%' }}>
                        @Bryan_FS_Dev's Blog
                    </Typography>

                    <ButtonGroup color="inherit" variant="text" fullWidth >
                        <Button><Link href='/'>Home</Link></Button>
                        <Button><Link href='/allblogs' >All Blogs</Link></Button>
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