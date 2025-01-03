import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const contacts = [
  {
    icon: <IoMdMail size={30} color="white" />,
    text: 'ludipriyadi00@gmail.com',
    url: 'mailto:ludipriyadi00@gmail.com',
  },
  {
    icon: <FaGithub size={30} color="white" />,
    text: 'LudiPryd',
    url: 'https://github.com/LudiPryd',
  },
  {
    icon: <FaLinkedin size={30} color="white" />,
    text: 'Ludi Priyadi',
    url: 'https://www.linkedin.com/in/ludi-priyadi-1000b5262/',
  },
  {
    icon: <FaInstagram size={30} color="white" />,
    text: 'ludi_priyadi',
    url: 'https://www.instagram.com/ludi_priyadi/',
  },
];

const Contact = () => {
  return (
    <div className="bg-black lg:px-44 pt-7 pb-40" id="contact">
      <div className="relative isolate">
        <div className="border-t-1">
          <h1 className="text-white text-2xl text-center font-bold lg:py-6 pt-4">
            Contact
          </h1>
          <div className="flex flex-col lg:gap-2 gap-3 py-4 px-4">
            {contacts.map((contact, index) => (
              <div
                className="flex items-center gap-2 lg:py-5 py-3 lg:px-5 px-2 w-full border rounded-md"
                key={index}>
                {contact.icon}
                <a href={contact.url} target="_blank" rel="noreferrer">
                  <p className="text-white font-semibold">{contact.text}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
