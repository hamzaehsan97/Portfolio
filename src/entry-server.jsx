import React from "react";
import { renderToString } from "react-dom/server";
import App, { routeMetadata, routes } from "./App.jsx";

export function render(pathname) {
  return renderToString(<App pathname={pathname} />);
}

export { routeMetadata, routes };
