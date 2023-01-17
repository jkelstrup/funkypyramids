import Swatch from "../Swatch/Swatch";

import styles from "./Septuplet.module.css";

const MAX_L = 95;
const MIN_L = 5;

export default function Septuplet({
  h,
  s,
  l,
  selected = false,
  onClick,
  handleDelete,
}: {
  h: number;
  s: number;
  l: number;
  selected: boolean;
  onClick: any;
  handleDelete: any;
}) {
  return (
    <div className={styles.Septuplet}>
      <Swatch
        size={80}
        isActive={false}
        h={h}
        s={s}
        l={Math.floor(l + ((MAX_L - l) / 3) * 3)}
      />
      <Swatch
        size={80}
        isActive={false}
        h={h}
        s={s}
        l={Math.floor(l + ((MAX_L - l) / 3) * 2)}
      />
      <Swatch
        size={80}
        isActive={false}
        h={h}
        s={s}
        l={Math.floor(l + ((MAX_L - l) / 3) * 1)}
      />
      <Swatch
        size={80}
        isActive={selected}
        h={h}
        s={s}
        l={l}
        onClick={(e) => onClick(e)}
      />
      <Swatch
        size={80}
        isActive={false}
        h={h}
        s={s}
        l={Math.floor(l - ((l - MIN_L) / 3) * 1)}
      />
      <Swatch
        size={80}
        isActive={false}
        h={h}
        s={s}
        l={Math.floor(l - ((l - MIN_L) / 3) * 2)}
      />
      <Swatch
        size={80}
        isActive={false}
        h={h}
        s={s}
        l={Math.floor(l - ((l - MIN_L) / 3) * 3)}
      />
      <button onClick={handleDelete}>X</button>
    </div>
  );
}
