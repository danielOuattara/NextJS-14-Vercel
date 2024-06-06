# Learn Next.js

Welcome to the Next.js App Router course!

In this free interactive course, you'll learn the main
features of Next.js by building a full-stack web application.

---

##  Chapter 0

###  What we'll be building

![Screenshots of the dashboard project showing desktop and mobile versions](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fdashboard.png&w=3840&q=75)

For this course, we'll be building a simplified version of
the financial dashboard that has:

- A public home page.
- A login page.
- Dashboard pages that are protected by authentication.
- The ability for users to add, edit, and delete invoices.

The dashboard will also have an accompanying database,
which you'll set up in a later chapter.

By the end of the course, you'll have the essential skills
needed to start building full-stack Next.js applications.

Overview

Here's an overview of features you'll learn about in this course:

- `Styling`: The different ways to style your application in Next.js.
- `Optimizations`: How to optimize images, links, and fonts.
- `Routing`: How to create nested layouts and pages using file-system routing.
- `Data` Fetching: How to set up a database on Vercel, and best practices for fetching and streaming.
- `Search` and Pagination: How to implement search and pagination using URL Search Params.-
- `Mutating` Data: How to mutate data using React Server Actions, and revalidate the Next.js cache.
- `Error` Handling: How to handle general and 404 not found errors.
- `Form` Validation and Accessibility: How to do server-side form validation and tips for improving accessibility.
- `Authentication`: How to add authentication to your application using NextAuth.js and Middleware.
- `Metadata`: How to add metadata and prepare your application for social sharing.

###  Prerequisite knowledge

