import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Home from "@/components/Home/Home";
import Work from "@/components/Home/Work";

const page = () => {
  return (
    <div>
      <Home />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default page;
