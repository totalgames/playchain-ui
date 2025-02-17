import React from "react";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";
import MemoText from "../MemoText";

export const GameResultCheck = ({op, changeColor}) => {
    changeColor("info"); // color of a label

    let memoComponent = <MemoText memo={op[1].result} />;

    return (
        <span className="right-td">
            <div className="inline-block">
                <div>
                    <TranslateWithLinks
                        string="operation.game_result_check"
                        keys={[
                            {
                                type: "account",
                                value: op[1].voter,
                                arg: "voter"
                            },
                            {
                                type: "amount",
                                value: op[1].table_owner,
                                arg: "table_owner"
                            }
                        ]}
                    />
                    {memoComponent}
                </div>
            </div>
        </span>
    );
};
