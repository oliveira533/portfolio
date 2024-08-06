import { Menu, MenuButton, MenuItem, MenuItems } from 'react'
import "../global.css"

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <a href="#" className="flex items-center gap-2" prefetch={false}>
            <BriefcaseIcon className="h-6 w-6" />
            <span className="font-bold">John Doe</span>
          </a>
          <div className="flex items-center gap-4">
            <a href="#" className="px-4 py-2 hover:bg-muted rounded-md" prefetch={false}>
              Contact
            </a>
            <a href="#" className="px-4 py-2 hover:bg-muted rounded-md" prefetch={false}>
              LinkedIn
            </a>
            <a href="#" className="px-4 py-2 hover:bg-muted rounded-md" prefetch={false}>
              Projects
            </a>
            <a href="#" className="px-4 py-2 hover:bg-muted rounded-md" prefetch={false}>
              Experience
            </a>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="contact" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">John Doe</h1>
              <div className="grid gap-2 text-muted-foreground">
                <div>
                  <MailIcon className="mr-2 inline h-4 w-4" />
                  john.doe@example.com
                </div>
                <div>
                  <PhoneIcon className="mr-2 inline h-4 w-4" />
                  +1 (123) 456-7890
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="linkedin" className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">LinkedIn</h2>
              <div className="flex flex-col items-center gap-4">
                <img
                  src="/placeholder.svg"
                  width={120}
                  height={120}
                  alt="John Doe"
                  className="rounded-full"
                  style={{ aspectRatio: "120/120", objectFit: "cover" }}
                />
                <div>
                  <h3 className="text-xl font-bold">John Doe</h3>
                  <p className="text-muted-foreground">Software Engineer</p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                  prefetch={false}
                >
                  <LinkedinIcon className="h-5 w-5" />
                  View Profile
                </a>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={225}
                    alt="Project 1"
                    className="rounded-t-lg object-cover"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                  />
                  <div className="space-y-2 p-4">
                    <h3 className="text-lg font-bold">Project 1</h3>
                    <p className="text-muted-foreground">A brief description of Project 1 goes here.</p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      prefetch={false}
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={225}
                    alt="Project 2"
                    className="rounded-t-lg object-cover"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                  />
                  <div className="space-y-2 p-4">
                    <h3 className="text-lg font-bold">Project 2</h3>
                    <p className="text-muted-foreground">A brief description of Project 2 goes here.</p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                      prefetch={false}
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="experience" className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Work Experience</h2>
              <div className="space-y-6">
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <p className="text-muted-foreground">Acme Inc. | Jan 2020 - Present</p>
                  <ul className="list-disc space-y-1 pl-4 text-muted-foreground">
                    <li>Developed and maintained web applications using React, Node.js, and MongoDB.</li>
                    <li>Collaborated with cross-functional teams to design and implement new features.</li>
                    <li>Participated in code reviews and provided feedback to improve code quality.</li>
                  </ul>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-xl font-bold">Intern</h3>
                  <p className="text-muted-foreground">Widgets Inc. | Jun 2019 - Dec 2019</p>
                  <ul className="list-disc space-y-1 pl-4 text-muted-foreground">
                    <li>Assisted in the development of a web-based inventory management system.</li>
                    <li>Participated in daily stand-up meetings and sprint planning sessions.</li>
                    <li>Gained experience in Agile development methodologies.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-6 text-muted-foreground">
        <div className="container flex items-center justify-between px-4 md:px-6">
          <p>&copy; 2024 John Doe. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-foreground" prefetch={false}>
              <GitlabIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-foreground" prefetch={false}>
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-foreground" prefetch={false}>
              <InstagramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

function BriefcaseIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    )
  }
  
  
  function GitlabIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z" />
      </svg>
    )
  }
  
  
  function InstagramIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    )
  }
  
  
  function LinkedinIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }
  
  
  function MailIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    )
  }
  
  
  function PhoneIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }
  
  
  function TwitterIcon(props) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    )
  }