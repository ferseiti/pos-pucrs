import { useState } from "react";

export function Contador() {
    const [contagem, setContagem] = useState(0);
    
    function handleClick() {
        // setContagem(contagem + 1);
        setContagem(contagemAtual => contagemAtual + 1);
    }

    return (
        <>  
            <button onClick={handleClick}>Click</button>
            <span>contagem {contagem}</span>
        </>
    );
}