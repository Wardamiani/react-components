import React, { useState } from 'react';


function Header(props){

    const [count, setCount] = useState(1);

    function increaseCount() {
        setCount(count + 1);
        console.log(count);
    }
    
    return (
    <div>
    <h1>
    {props.title}
    </h1>
    <p>
    Bem-vindo pela {count}ª vez!
    </p>
    <button onClick={increaseCount}>
        Retornar
    </button>
    </div>
    )
}

export default Header;