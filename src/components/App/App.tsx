import Septuplet from "../Septuplet/Septuplet";
import NewSeptuplet from "../NewSeptuplet/NewSeptuplet";

import styles from "./App.module.css";
import Editor from "../Editor/Editor";
import { useState } from "react";
import { ColorSeptuplet } from "./App.types";
import SettingsContext from "../../contexts/SettingsContext";
import EmptyEditor from "../Editor/EmptyEditor";

function randomBetween(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function furthestHue(colorsArr: any) {
  let huesArr = colorsArr.map((color: any) => color.h);
  console.log("huesArr", huesArr);

  const sortedArr = huesArr.sort((a: number, b: number) => a - b);
  const distances = [];

  if (sortedArr.length === 1) {
    return (sortedArr[0] + 180) % 360;
  } else if (sortedArr.length > 1) {
    for (let i = 0; i < sortedArr.length; i++) {
      if (i === sortedArr.length - 1) {
        // final element - special
        distances.push(360 - sortedArr[i] + sortedArr[0]);
      } else {
        distances.push(sortedArr[i + 1] - sortedArr[i]);
      }
    }
  }

  const longestDistIdx = distances.indexOf(Math.max(...distances));
  const longestDist = distances[longestDistIdx];
  const fH = Math.round(sortedArr[longestDistIdx] + longestDist / 2) % 360;
  console.log("furthest hue", fH);

  return fH;
}

function App() {
  const [showL, setShowL] = useState(false);
  const contextValue = { showL, setShowL };

  const [colors, setColors] = useState([
    {
      h: randomBetween(0, 360),
      s: randomBetween(65, 100),
      l: randomBetween(35, 65),
    },
  ]);
  const [selectedColor, setSelectedColor] = useState<number>(0);

  return (
    <SettingsContext.Provider value={contextValue}>
      <div className={styles.App}>
        <div className={styles.Palette} onClick={() => setSelectedColor(-1)}>
          {colors.map((color, idx) => (
            <Septuplet
              key={idx}
              h={color.h}
              s={color.s}
              l={color.l}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedColor(idx);
              }}
              selected={idx === selectedColor}
              handleDelete={() => {
                setSelectedColor(-1);
                setColors(
                  colors.filter((color, i) => {
                    return idx !== i;
                  })
                );
              }}
            />
          ))}
          <NewSeptuplet
            onClick={() => {
              setColors([
                ...colors,
                {
                  h:
                    colors.length > 0
                      ? furthestHue(colors)
                      : randomBetween(0, 360),
                  s: randomBetween(65, 100),
                  l: randomBetween(35, 65),
                },
              ]);
              setSelectedColor(colors.length);
            }}
          />
        </div>
        {selectedColor >= 0 ? (
          <Editor
            color={colors[selectedColor]}
            handleDelete={() => {
              setSelectedColor(-1);
              setColors(
                colors.filter((color, idx) => {
                  return idx !== selectedColor;
                })
              );
            }}
            onChange={(newColor: any) =>
              setColors(
                colors.map((color, idx) =>
                  idx === selectedColor ? newColor : color
                )
              )
            }
          />
        ) : (
          <EmptyEditor />
        )}
      </div>
    </SettingsContext.Provider>
  );
}

export default App;
