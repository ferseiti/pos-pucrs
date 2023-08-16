export function MyButton() {
    function handleClick() {
        alert('Button clicked!');
    }

    return (
        <button onClick={handleClick}>Click me!</button>
    );
}