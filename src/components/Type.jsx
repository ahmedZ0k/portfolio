import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'undergraduate at the Faculty of Computers & Informatics at Suez Canal University',
          'Always learning new things',
          'MERN Stack Developer',
          'Using Software as a solution for every problem',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 2,
        delay: 50,
      }}
    />
  );
}

export default Type;
