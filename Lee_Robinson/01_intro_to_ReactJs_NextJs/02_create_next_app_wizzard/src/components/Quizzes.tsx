import Link from "next/link";
import sql from "@/database/database-client";

export default async function Quizzes() {
  const quizzes: TypeQuiz[] = await sql`SELECT * FROM public."quizzes"`;
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  return (
    <>
      <h2 className="text-2xl font-semibold text-blue-700 mx-12 my-6">
        Quiz list
      </h2>
      <div>
        <ul>
          {quizzes.map((quiz) => (
            <li
              key={quiz.quiz_id}
              className="mx-12 my-4 p-2 text-2xl w-1/4 underline underline-offset-[.75rem] hover:bg-slate-200 hover:rounded hover:text-green-600"
            >
              <Link href={`/quiz/${quiz.quiz_id}`}>{quiz.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
