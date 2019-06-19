import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";
import MemoText from "../MemoText";

export const PlaychainDepositCashback = ({op, changeColor}) => {
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
                        string="operation.playchain_deposit_cashback"
                        keys={[
                            {
                                type: "account",
                                value: op[1].getter,
                                arg: "getter"
                            },
                            {
                                type: "account",
                                value: op[1].recipient,
                                arg: "recipient"
                            },
                            {
                                type: "amount",
                                value: op[1].amount,
                                arg: "amount"
                            },
                            {
                                value: op[1].deposit,
                                arg: "deposit"
                            }
                        ]}
                    />
                    {memoComponent}
                </div>
            </div>
        </span>
    );
};
