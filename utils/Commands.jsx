import Link from "next/link";

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
      <li className="text-yellow-200">Python</li>
      <li className="text-blue-400">C</li>
      <li className="text-blue-400">C++</li>
      <li className="text-yellow-200">JavaScript</li>
    </ul>
    <span className="font-semibold">Web Development</span>
    <br />
    Frontend:
    <ul className="flex flex-row gap-4">
      <li className="text-orange-400">HTML</li>
      <li className="text-blue-400">CSS</li>
      <li className="text-cyan-400">TailwindCSS</li>
      <li className="text-yellow-200">Javascript</li>
      <li className="text-cyan-400">React</li>
      <li className="text-purple-400">Redux</li>
    </ul>
    Backend:
    <ul className="flex flex-row gap-4">
      <li className="text-green-400">NodeJS</li>
      <li className="text-gray-100">ExpressJS</li>
      <li className="text-purple-400">JWT</li>
      <li className="text-gray-100">NextJS</li>
    </ul>
    <span className="font-semibold">Tools:</span>
    <br />
    <ul className="flex flex-row gap-4">
      <li className="text-cyan-400">VSCode</li>
      <li className="text-orange-300">Git</li>
      <li className="text-gray-100">Vercel</li>
      <li className="text-orange-300">Figma</li>
      <li className="text-purple-400">Adobe Premiere Pro</li>
      <li className="text-blue-400">Adobe Photoshop</li>
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
        Github:&nbsp;
        <Link href="https://github.com/vaibhavTekk">
          <a className="hover:underline">https://github.com/vaibhavTekk</a>
        </Link>
      </li>
      <li>
        Instagram:&nbsp;
        <Link href="https://www.instagram.com/vaibhavtekk/">
          <a className="hover:underline">https://www.instagram.com/vaibhavtekk/</a>
        </Link>
      </li>
      <li>
        LinkedIn:&nbsp;
        <Link href="https://github.com/vaibhavTekk">
          <a className="hover:underline">https://github.com/vaibhavTekk</a>
        </Link>
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
    default:
      return notFound;
      break;
  }
}
