import { useContext } from "react";
import SettingsContext from "../../contexts/SettingsContext";
import ComboSlider from "../ComboSlider/ComboSlider";
import styles from "./Editor.module.css";

export default function Editor({
  color,
  onChange,
  handleDelete,
}: {
  color: any;
  onChange: any;
  handleDelete: any;
}) {
  const { showL, setShowL } = useContext(SettingsContext);

  function hChange(newH: number) {
    onChange({ h: +newH, s: color.s, l: color.l });
  }

  function sChange(newS: number) {
    onChange({ h: color.h, s: +newS, l: color.l });
  }

  function lChange(newL: number) {
    onChange({ h: color.h, s: color.s, l: +newL });
  }

  return (
    <div className={styles.Editor}>
      <fieldset>
        <legend>Color values</legend>
        <ComboSlider
          label="Hue"
          min={0}
          max={360}
          value={color.h}
          onChange={hChange}
          optional={false}
        />
        <ComboSlider
          label="Saturation"
          min={0}
          max={100}
          value={color.s}
          onChange={sChange}
          optional={false}
        />
        <ComboSlider
          label="Lightness"
          min={0}
          max={100}
          value={color.l}
          onChange={lChange}
          optional={false}
        />
      </fieldset>
      <button onClick={() => handleDelete()}>Delete color</button>
      <fieldset>
        <legend>Global settings</legend>
        <label>
          <input
            type="checkbox"
            value={showL}
            onChange={(e) => setShowL(e.target.checked)}
          />
          Show L values
        </label>
      </fieldset>
    </div>
  );
}
