import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const BuyInTable = ({op, changeColor}) => {
    changeColor("success"); // color of a label

    op[1].amount.amount = parseFloat(op[1].amount.amount);

    return (
        <span>
            <TranslateWithLinks
                string="operation.buy_in_table"
                keys={[
                    {
                        type: "account",
                        value: op[1].player,
                        arg: "player"
                    },
                    {
                        type: "account",
                        value: op[1].table_owner,
                        arg: "table_owner"
                    },
                    {
                        value: op[1].table,
                        arg: "table"
                    },
                    {
                        type: "amount",
                        value: op[1].amount,
                        arg: "amount"
                    }
                ]}
            />
        </span>
    );
};
