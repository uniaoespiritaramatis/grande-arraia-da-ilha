import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Grande Arraiá da Ilha — O maior arraiá beneficente da Ilha do Governador" },
      { name: "description", content: "Tradição, alegria e solidariedade em uma experiência única. Reserve sua mesa e ajude os projetos sociais da União Espírita Ramatis." },
      { name: "author", content: "União Espírita Ramatis" },
      { property: "og:title", content: "Grande Arraiá da Ilha — O maior arraiá beneficente da Ilha do Governador" },
      { property: "og:description", content: "Tradição, alegria e solidariedade em uma experiência única. Reserve sua mesa e ajude os projetos sociais da União Espírita Ramatis." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Grande Arraiá da Ilha — O maior arraiá beneficente da Ilha do Governador" },
      { name: "twitter:description", content: "Tradição, alegria e solidariedade em uma experiência única. Reserve sua mesa e ajude os projetos sociais da União Espírita Ramatis." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a07b08bc-8ab4-4e51-bdf6-df2e920dfca8/id-preview-b5ef075e--e811f62b-2fdd-40ca-adfe-37215a514c76.lovable.app-1776473558515.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a07b08bc-8ab4-4e51-bdf6-df2e920dfca8/id-preview-b5ef075e--e811f62b-2fdd-40ca-adfe-37215a514c76.lovable.app-1776473558515.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
