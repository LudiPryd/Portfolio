import { FaCss3, FaHtml5, FaReact } from 'react-icons/fa';
import profile from '../assets/images/profilePicture.jpg';
import { SiJavascript, SiPhp, SiTailwindcss } from 'react-icons/si';
import { HiDocumentText } from 'react-icons/hi2';
import { Button, Link } from '@nextui-org/react';

const About = () => {
  const skills = [
    { name: 'HTML', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3 /> },
    { name: 'JavaScript', icon: <SiJavascript /> },
    { name: 'PHP', icon: <SiPhp /> },
    { name: 'React', icon: <FaReact /> },
    { name: 'Tailwind', icon: <SiTailwindcss /> },
  ];

  return (
    <div className="bg-black lg:px-44 px-7 pb-40" id="about">
      <div className="flex flex-col lg:flex-row md:flex-row md:justify-center justify-center lg:items-start md:items-start items-center lg:gap-8 gap-4">
        <div className="lg:w-[350px] md:w-[330px] w-[250px] p-8">
          <img
            src={profile}
            alt="about profile"
            className="rounded-lg border"
          />
        </div>
        <div className="lg:w-[550px] w-[333px] lg:p-8 px-5 pb-8">
          <h1 className="text-white text-center lg:text-2xl text-xl pb-2 font-bold">
            About Me
          </h1>
          <p className="text-white lg:text-[20px] font-normal text-justify text-sm">
            My focus is on mastering cutting-edge technologies and tools to
            craft responsive, interactive, and user-friendly interfaces. I am
            passionately committed to delivering visually stunning designs and
            ensuring exceptional website performance. I strive to stay updated
            with the latest trends in web development and continuously improve
            my skills to create innovative solutions that meet user needs.
          </p>
          <h1 className="text-white text-xl font-bold py-2">Resume</h1>
          <Link
            href="https://drive.google.com/file/d/1Wsl4qvZ3_1OEXOBOn6G7-gBH8p7_0LN9/view?usp=sharing"
            target="_blank">
            <Button className="bg-white">
              <HiDocumentText size={20} />
              <p className="font-semibold">Download Resume</p>
            </Button>
          </Link>
          <h1 className="text-white text-xl font-bold py-2 ">Main Skills</h1>
          <div className="flex flex-wrap lg:justify-start md:justify-start justify-center gap-2">
            {skills.map((skill, index) => (
              <div
                className="bg-white flex items-center justify-center rounded-full p-1 w-28 gap-1"
                key={index}>
                {skill.icon}
                <p className="text-center font-semibold">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
