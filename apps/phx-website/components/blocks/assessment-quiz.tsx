import { stegaClean } from "next-sanity";
import { submitAssessmentAction } from "@/app/actions/submit-assessment";
import AssessmentQuizClient, {
  quizCopy,
} from "@/components/blocks/assessment-quiz-client";
import type { PAGE_QUERY_RESULT } from "@/sanity.types";

/** The Bookings link the header action "Schedule a Consultation" already uses. */
const consultationHref =
  "https://bookings.cloud.microsoft/book/PreliminaryMortgageConsultwithJimmyV1@goluminate.com/?ismsaljsauthenabled=true";

type AssessmentQuizProps = Extract<
  NonNullable<NonNullable<PAGE_QUERY_RESULT>["blocks"]>[number],
  { _type: "assessmentQuiz" }
> & {
  dataAttribute?: (path: string) => string | undefined;
};

/**
 * Hands the quiz the real server action. The client component takes the
 * action as a prop so its tests inject a fake without a network.
 */
export default function AssessmentQuiz({
  dataAttribute,
  promiseText,
  title,
}: AssessmentQuizProps) {
  // The promise is sent with the submission, so it must be the clean text.
  const cleanPromise = stegaClean(promiseText)?.trim();
  return (
    <AssessmentQuizClient
      consultationHref={consultationHref}
      dataAttributes={
        dataAttribute
          ? { promiseText: dataAttribute("promiseText"), title: dataAttribute("title") }
          : undefined
      }
      promiseText={cleanPromise || quizCopy.promise}
      submit={submitAssessmentAction}
      title={stegaClean(title)?.trim() ? title : null}
    />
  );
}
