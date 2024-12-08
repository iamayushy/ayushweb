import type { MetaFunction } from "@remix-run/node";
import HeroBackground from "~/components/common/HeroBackgroud";
import StarBackground from "~/components/common/StarOS";

export const meta: MetaFunction = () => {
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
  { name: "og:url", content: "https://www.ayushyadav.in" },
  { name: "og:image", content: "https://www.ayushyadav.in/images/profile-pic.jpg" },
  { name: "twitter:card", content: "summary_large_image" },
  { name: "twitter:title", content: "Ayush Yadav - Passionate  Developer" },
  { name: "twitter:description", content: "Discover the work of Ayush Yadav, a frontend developer with expertise in React, Vue.js, and UI design." },
  { name: "twitter:image", content: "https://www.ayushyadav.in/images/profile-pic.jpg" },
];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <StarBackground />
      <HeroBackground />
    </div>
  );
}
