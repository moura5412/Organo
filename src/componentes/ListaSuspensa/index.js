import './ListaSuspensa.css';

const ListaSuspensa = (props) => {
    return (
        <div className='campo-texto lista-suspensa'>
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.required} value={props.value}>
                <option value="">Selecione um time</option>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;