import Image from "next/image";

const projects = [
  {
    title: "First Person View",
    description: "A trial to make game on web using HTML,CSS and Javascript",
    image: "/images/project1.png",
    link: "https://github.com/Anci4nt/first-person-view",
  },
  {
    title: "Technovators",
    description: "Secured 2nd Position in Regional Level of Design Championship'23",
    image: "/images/project2.png",
    link: "https://github.com/Anci4nt/innovater",
  },
  {
    title: "FitPulse",
    description: "Secured 3rd Position in Hackathon by ShisTech'24",
    image: "/images/project3.png",
    link: "https://github.com/Anci4nt/fitpulse",
  },
    {
    title: "Cyber Fair'25",
    description: "Waiting for the result. Gave My Best.",
    image: "/images/project4.png",
    link: "https://github.com/Anci4nt/aiscyberfair25",
  },
      {
    title: "Brainrot Translator",
    description: "A pretty fun hackathon happened at Microsoft Office , Delhi",
    image: "/images/project5.png",
    link: "https://github.com/Anci4nt/brainrot-translator",
  },
        {
    title: "Portfolio",
    description: "This is the Site you're viewing right now.",
    image: "/images/project6.png",
    link: "https://github.com/Anci4nt/portfolio",
  },
];

export default function Projects() {
  return (
    <section className="py-16 px-4 bg-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-black mb-12">/projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              href={project.link}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl text-black font-semibold mb-2">{project.title}</h3>
                <p className="text-black">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
