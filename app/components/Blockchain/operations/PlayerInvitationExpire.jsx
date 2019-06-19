import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const PlayerInvitationExpire = ({op, changeColor}) => {
    changeColor("warning"); // color of a label

    return (
        <span>
            <TranslateWithLinks
                string="operation.player_invitation_expire"
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
