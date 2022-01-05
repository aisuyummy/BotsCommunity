import React from "react";
import ReactDOM from "react-dom";
import "@vkontakte/vkui/dist/vkui.css";

import Bridge from "@vkontakte/vk-bridge";
import {
  ConfigProvider,
  AdaptivityProvider,
} from "@vkontakte/vkui";

import App from "./App";
Bridge.send("VKWebAppInit");

ReactDOM.render(
  <ConfigProvider>
    <AdaptivityProvider>
      <App />
    </AdaptivityProvider>
  </ConfigProvider>,
  document.getElementById("root")
);
