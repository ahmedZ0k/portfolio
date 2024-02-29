import uniqid from 'uniqid';
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa';
import OutsideLink from '../components/OutsideLink';
import { projects } from '../../data/projects';

function Projects() {
  return (
    <section>
      <h1 className="text-6xl pb-3 text-center">Projects</h1>
      <ul className=" grid grid-cols-3 m-10 h-full gap-5">
        {projects.map(pro => (
          <li
            key={uniqid()}
            className="block text-center h-fit p-4 bg-[#0a0416] rounded-xl"
          >
            {pro.screenShot ? <img src={pro.screenShot} /> : ''}
            <h3 className="text-2xl text-[#ce5ff8] py-4 ">{pro.title}</h3>
            <p>{pro.description}</p>
            <br />
            <p className="flex items-center justify-center gap-2 ">
              {pro.skills.map(skill => (
                <span key={skill} className="text-[#ce5ff8] pr-1">
                  {skill},
                </span>
              ))}
            </p>
            <br />
            <div className="flex justify-center items-center gap-8">
              {pro.github ? (
                <OutsideLink to={pro.github}>
                  <FaGithub className=" h-7 w-7" />
                </OutsideLink>
              ) : (
                ''
              )}
              {pro.liveDemo ? (
                <OutsideLink to={pro.liveDemo}>
                  <FaExternalLinkAlt className=" h-7 w-7" />
                </OutsideLink>
              ) : (
                ''
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
