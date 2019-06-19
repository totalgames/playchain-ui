import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const PlayerCreate = ({op, changeColor}) => {
    changeColor("success"); // color of a label

    return (
        <span>
            <TranslateWithLinks
                string="operation.player_create"
                keys={[
                    {
                        type: "account",
                        value: op[1].inviter,
                        arg: "inviter"
                    },
                    {
                        type: "account",
                        value: op[1].account,
                        arg: "account"
                    }
                ]}
            />
        </span>
    );
};
