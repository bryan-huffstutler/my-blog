import classes from './IntroStatement.module.css'

function IntroStatement() {

    return (
            <div className={classes.wrapper}>
            <div className={classes.statictxt}>I'm a</div>
            <ul className={classes.dynamictxts}>
                <li><span>Full-Stack Developer</span></li>
                <li><span>Blogger</span></li>
                <li><span>React Nerd</span></li>
                <li><span>Freelancer</span></li>
            </ul>
        </div>
        
        

    );
}

export default IntroStatement;