import React from "react";
import Translate from "react-translate-component";
import TranslateWithLinks from "../../Utility/TranslateWithLinks";

export const PlayerCreateByRoomOwner = ({op, changeColor}) => {
    changeColor("success"); // color of a label

    return (
        <span>
            <TranslateWithLinks
                string="operation.player_create_by_room_owner"
                keys={[
                    {
                        type: "account",
                        value: op[1].room_owner,
                        arg: "room_owner"
                    },
                    {
                        type: "account",
                        value: op[1].account,
                        arg: "account"
                    }
                ]}
            />
        </span>
    );
};
