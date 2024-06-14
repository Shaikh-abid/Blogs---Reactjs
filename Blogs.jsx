import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

const Blogs = () => {
  const { loading, post } = useContext(AppContext);

  return (
    <div className="container mx-auto dark:bg-gray-900 dark:text-white">
      {loading ? (
        <Spinner />
      ) : post.length === 0 ? (
        <div className="text-center mt-10">
          <p className="text-lg">No Posts Found!</p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center -mx-4 ">
          {post.map((p) => (
            <div key={p.id} className="flex dark:bg-gray-900 dark:text-white flex-col justify-between bg-white rounded-lg shadow-md p-6 mx-4 my-4 w-80">
              <div>
                <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
                <p className="text-gray-600 mb-2">
                  By <span className="font-bold">{p.author}</span> on{" "}
                  <span className="font-bold text-blue-500">{p.category}</span>
                </p>
                <p className="text-gray-600 mb-4">Posted on {p.date}</p>
                <p className="text-gray-700 dark:text-white">{p.content}</p>
              </div>
              <div className="flex flex-wrap">
                {p.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 dark:bg-gray-800 dark:text-white">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
