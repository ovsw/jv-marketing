import { ClipboardCheck } from "lucide-react";
import { defineField, defineType } from "sanity";
import { sectionNavField } from "./shared/section-nav.ts";

/**
 * The Home Loan Readiness Assessment. Questions, options, and branch rules
 * are code in the shared Assessment package (ADR 0003); editors own only the
 * intro title and the consent promise a Visitor agrees to.
 */
export default defineType({
  name: "assessmentQuiz",
  title: "Assessment",
  type: "object",
  icon: ClipboardCheck,
  description:
    "The Home Loan Readiness Assessment quiz with its results and contact step",
  fields: [
    defineField({
      name: "title",
      title: "Intro Title",
      type: "string",
      description:
        "Optional heading shown above the quiz. Leave blank when a Page Header already introduces it.",
      validation: (rule) => rule.max(100),
    }),
    defineField({
      name: "promiseText",
      title: "Consent Promise",
      type: "text",
      rows: 3,
      description:
        "The exact promise a visitor agrees to on the contact step. It is stored with every submission, so keep it accurate.",
      initialValue:
        "It's okay for Jimmy's team to contact me about my home loan options by the channels I check below. I can opt out any time.",
      validation: (rule) => rule.required().max(1000),
    }),
    sectionNavField(),
  ],
  preview: {
    select: { title: "title" },
    prepare: ({ title }) => ({
      subtitle: "Assessment",
      title: title || "Home Loan Readiness Assessment",
    }),
  },
});
