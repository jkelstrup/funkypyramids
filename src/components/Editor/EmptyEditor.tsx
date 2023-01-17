import { useContext } from "react";
import SettingsContext from "../../contexts/SettingsContext";

import styles from "./Editor.module.css";

export default function EmptyEditor() {
  const { showL, setShowL } = useContext(SettingsContext);

  return (
    <div className={styles.Editor}>
      <fieldset>
        <legend>Select a color</legend>
        ...
      </fieldset>
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
