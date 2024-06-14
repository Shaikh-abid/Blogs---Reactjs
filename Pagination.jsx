import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Pagination = () => {
    const { pageCount, handlePageChange, totalPages } = useContext(AppContext);

    return (
        <div className="flex justify-around  pt-4 dark:bg-gray-900 dark:text-white dark:border-t dark:border-gray-800">
            <div className="flex items-center space-x-4">
                { pageCount > 1 &&
                    <button onClick={() => handlePageChange(pageCount - 1)}
                            className="border-zinc-600 px-5 py-2 bg-slate-50 rounded-lg
                            dark:text-white dark:bg-gray-800">
                        Previous
                    </button>
                }
                
                { pageCount < totalPages &&
                    <button onClick={() => handlePageChange(pageCount + 1)}
                            className="border-zinc-600 px-5 py-2 bg-slate-50 rounded-lg
                            dark:text-white dark:bg-gray-800">
                        Next
                    </button>
                }
            </div>

            <p className="text-gray-600 dark:text-white">Page {pageCount} of {totalPages}</p>
        </div>
    );
};

export default Pagination;
