A basic, up-to-date (as of March 2025) wrapper for RateMyProfessor's GraphQL API built using typescript. 

## Installation
npm install api-rmp

## Usage
```js
import {searchProfessorsAtSchoolId, searchSchool, getProfessorRatingAtSchoolId} from "api-rmp";
// Ignore these comments they are for testing:
// ratemyprofessor-api
// api-rmp


(async () => {
  const schoolId = "U2Nob29sLTEzOTE0";

  //* to search for professors with a name and get all query results *//
  //* We won't be needing to call this mode pretty much at all *//
  const ProfessorSearchResults = await searchProfessorsAtSchoolId(
    "Hao Ji",
    schoolId
  );
  console.log(JSON.stringify(ProfessorSearchResults, null, 2));

  //* to search for a professor with a specific name and get only the ratings and other relevant information and ID*//
  //* Use this to get more accurate professor information *//
  const ProfessorRatings = await getProfessorRatingAtSchoolId(
    "Hao Ji",
    schoolId
  );
  console.log(ProfessorRatings);
})();
// CPP id: U2Nob29sLTEzOTE0

```

## Acknowledgements
* [mtucourses/rate-my-professors](https://www.npmjs.com/package/@mtucourses/rate-my-professors) - For inspiration and some functionality

