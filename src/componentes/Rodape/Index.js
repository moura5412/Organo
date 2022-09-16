import Logo from '../Logo/Index';
import Redes from '../Redes/Index';
import './Rodape.css';

const Rodape = () => {
    return(
        <footer className='rodape'>
            <div className='redes'>
                <Redes title='Link do Facebook'><img src='/imagens/fb.png' alt='Logo do Facebook' /></Redes>
                <Redes title='Link do Twitter'><img src='/imagens/tw.png' alt='Logo do Twitter' /></Redes>
                <Redes title='Link do Instagram'><img src='/imagens/ig.png' alt='Logo do Instagram' /></Redes>                 
            </div>

            <Logo title='Logo da Organo'><img src='/imagens/logo.png' alt='Logo da Organo' /></Logo>   

            <p>Densenvolvido por Et Bilu</p>
        </footer>
    );
}

export default Rodape;