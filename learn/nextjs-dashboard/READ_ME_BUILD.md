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
