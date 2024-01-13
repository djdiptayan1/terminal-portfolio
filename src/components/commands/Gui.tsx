import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Gui: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "gui") {
    const link = document.createElement('a');
    link.href = "https://gui.djdiptayan.in/";
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
  }

  return <span></span>;
};

export default Gui;
