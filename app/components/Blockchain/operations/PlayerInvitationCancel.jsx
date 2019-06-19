import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const PlayerInvitationCancel = ({op, changeColor}) => {
    changeColor("cancel"); // color of a label

    return (
        <span>
            <TranslateWithLinks
                string="operation.player_invitation_cancel"
                keys={[
                    {
                        type: "account",
                        value: op[1].inviter,
                        arg: "inviter"
                    },
                    {
                        value: op[1].uid,
                        arg: "uid"
                    }
                ]}
            />
        </span>
    );
};
