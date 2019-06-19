import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const PlaychainCommitteeMemberCreate = ({op, changeColor}) => {
    changeColor("success"); // color of a label

    return (
        <span>
            <TranslateWithLinks
                string="operation.playchain_committee_member_create"
                keys={[
                    {
                        type: "account",
                        value: op[1].committee_member_account,
                        arg: "committee_member_account"
                    },
                    {
                        value: op[1].url,
                        arg: "url"
                    }
                ]}
            />
        </span>
    );
};
