import { Card } from "@/components/ui/card/card";
import styles from "./intro-card.module.scss";
import Button from "@/components/ui/button/button";
import { MousePointerClick } from "lucide-react";

export default function IntroCard() {
  return (
    <Card className={styles.intro}>
      <h1>Bengie Villesco</h1>
      <h2>Frontend Developer</h2>

      {/* prettier-ignore */}
      <p>
        Bengie is a fourth-year IT student at the Polytechnic University of the Philippines – Quezon City, passionate about full-stack development, UI/UX, cybersecurity, and data analysis. He enjoys building projects and creating meaningful tech solutions.
      </p>

      <section>
        <Button>
          <MousePointerClick className="h-[18px] w-fit" />
          Hire Me
        </Button>
        <Button variant="outline">View Projects</Button>
        <Button variant="outline">View Resume</Button>
      </section>
    </Card>
  );
}
