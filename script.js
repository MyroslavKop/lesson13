"use strict";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// then.catch.----------------------/

// fetch(API_URL)
//   .then((response) => response.json())
//   .then((result) => {
//     result.filter((obj) => {
//       if (obj.company.name === "Johns Group") return console.log(obj);
//     });
//   })
//   .catch((responseError) => {
//     if ((responseError.code = 404)) {
//       console.error("Address is not found");
//     } else {
//       console.error(responseError);
//     }
//   });

// async.await.---------------------/

// const getUser = async () => {
//   try {
//     const response = await fetch(API_URL);
//     if (!response.ok) {
//       throw response;
//     }
//     const data = await response.json();
//     data.filter((obj) => {
//       if (obj.company.name === "Johns Group") console.log(obj);
//     });
//   } catch (responseError) {
//     if ((responseError.code = 404)) {
//       console.error("Address is not found");
//     } else {
//       console.error(responseError);
//     }
//   }
// };
// getUser();
