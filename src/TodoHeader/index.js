import React from "react";

function TodoHeader( { children, loading } ) {
    return(
        <header>
            { 
            
            //children 
            
            //React.Children y React.cloneElement : 
            React.Children
                .toArray(children)
                .map(child => React.cloneElement(child, {loading}))
            }
        </header>
    )
}

export { TodoHeader };