import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import OutsideLink from '../components/OutsideLink';
import Type from '../components/Type';

const spanStyle = 'text-[#ce5ff8] pr-1 bg-white font-bold p-1 rounded';

function Home() {
  return (
    <main className="flex justify-center items-center h-screen text-center w-full leading-8">
      <div className="flex flex-col items-center my-20 px-2 lg:w-1/2">
        <h1 className="text-4xl lg:text-6xl  pb-3">Hi, I am Ahmed Zakaria.</h1>
        <h3 className="text-3xl pb-6 font-bold ">A Front End Engineer.</h3>
        <p className=" text-center pb-6 tracking-wide">
          Detail-oriented Computer Science undergraduate with strong web
          development skills in <span className={spanStyle}>HTML</span>,
          <span className={spanStyle}>CSS</span>,
          <span className={spanStyle}>JavaScript</span>,
          <span className={spanStyle}>React JS</span>, and proficiency in
          <span className={spanStyle}> Node.js</span> and
          <span className={spanStyle}> Express.js</span>. Strong communicator
          with a collaborative mindset.
        </p>
        <div className="pb-6 font-bold">
          <Type />
        </div>
        <ul className="flex items-center gap-3 pb-6">
          <li className=" border p-2 hover:bg-white hover:text-black">
            <OutsideLink to="https://drive.google.com/file/d/1b6obuHCMAEGa6srSx5akHLy6_yTXSqHW/view">
              resume
            </OutsideLink>
          </li>
          <li>
            <OutsideLink to="https://github.com/zekooo0">
              <FaGithub />
            </OutsideLink>
          </li>
          <li>
            <OutsideLink to="https://www.linkedin.com/in/ahmed-mohamed-zakaria/">
              <FaLinkedin />
            </OutsideLink>
          </li>
        </ul>
      </div>
    </main>
  );
}

export default Home;
