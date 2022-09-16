import './Logo.css';

const Logo = (props) => {
    return(
        <a className='logo' href={props.link} title={props.title}>{props.children}</a>
    );
}

export default Logo;