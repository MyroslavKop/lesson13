"use strict";

const API_URL = "https://jsonplaceholder.typicode.com/users";

// then.catch.----------------------/

fetch(API_URL)
  .then((response) => response.json())
  .then((result) => {
    result.filter((obj) => {
      if (obj.company.name === "Johns Group") return console.log(obj);
    });
  })
  .catch((responseError) => {
    if ((responseError.code = 404)) {
      console.error("Address is not found");
    } else {
      console.error(responseError);
    }
  });
