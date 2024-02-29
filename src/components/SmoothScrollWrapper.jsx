import { ReactLenis } from '@studio-freight/react-lenis';

function SmoothScrollWrapper({ children }) {
  return <ReactLenis root>{children}</ReactLenis>;
}

export default SmoothScrollWrapper;
