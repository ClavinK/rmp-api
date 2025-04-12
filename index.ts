const API_LINK = "https://www.ratemyprofessors.com/graphql";
const HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:129.0) Gecko/20100101 Firefox/129.0",
  Accept: "*/*",
  "Accept-Language": "en-US,en;q=0.5",
  "Content-Type": "application/json",
  Authorization: "Basic dGVzdDp0ZXN0",
  "Sec-GPC": "1",
  "Sec-Fetch-Dest": "empty",
  "Sec-Fetch-Mode": "cors",
  "Sec-Fetch-Site": "same-origin",
  Priority: "u=4",
};

const TEACHER_BODY_QUERY =
  '"query TeacherSearchResultsPageQuery(\\n  $query: TeacherSearchQuery!\\n  $schoolID: ID\\n  $includeSchoolFilter: Boolean!\\n) {\\n  search: newSearch {\\n    ...TeacherSearchPagination_search_1ZLmLD\\n  }\\n  school: node(id: $schoolID) @include(if: $includeSchoolFilter) {\\n    __typename\\n    ... on School {\\n      name\\n    }\\n    id\\n  }\\n}\\n\\nfragment TeacherSearchPagination_search_1ZLmLD on newSearch {\\n  teachers(query: $query, first: 8, after: \\"\\") {\\n    didFallback\\n    edges {\\n      cursor\\n      node {\\n        ...TeacherCard_teacher\\n        id\\n        __typename\\n      }\\n    }\\n    pageInfo {\\n      hasNextPage\\n      endCursor\\n    }\\n    resultCount\\n    filters {\\n      field\\n      options {\\n        value\\n        id\\n      }\\n    }\\n  }\\n}\\n\\nfragment TeacherCard_teacher on Teacher {\\n  id\\n  legacyId\\n  avgRating\\n  numRatings\\n  ...CardFeedback_teacher\\n  ...CardSchool_teacher\\n  ...CardName_teacher\\n  ...TeacherBookmark_teacher\\n}\\n\\nfragment CardFeedback_teacher on Teacher {\\n  wouldTakeAgainPercent\\n  avgDifficulty\\n}\\n\\nfragment CardSchool_teacher on Teacher {\\n  department\\n  school {\\n    name\\n    id\\n  }\\n}\\n\\nfragment CardName_teacher on Teacher {\\n  firstName\\n  lastName\\n}\\n\\nfragment TeacherBookmark_teacher on Teacher {\\n  id\\n  isSaved\\n}\\n"';

