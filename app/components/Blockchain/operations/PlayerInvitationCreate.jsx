import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const PlayerInvitationCreate = ({op, linkToAccount, fromComponent}) => {
    if (fromComponent === "proposed_operation") {
        return (
            <span>
                <Translate
                    component="span"
                    content="proposal.player_invitation_create"
                />
                &nbsp;
                {linkToAccount(op[1].inviter)}
            </span>
        );
    } else {
        return (
            <span>
                <TranslateWithLinks
                    string="operation.player_invitation_create"
                    keys={[
                        {
                            type: "account",
                            value: op[1].inviter,
                            arg: "inviter"
                        }
                    ]}
                />
            </span>
        );
    }
};
