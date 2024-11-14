import React from "react";

interface ContainerProps {
    children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({children}) => {
    return(
        <div  className="bg-gray-800 min-h-screen p-6 rounded-lg shadow-md">
            {children}
        </div>
    )
}

export default Container