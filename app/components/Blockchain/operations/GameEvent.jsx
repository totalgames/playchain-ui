import React from "react";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";
import MemoText from "../MemoText";

export const GameEvent = ({op, changeColor}) => {
    changeColor("info"); // color of a label

    let memoComponent = <MemoText memo={op[1].event} />;

    // TODO

    return (
        <span className="right-td">
            <div className="inline-block">
                <div>
                    <TranslateWithLinks
                        string="operation.game_event"
                        keys={[
                            {
                                value: op[1].table,
                                arg: "table"
                            },
                            {
                                type: "account",
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
