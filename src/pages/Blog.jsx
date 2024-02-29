import Image from '../assets/underconstruction.gif';
function Blog() {
  return (
    <section className="h-svh flex flex-col justify-center items-center">
      <h3 className="text-5xl pb-3 text-center">Page Under Construction</h3>
      <img src={Image} className=" max-h-[80%]" />
    </section>
  );
}

export default Blog;
