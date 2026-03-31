import NavBar from "@/components/ui/navbar";
import styles from "./page.module.scss";
import Home from "./home/page";
import About from "./about/page";
import Project from "./project/page";
import Contact from "./contact/page";
import Footer from "@/components/ui/footer";

export default function Page() {
  return (
    <div className={styles.layout}>
      <NavBar />
      <main>
        <Home />
        <About />
        <Project />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
