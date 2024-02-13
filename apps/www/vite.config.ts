/* @ts-ignore */
import pkg from "@vinxi/plugin-mdx";

import { nodeTypes } from "@mdx-js/mdx";
import { defineConfig } from "@solidjs/start/config";
import { join, resolve } from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkFrontmatter from "remark-frontmatter";
import remarkGFM from "remark-gfm";
import { getHighlighter, loadTheme } from "shiki";
import { visit } from "unist-util-visit";
import { rehypeComponent } from "./mdx/component";
import { solidFrontmatter } from "./mdx/frontmatter";
import { solidHeadings } from "./mdx/headings";

const { default: mdx } = pkg;
export default defineConfig({
  start: {
    extensions: ["mdx"],
    server: {
      preset: "vercel",
      prerender: {
        crawlLinks: true
      }
    }
  },
  plugins: [
    mdx.withImports({})({
      jsx: true,
      jsxImportSource: "solid-js",
      providerImportSource: "solid-mdx",
      remarkPlugins: [remarkGFM, remarkFrontmatter, solidFrontmatter],
      rehypePlugins: [
        rehypeSlug,
        solidHeadings,
        [rehypeRaw, { passThrough: nodeTypes }],
        rehypeComponent,
        () => (tree: any) => {
          visit(tree, (node: any) => {
            if (node?.type === "element" && node?.tagName === "pre") {
              const [codeEl] = node.children;
              if (codeEl.tagName !== "code") {
                return;
              }

              node.__rawString__ = codeEl.children?.[0].value;
            }
          });
        },
        [
          rehypePrettyCode,
          {
            getHighlighter: async () => {
              const theme = await loadTheme(join(process.cwd(), "/src/lib/themes/dark.json"));
              return await getHighlighter({ theme });
            },
            onVisitLine(node: any) {
              if (node.children.length === 0) {
                node.children = [{ type: "text", value: " " }];
              }
            },
            onVisitHighlightedLine(node: any) {
              node.properties.className?.push("line--highlighted");
            },
            onVisitHighlightedWord(node: any) {
              node.properties.className = ["word--highlighted"];
            }
          }
        ],
        () => (tree: any) => {
          visit(tree, (node: any) => {
            if (node?.type === "element" && node?.tagName === "div") {
              if (!("data-rehype-pretty-code-fragment" in node.properties)) {
                return;
              }

              const preElement = node.children.at(-1);
              if (preElement.tagName !== "pre") {
                return;
              }

              preElement.properties["data-meta"] = node.children.at(0).tagName === "div";

              preElement.properties["data-package"] =
                node.__rawString__?.startsWith("npm install") ||
                node.__rawString__?.startsWith("npx create-") ||
                node.__rawString__?.startsWith("npx");
            }
          });
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  server: {
    fs: {
      allow: ["../.."]
    }
  },
  ssr: {
    noExternal: ["@kobalte/core"]
  }
});
