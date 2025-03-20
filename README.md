A basic, up-to-date (as of March 2025) wrapper for RateMyProfessor's GraphQL API built using typescript. 

## Usage

```js
import {searchProfessorsAtSchoolId, searchSchool, getProfessorRatingAtSchoolId, getComments} from "api-rmp";

(async () => {
  // CPP id: U2Nob29sLTEzOTE0
  const schoolId = "U2Nob29sLTEzOTE0";

  //* to search for professors with a name and get all query results *//
  // const ProfessorSearchResults = await searchProfessorsAtSchoolId(
  //   "Hao Ji",
  //   schoolId
  // );
  // console.log(JSON.stringify(ProfessorSearchResults, null, 2));

  //* to search for a professor with a specific name and get only the ratings and other relevant information *//
  const ProfessorRatings = await getProfessorRatingAtSchoolId(
    "Keivan Navi",
    schoolId
  );
  console.log(ProfessorRatings);
  /* Example Result:
  {
    avgRating: 3.5,
    avgDifficulty: 2.6,
    wouldTakeAgainPercent: 70,
    numRatings: 30,
    formattedName: 'Keivan Navi',
    department: 'Computer Science',
    link: 'https://www.ratemyprofessors.com/professor/2815242',
    id: 'VGVhY2hlci0yODE1MjQy'
  }
  */

  //* to get comments for a specific professor with their respective ID *//
  //* Grab ID's with the getProfessorRatingAtSchoolId function *//
  const comments = await getComments("VGVhY2hlci0yODE1MjQy");
  console.log(comments);
  /* Example Result:
  {
  data: {
    node: {
      __typename: 'Teacher',
      avgDifficulty: 2.6,
      avgRating: 3.5,
      courseCodes: [Array],
      department: 'Computer Science',
      departmentId: '11',
      firstName: 'Keivan',
      id: 'VGVhY2hlci0yODE1MjQy',
      isProfCurrentUser: false,
      isSaved: false,
      lastName: 'Navi',
      legacyId: 2815242,
      lockStatus: 'none',
      numRatings: 30,
      ratings: [Object],
      ratingsDistribution: [Object],
      relatedTeachers: [Array],
      school: [Object],
      teacherRatingTags: [Array],
      wouldTakeAgainPercent: 70
    }
  }
}
[
  {
    id: 'UmF0aW5nLTQwNzM1NTIx',
    comment: 'Dr. Navi is extremely knowledgeable about operating systems. He goes really into detail about the specifics and teaches off examples. He is extremely passionate and encourages participation in class. His lectures are a mix of slides and white board writing. He had 3 midterms all based on his lectures. ',
    date: '2025-03-05 02:56:26 +0000 UTC',
    helpfulRating: 5,
    clarityRating: 5,
    difficultyRating: 3,
    isForOnlineClass: false,
    ratingTags: 'EXTRA CREDIT--Lecture heavy',
    thumbsUpTotal: 0,
    thumbsDownTotal: 0,
    wouldTakeAgain: 1,
    grade: 'A',
    class: 'CS4310'
  },
  {
    id: 'UmF0aW5nLTQwNzM1NTEz',
    comment: 'He has a bit of an accent but his overall lecture is good, and gives discussions every week about the topic of that week.',   
    date: '2025-03-05 02:54:33 +0000 UTC',
    helpfulRating: 5,
    clarityRating: 5,
    difficultyRating: 2,
    isForOnlineClass: false,
    ratingTags: 'Gives good feedback--Caring--Respected',
    thumbsUpTotal: 0,
    thumbsDownTotal: 0,
    wouldTakeAgain: 1,
    grade: 'A',
    class: '4660'
  },
  {
    id: 'UmF0aW5nLTQwNzM1MzQ4',
    comment: 'Discussions helped a lot for exams',
    date: '2025-03-05 02:18:21 +0000 UTC',
    helpfulRating: 5,
    clarityRating: 5,
    difficultyRating: 4,
    isForOnlineClass: false,
    ratingTags: 'Participation matters--Clear grading criteria--Gives good feedback',
    thumbsUpTotal: 0,
    thumbsDownTotal: 0,
    wouldTakeAgain: 1,
    grade: 'A',
    class: 'CS3650'
  },
  {
    id: 'UmF0aW5nLTQwNzM1MzM2',
    comment: 'Good lectures on AI',
    date: '2025-03-05 02:16:11 +0000 UTC',
    helpfulRating: 5,
    clarityRating: 5,
    difficultyRating: 4,
    isForOnlineClass: false,
    ratingTags: 'Clear grading criteria--Lecture heavy--Accessible outside class',
    thumbsUpTotal: 0,
    thumbsDownTotal: 0,
    wouldTakeAgain: 1,
    grade: 'A',
    class: 'CS4200'
  },
  {
    id: 'UmF0aW5nLTQwNzM1MzE2',
    comment: 'Good professor for the course',
    date: '2025-03-05 02:12:21 +0000 UTC',
    helpfulRating: 5,
    clarityRating: 5,
    difficultyRating: 3,
    isForOnlineClass: false,
    ratingTags: 'Participation matters--Gives good feedback--Lots of homework',
    thumbsUpTotal: 0,
    thumbsDownTotal: 0,
    wouldTakeAgain: 1,
    grade: 'A-',
    class: 'CS3010'
  },
  {
    id: 'UmF0aW5nLTQwNzM1MzA4',
    comment: 'Really good professor',
    date: '2025-03-05 02:11:04 +0000 UTC',
    helpfulRating: 5,
    clarityRating: 5,
    difficultyRating: 3,
    isForOnlineClass: false,
    ratingTags: 'Participation matters--Amazing lectures --Gives good feedback',
    thumbsUpTotal: 0,
    thumbsDownTotal: 0,
    wouldTakeAgain: 1,
    grade: 'A',
    class: 'CS2640'
  },
  {
    id: 'UmF0aW5nLTQwMzk0NDY4',
    comment: 'Very nice guy and knowledgeable about the course material. However, I feel that I learned almost nothing from this class. Lectures felt disorganized and I struggled to figure out what content was important. 3 exams, and most of the questions were copied from the weekly discussion boards. Easy to pass, but take someone else if you want to learn.',
    date: '2024-12-20 07:04:33 +0000 UTC',
    helpfulRating: 2,
    clarityRating: 2,
    difficultyRating: 2,
    isForOnlineClass: false,
    ratingTags: 'Participation matters--Caring--Graded by few things',
    thumbsUpTotal: 0,
    thumbsDownTotal: 0,
    wouldTakeAgain: null,
    grade: 'B+',
    class: 'CS3010'
  },
  {
    id: 'UmF0aW5nLTM5ODgxMTE2',
    comment: "This is almost a 2 hour class, so be aware. Tuesdays are usually straight lecture and he doesn't really tell you the topic he just starts writing and talking about things. The concepts are straightforward if you pay attention but they can get confusing. He takes forever to grade things and your grade is on hw and midterms. No projects or coding.",
    date: '2024-11-01 16:19:02 +0000 UTC',
    helpfulRating: 4,
    clarityRating: 4,
    difficultyRating: 4,
    isForOnlineClass: false,
    ratingTags: 'Participation matters--Lecture heavy--Graded by few things',
    thumbsUpTotal: 0,
    thumbsDownTotal: 1,
    wouldTakeAgain: 1,
    grade: '',
    class: 'CS3650'
  },
  {
    id: 'UmF0aW5nLTM5NDMzMTQ3',
    comment: "Participate and be engaged in class, and you'll ALWAYS get a 20/20 on his exams -- and an A in the course. Otherwise, good luck trying to navigate unclear exams, with questions on material not covered in class. You won't learn much and don't program, so unless you want to fail with another teacher, you'll have to also take him for Arch and OS. ",
    date: '2024-05-10 20:05:09 +0000 UTC',
    helpfulRating: 5,
    clarityRating: 5,
    difficultyRating: 1,
    isForOnlineClass: false,
    ratingTags: 'Participation matters--Graded by few things',
    thumbsUpTotal: 0,
    thumbsDownTotal: 0,
    wouldTakeAgain: 1,
    grade: 'A',
    class: 'CS2640'
  },
  {
    id: 'UmF0aW5nLTM5MjE0ODI5',
    comment: "He definitely improved the first time I took him. There are 3 exams including the final, no quizzes, and some homework. Most of the time is spent lecturing which can get boring and long. You work in groups to complete assignments which are easy to do. He does take awhile to grade things but if you participate you'll pass. No programming done here.",
    date: '2024-04-20 00:06:38 +0000 UTC',
    helpfulRating: 3,
    clarityRating: 3,
    difficultyRating: 3,
    isForOnlineClass: false,
    ratingTags: 'Participation matters--Lecture heavy',
    thumbsUpTotal: 0,
    thumbsDownTotal: 0,
    wouldTakeAgain: 1,
    grade: 'Not sure yet',
    class: 'CS2640'
  },
  {
    id: 'UmF0aW5nLTM4OTU0NDUy',
    comment: "I won't lie; you will not learn anything about operating systems in this class, but you will definitely get an A. No homework, no quizzes, just 1-3 tests depending on what your class chooses, and a final. All tests are exact copies from the worksheets you do in class. ",
    date: '2024-02-06 02:35:15 +0000 UTC',
    helpfulRating: 3,
    clarityRating: 3,
    difficultyRating: 1,
    isForOnlineClass: false,
    ratingTags: '',
    thumbsUpTotal: 0,
    thumbsDownTotal: 0,
    wouldTakeAgain: 1,
    grade: 'A',
    class: 'CS4310'
  },
  {
    id: 'UmF0aW5nLTM4OTIxMTc4',
    comment: "Professor is very knowledgeable about topics and heavily respected. He allows you to go as deeply as you like into topics while having a very low standard to get an A in the class. You can try to answer 1 question every class and fail every exam and get an A. If you don't want to participate, he will grade you purely on exams, fairly",
    date: '2024-01-24 21:05:40 +0000 UTC',
    helpfulRating: 5,
    clarityRating: 5,
    difficultyRating: 2,
    isForOnlineClass: false,
    ratingTags: 'Amazing lectures --Respected--Lecture heavy',
    thumbsUpTotal: 0,
    thumbsDownTotal: 0,
    wouldTakeAgain: 1,
    grade: 'A',
    class: 'CS3650'
  },
  {
    id: 'UmF0aW5nLTM4OTIwOTgz',
    comment: 'Professor teaches complex subjects in a disorganized manner. Be ready to learn the material yourself. Exams are reasonable though',
    date: '2024-01-24 20:30:00 +0000 UTC',
    helpfulRating: 2,
    clarityRating: 2,
    difficultyRating: 4,
    isForOnlineClass: false,
    ratingTags: 'Get ready to read--Participation matters--Lecture heavy',
    thumbsUpTotal: 0,
    thumbsDownTotal: 1,
    wouldTakeAgain: 1,
    grade: 'A',
    class: 'CS2640'
  },
  {
    id: 'UmF0aW5nLTM4NzM4MTE1',
    comment: "Like many others mentioned, you will likely not learn much from this class. The lectures are very disorganized and most of the time he doesn't even lecture. The only thing that matters in this class are the discussion boards as the questions will appear on the exams almost verbatim. Easy class but expect a lot of wasted time. ",
    date: '2024-01-19 05:37:26 +0000 UTC',
    helpfulRating: 1,
    clarityRating: 1,
    difficultyRating: 2,
    isForOnlineClass: false,
    ratingTags: 'Beware of pop quizzes--Test heavy--Graded by few things',
    thumbsUpTotal: 0,
    thumbsDownTotal: 1,
    wouldTakeAgain: null,
    grade: 'A',
    class: 'CS4310'
  },
  {
    id: 'UmF0aW5nLTM4Nzk0NTU5',
    comment: "He's a pretty knowledgeable professor and is very caring towards all of his students. He does have a unique way of lecturing, but I was able to take what I could and learn through the discussions. However, it is easy to not take this class seriously since he is very chill. We had 4 exams all related to the slides and discussions. Pretty easy A",
    date: '2023-12-26 10:22:10 +0000 UTC',
    helpfulRating: 5,
    clarityRating: 5,
    difficultyRating: 2,
    isForOnlineClass: false,
    ratingTags: 'Participation matters--Caring--Respected',
    thumbsUpTotal: 0,
    thumbsDownTotal: 0,
    wouldTakeAgain: 1,
    grade: 'A+',
    class: 'CS4200'
  },
  {
    id: 'UmF0aW5nLTM4NzMxMjEx',
    comment: "He is truly a very caring and interesting professor but his material is worthless. He nor the students took this class serious because it was a joke. If you care about learning any material related to the class don't take this professor you will be taught nothing and will learn nothing. ",
    date: '2023-12-18 21:09:35 +0000 UTC',
    helpfulRating: 1,
    clarityRating: 1,
    difficultyRating: 1,
    isForOnlineClass: false,
    ratingTags: '',
    thumbsUpTotal: 0,
    thumbsDownTotal: 1,
    wouldTakeAgain: null,
    grade: 'A',
    class: 'CS4310'
  },
  {
    id: 'UmF0aW5nLTM4NjI1ODU5',
    comment: "He's very knowledgeable and passionate about the content taught, though his class feels disorganized and it's hard to tell what information is actually important. Nonetheless, exams are fairly easy if you attend class and answer the discussion questions.",
    date: '2023-12-16 23:47:22 +0000 UTC',
    helpfulRating: 3,
    clarityRating: 3,
    difficultyRating: 3,
    isForOnlineClass: false,
    ratingTags: 'Caring--Lecture heavy',
    thumbsUpTotal: 0,
    thumbsDownTotal: 0,
    wouldTakeAgain: 1,
    grade: '',
    class: 'CS3650'
  },
  {
    id: 'UmF0aW5nLTM4NjAxMTE2',
    comment: "Though Keivan's class is a bit unorganized at times, he is a pretty good professor and very knowledgeable. Most classes we would do a discussion and solve questions in our groups, and then we would go up and solve those questions on the board to see if we were correct or not, which is very good for review. There were around 4 exams.",
    date: '2023-12-10 23:35:16 +0000 UTC',
    helpfulRating: 4,
    clarityRating: 4,
    difficultyRating: 3,
    isForOnlineClass: false,
    ratingTags: 'Group projects--Caring--Test heavy',
    thumbsUpTotal: 0,
    thumbsDownTotal: 0,
    wouldTakeAgain: 1,
    grade: 'Not sure yet',
    class: 'CS3650'
  },
  {
    id: 'UmF0aW5nLTM3ODk0MzE3',
    comment: 'This professor is very nice, but the lectures are disorganized. This is my second semester with him, and it seems to be better organized. His test are multiple choice and his classes are usually an easy pass. You definitely will not learn much though.',
    date: '2023-05-11 04:28:33 +0000 UTC',
    helpfulRating: 3,
    clarityRating: 3,
    difficultyRating: 2,
    isForOnlineClass: true,
    ratingTags: 'Hilarious--Caring--Graded by few things',
    thumbsUpTotal: 0,
    thumbsDownTotal: 0,
    wouldTakeAgain: 1,
    grade: 'Not sure yet',
    class: 'CS1300'
  },
  {
    id: 'UmF0aW5nLTM3ODkwMTIw',
    comment: "I don't know how his score is so high. I cannot stress this enough, don't take him. He has classes where you don't do anything--no joke--bc he is passing back tests. We would watch YouTube lectures given by someone else--for an in person class. He gives pop quizzes as attendance bc obv ppl stopped showing up. An easy A, but a worthless experience.",
    date: '2023-05-10 22:22:44 +0000 UTC',
    helpfulRating: 1,
    clarityRating: 1,
    difficultyRating: 1,
    isForOnlineClass: false,
    ratingTags: '',
    thumbsUpTotal: 3,
    thumbsDownTotal: 1,
    wouldTakeAgain: null,
    grade: 'A',
    class: 'CS4200'
  }
]
*/
})();

```

## Acknowledgements

- [mtucourses/rate-my-professors](https://www.npmjs.com/package/@mtucourses/rate-my-professors) - For inspiration and some functionality
