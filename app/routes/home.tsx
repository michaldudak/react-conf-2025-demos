import type { Route } from './+types/home';
import { Link } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Component Demos' },
    { name: 'description', content: 'Browse interactive UI demos' },
  ];
}

const demos = [
  'calendar',
  'dialogs',
  'menu-interactions',
  'morphing-toolbar',
  'number-field',
  'popover',
  'select-modes',
  'tooltip',
] as const;

function titleFromSlug(slug: string) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function Home() {
  return (
    <main className="pt-16 p-4 container mx-auto max-w-2xl">
      <h1 className="text-3xl mb-1">React Conf 2025: The invisible craft of great UX</h1>
      <h2 className="text-xl mb-3">Demos</h2>

      <hr className="mb-4" />

      <ul className="space-y-2 list-none p-0">
        {demos.map((slug) => (
          <li key={slug}>
            <Link className="hover:underline" to={`/demos/${slug}`}>
              {titleFromSlug(slug)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
