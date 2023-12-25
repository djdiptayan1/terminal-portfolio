import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Secrets: React.FC = () => {
    const { history, rerender } = useContext(termContext);

    /* ===== get current command ===== */
    const currentCommand = _.split(history[0], " ");
    console.log(currentCommand);

    /* ===== check current command makes redirect ===== */
    if (rerender && currentCommand[0] === "secret") {
        window.open("https://youtu.be/dQw4w9WgXcQ?si=hlQdeqfEIJo6Wgk9", "_blank");
    }

    return <span></span>;
};

export default Secrets;
