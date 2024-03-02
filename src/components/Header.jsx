import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { ImBlog } from 'react-icons/im';
import { GiHamburgerMenu } from 'react-icons/gi';

import Logo from '../assets/u-craft.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const liStyle = 'py-[.8rem] px-4';

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between items-center relative py-2 px-8 h-[70px] font-[1.2rem]  bg-[#0a0416] ">
      <div>
        <img src={Logo} className="w-[60px]" />
      </div>
      <div onClick={() => setToggle(i => !i)} className="  lg:hidden">
        <GiHamburgerMenu />
      </div>
      <div
        className={`${toggle ? 'flex' : 'hidden'} absolute top-[71px] right-2  lg:hidden`}
      >
        <ul className="flex flex-col p-4 h-fit bg-[#0a0416]">
          <li className={liStyle}>
            <Link to="/" className="flex items-center gap-1">
              <AiOutlineHome />
              Home
            </Link>
          </li>
          <li className={liStyle}>
            <Link to="/about" className="flex items-center gap-1">
              <AiOutlineUser />
              About
            </Link>
          </li>
          <li className={liStyle}>
            <Link to="/projects" className="flex items-center gap-1">
              <AiOutlineFundProjectionScreen />
              Projects
            </Link>
          </li>
          <li className={liStyle}>
            <Link to="/resume" className="flex items-center gap-1">
              <CgFileDocument />
              Resume
            </Link>
          </li>
          <li className={liStyle}>
            <Link to="/blog" className="flex items-center gap-1">
              <ImBlog />
              Blogs
            </Link>
          </li>
        </ul>
      </div>
      <ul className="hidden lg:flex gap-20 mr-0  text-[1.2rem]">
        <li className={liStyle}>
          <Link to="/" className="flex items-center gap-1">
            <AiOutlineHome />
            Home
          </Link>
        </li>
        <li className={liStyle}>
          <Link to="/about" className="flex items-center gap-1">
            <AiOutlineUser />
            About
          </Link>
        </li>
        <li className={liStyle}>
          <Link to="/projects" className="flex items-center gap-1">
            <AiOutlineFundProjectionScreen />
            Projects
          </Link>
        </li>
        <li className={liStyle}>
          <Link to="/resume" className="flex items-center gap-1">
            <CgFileDocument />
            Resume
          </Link>
        </li>
        <li className={liStyle}>
          <Link to="/blog" className="flex items-center gap-1">
            <ImBlog />
            Blogs
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
