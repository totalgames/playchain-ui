import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const GameReset = ({op, changeColor}) => {
    changeColor("warning"); // color of a label

    return (
        <span>
            <TranslateWithLinks
                string="operation.game_reset"
                keys={[
                    {
                        type: "account",
                        value: op[1].table_owner,
                        arg: "table_owner"
                    },
                    {
                        value: op[1].table,
                        arg: "table"
                    }
                ]}
            />
        </span>
    );
};
