import React from "react";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const BuyInReservingResolve = ({op, changeColor}) => {
    changeColor("success"); // color of a label

    return (
        <span>
            <TranslateWithLinks
                string="operation.buy_in_reserving_resolve"
                keys={[
                    {
                        type: "account",
                        value: op[1].table_owner,
                        arg: "table_owner"
                    },
                    {
                        value: op[1].uid,
                        arg: "uid"
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
