import {useState} from "react";

const Contador = () =>{
    const [Contador, setContador] = useState(0);
    function Aumentar(){
        setContador(Contador + 1);
    }

    return(
        <div>
            <label>Contador: {Contador}</label>
            <br/>
            <button onClick={Aumentar}>Aumentar</button>
        </div>
    )
}

export default Contador;