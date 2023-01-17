import { useState } from "react";
import styles from "./ComboSlider.module.css";

export default function ComboSlider({
  value,
  onChange,
  min = 0,
  max = 100,
  label,
  optional = false,
}: {
  value: number;
  onChange: any;
  min: number;
  max: number;
  label: string;
  optional: boolean;
}) {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className={styles.ComboSlider}>
      {optional ? (
        <input
          type="checkbox"
          onChange={(e) => setDisabled(!e.target.checked)}
        />
      ) : null}
      <div className={styles.inputs}>
        <label className={styles.top}>
          {`${label}${disabled ? " (auto)" : ""}`}
          <input
            disabled={disabled}
            type="number"
            value={value}
            min={min}
            max={max}
            onChange={(e) => onChange(e.target.value)}
          />
        </label>
        <div className={styles.bottom}>
          <input
            disabled={disabled}
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
