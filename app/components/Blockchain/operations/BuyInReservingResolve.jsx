import React from "react";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const BuyInReservingResolve = ({op, proposer, index, changeColor}) => {
    changeColor("success"); // color of a label

    return (
        <span className="right-td">
            <div className="inline-block">
                <div>
                    <TranslateWithLinks
                        string="operation.buy_in_reserving_resolve"
                        keys={[
                            {
                                type: "account",
                                value: op[1].table_owner,
                                arg: "table_owner"
                            }
                        ]}
                    />
                </div>
            </div>
        </span>
    );
};
