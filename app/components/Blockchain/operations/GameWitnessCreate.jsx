import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const GameWitnessCreate = ({op, changeColor}) => {
    changeColor("success"); // color of a label

    return (
        <span>
            <TranslateWithLinks
                string="operation.game_witness_create"
                keys={[
                    {
                        type: "account",
                        value: op[1].new_witness,
                        arg: "new_witness"
                    }
                ]}
            />
        </span>
    );
};
