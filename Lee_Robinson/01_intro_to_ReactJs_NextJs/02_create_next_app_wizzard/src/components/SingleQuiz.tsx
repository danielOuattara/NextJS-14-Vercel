// import Link from "next/link";
// import sql from "@/database/database-client";

// type TypeSingleQuizProps = {
//   quizId: string;
// };

// export default async function SingleQuiz({ quizId }: TypeSingleQuizProps) {
//   const quiz: TypeQuiz[] =
//     await sql`SELECT * FROM quizzes WHERE "quizId" = ${quizId}`;

//   console.log("quiz = ", quiz);

//   return (
//     <article className="mx-12 my-4 p-2">
//       <h2 className="text-2xl">{quiz[0].title}</h2>
//       <p>{quiz[0].description}</p>
//       <Link href={"/"}>back to home</Link>
//     </article>
//   );
// }

//----------------------------------------------------------------------------

// import Link from "next/link";
import sql from "@/database/database-client";

type TypeSingleQuizProps = {
  quiz_id: string;
  searchParams: {
    show?: string;
  };
};

export default async function SingleQuiz({
  quiz_id,
  searchParams,
}: TypeSingleQuizProps) {
  const answers: (TypeAnswer & TypeQuiz)[] = await sql`
    SELECT 
      q.quiz_id,
      q.title,
      q.description,
      q.question_text,
      a.answer_id,
      a.answer_text,
      a.is_correct
    FROM quizzes AS q
    JOIN answers AS a ON q.quiz_id=a.quiz_id
    WHERE q.quiz_id = ${quiz_id}
  `;

  return (
    <section>
      <article className="mx-12 my-4 p-2">
        <h2 className="text-4xl text-center my-6">{answers[0].title}</h2>
        <p className="text-2xl my-6">{answers[0].description}</p>
        <p className="text-2xl my-6">{answers[0].question_text}</p>

        <ul>
          {answers.map((answer) => (
            <li key={answer.answer_id}>
              <p>
                <span className="mr-4">{answer.answer_text}</span>
                <span>
                  {searchParams.show === "true" && answer.is_correct && "✅"}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
}
