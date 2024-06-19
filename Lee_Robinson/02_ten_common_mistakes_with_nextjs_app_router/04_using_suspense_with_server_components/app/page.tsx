import { Suspense } from "react";

async function BlogPosts() {
  // unstable_noStore();

  await new Promise((resolve) => setTimeout(resolve, 1000));
  const res = await fetch("https://api.vercel.app/blog");
  const posts = await res.json();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <section className="m-8">
      <h1 className="text-4xl mb-6">My blog</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio vel
        soluta voluptate iste vero distinctio? Voluptatum hic possimus corrupti
        distinctio? Nesciunt excepturi atque quia repellat cumque deleniti
        repudiandae sed. Quos illum dolorem obcaecati debitis hic, quasi dolore
        dicta ad consequuntur.
      </p>
      <Suspense fallback={<h2 className="m-4">Loading ...</h2>}>
        <BlogPosts />
      </Suspense>
    </section>
  );
}

/* 
- Put <Suspense> as higher as possible on the tree hierarchy 

*/
