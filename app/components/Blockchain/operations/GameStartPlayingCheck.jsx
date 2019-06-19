import React from "react";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";
import MemoText from "../MemoText";

export const GameStartPlayingCheck = ({op, proposer, index, changeColor}) => {
    changeColor("warning"); // color of a label
    let memoComponent = null;

    // if (op[1].initial_data) {
    //     memoComponent = <MemoText memo={op[1].initial_data} />;
    // }

    return (
        <span className="right-td">
            <div className="inline-block">
                <div>
                    <TranslateWithLinks
                        string="operation.game_start_playing_check"
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
