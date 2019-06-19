import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const TablesAlive = ({op, changeColor}) => {
    changeColor("info"); // color of a label

    return (
        <span>
            <TranslateWithLinks
                string="operation.tables_alive"
                keys={[
                    {
                        type: "account",
                        value: op[1].owner,
                        arg: "owner"
                    },
                    {
                        value: op[1].tables,
                        arg: "tables"
                    }
                ]}
            />
        </span>
    );
};
