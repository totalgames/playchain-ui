import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";
import MemoText from "../MemoText";

export const RoomCreate = ({op, changeColor}) => {
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
                        string="operation.room_create"
                        keys={[
                            {
                                type: "account",
                                value: op[1].owner,
                                arg: "owner"
                            },
                            {
                                value: op[1].server_url,
                                arg: "server_url"
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
