import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const PlaychainCommitteeMemberUpdate = ({op, changeColor}) => {
    changeColor("success"); // color of a label

    return (
        <span>
            <TranslateWithLinks
                string="operation.playchain_committee_member_update"
                keys={[
                    {
                        type: "account",
                        value: op[1].committee_member_account,
                        arg: "committee_member_account"
                    },
                    {
                        value: op[1].committee_member,
                        arg: "committee_member"
                    }
                ]}
            />
        </span>
    );
};
