import React, { useState } from "react";

const CopyTextComp = ({ children, text }) => {

    const [copy, setCopy] = useState(false);

    const handleCopy = async () => {
        try{
            await navigator.clipboard.writeText(text);
            setCopy(true);
            setTimeout( () => setCopy(false), 2000 );
        } catch(err) {
            console.log(`Failed to copy text, ${err}`);
        }
    }

    return (
        <div onClick={ handleCopy }>
            { copy ? "copied" : children }
        </div>
    )
}

export default CopyTextComp;
