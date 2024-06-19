// import Quizzes from "@/components/Quizzes";
// import { Suspense } from "react";

// export default function Home() {
//   return (
//     <section>
//       <h1>All Quizzes</h1>
//       <Suspense fallback={<p>Loading...</p>}>
//         <Quizzes />
//       </Suspense>
//     </section>
//   );
// }

//-------------------------------------------------------
// Suspense logic directly in Loading.tsx

import QuizForm from "@/components/QuizForm";
import Quizzes from "@/components/Quizzes";

export default function Home() {
  return (
    <section>
      <h1 className="text-4xl font-semibold text-blue-700 mx-12 my-6">
        Quizzes
      </h1>
      <Quizzes />
      <QuizForm />
    </section>
  );
}
