import React, { useRef } from 'react'

const Categories = () => {
  let name = useRef();

  let handleSubmit = async () => {
    let data = {
      name: name.current.value
    };

    let res = await axios.post(
      "http://localhost:3001/v1/categories/addcategories",
      data
    );
    console.log(res.data);
  };
  return (
    <>
      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            name
          </label>
          <input
            type="name"
            id="name"
            ref={name}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Enter name"
            required
          />
        </div>
  
      
      

        <button
          type="submit"
          onClick={handleSubmit}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add categories
        </button>
      </form>
    </>
  )
}

export default Categories
