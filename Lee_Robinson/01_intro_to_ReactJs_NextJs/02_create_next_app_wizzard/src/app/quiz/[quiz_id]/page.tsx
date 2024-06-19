import SingleQuiz from "@/components/SingleQuiz";
import { redirect } from "next/navigation";

type TypeQuizPageProps = {
  params: {
    quiz_id: string;
  };
  searchParams: {
    show?: string;
  };
};

export default function QuizPage({ params, searchParams }: TypeQuizPageProps) {
  return (
    <section>
      <SingleQuiz quiz_id={params.quiz_id} searchParams={searchParams} />
      <form
        action={async () => {
          "use server";
          redirect(`/quiz/${params.quiz_id}?show=true`);
        }}
      >
        <button className=" bg-slate-200 p-4 rounded-md m-16 hover:bg-slate-400 hover:text-white transition-all">
          Show answer
        </button>
      </form>
    </section>
  );
}
