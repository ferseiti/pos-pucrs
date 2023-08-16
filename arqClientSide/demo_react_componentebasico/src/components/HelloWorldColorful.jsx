export function HelloWorldColorful({nome,cor}) {
    const corTexto = cor || 'green';
    return(
        <h1 style={{color: corTexto}}> Hello, {nome} </h1>
    );
}