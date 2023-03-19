// import React, { useState, useEffect } from "react";

// const Recipes = () => {
//   const [backendData, setBackendData] = useState([{}]);

//   useEffect(() => {
//     fetch("/api/recipes")
//       .then((response) => response.json())
//       .then((data) => {
//         setBackendData(data);
//       });
//   }, []);

//   return (
//     <div>
//       {typeof backendData.recipes === "undefined" ? (
//         <p>Loading...</p>
//       ) : (
//         backendData.recipes.map((recipes, i) => <p key={i}>{recipes}</p>)
//       )}
//     </div>
//   );
// };

// export default Recipes;

import React, { useState, useEffect } from "react";


function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipes.id}>
          <h2>{recipes.title}</h2>
          <p>{recipes.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
