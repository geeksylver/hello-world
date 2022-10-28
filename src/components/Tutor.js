import React from "react";

const Tutor = (props) => {
    const {position, name, professional, fullName, age, javascriptLibrary} = props;
    return(
        <div>
            <h1>{position}: {name} 
                <button onClick={()=>
                {
                    return(
                        <div>
                            <h1>{fullName}</h1>
                            <h1>{age}</h1>
                            <h1>{javascriptLibrary}</h1>
                        </div>
                    );
                }
                    }>More about this {professional}
                </button>
            </h1>
        </div>
    )
}

export default Tutor;