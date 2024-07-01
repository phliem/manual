"use server";

import { promises as fs } from "fs";
import { QuestionaireType } from "../_quiz/question.types";

const API_BASE = "https://manual-case-study.herokuapp.com";

/**
 * Fetch the relevant questionnaire data for to render a quiz
 * @param questionnaireId
 * @returns Object containing a step by step questions and assets
 */
async function getData(questionnaireId: string): Promise<QuestionaireType> {
  const res = await fetch(`${API_BASE}/questionnaires/${questionnaireId}.json`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to fetch the quiz ${questionnaireId}`);
  }

  return res.json();
}

/**
 * Fetch the relevant questionnaire data from a local file
 * @param filename
 * @returns Object containing a step by step questions and assets
 */
async function getDataLocal(filename: string): Promise<QuestionaireType> {
  const file = await fs.readFile(
    process.cwd() + "/src/app/hairloss/_data/" + filename,
    "utf8"
  );

  if (!file) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(`Failed to read the file ${filename}`);
  }

  return JSON.parse(file);
}

export { getData, getDataLocal };
