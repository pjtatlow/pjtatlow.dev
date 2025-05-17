import type { Config } from "@react-router/dev/config";
import { readdir } from "node:fs/promises";
import { matchesGlob } from "node:path";

export default {
  ssr: false,
  async prerender() {
    const contents = await readdir("./posts");
    const posts = contents
      .filter((name) => matchesGlob(name, "*.mdx"))
      .map((name) => `/posts/${name.replace(/\.mdx$/, "")}`);

    return ["/", ...posts];
  },
} satisfies Config;
