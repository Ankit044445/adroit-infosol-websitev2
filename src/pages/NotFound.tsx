import { Seo } from "../components/ui/Seo";
import { Button } from "../components/ui/Button";
import { GradientBlob } from "../components/ui/GradientBlob";
import styles from "./NotFound.module.scss";

export function NotFound() {
  return (
    <section className={styles.wrap}>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <GradientBlob variant="indigo" className={`blob-decor ${styles.blob}`} />
      <div className={`container-custom ${styles.content}`}>
        <span className={styles.code}>404</span>
        <h1>We couldn't find that page</h1>
        <p className="lead">The page you're looking for may have been moved or no longer exists.</p>
        <Button to="/">Back to Home</Button>
      </div>
    </section>
  );
}
