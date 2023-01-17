import { useContext, useState } from "react";
import SettingsContext from "../../contexts/SettingsContext";
import styles from "./Swatch.module.css";

export default function Swatch({
  isActive,
  size,
  h,
  s,
  l,
  onClick = () => {},
}: {
  size: number;
  isActive: boolean;
  h: number;
  s: number;
  l: number;
  onClick?: any;
}) {
  const [active, setActive] = useState(false);
  const settings = useContext(SettingsContext);

  return (
    <div
      className={`${styles.Swatch} ${isActive ? styles.Active : null}`}
      style={{
        backgroundColor: `hsl(${h} ${s}% ${l}%)`,
        width: size + "px",
      }}
      onClick={onClick}
    >
      {settings.showL ? <code>{l}</code> : null}
      <div
        className={styles.B}
        style={{ borderRightColor: `hsl(${h} ${s}% ${Math.min(l + 4, 100)}%)` }}
      />
      <div
        className={styles.C}
        style={{ borderLeftColor: `hsl(${h} ${s}% ${Math.max(l - 4, 0)}%)` }}
      />
    </div>
  );
}
