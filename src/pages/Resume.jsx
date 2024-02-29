import resume from '../assets/resume.pdf';
function Resume() {
  return (
    <section className="h-svh">
      <iframe src={resume} width="100%" height="100%"></iframe>
    </section>
  );
}

export default Resume;
