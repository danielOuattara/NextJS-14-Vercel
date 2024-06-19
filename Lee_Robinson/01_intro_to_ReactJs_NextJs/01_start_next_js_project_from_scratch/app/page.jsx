import { Header } from "./components/Header";
import { Tweet } from "react-tweet";

export default function HomePage() {
  return (
    <>
      <Header subject="Next.js">
        <h3>Hello John</h3>
      </Header>
      <h2>Main page</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit ullam
        quibusdam non.
      </p>
      <Tweet id="1721221768013119762" />
    </>
  );
}
