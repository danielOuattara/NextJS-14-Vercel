import sql from "@/database/database-client";
import Answer from "./Answer";
import { revalidatePath } from "next/cache";

export default function QuizForm() {
  async function createQuiz(formData: FormData) {
    "use server";
    let title = formData.get("title") as string;
    let description = formData.get("description") as string;
    let question_text = formData.get("question_text") as string;

    let answers = [1, 2, 3, 4].map((id) => ({
      answer: formData.get(`answer-${id}`) as string,
      is_correct: formData.get(`checked-${id}`) === "on",
    }));

    // console.log({ title, description, question_text, answers });

    await sql`
      WITH new_quiz AS (
        INSERT INTO quizzes(title, description, question_text, created_at)
        VALUES (${title}, ${description}, ${question_text}, NOW())
        RETURNING quiz_id
        )

        INSERT INTO answers (quiz_id, answer_text, is_correct)
        VALUES
          ((SELECT quiz_id FROM new_quiz),${answers[0].answer}, ${answers[0].is_correct}),
          ((SELECT quiz_id FROM new_quiz),${answers[1].answer}, ${answers[1].is_correct}),
          ((SELECT quiz_id FROM new_quiz),${answers[2].answer}, ${answers[2].is_correct}),
          ((SELECT quiz_id FROM new_quiz),${answers[3].answer}, ${answers[3].is_correct});
        `;
    revalidatePath("/");
  }

  return (
    <>
      <form
        action={createQuiz}
        className="flex flex-col mx-12 mt-12 border border-slate-500 rounded-md p-4"
      >
        <h2 className="text-2xl font-semibold text-blue-700 m-6 capitalize">
          quiz form
        </h2>
        <label>
          Title :
          <input
            type="text"
            name="title"
            id="title"
            className=" ml-12 mt-3 bg-gray-100 border border-gray-300 rounded p-1"
          />
        </label>
        <label>
          Description :
          <input
            type="text"
            name="description"
            id="description"
            className=" ml-12 mt-3 bg-gray-100 border border-gray-300 rounded p-1"
          />
        </label>
        <label>
          Question :
          <input
            type="text"
            name="question_text"
            id="question_text"
            className=" ml-12 mt-3 bg-gray-100 border border-gray-300 rounded p-1"
          />
        </label>
        <Answer id={1} />
        <Answer id={2} />
        <Answer id={3} />
        <Answer id={4} />

        <button
          type="submit"
          className=" bg-slate-200 p-4 rounded-md m-16 hover:bg-slate-400 hover:text-white transition-all w-1/3"
        >
          Create Quiz
        </button>
      </form>
    </>
  );
}
