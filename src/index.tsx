import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App/App";

console.log("env info", process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
