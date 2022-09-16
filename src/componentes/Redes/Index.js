import './Redes.css';

const Redes = (props) => {
    return(
        <a className='rede' href={props.link} title={props.title}>{props.children}</a>
    );
}

export default Redes;