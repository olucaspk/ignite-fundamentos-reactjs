import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://picsum.photos/400"
      />

      <div className={styles.profile}>
        <Avatar src="https://github.com/olucaspk.png"/>
        <strong>Lucas Silva</strong>
        <p>Full-Tired Software Engineer</p>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
