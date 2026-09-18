import { groq } from "next-sanity";

// @sanity-typegen-ignore
export const assessmentQuizQuery = groq`
  _type == "assessmentQuiz" => {
    title,
    promiseText
  }
`;