const TEACHER_QUERY = `query TeacherRatingsPageQuery($id: ID!) {
  node(id: $id) {
    __typename
    ... on Teacher {
      id
      legacyId
      firstName
      lastName
      department
      school {
        legacyId
        name
        city
        state
        country
        id
      }
      lockStatus
      ...StickyHeaderContent_teacher
      ...RatingDistributionWrapper_teacher
      ...TeacherInfo_teacher
      ...SimilarProfessors_teacher
      ...TeacherRatingTabs_teacher
    }
    id
  }
}

fragment CompareProfessorLink_teacher on Teacher {
  legacyId
}

fragment CourseMeta_rating on Rating {
  attendanceMandatory
  wouldTakeAgain
  grade
  textbookUse
  isForOnlineClass
  isForCredit
}

fragment HeaderDescription_teacher on Teacher {
  id
  legacyId
  firstName
  lastName
  department
  school {
    legacyId
    name
    city
    state
    id
  }
  ...TeacherTitles_teacher
  ...TeacherBookmark_teacher
  ...RateTeacherLink_teacher
  ...CompareProfessorLink_teacher
}

fragment HeaderRateButton_teacher on Teacher {
  ...RateTeacherLink_teacher
  ...CompareProfessorLink_teacher
}

fragment NameLink_teacher on Teacher {
  isProfCurrentUser
  id
  legacyId
  firstName
  lastName
  school {
    name
    id
  }
}

fragment NameTitle_teacher on Teacher {
  id
  firstName
  lastName
  department
  school {
    legacyId
    name
    id
  }
  ...TeacherDepartment_teacher
  ...TeacherBookmark_teacher
}

fragment NoRatingsArea_teacher on Teacher {
  lastName
  ...RateTeacherLink_teacher
}

fragment NumRatingsLink_teacher on Teacher {
  numRatings
  ...RateTeacherLink_teacher
}

fragment ProfessorNoteEditor_rating on Rating {
  id
  legacyId
  class
  teacherNote {
    id
    teacherId
    comment
  }
}

fragment ProfessorNoteEditor_teacher on Teacher {
  id
}

fragment ProfessorNoteFooter_note on TeacherNotes {
  legacyId
  flagStatus
}

fragment ProfessorNoteFooter_teacher on Teacher {
  legacyId
  isProfCurrentUser
}

fragment ProfessorNoteHeader_note on TeacherNotes {
  createdAt
  updatedAt
}

fragment ProfessorNoteHeader_teacher on Teacher {
  lastName
}

fragment ProfessorNoteSection_rating on Rating {
  teacherNote {
    ...ProfessorNote_note
    id
  }
  ...ProfessorNoteEditor_rating
}

fragment ProfessorNoteSection_teacher on Teacher {
  ...ProfessorNote_teacher
  ...ProfessorNoteEditor_teacher
}

fragment ProfessorNote_note on TeacherNotes {
  comment
  ...ProfessorNoteHeader_note
  ...ProfessorNoteFooter_note
}

fragment ProfessorNote_teacher on Teacher {
  ...ProfessorNoteHeader_teacher
  ...ProfessorNoteFooter_teacher
}

fragment RateTeacherLink_teacher on Teacher {
  legacyId
  numRatings
  lockStatus
}

fragment RatingDistributionChart_ratingsDistribution on ratingsDistribution {
  r1
  r2
  r3
  r4
  r5
}

fragment RatingDistributionWrapper_teacher on Teacher {
  ...NoRatingsArea_teacher
  ratingsDistribution {
    total
    ...RatingDistributionChart_ratingsDistribution
  }
}

fragment RatingFooter_rating on Rating {
  id
  comment
  adminReviewedAt
  flagStatus
  legacyId
  thumbsUpTotal
  thumbsDownTotal
  thumbs {
    thumbsUp
    thumbsDown
    computerId
    id
  }
  teacherNote {
    id
  }
  ...Thumbs_rating
}

fragment RatingFooter_teacher on Teacher {
  id
  legacyId
  lockStatus
  isProfCurrentUser
  ...Thumbs_teacher
}

fragment RatingHeader_rating on Rating {
  legacyId
  date
  class
  helpfulRating
  clarityRating
  isForOnlineClass
}

fragment RatingSuperHeader_rating on Rating {
  legacyId
}

fragment RatingSuperHeader_teacher on Teacher {
  firstName
  lastName
  legacyId
  school {
    name
    id
  }
}

fragment RatingTags_rating on Rating {
  ratingTags
}

fragment RatingValue_teacher on Teacher {
  avgRating
  numRatings
  ...NumRatingsLink_teacher
}

fragment RatingValues_rating on Rating {
  helpfulRating
  clarityRating
  difficultyRating
}

fragment Rating_rating on Rating {
  comment
  flagStatus
  createdByUser
  teacherNote {
    id
  }
  ...RatingHeader_rating
  ...RatingSuperHeader_rating
  ...RatingValues_rating
  ...CourseMeta_rating
  ...RatingTags_rating
  ...RatingFooter_rating
  ...ProfessorNoteSection_rating
}

fragment Rating_teacher on Teacher {
  ...RatingFooter_teacher
  ...RatingSuperHeader_teacher
  ...ProfessorNoteSection_teacher
}

fragment RatingsFilter_teacher on Teacher {
  courseCodes {
    courseCount
    courseName
  }
}

fragment RatingsList_teacher on Teacher {
  id
  legacyId
  lastName
  numRatings
  school {
    id
    legacyId
    name
    city
    state
    avgRating
    numRatings
  }
  ...Rating_teacher
  ...NoRatingsArea_teacher
  ratings(first: 20) {
    edges {
      cursor
      node {
        ...Rating_rating
        id
        __typename
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}

fragment SimilarProfessorListItem_teacher on RelatedTeacher {
  legacyId
  firstName
  lastName
  avgRating
}

fragment SimilarProfessors_teacher on Teacher {
  department
  relatedTeachers {
    legacyId
    ...SimilarProfessorListItem_teacher
    id
  }
}

fragment StickyHeaderContent_teacher on Teacher {
  ...HeaderDescription_teacher
  ...HeaderRateButton_teacher
}

fragment TeacherBookmark_teacher on Teacher {
  id
  isSaved
}

fragment TeacherDepartment_teacher on Teacher {
  department
  departmentId
  school {
    legacyId
    name
    id
  }
}

fragment TeacherFeedback_teacher on Teacher {
  numRatings
  avgDifficulty
  wouldTakeAgainPercent
}

fragment TeacherInfo_teacher on Teacher {
  id
  lastName
  numRatings
  ...RatingValue_teacher
  ...NameTitle_teacher
  ...TeacherTags_teacher
  ...NameLink_teacher
  ...TeacherFeedback_teacher
  ...RateTeacherLink_teacher
  ...CompareProfessorLink_teacher
}

fragment TeacherRatingTabs_teacher on Teacher {
  numRatings
  courseCodes {
    courseName
    courseCount
  }
  ...RatingsList_teacher
  ...RatingsFilter_teacher
}

fragment TeacherTags_teacher on Teacher {
  lastName
  teacherRatingTags {
    legacyId
    tagCount
    tagName
    id
  }
}

fragment TeacherTitles_teacher on Teacher {
  department
  school {
    legacyId
    name
    id
  }
}

fragment Thumbs_rating on Rating {
  id
  comment
  adminReviewedAt
  flagStatus
  legacyId
  thumbsUpTotal
  thumbsDownTotal
  thumbs {
    computerId
    thumbsUp
    thumbsDown
    id
  }
  teacherNote {
    id
  }
}

fragment Thumbs_teacher on Teacher {
  id
  legacyId
  lockStatus
  isProfCurrentUser
}
`

