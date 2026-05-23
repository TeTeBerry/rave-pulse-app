import type { PropsWithChildren } from "react";
import { useLaunch } from "@tarojs/taro";

import "./app.scss";
import "./styles/ravepulse.css";

function App({ children }: PropsWithChildren) {
  useLaunch(() => {
    console.log("Taro app launched.");
  });

  return children;
}

export default App;
