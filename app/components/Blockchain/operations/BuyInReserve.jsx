import React from "react";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";
import MemoText from "../MemoText";

export const BuyInReserve = ({op, proposer, index, changeColor}) => {
    changeColor("warning"); // color of a label
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
                        string="operation.buy_in_reserve"
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
                                value: op[1].protocol_version,
                                arg: "protocol_version"
                            }
                        ]}
                    />
                    {memoComponent}
                </div>
            </div>
        </span>
    );
};
