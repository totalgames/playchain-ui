import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const DonateToPlaychain = ({op, changeColor}) => {
    changeColor("success"); // color of a label

    return (
        <span>
            <TranslateWithLinks
                string="operation.donate_to_playchain"
                keys={[
                    {
                        type: "account",
                        value: op[1].donator,
                        arg: "donator"
                    }
                ]}
            />
        </span>
    );
};
