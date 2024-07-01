import { getData, getDataLocal } from "./_data/quiz.actions";
import { QuizProvider } from "./_data/quiz.context";
import Content from "./_landing/content";
import Footer from "./_landing/footer";
import Hero from "./_landing/hero";

export default async function Page() {
  // Preloading the quiz data to avoid user bouncing when starting the quiz
  // const data = await getData("972423");
  const data = await getDataLocal("quiz.json");
  if (!data || !data.questions) {
    throw new Error("We could not access the data, please try again.");
  }
  return (
    <main>
      <QuizProvider value={{ ...data }}>
        <Hero />
        <Content />
        <Footer />
      </QuizProvider>
    </main>
  );
}
