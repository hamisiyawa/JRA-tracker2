import { createContext, useContext, useState } from 'react';
import { projects as initialProjects } from '../assets/assets';

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
    const [projects, setProjects] = useState(initialProjects);

    const addProject = (newProject) => {
        setProjects((prevProjects) => [
            ...prevProjects,
            { 
                id: prevProjects.length + 1,  // Temporary ID generation
                ...newProject,
                status: 'Started' // Default or derived status
            }
        ]);
    };

    const contextValue = { 
        projects,
        addProject  
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export const useStoreContext = () => useContext(StoreContext);
