import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Link,
} from '@nextui-org/react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import project1 from '../assets/images/Project1.png';
import project2 from '../assets/images/Project2.png';
import project3 from '../assets/images/Project3.png';
import project4 from '../assets/images/Project4.png';
import project5 from '../assets/images/Project5.png';

const projects = [
  {
    image: project1,
    title: 'Tour Package Booking Web ',
    description:
      'Capstone project from Digitalent Scholarship. This web created with Html, CSS and PHP using Bootstrap framework CSS.',
    githubUrl: 'https://github.com/LudiPryd/capstone-project---JWD',
    liveUrl: '#',
  },
  {
    image: project2,
    title: 'Notes App',
    description: 'Final project from learn React course in Dicoding.',
    githubUrl: 'https://github.com/LudiPryd/React-personal-notes',
    liveUrl: 'https://react-personal-notes-eight.vercel.app/',
  },
  {
    image: project3,
    title: 'Food Order App',
    description:
      'Final project of full stack web development bootcamp from Talent Hub Indonesia. This web created with React as Client and Express JS as Server with Supabase for database.',
    githubUrl: 'https://github.com/LudiPryd/Talenthub-Final_Project',
    liveUrl: 'https://talenthub-final-project.vercel.app/',
  },
  {
    image: project4,
    title: 'Enigma Laundry',
    description: 'Final project React JS from Enigma Bootcamp.',
    githubUrl: 'https://github.com/LudiPryd/Enigma-laundry',
    liveUrl: '#',
  },
  {
    image: project5,
    title: 'Positivus Landing Page',
    description: 'Simple landing page created with React and Tailwind CSS.',
    githubUrl: 'https://github.com/LudiPryd/Positivus_landing_page',
    liveUrl: '#',
  },
];

const Portfolio = () => {
  return (
    <div className="bg-black lg:px-44 pb-40" id="portfolio">
      <div className="relative isolate">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <h1 className="text-white text-center text-2xl font-bold pb-4">
          Portfolio
        </h1>
        <div className="flex justify-center">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4 py-4">
            {projects.map((project, index) => (
              <Card
                className="py-4 lg:w-[450px] w-[360px] bg-slate-700"
                key={index}>
                <CardHeader className="overflow-visible py-2 ">
                  <Image
                    alt="Card background"
                    className="border-none rounded-md border"
                    src={project.image}
                    objectFit="cover"
                  />
                </CardHeader>
                <CardBody className="px-3 flex-col gap-1 items-start">
                  <h4 className="font-bold text-large w-full text-white">
                    {project.title}
                  </h4>
                  <p className="text-tiny text-slate-400 font-semibold">
                    {project.description}
                  </p>
                </CardBody>
                <CardFooter className="px-3 flex gap-3">
                  <Link href={project.githubUrl} target="_blank">
                    <Button>
                      <FaGithub size={22} color="black" />
                      <p>Github</p>
                    </Button>
                  </Link>
                  <Link href={project.liveUrl} target="_blank">
                    <Button>
                      <FaExternalLinkAlt size={22} color="black" />
                      <p>Live</p>
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
