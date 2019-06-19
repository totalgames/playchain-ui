import React from "react";
import {Transfer} from "./Transfer";
import {LimitOrderCreate} from "./LimitOrderCreate";
import {LimitOrderCancel} from "./LimitOrderCancel";
import {ShortOrderCancel} from "./ShortOrderCancel";
import {CallOrderUpdate} from "./CallOrderUpdate";
import {KeyCreate} from "./KeyCreate";
import {AccountCreate} from "./AccountCreate";
import {AccountUpdate} from "./AccountUpdate";
import {AccountWhitelist} from "./AccountWhitelist";
import {AccountUpgrade} from "./AccountUpgrade";
import {AccountTransfer} from "./AccountTransfer";
import {AssetCreate} from "./AssetCreate";
import {AssetUpdate} from "./AssetUpdate";
import {AssetUpdateFeedProducers} from "./AssetUpdateFeedProducers";
import {AssetIssue} from "./AssetIssue";
import {AssetReserve} from "./AssetReserve";
import {AssetFundFeePool} from "./AssetFundFeePool";
import {AssetSettle} from "./AssetSettle";
import {AssetSettleCancel} from "./AssetSettleCancel";
import {AssetGlobalSettle} from "./AssetGlobalSettle";
import {AssetPublishFeed} from "./AssetPublishFeed";
import {AssetClaimPool} from "./AssetClaimPool";
import {AssetUpdateIssuer} from "./AssetUpdateIssuer";
import {WitnessCreate} from "./WitnessCreate";
import {WitnessUpdate} from "./WitnessUpdate";
import {WitnessWithdrawPay} from "./WitnessWithdrawPay";
import {ProposalCreate} from "./ProposalCreate";
import {ProposalUpdate} from "./ProposalUpdate";
import {ProposalDelete} from "./ProposalDelete";
import {WithdrawPermissionCreate} from "./WithdrawPermissionCreate";
import {WithdrawPermissionUpdate} from "./WithdrawPermissionUpdate";
import {WithdrawPermissionClaim} from "./WithdrawPermissionClaim";
import {WithdrawPermissionDelete} from "./WithdrawPermissionDelete";
import {FillOrder} from "./FillOrder";
import {GlobalParametersUpdate} from "./GlobalParametersUpdate";
import {FileWrite} from "./FileWrite";
import {VestingBalanceCreate} from "./VestingBalanceCreate";
import {VestingBalanceWithdraw} from "./VestingBalanceWithdraw";
import {BondCreateOffer} from "./BondCreateOffer";
import {BondCancelOffer} from "./BondCancelOffer";
import {BondAcceptOffer} from "./BondAcceptOffer";
import {BondClaimCollaterial} from "./BondClaimCollaterial";
import {WorkerCreate} from "./WorkerCreate";
import {BalanceClaim} from "./BalanceClaim";
import {CommittyMemberCreate} from "./CommittyMemberCreate";
import {TransferToBlind} from "./TransferToBlind";
import {TransferFromBlind} from "./TransferFromBlind";
import {AssetClaimFees} from "./AssetClaimFees";
import {CommitteeMemberUpdateGlobalParams} from "./CommitteeMemberUpdateGlobalParams";
import {Custom} from "./Custom";
import {OverrideTransfer} from "./OverrideTransfer";
import {DefaultOperation} from "./DefaultOperation";
import {BidCollateral} from "./BidCollateral";
import {HtlcCreate} from "./HtlcCreate";
import {HtlcExtend} from "./HtlcExtend";
import {HtlcRedeem} from "./HtlcRedeem";
import {HtlcRedeemed} from "./HtlcRedeemed";
import {HtlcRefund} from "./HtlcRefund";
import {PlayerInvitationCreate} from "./PlayerInvitationCreate";
import {PlayerInvitationResolve} from "./PlayerInvitationResolve";
import {PlayerInvitationCancel} from "./PlayerInvitationCancel";
import {PlayerInvitationExpire} from "./PlayerInvitationExpire";
import {PlayerCreate} from "./PlayerCreate";
import {GameWitnessCreate} from "./GameWitnessCreate";
import {RoomCreate} from "./RoomCreate";
import {RoomUpdate} from "./RoomUpdate";
import {TableCreate} from "./TableCreate";
import {TableUpdate} from "./TableUpdate";
import {BuyInTable} from "./BuyInTable";
import {BuyOutTable} from "./BuyOutTable";
import {GameStartPlayingCheck} from "./GameStartPlayingCheck";
import {GameResultCheck} from "./GameResultCheck";
import {GameEvent} from "./GameEvent";
import {PlayerCreateByRoomOwner} from "./PlayerCreateByRoomOwner";
import {GameReset} from "./GameReset";
import {BuyInReserve} from "./BuyInReserve";
import {BuyInReservingCancel} from "./BuyInReservingCancel";
import {BuyInReservingResolve} from "./BuyInReservingResolve";
import {BuyInReservingAllocatedTable} from "./BuyInReservingAllocatedTable";
import {BuyInReservingExpire} from "./BuyInReservingExpire";
import {DonateToPlaychain} from "./DonateToPlaychain";
import {BuyInReservingCancelAll} from "./BuyInReservingCancelAll";
import {BuyInExpire} from "./BuyInExpire";
import {PlaychainCommitteeMemberCreate} from "./PlaychainCommitteeMemberCreate";
import {PlaychainCommitteeMemberUpdate} from "./PlaychainCommitteeMemberUpdate";
import {PlaychainCommitteeMemberUpdateParametersV1} from "./PlaychainCommitteeMemberUpdateParametersV1";
import {PlaychainDepositCashback} from "./PlaychainDepositCashback";
import {TablesAlive} from "./TablesAlive";
import {PlaychainCommitteeMemberUpdateParametersV2} from "./PlaychainCommitteeMemberUpdateParametersV2";