const SCHOOL_BODY_QUERY = `\"query NewSearchSchoolsQuery(\\n  $query: SchoolSearchQuery!\\n) {\\n  newSearch {\\n    schools(query: $query) {\\n      edges {\\n        cursor\\n        node {\\n          id\\n          legacyId\\n          name\\n          city\\n          state\\n          departments {\\n            id\\n            name\\n          }\\n          numRatings\\n          avgRatingRounded\\n          summary {\\n            campusCondition\\n            campusLocation\\n            careerOpportunities\\n            clubAndEventActivities\\n            foodQuality\\n            internetSpeed\\n            libraryCondition\\n            schoolReputation\\n            schoolSafety\\n            schoolSatisfaction\\n            socialActivities\\n          }\\n        }\\n      }\\n      pageInfo {\\n        hasNextPage\\n        endCursor\\n      }\\n    }\\n  }\\n}\\n\"`;

export interface ISchoolSearch {
  cursor: string;
  node: {
    avgRatingRounded: number;
    city: string;
    departments: {
      id: string;
      name: string;
    }[];
    id: string;
    legacyId: number;
    name: string;
    numRatings: number;
    state: string;
    summary: {
      campusConditions: number;
      campusLocation: number;
      careerOpportunities: number;
      clubAndEventActivities: number;
      foodQuality: number;
      internetSpeed: number;
      libraryCondition: number;
      schoolReputation: number;
      schoolSafety: number;
      schoolSatisfaction: number;
      socialActivities: number;
    };
  };
}

export interface ITeacherSearch {
  cursor: string;
  node: {
    __typename: string;
    avgDifficulty: number;
    avgRating: number;
    department: string;
    firstName: string;
    id: string;
    isSaved: boolean;
    lastName: string;
    legacyId: number;
    numRatings: number;
    school: {
      id: string;
      name: string;
    };
    wouldTakeAgainPercent: number;
      };
}

