import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";
import MemoText from "../MemoText";

export const TableUpdate = ({op, changeColor}) => {
    changeColor("success"); // color of a label

    let memoComponent = null;

    if (op[1].metadata) {
        memoComponent = <MemoText memo={op[1].metadata} />;
    }

    return (
        <span className="right-td">
            <div className="inline-block">
                <div>
                    <TranslateWithLinks
                        string="operation.table_update"
                        keys={[
                            {
                                type: "account",
                                value: op[1].owner,
                                arg: "owner"
                            },
                            {
                                value: op[1].table,
                                arg: "table"
                            },
                            {
                                value: op[1].required_witnesses,
                                arg: "required_witnesses"
                            },
                            {
                                value: op[1].min_accepted_proposal_asset,
                                arg: "min_accepted_proposal_asset"
                            }
                        ]}
                    />
                    {memoComponent}
                </div>
            </div>
        </span>
    );
};
