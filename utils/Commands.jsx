const notFound = (
  <p>
    Command not found , use <span className="text-red-400">help</span> to get a list of available commands
  </p>
);

const header = (
  <p>
    Hello Stalker ! 👋 <br />
    Welcome to my Terminal Portfolio <br />
    Use command <span className="text-red-400">help</span> to get list of available commands
  </p>
);

const about = (
  <p>
    Hi👋! I&apos;m
    <span className="font-semibold text-andromedacyan"> Vaibhav Tekkalur </span>
    <br />
    I&apos;m a passionate programmer by day movie buff by night.
    <br />
    Currently in my sophomore year pursuing{" "}
    <span className="text-andromedayellow">Computer Science and Engineering at VIT Chennai.</span>
    <br />
    Interested in <span className="text-andromedagreen">Full Stack Web Development</span>
    <br />
    Currently Learning <span className="text-andromedacyan">React</span>,{" "}
    <span className="text-andromedawhite">NextJS</span> and
    <span className="text-andromedablue"> Typescript</span>
  </p>
);

const skills = (
  <p>
    <span className="font-semibold">Programming Languages:</span>
    <br />
    <ul className="flex flex-row gap-4 underline">
      <li className="px-1">Python</li>
      <li className="px-1">C</li>
      <li className="px-1">C++</li>
      <li className="px-1">JavaScript</li>
    </ul>
    <span className="font-semibold">Web Development</span>
    <br />
    Frontend:
    <ul className="flex flex-row gap-4 underline">
      <li className="px-1">HTML</li>
      <li className="px-1">CSS</li>
      <li className="px-1">TailwindCSS</li>
      <li className="px-1">Javascript</li>
      <li className="px-1">React</li>
      <li className="px-1">Redux</li>
    </ul>
    Backend:
    <ul className="flex flex-row gap-4 underline">
      <li className="px-1">NodeJS</li>
      <li className="px-1">ExpressJS</li>
      <li className="px-1">JWT</li>
      <li className="px-1">NextJS</li>
      <li className="px-1">MongoDB</li>
    </ul>
    <span className="font-semibold">Tools:</span>
    <br />
    <ul className="flex flex-row gap-4 underline">
      <li className="px-1">VSCode</li>
      <li className="px-1">Git</li>
      <li className="px-1">Vercel</li>
      <li className="px-1">Figma</li>
      <li className="px-1">Adobe Premiere Pro</li>
      <li className="px-1">Adobe Photoshop</li>
    </ul>
  </p>
);

const help = (
  <p>
    <ul>
      <li>
        <span className="text-andromedacyan">help&emsp;</span>shows list of commands available
      </li>
      <li>
        <span className="text-andromedacyan">about&emsp;</span>about me
      </li>
      <li>
        <span className="text-andromedacyan">skills&emsp;</span>shows my skills and the tools i use
      </li>
      <li>
        <span className="text-andromedacyan">projects&emsp;</span>lists the projects i&apos;ve worked on
      </li>
      <li>
        <span className="text-andromedacyan">links&emsp;</span>shows my social links
      </li>
    </ul>
  </p>
);

const links = (
  <p>
    <span className="font-semibold">Links</span>
    <ul>
      <li>
        <span className="text-andromedacyan">Github:&nbsp;</span>]
        <a target="_blank" rel="noreferrer" className="hover:underline" href="https://github.com/vaibhavTekk">
          https://github.com/vaibhavTekk
        </a>
      </li>
      <li>
        <span className="text-andromedacyan">Instagram:&nbsp;</span>

        <a target="_blank" rel="noreferrer" className="hover:underline" href="https://www.instagram.com/vaibhavtekk/">
          https://www.instagram.com/vaibhavtekk/
        </a>
      </li>
      <li>
        <span className="text-andromedacyan">LinkedIn:&nbsp;</span>

        <a target="_blank" rel="noreferrer" className="hover:underline" href="https://github.com/vaibhavTekk">
          https://github.com/vaibhavTekk
        </a>
      </li>
    </ul>
  </p>
);

const projects = (
  <p>
    <span>Projects : </span>
    <ul>
      <li>
        <p className="font-bold underline">Wallt</p>
        <p>A Simple Expense Tracker App</p>
        <p>made with React, TailwindCSS, Redux, Express, MongoDB</p>
        <span className="flex flex-row gap-2">
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:underline bg-andromedagreen text-andromedablack px-1"
            href="https://github.com/vaibhavTekk/expense-tracker-frontend"
          >
            Repo
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:underline bg-andromedagreen text-andromedablack px-1"
            href="https://wallt.vaibhavtekk.tech"
          >
            Website
          </a>
        </span>
      </li>
      <li>
        <p className="font-bold underline">Lights CLI</p>
        <p>A CLI interface to control Tuya Powered LED smart bulb</p>
        <p>Made with Python, Typer and Tuya API</p>
        <span className="flex flex-row gap-2">
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:underline bg-andromedagreen text-andromedablack px-1"
            href="https://github.com/vaibhavTekk/lights-cli"
          >
            Repo
          </a>
        </span>
      </li>
      <li>
        <p className="font-bold underline">Tic Tac Toe</p>
        <p>A Simple two player tic-tac-toe game</p>
        <p>Made with HTML, TailwindCSS and JS</p>
        <span className="flex flex-row gap-2">
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:underline bg-andromedagreen text-andromedablack px-1"
            href="https://github.com/vaibhavTekk/tic-tac-toe-js"
          >
            Repo
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:underline bg-andromedagreen text-andromedablack px-1"
            href="http://tictac.vaibhavtekk.tech/"
          >
            Website
          </a>
        </span>
      </li>
      <li>
        <p className="font-bold underline">VIT Timetable Converter</p>
        <p>A web app that converts VIT Timetable HTML to an ICS File</p>
        <p>Made with NodeJS, Express, HTML, TailwindCSS, JS</p>
        <span className="flex flex-row gap-2">
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:underline bg-andromedagreen text-andromedablack px-1"
            href="https://github.com/vaibhavTekk/tic-tac-toe-js"
          >
            Repo
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className="hover:underline bg-andromedagreen text-andromedablack px-1"
            href="http://tictac.vaibhavtekk.tech/"
          >
            Website
          </a>
        </span>
      </li>
    </ul>
  </p>
);
export default function checkCommand(input) {
  switch (input) {
    case "about":
      return about;
      break;
    case "skills":
      return skills;
      break;
    case "help":
      return help;
      break;
    case "header":
      return header;
      break;
    case "links":
      return links;
      break;
    case "projects":
      return projects;
      break;
    default:
      return notFound;
      break;
  }
}