This course assumes you have a basic understanding of React and
JavaScript. If you're new to React, we recommend going through
our [React Foundations](https://nextjs.org/learn/react-foundations)
course first to learn the fundamentals of React, such as components,
props, state, and hooks, and newer features like Server Components
and Suspense.

###  System requirements

Before you start this course, make sure your system meets the
following requirements:

- Node.js 18.17.0 or later installed. Download here
- Operating systems: macOS, Windows (including WSL), or Linux.

In addition, you'll also need a GitHub Account
and a Vercel Account

###  Join the conversation

If you have questions about this course or would like to provide
feedback, you can ask our community on Discord or GitHub

---

##  Chapter 1: Getting started

### Creating a new project

To create a Next.js app, open your terminal, cd into the folder
you'd like to keep your project, and run the following command:
Terminal

```sh
npx create-next-app@latest nextjs-dashboard --use-npm --example "<https://github.com/vercel/next-learn/tree/main/dashboard/starter-example>"
```

This command uses `create-next-app`, a Command Line Interface (CLI)
tool that sets up a Next.js application for you.

In the command above, you're also using the `--example` flag
with the starter example for this course.

###  Exploring the project

Unlike other tutorials that have you write code from scratch,
much of the code for this course is already written for you.

This better reflects real-world development, where you'll likely
be working with existing code bases.

Our goal is to help you focus on learning the main features of
Next.js, without having to write all the application code.

After installation, open the project in your code editor and navigate
to nextjs-dashboard.

```sh
cd nextjs-dashboard
```

Let's spend some time exploring the project.

###  Folder structure

You'll notice that the project has the following folder structure:

![Folder structure of the dashboard project, showing the main folders and files: app, public, and config files](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Flearn-folder-structure.png&w=3840&q=75)

- `/app:` Contains all the routes, components, and logic for
  your application this is where you'll be mostly working from.

- `/app/lib`: Contains functions used in your application, such
  as reusable utility functions and data fetching functions.

- `/app/ui`: Contains all the UI components for your application,
  such as cards, tables, and forms. To save time, we've pre-styled
  these components for you.

- `/public`: Contains all the static assets for your application,
  such as images.

- `/scripts`: Contains a seeding script that you'll use to populate
  your database in a later chapter.

- `Config Files`: You'll also notice config files such as next.config.js
  at the root of your application. Most of these files are created and
  pre-configured when you start a new project using create-next-app.
  You will not need to modify them in this course.

Feel free to explore these folders, and don't worry if you don't understand
everything the code is doing yet.

### Placeholder data

When you're building user interfaces, it helps to have some placeholder
data. If a database or API is not yet available, you can:

- Use placeholder data in JSON format or as JavaScript objects.
- Use a 3rd party service like mockAPI

    .

For this project, we've provided some placeholder data in
`app/lib/placeholder-data.js`.

Each JavaScript object in the file represents a table in your database.
For example, for the invoices table:

```js
// /app/lib/placeholder-data.js

const invoices = [
  {
    customer_id: customers[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    customer_id: customers[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  // ...
];
```

In the chapter on setting up your database, you'll use this data
to seed your database (populate it with some initial data).

### TypeScript

You may also notice most files have a .ts or .tsx suffix.
This is because the project is written in TypeScript.
We wanted to create a course that reflects the modern web landscape.

It's okay if you don't know TypeScript - we'll provide the
TypeScript code snippets when required.

For now, take a look at the `/app/lib/definitions.ts` file.
Here, we manually define the types that will be returned
from the database.
For example, the invoices table has the following types:

```ts
// /app/lib/definitions.ts

export type Invoice = {
  id: string;
  customer_id: string;
  amount: number;
  date: string;
  // In TypeScript, this is called a string union type.
  // It means that the "status" property can only be one of the two strings: 'pending' or 'paid'.
  status: 'pending' | 'paid';
};
```

By using TypeScript, you can ensure you don't accidentally
pass the wrong data format to your components or database,
like passing a string instead of a number to invoice amount.

**If you're a TypeScript developer:**

- We're manually declaring the data types here, but for better
  type-safety, we recommend Prisma, which automatically generates
  types based on your database schema.

- Next.js detects if your project uses TypeScript and automatically
  installs the necessary packages and configuration.
  Next.js also comes with a TypeScript plugin for your code editor,
  to help with auto-completion and type-safety.

### Running the development server

- Run `npm i` to install the project's packages.

- Followed by `npm run dev` to start the development server.

- `npm run dev` starts your Next.js development server on
  port 3000. Let's check to see if it's working.
  Open <http://localhost:3000> on your browser.

---

##  Chapter 2: CSS Styling

Currently, your home page doesn't have any styles.
Let's look at the different ways you can style your Next.js app

**In this chapter...**
Here are the topics we’ll cover

- How to add a `global CSS` file to your application.
- Two different ways of styling: `Tailwind` and `CSS modules`.
- How to conditionally add class names with the `clsx` utility package.

###  Global styles

If you look inside the `/app/ui/` folder, you'll see a file
called `global.css`.

You can use this file to add CSS rules to all the routes in
your application - such as CSS reset rules, site-wide styles
for HTML elements like links, and more.

You can import `global.css` in any component in your application,
but it's usually good practice to add it to your top-level component.

In Next.js, this is the root layout (more on this later).

Add global styles to your application by navigating to `/app/layout.tsx`
and importing the global.css file:

```tsx
// /app/layout.tsx

import '@/app/ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

With the development server still running, save your changes
and preview them in the browser. Your home page should now
look like this:

![Styled page with the logo 'Acme', a description, and login link](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fhome-page-with-tailwind.png&w=1920&q=75).

But wait a second, you didn't add any CSS rules, where did the
styles come from?

If you take a look inside `global.css`, you'll notice some `@tailwind directives`:

```css
/* /app/ui/global.css */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

###  Tailwind

Tailwind is a CSS framework that speeds up the development
process by allowing you to quickly write utility classes
directly in your TSX markup.

In Tailwind, you style elements by adding class names.
For example, adding the class `text-blue-500` will turn the `<h1>`
text blue:

```css
<h1 className="text-blue-500">I'm blue!</h1>
```

Although the CSS styles are shared globally, each class is
singularly applied to each element. This means if you add
or delete an element, you don't have to worry about maintaining
separate stylesheets, style collisions, or the size of your
CSS bundle growing as your application scales.

When you use `create-next-app` to start a new project, Next.js
will ask if you want to use Tailwind. If you select `yes`,
Next.js will automatically install the necessary packages
and configure Tailwind in your application.

If you look at `/app/page.tsx`, you'll see that we're using
Tailwind classes in the example.

```tsx
/app/page.tsx

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Page() {
  return (
    // These are Tailwind classes:
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
    // ...
  )
}
```

Don't worry if this is your first time using Tailwind.
To save time, we've already styled all the components
you'll be using.

Let's play with Tailwind! Copy the code below and paste it
above the `<p>` element in `/app/page.tsx:`

```tsx
/app/page.tsx

<div
  className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
/>
```

If you prefer writing traditional CSS rules or keeping your
styles separate from your JSX - CSS Modules are a great
alternative.

### CSS Modules

`CSS Modules` allow you to scope CSS to a component by
automatically creating unique class names, so you don't have
to worry about style collisions as well.

We'll continue using Tailwind in this course, but let's take
a moment to see how you can achieve the same results from the
quiz above using CSS modules.

Inside `/app/ui`, create a new file called `home.module.css` and
add the following CSS rules:

```css
/app/ui/home.module.css

.shape {
  height: 0;
  width: 0;
  border-bottom: 30px solid black;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
}
```

Then, inside your `/app/page.tsx` file, import the styles and
replace the Tailwind class names from the `<div>` you've added
with `styles.shape`:

```tsx
/app/page.tsx

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className={styles.shape} />
    // ...
  )
}
```

Save your changes and preview them in the browser.
You should see the same shape as before.

Tailwind and CSS modules are the two most common ways of styling
Next.js applications. Whether you use one or the other is a matter
of preference - you can even use both in the same application!

###  Using the clsx library to toggle class names

There may be cases where you may need to conditionally style an
element based on state or some other condition.

[`clsx`](https://github.com/lukeed/clsx) is a library that lets you toggle class names easily.
We recommend taking a look at [documentation](https://github.com/lukeed/clsx) for more details, but here's the basic usage:

- Suppose that you want to create an `InvoiceStatus` component
  which accepts status. The status can be `pending` or `paid`.
- If it's `paid`, you want the color to be green.
- If it's `pending`, you want the color to be gray.

You can use `clsx` to conditionally apply the classes, like this:

```tsx
// /app/ui/invoices/status.tsx

import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-sm',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
    // ...
)}

```

###  Other styling solutions

In addition to the approaches we've discussed, you can also
style your Next.js application with:

- Sass which allows you to import .css and .scss files.
- CSS-in-JS libraries such as styled-jsx, styled-components and emotion

Take a look at the CSS documentation for more information.

---

##  Chapter 3: Optimizing Fonts and Images

In the previous chapter, you learned how to style your Next.js
application. Let's continue working on your home page by adding
a custom font and a hero image.

**In this chapter...**

Here are the topics we’ll cover

- How to add custom fonts with next/font.
- How to add images with next/image.
- How fonts and images are optimized in Next.js.

###  Why optimize fonts?

Fonts play a significant role in the design of a website, but
using custom fonts in your project can affect performance if
the font files need to be fetched and loaded.

[Cumulative Layout Shift](https://web.dev/cls/) is a metric used
by Google to evaluate the performance and user experience of a
website.

With fonts, layout shift happens when the browser initially
renders text in a fallback or system font and then swaps it
out for a custom font once it has loaded. This swap can cause
the text size, spacing, or layout to change, shifting elements
around it.
![Mock UI showing initial load of a page, followed by a layout shift as the custom font loads.](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Ffont-layout-shift.png&w=3840&q=75)

Next.js automatically optimizes fonts in the application when
you use the `next/font` module. It downloads font files at
build time and hosts them with your other static assets.

This means when a user visits your application, there are no
additional network requests for fonts which would impact performance.

###  Adding a primary font

Let's add a custom Google font to your application to see how this
works!

In your `/app/ui` folder, create a new file called `fonts.ts`.

You'll use this file to keep the fonts that will be used throughout
your application.

- Import the `Inter font` from the `next/font/google` module,
  this will be your primary font.
- Then, specify what subset you'd like to load. In this case, 'latin':

```tsx
// /app/ui/fonts.ts

import { Inter } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

```

Finally, add the font to the `<body>` element in /app/layout.tsx:

```tsx
/app/layout.tsx

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

```

By adding `inter` to the `<body>` element, the font will be applied
throughout your application. Here, you're also adding the Tailwind
antialiased class which smooths out the font. It's not necessary to
use this class, but it adds a nice touch.

Navigate to your browser, open dev tools and select the body element.
You should see Inter and Inter_Fallback are now applied under styles.

###  Practice: Adding a secondary font

You can also add fonts to specific elements of your application.

Now it's your turn !

In your `fonts.ts` file, import a secondary font called `Lusitana`
and pass it to the `<p>` element in your `/app/page.tsx` file.

In addition to specifying a subset like you did before, you'll also
need to specify the font weight.

Once you're ready, expand the code snippet below to see the solution.

**Hints:**

- If you're unsure what weight options to pass to a font, check the
  TypeScript errors in your code editor.

- Visit the Google Fonts website and search for Lusitana to see what
  options are available.

- See the documentation for adding multiple fonts and the full list
  of options.

Finally, the `<AcmeLogo />` component at `/app/page.tsx` also uses
Lusitana. It was commented out to prevent errors, you can now
uncomment it:

Great, you've added two custom fonts to your application !

Next, let's add a hero image to the home page.

###  Why optimize images?

Next.js can serve static assets, like images, under the top-level
`/public` folder. Files inside `/public` can be referenced in your application.

With regular HTML, you would add an image as follows:

```html
<img
  src="/hero.png"
  alt="Screenshots of the dashboard project showing desktop version"
/>
```

However, this means you have to manually:

- Ensure your image is responsive on different screen sizes.
- Specify image sizes for different devices.
- Prevent layout shift as the images load.
- Lazy load images that are outside the user's viewport.

`Image Optimization` is a large topic in web development that could be
considered a specialization in itself.

Instead of manually implementing these optimizations, you can use the
`next/image` component to automatically optimize your images.

###  The `<Image>` component

The `<Image>` Component is an extension of the `HTML <img>` tag,
and comes with automatic image optimization, such as:

- Preventing layout shift automatically when images are loading.

- Resizing images to avoid shipping large images to devices with
  a smaller viewport.

- Lazy loading images by default (images load as they enter the viewport).

- Serving images in modern formats, like WebP and AVIF, when the browser
  supports it.

##  Adding the desktop hero image

Let's use the `<Image>` component.

If you look inside the `/public` folder, you'll see there are two
images: `hero-desktop.png` and `hero-mobile.png`.

These two images are completely different, and they'll be shown
depending if the user's device is a desktop or mobile.

In your `/app/page.tsx` file, import the component from `next/image`

Then, add the image under the comment:

```tsx
/app/page.tsx

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    // ...
    <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
      {/*Add Hero Images Here*/}
      <Image
        src="/hero-desktop.png"
        width={1000}
        height={760}
        className="hidden md:block"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div>
    //...
  );
}
```

Here, you're setting the `width to 1000` and `height to 760 pixels`.

It's good practice to set the `width` and `height` of your images
to avoid layout shift, these should be an aspect ratio identical
to the source image.

You'll also notice the class `hidden` to remove the image from the
DOM on mobile screens, and `md:block` to show the image on desktop
screens.

This is what your home page should look like now:
![Styled home page with a custom font and hero image](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fhome-page-with-hero.png&w=1920&q=75)

###  Practice: Adding the mobile hero image

Now it's your turn !

Under the image you've just added, add another `<Image>` component
for `hero-mobile.png`.

- The image should have a `width of 560` and `height of 620 pixels`.
  
- It should be `shown on mobile screens`, and `hidden on desktop`  
  you can use dev tools to check if the desktop and mobile images
  are swapped correctly.

Once you're ready, expand the code snippet below to see the solution.

Great! Your home page now has a custom font and hero images.

It’s time to take a quiz!

Test your knowledge and see what you’ve just learned.

True or False: Images without dimensions and web fonts are common causes of layout shift.

###  Recommended reading

There's a lot more to learn about these topics, including optimizing remote images and using local font files. If you'd like to dive deeper into fonts and images, see:

- [Image Optimization Docs](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [Font Optimization Docs](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
-[Improving Web Performance with Images (MDN)](https://developer.mozilla.org/en-US/docs/Learn/Performance/Multimedia)
- [Web Fonts (MDN)](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)

---

##  Chapter 4: Creating Layouts and Pages

So far, your application only has a home page.

Let's learn how you can create more routes with `layouts` and `pages`.

**In this chapter...**

Here are the topics we’ll cover

- Create the `dashboard` routes using file-system routing.
- Understand the role of folders and files when creating
  new route segments.
- Create a nested layout that can be shared between multiple
  dashboard pages.
- Understand what `colocation`, `partial rendering`, and the
  `root layout` are.

### Nested routing

Next.js uses file-system routing where `folders` are used
to create nested routes.

Each folder represents a `route segment` that maps to a URL
segment.

![Diagram showing how folders map to URL segments](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Ffolders-to-url-segments.png&w=3840&q=75)

You can create separate UIs for each route using `layout.tsx` and
`page.tsx` files.

`page.tsx` is a special Next.js file that exports a React component,
and it's required for the route to be accessible.

In your application, you already have a page file: `/app/page.tsx` :
this is the home page associated with the route `/`.

To create a nested route, you can nest folders inside each other
and add `page.tsx` files inside them.

For example:
![Diagram showing how adding a folder called dashboard creates a new route '/dashboard'](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fdashboard-route.png&w=3840&q=75)

`/app/dashboard/page.tsx` is associated with the `/dashboard` path.

Let's create the page to see how it works!

### Creating the dashboard page

Create a new folder called `dashboard` inside `/app`.

Then, create a new `page.tsx` file inside the dashboard folder
with the following content:

```tsx
// /app/dashboard/page.tsx

export default function Page() {
  return <p>Dashboard Page</p>;
}
```

Now, make sure that the development server is running and visit
<http://localhost:3000/dashboard>

You should see the "Dashboard Page" text.

This is how you can create different pages in Next.js:

- create a new route segment using a folder,
- and add a page file inside it.

By having a special name for `page` files, Next.js allows you to colocate
UI components, test files, and other related code with your routes.

Only the content inside the page file will be publicly accessible.

For example, the `/ui` and `/lib` folders are collocated inside the `/app`
folder along with your routes.

### Practice: Creating the dashboard pages

Let's practice creating more routes.

In your dashboard, create two more pages:

1. **Customers Page**: The page should be accessible on <http://localhost:3000/dashboard/customers>. For now, it should return a `<p>Customers Page</p>` element.

2. **Invoices Page**: The invoices page should be accessible on <http://localhost:3000/dashboard/invoices>. For now, also return a `<p>Invoices Page</p>` element.

![solution](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Frouting-solution.png&w=3840&q=75)

###  Creating the dashboard layout

Dashboards have some sort of navigation that is shared across
multiple pages.

In Next.js, you can use a special `layout.tsx` file to create
UI that is shared between multiple pages.

Let's create a layout for the dashboard pages!

Inside the `/dashboard` folder, add a new file called `layout.tsx`
and paste the following code:

```tsx
// /app/dashboard/layout.tsx

import SideNav from '@/app/ui/dashboard/sidenav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
```

A few things are going on in this code, so let's break it down:

- First, you're importing the `<SideNav />` component into your
  layout. Any components you import into this file will be part
  of the layout.

- The `<Layout />` component receives a `children prop`. This child
  can either be a page or another layout. In your case, the pages
  inside `/dashboard` will automatically be nested inside a `<Layout />`
  like so:
![Folder structure with dashboard layout nesting the dashboard pages as children](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fshared-layout.png&w=3840&q=75)

Check that everything is working correctly by saving your changes and
checking your localhost. You should see the following:
![Dashboard page with a sidenav and a main content area](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fshared-layout-page.png&w=1920&q=75)

One benefit of using layouts in Next.js is that on navigation,
only the page components update while the layout won't re-render.

This is called `partial rendering`:

![Folder structure showing the dashboard layout nesting the dashboard pages, but only the pages UI swap on navigation](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fpartial-rendering-dashboard.png&w=3840&q=75)

###  Root layout

In Chapter 3, you imported the Inter font into another layout:
`/app/layout.tsx`.

As a reminder:

```tsx
/app/layout.tsx

import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
```

This is called a `root layout` and is required.

Any UI you add to the root layout will be shared across all pages
in your application.

You can use the root layout to modify your `<html>` and `<body>`
tags, and add metadata (you'll learn more about metadata in a later
chapter).

Since the new layout you've just created `(/app/dashboard/layout.tsx)`
is unique to the dashboard pages only, you don't need to add any UI
to the root layout above.

---

##  Chapter 5: Navigating Between Pages

In the previous chapter, you created the dashboard layout and pages.

Now, let's add some links to allow users to navigate between the
dashboard routes.

**In this chapter...**

Here are the topics we’ll cover

- How to use the `next/link` component.
- How to show an active link with the `usePathname()` hook.
- How navigation works in Next.js.

###   Why optimize navigation?

To link between pages, you'd traditionally use the `<a>` HTML element.

At the moment, the sidebar links use `<a>` elements, but notice
what happens when you navigate between the home, invoices, and
customers pages on your browser.

Did you see it?

**There's a full page refresh on each page navigation!**

###  The `<Link>` component

In Next.js, you can use the `<Link />` Component to link between
pages in your application. `<Link>` allows you to do client-side
navigation using JavaScript.

To use the `<Link />` component, open `/app/ui/dashboard/nav-links.tsx`,
and import the `Link` component from `next/link`. Then, replace the `<a>`
tag with `<Link>`

```tsx

// /app/ui/dashboard/nav-links.tsx

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

// ...

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
```

As you can see, the `<Link/>` component is similar to using `<a>` tags,
but instead of `<a href="…">`, you use `<Link href="…">`

Save your changes and check to see if it works in your localhost.

You should now be able to navigate between the pages without seeing
a full refresh.

Although parts of your application are rendered on the server,
there's no full page refresh, making it feel like a web app.

**Why is that?**

### Automatic code-splitting and prefetching

To improve the navigation experience, Next.js automatically code splits
your application by route segments.

This is different from a traditional React SPA, where the browser
loads all your application code on initial load.

Splitting code by routes means that pages become isolated. If a certain
page throws an error, the rest of the application will still work.

Furthermore, in production, whenever `<Link>` components appear in the
browser's viewport, Next.js automatically prefetches the code for the
linked route in the background. By the time the user clicks the link,
the code for the destination page will already be loaded in the background,
and this is what makes the page transition near-instant!

[Learn more about how navigation works](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works).

### Pattern: Showing active links

A common UI pattern is to show an active link to indicate to the user
what page they are currently on. To do this, you need to get the user's
current path from the URL.

Next.js provides a hook called `usePathname()` that you can use to check
the path and implement this pattern.

Since `usePathname()` is a hook, you'll need to turn `nav-links.tsx`
into a `Client Component`.

Add React's `"use client"` directive to the top of the file, then import
`usePathname()` from `next/navigation`:

```tsx
// /app/ui/dashboard/nav-links.tsx

'use client';

import {
  UserGroupIcon,
  HomeIcon,
  InboxIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ...
```

Next, assign the path to a variable called `pathname` inside your
`<NavLinks />` component:

```tsx
// /app/ui/dashboard/nav-links.tsx

export default function NavLinks() {
  const pathname = usePathname();
  // ...
}
```

You can use the `clsx` library introduced in the chapter on CSS styling
to conditionally apply class names when the link is active.

When `link.href` matches the `pathname`, the link should be displayed with
blue text and a light blue background.

Here's the final code for nav-links.tsx:

```tsx

// /app/ui/dashboard/nav-links.tsx

'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// ...

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
              {
                'bg-sky-100 text-blue-600': pathname === link.href,
              },
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
```

Save and check your localhost.

You should now see the active link highlighted in blue.

---

## Chapter 6: Setting Up Your Database

Before you can continue working on your dashboard, you'll need
some data.

In this chapter, you'll be setting up a PostgreSQL database using
`@vercel/postgres`. If you're already familiar with PostgreSQL
and would prefer to use your own provider, you can skip this
chapter and set it up on your own. Otherwise, let's continue!

**In this chapter...**

Here are the topics we’ll cover

- Push your project to GitHub.
- Set up a Vercel account and link your GitHub repo for instant
  previews and deployments.
- Create and link your project to a Postgres database.
- Seed the database with initial data.

### Create a GitHub repository

To start, let's push your repository to Github if you haven't done
so already. This will make it easier to set up your database and
deploy.

If you need help setting up your repository, take a look at [this guide on GitHub](https://help.github.com/en/github/getting-started-with-github/create-a-repo)

>
> **Good to know:**
>
> - You can also use other Git provider like GitLab or Bitbucket.
> - If you're new to GitHub, we recommend the GitHub Desktop App
>   for a simplified development workflow.

###  Create a Vercel account

Visit [vercel.com/signup](https://vercel.com/signup) to create an
account. Choose the free `hobby` plan. Select Continue with GitHub to connect your GitHub and Vercel accounts.

###  Connect and deploy your project

Next, you'll be taken to this screen where you can select and import
the GitHub repository you've just created:

![Screenshot of Vercel Dashboard, showing the import project screen with a list of the user's GitHub Repositories](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fimport-git-repo.png&w=1920&q=75)

Name your project and click Deploy.

![Deployment screen showing the project name field and a deploy button](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fconfigure-project.png&w=1920&q=75)

Hooray! 🎉 Your project is now deployed.

![Project overview screen showing the project name, domain, and deployment status](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fdeployed-project.png&w=1920&q=75)

- By connecting your GitHub repository, whenever you push changes to
your main branch, Vercel will automatically redeploy your application
with no configuration needed.

- When opening pull requests, you'll also have instant previews which
allow you to catch deployment errors early and share a preview of your
project with team members for feedback.

###  Create a Postgres database

Next, to set up a database, click Continue to Dashboard and select
the Storage tab from your project dashboard.

Select `Connect Store → Create New → Postgres → Continue`.
![Connect Store screen showing the Postgres option along with KV, Blob and Edge Config](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fcreate-database.png&w=1920&q=75)

Accept the terms, assign a name to your database, and ensure your
database region is set to Washington D.C (iad1) - this is also
the default region for all new Vercel projects. By placing your
database in the same region or close to your application code,
you can reduce latency for data requests.

![Database creation modal showing the database name and region](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fdatabase-region.png&w=1920&q=75)

>
> **Good to know :** You cannot change the database region once
> it has been initialized.
>
> If you wish to use a different region you should set it before
> creating a database.

Once connected, navigate to the `.env.local` tab, click `Show secret`
and `Copy Snippet`. Make sure you reveal the secrets before
copying them.

![The .env.local tab showing the hidden database secrets](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fdatabase-dashboard.png&w=1920&q=75)

Navigate to your code editor and rename the `.env.example` file to `.env`.
Paste in the copied contents from Vercel.

> **Important:** Go to your `.gitignore` file and make sure `.env`
> is in the ignored files to prevent your database secrets from
> being exposed when you push to GitHub.

Finally, run `npm i @vercel/postgres` in your terminal to install the
[Vercel Postgres SDK](https://vercel.com/docs/storage/vercel-postgres/sdk)

.

###  Seed your database

Now that your database has been created, let's seed it with
some initial data. This will allow you to have some data to
work with as you build the dashboard.

In the `/scripts` folder of your project, there's a file called
`seed.js`. This script contains the instructions for creating
and seeding the `invoices`, `customers`, `user`, `revenue` tables.

Don't worry if you don't understand everything the code is doing,
but to give you an overview, the script uses SQL to create the tables
and the data from `placeholder-data.js` file to populate them after
they've been created.

Next, in your package.json file, add the following line to your scripts:
/package.json

```json
"scripts": {
  "build": "next build",
  "dev": "next dev",
  "start": "next start",
  "seed": "node -r dotenv/config ./scripts/seed.js"
},
```

This is the command that will execute `seed.js`.

Now, run `npm run seed`. You should see some console.log
messages in your terminal to let you know the script is running.

>
> **Troubleshooting:**
>
> - Make sure to reveal your database secrets before copying it
>   into your `.env` file.
>
> - The script uses `bcrypt` to hash the user's password, if
>   bcrypt isn't compatible with your environment, you can
>   update the script to use bcryptjs instead.
>
> - If you run into any issues while seeding your database and
>   want to run the script again, you can drop any existing tables
>   by running `DROP TABLE` table_name in your database query interface.
>   [See the executing queries](https://nextjs.org/learn/dashboard-app/setting-up-your-database#executing-queries) section below for more
>   details. But be careful, this command will delete the tables and all
>   their data. It's ok to do this with your example app since you're
>   working with placeholder data, but you shouldn't run this command
>   in a production app.
>
> - If you continue to experience issues while seeding your Vercel
>   Postgres database, please open a discussion on GitHub

### Exploring your database

Let's see what your database looks like. Go back to Vercel, and click
`Data` on the sidenav.

In this section, you'll find the four new tables: `users`, `customers`,
`invoices`, and `revenue`.

![Database screen showing dropdown list with four tables: users, customers, invoices, and revenue](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fdatabase-tables.png&w=2048&q=75)

By selecting each table, you can view its records and ensure the entries
align with the data from placeholder-data.js file.

###  Executing queries

You can switch to the `query` tab to interact with your database.
This section supports standard SQL commands. For instance, inputting
`DROP TABLE customers` will delete `customers` table along with all
its data - so be careful!

Let's run your first database query. Paste and run the following SQL
code into the Vercel interface:

```sql
SELECT invoices.amount, customers.name
FROM invoices
JOIN customers ON invoices.customer_id = customers.id
WHERE invoices.amount = 500;
```

---

##  Chapter 7: Fetching Data

Now that you've created and seeded your database, let's discuss
the different ways you can fetch data for your application, and
build out your dashboard overview page.

**In this chapter...**

Here are the topics we’ll cover

- Learn about some approaches to fetching data: APIs, ORMs, SQL, etc.

- How Server Components can help you access back-end resources more
  securely.

- What network waterfalls are.

- How to implement parallel data fetching using a JavaScript Pattern.

###  Choosing how to fetch data

#### API layer

APIs are an intermediary layer between your application code
and database.

There are a few cases where you might use an API:

- if you're using 3rd party services that provide an API.
- if you're fetching data from the client, you want to
  have an API layer that runs on the server to avoid exposing
  your database secrets to the client.

In Next.js, you can create API endpoints using **Route Handlers**.

### Database queries

When you're creating a full-stack application, you'll also need to
write logic to interact with your database.

For [relational databases](https://aws.amazon.com/relational-database/)
like Postgres, you can do this with `SQL`, or an
[ORM](https://vercel.com/docs/storage/vercel-postgres/using-an-orm)
like [Prisma](https://www.prisma.io/)

There are a few cases where `you have` to write database queries:

- When creating your API endpoints, you need to write logic to interact
  with your database.

- If you are using React Server Components (fetching data on the server),
  you can skip the API layer, and query your database directly without
  risking exposing your database secrets to the client.

Let's learn more about React Server Components.

### Using Server Components to fetch data

By default, Next.js applications use `React Server Components`.

Fetching data with Server Components is a relatively new approach and
there are a few benefits of using them:

- Server Components support promises, providing a simpler solution for
  asynchronous tasks like data fetching. You can use async/await syntax
  without reaching out for useEffect, useState or data fetching libraries.

- Server Components execute on the server, so you can keep expensive data
  fetches and logic on the server and only send the result to the client.

- As mentioned before, since Server Components execute on the server,
  you can query the database directly without an additional API layer.

###  Using SQL

For your dashboard project, you'll write database queries using the
Vercel Postgres SDK and SQL. There are a few reasons why we'll be
using SQL:

- SQL is the industry standard for querying relational databases
  (e.g. ORMs generate SQL under the hood).

- Having a basic understanding of SQL can help you understand the
  fundamentals of relational databases, allowing you to apply your
  knowledge to other tools.

- SQL is versatile, allowing you to fetch and manipulate specific
  data.
  
- The Vercel Postgres SDK provides protection against SQL injections

Don't worry if you haven't used SQL before - we have provided the
queries for you.

Go to `/app/lib/data.ts`, there you'll see that we're importing the
sql function from `@vercel/postgres`. This function allows you to
query your database:

```ts
// /app/lib/data.ts

import { sql } from '@vercel/postgres';

// ...
```

You can call sql inside any Server Component.

But to allow you to navigate the components more easily, we've kept
all the data queries in the `data.ts` file, and you can import them
into the components.

> **Note:**
>
> If you used your own database provider in Chapter 6, you'll need
> to update the database queries to work with your provider.
> You can find the queries in `/app/lib/data.ts.`

###  Fetching data for the dashboard overview page

Now that you understand different ways of fetching data, let's
fetch data for the dashboard overview page.

Navigate to `/app/dashboard/page.tsx`, paste the following code,
and spend some time exploring it:

```tsx
// /app/dashboard/page.tsx

import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/*<Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        {/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        {/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        {/* <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        /> */}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <RevenueChart revenue={revenue}  /> */}
        {/* <LatestInvoices latestInvoices={latestInvoices} />*/}
      </div>
    </main>
  );
}
```

In the code above:

- Page is an async component. This allows you to use `await`
  to fetch data.

- There are also 3 components which receive data: `<Card>`, `<RevenueChart>`, and `<LatestInvoices>`.
  They are currently commented out to prevent the application from
  erroring.

###  Fetching data for `<RevenueChart/>`

To fetch data for the `<RevenueChart/>` component, import the
`fetchRevenue` function from `data.ts` and call it inside your
component:

```tsx
// /app/dashboard/page.tsx

import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data';

export default async function Page() {
  const revenue = await fetchRevenue();
  // ...
}

```

Then, uncomment the `<RevenueChart/>` component, navigate to
the component file (`/app/ui/dashboard/revenue-chart.tsx`)
and uncomment the code inside it. Check your localhost, you
should be able to see a chart that uses revenue data.

![Revenue chart showing the total revenue for the last 12 months](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Frecent-revenue.png&w=1920&q=75)

Let's continue importing some more data queries!

###  Fetching data for `<LatestInvoices/>`

For the `<LatestInvoices />` component, we need to get the latest
5 invoices, sorted by date.

You could fetch all the invoices and sort through them using
JavaScript. This isn't a problem as our data is small, but as
your application grows, it can significantly increase the amount
of data transferred on each request and the JavaScript required
to sort through it.

Instead of sorting through the latest invoices in-memory, you can
use an SQL query to fetch only the last 5 invoices. For example,
this is the SQL query from your `data.ts` file:

```tsx
// /app/lib/data.ts

// Fetch the last 5 invoices, sorted by date
const data = await sql<LatestInvoiceRaw>`
  SELECT invoices.amount, customers.name, customers.image_url, customers.email
  FROM invoices
  JOIN customers ON invoices.customer_id = customers.id
  ORDER BY invoices.date DESC
  LIMIT 5`;

```

- In your page, import the fetchLatestInvoices function:

```tsx
// /app/dashboard/page.tsx

import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue, fetchLatestInvoices } from '@/app/lib/data';

export default async function Page() {
  const revenue = await fetchRevenue();
  const latestInvoices = await fetchLatestInvoices();
  // ...
}

```

- Then, uncomment the `<LatestInvoices />` component. You will
  also need to uncomment the relevant code in the `<LatestInvoices />`
  component itself, located at `/app/ui/dashboard/latest-invoices`.

If you visit your localhost, you should see that only the last 5
are returned from the database. Hopefully, you're beginning to see
the advantages of querying your database directly!

[Latest invoices component alongside the revenue chart](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Flatest-invoices.png&w=1920&q=75)

###  Practice: Fetch data for the `<Card>` components

Now it's your turn to fetch data for the `<Card>` components.
The cards will display the following data:

- Total amount of invoices collected.
- Total amount of invoices pending.
- Total number of invoices.
- Total number of customers.

Again, you might be tempted to fetch all the invoices and customers,
and use JavaScript to manipulate the data. For example, you could use
Array.length to get the total number of invoices and customers:

```js
const totalInvoices = allInvoices.length;
const totalCustomers = allCustomers.length;
```

But with SQL, you can fetch only the data you need. It's a little
longer than using Array.length, but it means less data needs to be
transferred during the request. This is the SQL alternative:

```ts
// /app/lib/data.ts

const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;

```

The function you will need to import is called `fetchCardData`.
You will need to destructure the values returned from the function.

>
> **Hint:**
>
> - Check the card components to see what data they need.
> - Check the data.ts file to see what the function returns.

Once you're ready, expand the toggle below for the final code:

Great! You've now fetched all the data for the dashboard overview page. Your page should look like this:

![Dashboard page with all the data fetched](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fcomplete-dashboard.png&w=1920&q=75)

However... there are two things you need to be aware of:

1. The data requests are unintentionally blocking each other,
   `creating a request waterfall`.

2. By default, Next.js `pre-renders` routes to improve performance,
   this is called `Static Rendering`. So if your data changes, it
   won't be reflected in your dashboard.

Let's discuss number 1 in this chapter, then look into detail at number 2 in the next chapter.

---

### What are request waterfalls?

A `waterfall` refers to a sequence of network requests that
depend on the completion of previous requests. In the case
of data fetching, each request can only begin once the previous
request has returned data.

![Diagram showing time with sequential data fetching and parallel data fetching](https://nextjs.org/_next/image?url=%2Flearn%2Fdark%2Fsequential-parallel-data-fetching.png&w=3840&q=75)

In ou case, we need to wait for `fetchRevenue()` to execute before
`fetchLatestInvoices()` can start running, and so on.

```tsx
// /app/dashboard/page.tsx

const revenue = await fetchRevenue();
const latestInvoices = await fetchLatestInvoices(); // wait for fetchRevenue() to finish
const {
  numberOfInvoices,
  numberOfCustomers,
  totalPaidInvoices,
  totalPendingInvoices,
} = await fetchCardData(); // wait for fetchLatestInvoices() to finish

```

This pattern is not necessarily bad. There may be cases where you
want waterfalls because you want a condition to be satisfied before
you make the next request.

For example, you might want to fetch a user's ID and profile information
first. Once you have the ID, you might then proceed to fetch their list
of friends.

In this case, each request is contingent on the data returned from the
previous request.

However, this behavior can also be unintentional and impact performance.

###  Parallel data fetching

A common way to avoid waterfalls is to initiate all data requests at
the same time - in parallel.

In JavaScript, you can use the `Promise.all()`or `Promise.allSettled()`
functions to initiate all promises at the same time.

For example, in `data.ts`, we're using `Promise.all()` in the
`fetchCardData()` function:

```ts
// /app/lib/data.js

export async function fetchCardData() {
  try {
    const invoiceCountPromise = sql`SELECT COUNT(*) FROM invoices`;
    const customerCountPromise = sql`SELECT COUNT(*) FROM customers`;
    const invoiceStatusPromise = sql`SELECT
         SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END) AS "paid",
         SUM(CASE WHEN status = 'pending' THEN amount ELSE 0 END) AS "pending"
         FROM invoices`;

    const data = await Promise.all([
      invoiceCountPromise,
      customerCountPromise,
      invoiceStatusPromise,
    ]);
    // ...
  }
}

```

By using this pattern, you can:

- Start executing all data fetches at the same time, which can lead to
  performance gains.

- Use a native JavaScript pattern that can be applied to any library or
- framework.

However, there is one disadvantage of relying only on this JavaScript
pattern: **what happens if one data request is slower than all the others?**

---

##  Chapter 8: Static and Dynamic Rendering

> Learn about how you can use to further optimize data
> fetching with PPR and Streaming.

In the previous chapter, you fetched data for the Dashboard
Overview page.

However, we briefly discussed two limitations of the current
setup:

1.The data requests are creating an unintentional waterfall.

2.The dashboard is static, so any data updates will NOT be
  reflected on your application.

**In this chapter...**

Here are the topics we’ll cover

1. What static rendering is and how it can improve your
   application's performance.

2. What dynamic rendering is and when to use it.

3. Different approaches to make your dashboard dynamic.

4. Simulate a slow data fetch to see what happens.

### What is Static Rendering?

With `static rendering`, data fetching and page rendering happens
on the server `at build time` (when you deploy) or `during revalidation`.

The result can then be distributed and cached in a Content
Delivery Network (CDN)

![Diagram showing how users hit the CDN instead of the server when requesting a page](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fstatic-site-generation.png&w=3840&q=75)

Whenever a user visits your application, the cached result is served.

There are a couple of benefits in static rendering:

- **Faster Websites** - Pre-rendered content can be cached and globally
  distributed. This ensures that users around the world can access your
  website's content more quickly and reliably.

- **Reduced Server Load** - Because the content is cached, your server does
  not have to dynamically generate content for each user request.

- `SEO` - Pre-rendered content is easier for search engine crawlers to
  index, as the content is already available when the page loads.
  This can lead to improved search engine rankings.

`Static rendering` is useful for UI `with no data` or `with data that is shared across users`,
such as a static blog post or a product page.

It might not be a good fit for a dashboard which has personalized data
that are regularly updated.

**The opposite of static rendering is dynamic rendering.**

### What is Dynamic Rendering?

With `dynamic rendering`, content is rendered on the server for each user
`at request time`: when the user visits the page.

There are a couple of benefits of dynamic rendering:

- **Real-Time Data** - Dynamic rendering allows your application to display
  real-time or frequently updated data. This is ideal for applications where
  data changes often.

- **User-Specific Content**- It's easier to serve personalized content, such
  as dashboards or user profiles, and update the data based on user interaction.

- **Request Time Information** - Dynamic rendering allows you to access
  information that can only be known at request time, such as cookies or
  the URL search parameters.

###  Making the dashboard dynamic

By default, `@vercel/postgres` doesn't set its own caching semantics.

This allows the framework to set its own static and dynamic behavior.

You can use a Next.js API called `unstable_noStore` inside your Server
Components or data fetching functions to opt out of static rendering.
Let's add this.

In your `data.ts`, `import unstable_noStore from next/cache`, and call
it the top of your data fetching functions:

```ts
// /app/lib/data.ts

// ...
import { unstable_noStore as noStore } from 'next/cache';

export async function fetchRevenue() {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  noStore();

  // ...
}

export async function fetchLatestInvoices() {
  noStore();
  // ...
}

export async function fetchCardData() {
  noStore();
  // ...
}

export async function fetchFilteredInvoices(
  query: string,
  currentPage: number,
) {
  noStore();
  // ...
}

export async function fetchInvoicesPages(query: string) {
  noStore();
  // ...
}

export async function fetchFilteredCustomers(query: string) {
  noStore();
  // ...
}

export async function fetchInvoiceById(query: string) {
  noStore();
  // ...
}

```

>
> **Note:**
>
> unstable_noStore is an experimental API and may change in the future.
>
> If you prefer to use a stable API in your own projects, you can also
> use the Segment Config Option :`export const dynamic = "force-dynamic"`
>

###  Simulating a Slow Data Fetch

Making the dashboard dynamic is a good first step.

However... there is still one problem we mentioned in the previous chapter.

**What happens if one data request is slower than all the others ?**

Let's simulate a slow data fetch. In your `data.ts` file, uncomment
the `console.log` and `setTimeout` inside `fetchRevenue()`.

```ts
// /app/lib/data.ts

export async function fetchRevenue() {
  try {
    // We artificially delay a response for demo purposes.
    // Don't do this in production :)
    console.log('Fetching revenue data...');
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const data = await sql<Revenue>`SELECT * FROM revenue`;
 
    console.log('Data fetch completed after 3 seconds.');
 
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}
```

Now open <http://localhost:3000/dashboard/>

in a new tab and notice how the page takes longer to load.

In your terminal, you should also see the following messages:

```sh
Fetching revenue data...
Data fetch completed after 3 seconds.
```

Here, you've added an artificial 3-second delay to simulate a slow
data fetch.

The result is that now your whole page is blocked while the data is
being fetched.

Which brings us to a common challenge developers have to solve:

**With dynamic rendering, your application is only as fast as your slowest data fetch.**

##  Chapter 9: Streaming

> Learn how to improve your user's experience by adding streaming.

In the previous chapter, you made your dashboard page dynamic;
however, we discussed how the slow data fetches can impact the
performance of your application.

Let's look at how you can improve the user experience when there
are slow data requests.

**In this chapter...**

Here are the topics we’ll cover

1. What streaming is and when you might use it.

2. How to implement streaming with `loading.tsx` and `Suspense`.

3. What loading skeletons are.

4. What route groups are, and when you might use them.

5. Where to place `Suspense` boundaries in your application.

###  What is streaming?

Streaming is a data transfer technique that allows you to break
down a route into smaller `chunks` and progressively stream them
from the server to the client as they become ready.

![Diagram showing time with sequential data fetching and parallel data fetching](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fserver-rendering-with-streaming.png&w=3840&q=75)

By using `streaming`, you can prevent slow data requests from blocking
your whole page.

This allows the user to see and interact with parts of the page without
have to wait for all the data to be loaded before any UI can be shown.

![Diagram showing time with sequential data fetching and parallel data fetching](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fserver-rendering-with-streaming-chart.png&w=3840&q=75)

Streaming works well with React's component model, as each component
can be considered a chunk.

There are two ways you can implement streaming in Next.js:

1. At the page level, with the `loading.tsx` special file.
2. For specific components, with `<Suspense>`.

Let's see how this works.

>
> **What is one advantage of streaming ?**
>
> Chunks are rendered in parallel, reducing the overall load time.
> One advantage of this approach is that you can significantly reduce
> your page's overall loading time.
>

###  Streaming a whole page with loading.tsx

In the `/app/dashboard` folder, create a new file called loading.tsx:

```tsx
// /app/dashboard/loading.tsx

export default function Loading() {
  return <div>Loading...</div>;
}

```

Then refresh <http://localhost:3000/dashboard>, and you should now see:

![Dashboard page with 'Loading...' text](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Floading-page.png&w=1920&q=75)

A few things are happening here:

1. `loading.tsx` is a special Next.js file built on top of `Suspense`,
   it allows you to create fallback UI to show as a replacement while
   page content loads.

2. Since `<SideNav>` is static, it's shown immediately. The user can
   interact with `<SideNav>` while the dynamic content is loading.

3. The user doesn't have to wait for the page to finish loading before
   navigating away; this is called `interruptable navigation`.

Congratulations! You've just implemented streaming.

But we can do more to improve the user experience.

Let's show a loading skeleton instead of the Loading… text.

###  Adding loading skeletons

A loading skeleton is a simplified version of the UI.

Many websites use them as a placeholder (or fallback) to indicate
to users that the content is loading.

Any UI you embed into `loading.tsx` will be embedded as part of the
static file, and sent first. Then, the rest of the dynamic content
will be streamed from the server to the client.

Inside your `loading.tsx` file, import a new component called `<DashboardSkeleton>`

```tsx
// /app/dashboard/loading.tsx

import DashboardSkeleton from '@/app/ui/skeletons';

export default function Loading() {
  return <DashboardSkeleton />;
}
```

Then, refresh <http://localhost:3000/dashboard>, and you should now see:

![Dashboard page with loading skeletons](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Floading-page-with-skeleton.png&w=1920&q=75)

###  Fixing the loading skeleton bug with route groups

Right now, your loading skeleton will apply to the `invoices`
and `customers` pages as well.

Since `loading.tsx` is at a level higher than `/invoices/page.tsx`
and `/customers/page.tsx` in the file system, it's also applied to
those pages.

We can change this with [Route Groups](https://nextjs.org/docs/app/building-your-application/routing/route-groups)

Create a new folder called `/(overview)` inside the dashboard folder.

Then, move your `loading.tsx` and `page.tsx` files inside the folder:

![Folder structure showing how to create a route group using parentheses]()

Now, the `loading.tsx` file will only apply to your dashboard
overview page.

Route groups allow you to organize files into logical groups without
affecting the URL path structure.

When you create a new folder using parentheses (), the name won't be
included in the URL path. So `/dashboard/(overview)/page.tsx` becomes
`/dashboard`.

Here, you're using a route group to ensure `loading.tsx` only applies
to your dashboard overview page.

However, you can also use route groups to separate your application
into sections (e.g. (marketing) routes and (shop) routes) or by teams
for larger applications.

###  Streaming a component

So far, you're streaming a whole page. But, instead, you can be more
granular and stream specific components using `React Suspense`.

`Suspense` allows you to defer rendering parts of your application
until some condition is met, e.g. data is loaded.

You can wrap your dynamic components in `Suspense`. Then, pass it
a fallback component to show while the dynamic component loads.

If you remember the slow data request, with `fetchRevenue()`, this
is the request that is slowing down the whole page.

Instead of blocking your page, you can use `Suspense` to stream only
this component and immediately show the rest of the page's UI.

To do so, you'll need to move the data fetch to the component;
let's update the code to see what that'll look like:

Delete all instances of `fetchRevenue()` and its data from
`/dashboard/(overview)/page.tsx`:

```tsx
// /app/dashboard/(overview)/page.tsx

import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices, fetchCardData } from '@/app/lib/data'; // remove fetchRevenue

export default async function Page() {
  const revenue = await fetchRevenue // delete this line
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    // ...
  );
}

```

Then, import `<Suspense>` from React, and wrap it around `<RevenueChart />`.

You can pass it a fallback component called `<RevenueChartSkeleton>`

```tsx
// /app/dashboard/(overview)/page.tsx

import { Card } from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { lusitana } from '@/app/ui/fonts';
import { fetchLatestInvoices, fetchCardData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
  const latestInvoices = await fetchLatestInvoices();
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card title="Collected" value={totalPaidInvoices} type="collected" />
        <Card title="Pending" value={totalPendingInvoices} type="pending" />
        <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
        <Card
          title="Total Customers"
          value={numberOfCustomers}
          type="customers"
        />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </main>
  );
}

```

Finally, update the `<RevenueChart>` component to fetch its own data and
 `remove the prop` passed to it:

```tsx
// /app/ui/dashboard/revenue-chart.tsx

import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { fetchRevenue } from '@/app/lib/data';

// ...

export default async function RevenueChart() { // Make component async, remove the props
  
  const revenue = await fetchRevenue(); // Fetch data inside the component

  const chartHeight = 350;
  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    // ...
  );
}
```

Now refresh the page, you should see the dashboard information almost immediately, while a fallback skeleton is shown for `<RevenueChart>`:

![Dashboard page with revenue chart skeleton and loaded Card and Latest Invoices components](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Floading-revenue-chart.png&w=1920&q=75)

###  Practice: Streaming `<LatestInvoices>`

Now it's your turn !

Practice what you've just learned by streaming the `<LatestInvoices>`
component.

Move fetchLatestInvoices() down from the `/app/dashboard/(overview)/page.tsx`
 to the `<LatestInvoices>` component.

 Wrap the component in a `<Suspense>` boundary with a fallback called
 `<LatestInvoicesSkeleton>.`

Once you're ready, expand the toggle to see the solution code:

###  Grouping components

Great! You're almost there, now you need to wrap the `<Card>` components
in `Suspense`.

You can fetch data for each individual card, but this could lead to
`a popping effect` as the cards load in, which can be visually jarring
for the user.

**So, how would you tackle this problem ?**

To create more of a staggered effect, you can group the cards using
a wrapper component.

This means the static `<SideNav/>` will be shown first, followed by
the cards, etc.

In your `page.tsx` file:

1. Delete your `<Card>` components.
2. Delete the `fetchCardData()` function.
3. Import a new wrapper component called `<CardWrapper />`
4. Import a new skeleton component called `<CardsSkeleton />`
5. Wrap `<CardWrapper />` in Suspense.

/app/dashboard/page.tsx

import CardWrapper from '@/app/ui/dashboard/cards';
// ...
import {
  RevenueChartSkeleton,
  LatestInvoicesSkeleton,
  CardsSkeleton,
} from '@/app/ui/skeletons';

export default async function Page() {
  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      // ...
    </main>
  );
}

Then, move into the file /app/ui/dashboard/cards.tsx, import the fetchCardData() function, and invoke it inside the <CardWrapper/> component. Make sure to uncomment any necessary code in this component.
/app/ui/dashboard/cards.tsx

// ...
import { fetchCardData } from '@/app/lib/data';

// ...

export default async function CardWrapper() {
  const {
    numberOfInvoices,
    numberOfCustomers,
    totalPaidInvoices,
    totalPendingInvoices,
  } = await fetchCardData();

  return (
    <>
      <Card title="Collected" value={totalPaidInvoices} type="collected" />
      <Card title="Pending" value={totalPendingInvoices} type="pending" />
      <Card title="Total Invoices" value={numberOfInvoices} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

Refresh the page, and you should see all the cards load in at the same time. You can use this pattern when you want multiple components to load in at the same time.
Deciding where to place your Suspense boundaries

Where you place your Suspense boundaries will depend on a few things:

    How you want the user to experience the page as it streams.
    What content you want to prioritize.
    If the components rely on data fetching.

Take a look at your dashboard page, is there anything you would've done differently?

Don't worry. There isn't a right answer.

    You could stream the whole page like we did with loading.tsx... but that may lead to a longer loading time if one of the components has a slow data fetch.
    You could stream every component individually... but that may lead to UI popping into the screen as it becomes ready.
    You could also create a staggered effect by streaming page sections. But you'll need to create wrapper components.

Where you place your suspense boundaries will vary depending on your application. In general, it's good practice to move your data fetches down to the components that need it, and then wrap those components in Suspense. But there is nothing wrong with streaming the sections or the whole page if that's what your application needs.

Don't be afraid to experiment with Suspense and see what works best, it's a powerful API that can help you create more delightful user experiences.
It’s time to take a quiz!

Test your knowledge and see what you’ve just learned.

In general, what is considered good practice when working with Suspense and data fetching?
Looking ahead

Streaming and Server Components give us new ways to handle data fetching and loading states, ultimately with the goal of improving the end user experience.

In the next chapter, you'll learn about Partial Prerendering, a new Next.js rendering model built with streaming in mind.
9
You've Completed Chapter 9

You've learned how to stream components with Suspense and loading skeletons.

Next Up

10: Partial Prerendering (Optional)

An early look into Partial Prerendering - a new experimental rendering model built with streaming.
