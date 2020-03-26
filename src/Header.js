import React from 'react';

export default function Header(propriedades){
        return(
            <header>
                <h1>{propriedades.children}</h1>
            </header>

        );
}