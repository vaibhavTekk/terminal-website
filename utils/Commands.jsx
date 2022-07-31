const notFound = (
  <p>
    Command not found , use <span className="text-red-400">help</span> to get a list of available commands
  </p>
);

const about = (
  <p>
    Hi👋! I&apos;m
    <span className="font-semibold text-cyan-400"> Vaibhav Tekkalur </span>
    <br />
    I&apos;m a passionate programmer by day movie buff by night.
    <br />
    Currently in my sophomore year pursuing{" "}
    <span className="text-yellow-300">Computer Science and Engineering at VIT Chennai.</span>
    <br />
    Interested in <span className="text-green-400">Full Stack Web Development</span>
    <br />
    Currently Learning <span className="text-cyan-400">React</span>, <span className="text-zinc-400">NextJS</span> and
    <span className="text-blue-400"> Typescript</span>
  </p>
);

const skills = (
  <p>
    <span className="font-semibold">Programming Languages:</span>
    <br />
    <ul className="flex flex-row gap-4">
      <li className="px-1 text-gray-800 bg-yellow-200">Python</li>
      <li className="px-1 text-gray-800 bg-blue-400">C</li>
      <li className="px-1 text-gray-800 bg-blue-400">C++</li>
      <li className="px-1 text-gray-800 bg-yellow-200">JavaScript</li>
    </ul>
    <span className="font-semibold">Web Development</span>
    <br />
    Frontend:
    <ul className="flex flex-row gap-4">
      <li className="px-1 text-gray-800 bg-orange-300">HTML</li>
      <li className="px-1 text-gray-800 bg-blue-400">CSS</li>
      <li className="px-1 text-gray-800 bg-cyan-400">TailwindCSS</li>
      <li className="px-1 text-gray-800 bg-yellow-200">Javascript</li>
      <li className="px-1 text-gray-800 bg-cyan-400">React</li>
      <li className="px-1 text-gray-800 bg-purple-400">Redux</li>
    </ul>
    Backend:
    <ul className="flex flex-row gap-4">
      <li className="px-1 text-gray-800 bg-green-400">NodeJS</li>
      <li className="px-1 text-gray-800 bg-gray-100">ExpressJS</li>
      <li className="px-1 text-gray-800 bg-purple-400">JWT</li>
      <li className="px-1 text-gray-800 bg-gray-100">NextJS</li>
      <li className="px-1 text-gray-800 bg-green-400">MongoDB</li>
    </ul>
    <span className="font-semibold">Tools:</span>
    <br />
    <ul className="flex flex-row gap-4">
      <li className="px-1 text-gray-800 bg-cyan-400">VSCode</li>
      <li className="px-1 text-gray-800 bg-orange-300">Git</li>
      <li className="px-1 text-gray-800 bg-gray-100">Vercel</li>
      <li className="px-1 text-gray-800 bg-orange-300">Figma</li>
      <li className="px-1 text-gray-800 bg-purple-400">Adobe Premiere Pro</li>
      <li className="px-1 text-gray-800 bg-blue-400">Adobe Photoshop</li>
    </ul>
  </p>
);

const help = (
  <p>
    <ul>
      <li>
        <span className="text-cyan-400">help&emsp;</span>shows list of commands available
      </li>
      <li>
        <span className="text-cyan-400">about&emsp;</span>about me
      </li>
      <li>
        <span className="text-cyan-400">skills&emsp;</span>shows my skills and the tools i use
      </li>
      <li>
        <span className="text-cyan-400">projects&emsp;</span>lists the projects i&apos;ve worked on
      </li>
      <li>
        <span className="text-cyan-400">links&emsp;</span>shows my social links
      </li>
    </ul>
  </p>
);

const links = (
  <p>
    <span className="font-semibold">Links</span>
    <ul>
      <li>
        <span className="text-cyan-400">Github:&nbsp;</span>]
        <a className="hover:underline" href="https://github.com/vaibhavTekk">
          https://github.com/vaibhavTekk
        </a>
      </li>
      <li>
        <span className="text-cyan-400">Instagram:&nbsp;</span>

        <a className="hover:underline" href="https://www.instagram.com/vaibhavtekk/">
          https://www.instagram.com/vaibhavtekk/
        </a>
      </li>
      <li>
        <span className="text-cyan-400">LinkedIn:&nbsp;</span>

        <a className="hover:underline" href="https://github.com/vaibhavTekk">
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
          <a className="hover:underline bg-gray-700 p-1" href="https://github.com/vaibhavTekk/expense-tracker-frontend">
            Repo
          </a>
          <a className="hover:underline bg-gray-700 p-1" href="https://wallt.vaibhavtekk.tech">
            Website
          </a>
        </span>
      </li>
      <br />
      <li>
        <p className="font-bold underline">Lights CLI</p>
        <p>A CLI interface to control Tuya Powered LED smart bulb</p>
        <p>Made with Python, Typer and Tuya API</p>
        <span className="flex flex-row gap-2">
          <a className="hover:underline bg-gray-700 p-1" href="https://github.com/vaibhavTekk/lights-cli">
            Repo
          </a>
        </span>
      </li>
      <br />
      <li>
        <p className="font-bold underline">Tic Tac Toe</p>
        <p>A Simple two player tic-tac-toe game</p>
        <p>Made with HTML, TailwindCSS and JS</p>
        <span className="flex flex-row gap-2">
          <a className="hover:underline bg-gray-700 p-1" href="https://github.com/vaibhavTekk/tic-tac-toe-js">
            Repo
          </a>
          <a className="hover:underline bg-gray-700 p-1" href="">
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
