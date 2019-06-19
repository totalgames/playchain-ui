import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";
import MemoText from "../MemoText";

export const BuyInReservingAllocatedTable = ({op, changeColor}) => {
    changeColor("info"); // color of a label
    let memoComponent = null;

    if (op[1].metadata) {
        memoComponent = <MemoText memo={op[1].metadata} />;
    }
    op[1].amount.amount = parseFloat(op[1].amount.amount);

    return (
        <span className="right-td">
            <div className="inline-block">
                <div>
                    <TranslateWithLinks
                        string="operation.buy_in_reserving_allocated_table"
                        keys={[
                            {
                                type: "account",
                                value: op[1].player,
                                arg: "player"
                            },
                            {
                                type: "amount",
                                value: op[1].amount,
                                arg: "amount"
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
                                value: op[1].table_weight,
                                arg: "table_weight"
                            },
                            {
                                value: op[1].room_rating,
                                arg: "room_rating"
                            },
                            {
                                value: op[1].uid,
                                arg: "uid"
                            }
                        ]}
                    />
                    {memoComponent}
                </div>
            </div>
        </span>
    );
};
