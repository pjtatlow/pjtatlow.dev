import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";
import { readdir } from "node:fs/promises";

const getPosts = async () => {
  const files = await readdir("./posts");
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) =>
      route(`/posts/${file.replace(".mdx", "")}`, `../posts/${file}`),
    );
};

export default [
  index("routes/home.tsx"),
  // route("posts/:postId", "routes/posts.tsx"),
  layout("routes/posts.tsx", await getPosts()),
] satisfies RouteConfig;