export async function searchProfessorsAtSchoolId(
  professorName: string,
  schoolId: string
): Promise<ITeacherSearch[] | undefined> {
  try {
    const response = await fetch(API_LINK, {
      credentials: "include",
      headers: HEADERS,
      body: `{"query":${TEACHER_BODY_QUERY},"variables":{"query":{"text":"${professorName}","schoolID":"${schoolId}","fallback":true,"departmentID":null},"schoolID":"${schoolId}","includeSchoolFilter":true}}`,
      method: "POST",
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("Network response from RMP not OK");
    }

    const data = await response.json();
    return data.data.search.teachers.edges as ITeacherSearch[];
  } catch (error) {
    console.error(error);
  }
}

export async function searchSchool(
  schoolName: string
): Promise<ISchoolSearch[] | undefined> {
  try {
    const response = await fetch("https://www.ratemyprofessors.com/graphql", {
      credentials: "include",
      headers: HEADERS,
      body: `{\"query\":${SCHOOL_BODY_QUERY},\"variables\":{\"query\":{\"text\":\"${schoolName}\"}}}`,
      method: "POST",
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("Network response from RMP not OK");
    }

    const data = await response.json();
    return data.data.newSearch.schools.edges as ISchoolSearch[];
  } catch (error) {
    console.error(error);
  }
}

export interface IProfessorRating {
  avgRating: number;
  avgDifficulty: number;
  wouldTakeAgainPercent: number;
  numRatings: number;
  formattedName: string;
  department: string;
  link: string;
  id: string;
}

export async function getProfessorRatingAtSchoolId(
  professorName: string,
  schoolId: string,
): Promise<IProfessorRating> {
  const searchResults = await searchProfessorsAtSchoolId(
    professorName,
    schoolId
  );

  if (searchResults === undefined || searchResults.length == 0) {
    return {
      avgRating: -1,
      avgDifficulty: -1,
      wouldTakeAgainPercent: -1,
      numRatings: 0,
      formattedName: professorName,
      department: "",
      link: "",
      id: "",
          };
  }
  
  let professorResult = searchResults[0];
  let result = false
  professorName = professorName.replace(/[^a-zA-Z0-9]/g, "");
  for (let i = 0; i < searchResults.length; i++) {
    searchResults[i].node.firstName = searchResults[i].node.firstName.replace(/[^a-zA-Z0-9]/g, "");
    searchResults[i].node.lastName = searchResults[i].node.lastName.replace(/[^a-zA-Z0-9]/g, "");
    if (searchResults[i].node.firstName + searchResults[i].node.lastName == professorName) {
      professorResult = searchResults[i];
      result = true
      break;
    }
  }

  if (result == false) {
      return {
        avgRating: -1,
        avgDifficulty: -1,
        wouldTakeAgainPercent: 0,
        numRatings: 0,
        formattedName:
          "Professor data not found.",
        department: "Professor data not found.",
        link:
          "",
        id: "0",
    }
  } else {
    return {
      avgRating: professorResult.node.avgRating,
      avgDifficulty: professorResult.node.avgDifficulty,
      wouldTakeAgainPercent: professorResult.node.wouldTakeAgainPercent,
      numRatings: professorResult.node.numRatings,
      formattedName:
        professorResult.node.firstName + " " + professorResult.node.lastName,
      department: professorResult.node.department,
      link:
        "https://www.ratemyprofessors.com/professor/" +
        professorResult.node.legacyId,
      id: professorResult.node.id,
        };
  }
}

export interface IComment {
  id: string;
  comment: string;
  date: string;
  helpfulRating: number;
  clarityRating: number;
  difficultyRating: number;
  isForOnlineClass: boolean;
  ratingTags: string[];
  thumbsUpTotal: number;
  thumbsDownTotal: number;
  wouldTakeAgain: boolean | null;
  grade: string;
  class: string;
}
export async function getComments(teacherId: string): Promise<IComment[]> {
  try {
    const response = await fetch(API_LINK, {
      credentials: "include",
      headers: HEADERS,
      body: JSON.stringify({
        query: TEACHER_QUERY,
        variables: { id: teacherId },
      }),
      method: "POST",
      mode: "cors",
    });

    if (!response.ok) {
      throw new Error("Network response from RMP not OK");
    }
    
    const data = await response.json();
    console.log(data)
    if (!data || !data.data || !data.data.node || !data.data.node.ratings) {
      throw new Error("No data found for the given teacher ID");
    }

    const comments = data.data.node.ratings.edges.map((edge: any) => ({
      id: edge.node.id,
      comment: edge.node.comment,
      date: edge.node.date,
      helpfulRating: edge.node.helpfulRating,
      clarityRating: edge.node.clarityRating,
      difficultyRating: edge.node.difficultyRating,
      isForOnlineClass: edge.node.isForOnlineClass,
      ratingTags: edge.node.ratingTags,
      thumbsUpTotal: edge.node.thumbsUpTotal,
      thumbsDownTotal: edge.node.thumbsDownTotal,
      wouldTakeAgain: edge.node.wouldTakeAgain,
      grade: edge.node.grade,
      class: edge.node.class,
    })) as IComment[];
    return comments;
  } catch (error) {
    console.error(error);
    return [];
  }
}

async function test() {
  const command = await getProfessorRatingAtSchoolId("Mary Maupin", "U2Nob29sLTEzOTE0")
  console.log(command)
}

test()