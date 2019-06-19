import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const BuyInReservingCancelAll = ({op, changeColor}) => {
    changeColor("cancel"); // color of a label

    return (
        <span>
            <TranslateWithLinks
                string="operation.buy_in_reserving_cancel_all"
                keys={[
                    {
                        type: "account",
                        value: op[1].player,
                        arg: "player"
                    }
                ]}
            />
        </span>
    );
};
