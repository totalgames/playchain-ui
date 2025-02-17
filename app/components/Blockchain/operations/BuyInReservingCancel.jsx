import React from "react";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const BuyInReservingCancel = ({op, changeColor}) => {
    changeColor("cancel"); // color of a label

    return (
        <span>
            <TranslateWithLinks
                string="operation.buy_in_reserving_cancel"
                keys={[
                    {
                        type: "account",
                        value: op[1].player,
                        arg: "player"
                    },
                    {
                        value: op[1].uid,
                        arg: "uid"
                    }
                ]}
            />
        </span>
    );
};
