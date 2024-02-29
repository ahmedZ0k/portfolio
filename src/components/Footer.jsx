import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { FaWhatsapp } from 'react-icons/fa';
import OutsideLink from './OutsideLink';

function Footer() {
  return (
    <footer className="flex justify-between items-center py-2 px-8 h-[70px] bg-[#0a0416]  bottom-0  relative">
      <p> Developed by Ahmed Zakaria </p>
      <p>Copyright © 2024 AZ</p>
      <ul className="flex items-center gap-4">
        <li>
          <OutsideLink to="https://www.linkedin.com/in/ahmed-mohamed-zakaria/">
            <FaLinkedin />
          </OutsideLink>
        </li>
        <li>
          <OutsideLink to="https://github.com/zekooo0">
            <FaGithub />
          </OutsideLink>
        </li>
        <li>
          <OutsideLink to="mailto:ahmedzakria102@gmail.com">
            <SiGmail />
          </OutsideLink>
        </li>
        <li>
          <OutsideLink to="https://wa.me/+201016236120">
            <FaWhatsapp />
          </OutsideLink>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
