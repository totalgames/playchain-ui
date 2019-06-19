import React from "react";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const BuyInReservingCancel = ({op, proposer, index, changeColor}) => {
    changeColor("cancel"); // color of a label

    return (
        <span className="right-td">
            <div className="inline-block">
                <div>
                    <TranslateWithLinks
                        string="operation.buy_in_reserving_cancel"
                        keys={[
                            {
                                type: "account",
                                value: op[1].player,
                                arg: "player"
                            }
                        ]}
                    />
                </div>
            </div>
        </span>
    );
};
