import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const PlayerInvitationResolve = ({op, changeColor}) => {
    changeColor("success"); // color of a label

    return (
        <span>
            <TranslateWithLinks
                string="operation.player_invitation_resolve"
                keys={[
                    {
                        type: "account",
                        value: op[1].inviter,
                        arg: "inviter"
                    },
                    {
                        value: op[1].uid,
                        arg: "uid"
                    },
                    {
                        type: "account",
                        value: op[1].name,
                        arg: "name"
                    }
                ]}
            />
        </span>
    );
};
