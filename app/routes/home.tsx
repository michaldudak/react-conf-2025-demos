import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Component Demos" },
    { name: "description", content: "Browse interactive UI demos" },
  ];
}

const demos = [
  "dialogs",
  "menu-interactions",
  "morphing-toolbar",
  "number-field",
  "popover",
  "select-modes",
  "tooltip",
] as const;

function titleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function Home() {
  return (
    <main className="pt-16 p-4 container mx-auto max-w-2xl">
      <h1 className="text-3xl mb-6">Component Demos</h1>

      <ul className="space-y-2 list-disc pl-5">
        {demos.map((slug) => (
          <li key={slug}>
            <Link className="text-blue-600 hover:underline" to={`/demos/${slug}`}>
              {titleFromSlug(slug)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
