I had already built a personal website for my CV and some projects that I had done, but it had already been a few years and I wasn't really happy the quality anymore. So instead of refactoring it, I decided to do a complete rebuild.
A few reasons as to why I decided to rebuild and not refactor. My earlier homepage was written with NextJS v9.3, JavaScript, React and SCSS. 

In the past years, I've developed mostly in TypeScript. I see this as a much more productive (and safe!) way to develop larger projects. It not only helps to make sure what different data looks like, but catches easy mistakes early on.

Manually writing CSS is very nice and rewarding, but for larger projects it can get very hard to maintain. It's very hard to write scalable and maintainable CSS code using classnames or other selectors. For the past year or so, I've almost exclusively used Chakra UI in my frontend work. It's far from a perfect library, but it offers a nice balance between customisability and productivity.

The previous homepage also had an older version of NextJS - `v9.3`. Since then, NextJS has had a few large releases, with the biggest one perhaps being `v13`. I had not had time to experiment with the `app/` directory functionality that the new version brings, so I wanted to try it out. I must say that after wrapping my head around it for a while, I really like it.



## Challenges

As I mentioned above, I wanted to try and experiment with the new app directory. Upon starting this project, I wasn't very aware of what the new app directory would be offering, except the obvious - a different folder structure. 

After reading about it a bit more, I understood that it tries to solve an interesting problem in frontend development - moving things away from the client, to the server. This makes sense, as modern the typical modern website has a lot of things going on. Most react JSX is just static, and it would make sense for the server to handle it.

Now to the challenges. Currently (`v13.4.19`), the way to differentiate server and client side code, is to add a `"use client"` directive to the top of the file where you wish to excecute client side code. Fairly straightforward, right? Well yes, if you're the author of that code. It's harder for third party code, and especially UI libraries, if they specifically have the need to operate in the client. This became an issue, as I wanted to use Chakra UI, which runs on the client, and needs to.

To be honest, I have currently absolutely no real need adopt the app/ directory from Next 13, nor have I any real reason to have the rendering happening on the server. Running Chakra UI would break when building, so it was clearly an issue. So I had three options: revert to the old `pages/` directory structure, change the UI library, or force Next to render everything on the client.

For me it was more important to learn something new, than to have a perfect implementation. So what I decided to go for at this stage was to force Next to render everything on the client. I found this useful article of someone having the same issue. Chakra UI has plans to migrate to the server first era of modern web development, but it will take time. Sometime in the near future I will probably change the UI to Panda, which is RSC (React Server Component) compatible and developed by the Chakra team.



### Technologies used
- [NextJS](https://nextjs.org) (13.4, with `app/`  directory)
- [React](https://react.dev) (18.2)
- [Typescript](https://www.typescriptlang.org) (5.2)
- [Chakra UI](https://chakra-ui.com)
- [Contentful](https://www.contentful.com) for a headless CMS
- [Vercel](https://vercel.com) for hosting



