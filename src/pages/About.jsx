import OutsideLink from '../components/OutsideLink';
import Image from '../assets/about.png';

function About() {
  return (
    <section className="h-svh flex flex-col lg:flex-row justify-center items-center gap-32 ">
      <div className="rounded-lg ">
        <img src={Image} className=" rounded-lg" />
      </div>
      <div className=" flex-col justify-center items-center px-4">
        <h4>About Me</h4>
        <ul className="pl-4 ">
          <li>
            🏫 I am an underGraduate at{' '}
            <span className="text-[#ce5ff8]  bg-white font-bold p-1 rounded">
              <OutsideLink to="https://cutt.ly/FCI_SCU">
                faculty of Computers & Informatics
              </OutsideLink>
            </span>{' '}
            at{' '}
            <span className="text-[#ce5ff8]  bg-white font-bold p-1 rounded">
              <OutsideLink to="http://suez.edu.eg/ar/">
                Suez Canal University
              </OutsideLink>
            </span>
          </li>
          <li>✍🏻 I love using Software as a solution for every Problem</li>
          <li>🤓 Always learning new things</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
