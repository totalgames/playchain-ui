import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const PlaychainCommitteeMemberUpdateParametersV2 = ({
    op,
    changeColor
}) => {
    changeColor("info"); // color of a label

    return (
        <span>
            <TranslateWithLinks
                string="operation.playchain_committee_member_update_parameters_v2"
                keys={[
                    {
                        value: op[1].new_parameters,
                        arg: "new_parameters"
                    }
                ]}
            />
        </span>
    );
};
