import { createContext } from "react";

const SettingsContext = createContext<any>({
  showL: false,
  setSettings: () => {},
});

export default SettingsContext;
