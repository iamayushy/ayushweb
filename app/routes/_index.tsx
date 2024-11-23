import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  
Here's an optimized SEO meta data for Ayush Yadav's Remix 2 application, keeping both clarity and keyword relevance in mind:

javascript
Copy code
return [
  { title: "Ayush Yadav - Passionate Frontend Developer" },
  {
    name: "description",
    content:
      "Ayush Yadav is a skilled frontend developer from India, specializing in React, Vue.js, and UI development. Creating beautiful, performant web applications with a focus on user experience. Explore his work and projects today.",
  },
  { name: "keywords", content: "Ayush Yadav, frontend developer, React developer, Vue.js developer, UI engineer, web developer, JavaScript, web development, India" },
  { name: "author", content: "Ayush Yadav" },
  { name: "robots", content: "index, follow" },
  { name: "og:title", content: "Ayush Yadav - Passionate Frontend Developer" },
  { name: "og:description", content: "Explore the work of Ayush Yadav, an experienced React and Vue.js developer based in India, focused on building high-quality frontend experiences." },
  { name: "og:type", content: "website" },
  { name: "og:url", content: "https://www.ayushyadav.dev" }, // Adjust URL to your site
  { name: "og:image", content: "https://www.ayushyadav.dev/images/profile-pic.jpg" }, // Adjust with your actual image
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Ayush Yadav - Passionate  Developer" },
  { name: "twitter:description", content: "Discover the work of Ayush Yadav, a frontend developer with expertise in React, Vue.js, and UI design." },
  { name: "twitter:image", content: "https://www.ayushyadav.dev/images/profile-pic.jpg" }, // Adjust with your actual image
];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      hello
    </div>
  );
}
