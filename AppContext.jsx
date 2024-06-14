import { createContext, useState } from "react";
import { baseUrl } from '../baseUrl';


// Step 1: create a context from below syntax
export const AppContext = createContext();


function AppContextProvider({ children }) {
    const[loading, setLoading] = useState(false);
    const[post, setPosts] = useState([]);
    const[pageCount, setPageCount] = useState(1);
    const[totalPages, setTotalPages] = useState(null);

    //Data fill part

    async function blogsPosts(page = 1) {
        setLoading(true);
        let url =  `${baseUrl}?page=${page}`;

        try {
            const result = await fetch(url);
            const data = await result.json();
            // console.log(data);

            setPageCount(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);


        } catch (error) {
            console.log("Error in fetching data !!");
            setPageCount(1);
            setPosts([]);
            setTotalPages(null);
        }

        setLoading(false);
    }

    function handlePageChange(pageNumber) {
        setPageCount(pageNumber);
        blogsPosts(pageNumber);
    }

    const Data = {
        loading,
        setLoading,
        post,
        setPosts,
        pageCount,
        setPageCount,
        totalPages,
        setTotalPages,
        blogsPosts,
        handlePageChange
    }

    // Step 2: create provider for created context use below syntax same for every context you create in future
    return <AppContext.Provider value={Data}>
        {children}
    </AppContext.Provider>
};


export default AppContextProvider;