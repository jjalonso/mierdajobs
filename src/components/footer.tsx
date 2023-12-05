import { Heading } from "./heading";

const Footer = () =>
  <footer className="
      mt-24
      flex
      justify-center
      bg-black
      px-8 
      py-12
      text-white
    ">
    <div className="
        flex
        w-full
        max-w-screen-md
        flex-col
        justify-between
        gap-4
      ">
      <div className="flex gap-4">

        <div className="flex w-1/2 flex-col gap-4">
          <Heading
            level={2}
            className="text-white"
          >
            Otros
          </Heading>
          <a
            className="hover:underline" href="https://blog.mierdajobs.com">Blog de MierdaJobs</a>
        </div>
        <div className="flex w-1/2 flex-col justify-end gap-4">
          <a
            className="hover:underline" href="mailto:hola@mierdajobs.com">
            hola@mierdajobs.com
          </a>
        </div>
      </div>
    </div>
  </footer>

export default Footer;