export default function opComponents(opType, props, opts) {
    switch (opType) {
        case "transfer":
            return <Transfer {...props} {...opts} />;
        case "limit_order_create":
            return <LimitOrderCreate {...props} {...opts} />;
        case "limit_order_cancel":
            return <LimitOrderCancel {...props} {...opts} />;

        case "short_order_cancel":
            return <ShortOrderCancel {...props} {...opts} />;

        case "call_order_update":
            return <CallOrderUpdate {...props} {...opts} />;

        case "key_create":
            return <KeyCreate />;

        case "account_create":
            return <AccountCreate {...props} {...opts} />;

        case "account_update":
            return <AccountUpdate {...props} {...opts} />;

        case "account_whitelist":
            return <AccountWhitelist {...props} {...opts} />;

        case "account_upgrade":
            return <AccountUpgrade {...props} {...opts} />;

        case "account_transfer":
            return <AccountTransfer {...props} {...opts} />;

        case "asset_create":
            return <AssetCreate {...props} {...opts} />;

        case "asset_update":
        case "asset_update_bitasset":
            return <AssetUpdate {...props} {...opts} />;
        /* -------------------------------------------------------------------------------------------- */
        case "asset_update_feed_producers":
            return <AssetUpdateFeedProducers {...props} {...opts} />;

        case "asset_issue":
            return <AssetIssue {...props} {...opts} />;

        case "asset_reserve":
            return <AssetReserve {...props} {...opts} />;

        case "asset_fund_fee_pool":
            return <AssetFundFeePool {...props} {...opts} />;

        case "asset_settle":
            return <AssetSettle {...props} {...opts} />;

        case "asset_settle_cancel":
            return <AssetSettleCancel {...props} />;

        case "asset_global_settle":
            return <AssetGlobalSettle {...props} {...opts} />;

        case "asset_publish_feed":
            return <AssetPublishFeed {...props} {...opts} />;

        case "asset_claim_pool":
            return <AssetClaimPool {...props} {...opts} />;

        case "asset_update_issuer":
            return <AssetUpdateIssuer {...props} />;

        case "witness_create":
            return <WitnessCreate {...props} {...opts} />;

        case "witness_update":
            return <WitnessUpdate {...props} {...opts} />;

        case "witness_withdraw_pay":
            return <WitnessWithdrawPay {...props} {...opts} />;

        case "proposal_create":
            return <ProposalCreate {...props} {...opts} />;

        case "proposal_update":
            return <ProposalUpdate {...props} {...opts} />;

        case "proposal_delete":
            return <ProposalDelete {...props} {...opts} />;

        case "withdraw_permission_create":
            return <WithdrawPermissionCreate {...props} {...opts} />;

        case "withdraw_permission_update":
            return <WithdrawPermissionUpdate {...props} {...opts} />;

        case "withdraw_permission_claim":
            return <WithdrawPermissionClaim {...props} {...opts} />;

        case "withdraw_permission_delete":
            return <WithdrawPermissionDelete {...props} {...opts} />;

        case "fill_order":
            return <FillOrder {...props} {...opts} />;

        case "global_parameters_update":
            return (
                <GlobalParametersUpdate fromComponent={opts.fromComponent} />
            );

        case "file_write":
            return <FileWrite />;

        case "vesting_balance_create":
            return <VestingBalanceCreate {...props} {...opts} />;

        case "vesting_balance_withdraw":
            return <VestingBalanceWithdraw {...props} {...opts} />;

        case "bond_create_offer":
            return <BondCreateOffer {...props} />;

        case "bond_cancel_offer":
            return <BondCancelOffer {...props} />;

        case "bond_accept_offer":
            return <BondAcceptOffer {...props} {...opts} />;

        case "bond_claim_collateral":
            return <BondClaimCollaterial {...props} {...opts} />;

        case "worker_create":
            return <WorkerCreate {...props} {...opts} />;

        case "balance_claim":
            return <BalanceClaim {...props} {...opts} />;

        case "committee_member_create":
            return <CommittyMemberCreate {...props} {...opts} />;

        case "transfer_to_blind":
            return <TransferToBlind {...props} {...opts} />;

        case "transfer_from_blind":
            return <TransferFromBlind {...props} {...opts} />;

        case "asset_claim_fees":
            return <AssetClaimFees {...props} {...opts} />;

        case "committee_member_update_global_parameters":
            return (
                <CommitteeMemberUpdateGlobalParams
                    fromComponent={opts.fromComponent}
                />
            );

        case "custom":
            return <Custom fromComponent={opts.fromComponent} />;

        case "override_transfer":
            return <OverrideTransfer {...props} {...opts} />;

        case "bid_collateral":
            return <BidCollateral {...props} />;

        case "htlc_create":
            return <HtlcCreate {...props} {...opts} />;

        case "htlc_redeem":
            return <HtlcRedeem {...props} {...opts} />;

        case "htlc_redeemed":
            return <HtlcRedeemed {...props} {...opts} />;

        case "htlc_extend":
            return <HtlcExtend {...props} {...opts} />;

        case "htlc_refund":
            return <HtlcRefund {...props} {...opts} />;

        case "player_invitation_create":
            return <PlayerInvitationCreate {...props} {...opts} />;

        case "player_invitation_resolve":
            return <PlayerInvitationResolve {...props} {...opts} />;

        case "player_invitation_cancel":
            return <PlayerInvitationCancel {...props} {...opts} />;

        case "player_invitation_expire":
            return <PlayerInvitationExpire {...props} {...opts} />;

        case "player_create":
            return <PlayerCreate {...props} {...opts} />;

        case "game_witness_create":
            return <GameWitnessCreate {...props} {...opts} />;

        case "room_create":
            return <RoomCreate {...props} {...opts} />;

        case "room_update":
            return <RoomUpdate {...props} {...opts} />;

        case "table_create":
            return <TableCreate {...props} {...opts} />;

        case "table_update":
            return <TableUpdate {...props} {...opts} />;

        case "buy_in_table":
            return <BuyInTable {...props} {...opts} />;

        case "buy_out_table":
            return <BuyOutTable {...props} {...opts} />;

        case "game_start_playing_check":
            return <GameStartPlayingCheck {...props} {...opts} />;

        case "game_result_check":
            return <GameResultCheck {...props} {...opts} />;

        case "game_event":
            return <GameEvent {...props} {...opts} />;

        case "player_create_by_room_owner":
            return <PlayerCreateByRoomOwner {...props} {...opts} />;

        case "game_reset":
            return <GameReset {...props} {...opts} />;

        case "buy_in_reserve":
            return <BuyInReserve {...props} {...opts} />;

        case "buy_in_reserving_cancel":
            return <BuyInReservingCancel {...props} {...opts} />;

        case "buy_in_reserving_resolve":
            return <BuyInReservingResolve {...props} {...opts} />;

        case "buy_in_reserving_allocated_table":
            return <BuyInReservingAllocatedTable {...props} {...opts} />;

        case "buy_in_reserving_expire":
            return <BuyInReservingExpire {...props} {...opts} />;

        case "donate_to_playchain":
            return <DonateToPlaychain {...props} {...opts} />;

        case "buy_in_reserving_cancel_all":
            return <BuyInReservingCancelAll {...props} {...opts} />;

        case "buy_in_expire":
            return <BuyInExpire {...props} {...opts} />;

        case "playchain_committee_member_create":
            return <PlaychainCommitteeMemberCreate {...props} {...opts} />;

        case "playchain_committee_member_update":
            return <PlaychainCommitteeMemberCreate {...props} {...opts} />;

        case "playchain_committee_member_update_parameters":
            return (
                <PlaychainCommitteeMemberUpdateParametersV1
                    {...props}
                    {...opts}
                />
            );

        case "playchain_deposit_cashback":
            return (
                <PlaychainCommitteeMemberUpdateParametersV1
                    {...props}
                    {...opts}
                />
            );

        case "tables_alive":
            return <TablesAlive {...props} {...opts} />;

        case "playchain_committee_member_update_parameters_v2":
            return <TablesAlive {...props} {...opts} />;

        default:
            return <DefaultOperation {...props} />;
    }
}
