export function MyButton2() {
    function handleClick(event) {
        event.stopPropagation();
        alert(`Button clicked ${event.currentTarget.id}!`);
    }

    return (
        <button onClick={handleClick}>Click me 2!</button>
    );
}