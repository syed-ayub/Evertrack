// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract evertrack {
    string id;

    constructor() {
        _grantRole(ADMIN, msg.sender);
    }

    event GrantRole(string indexed role, address indexed account);
    event RevokeRole(string indexed role, address indexed account);

    mapping(string => mapping(address => bool)) public roles;
    //keccak256(abi.encodePacked("ADMIN"));
    string private constant ADMIN = "ADMIN";
    string private constant PARTNER = "PARTNER";
    string private constant SELLER = "SELLER";
    string private constant USER = "USER";
    string private constant MANUFACTURER = "MANUFACTURER";
    string private constant POLICE = "POLICE";
    string private constant INSURANCE = "INSURANCE";

    modifier onlyRole(string memory _role) {
        require(roles[_role][msg.sender], "not authorized");
        _;
    }

    function _grantRole(string memory _role, address _account) internal {
        roles[_role][_account] = true;
        emit GrantRole(_role, _account);
    }

    function grantRole(string calldata _role, address _account)
        external
        onlyRole(ADMIN)
    {
        _grantRole(_role, _account);
    }

    function revokeRole(string calldata _role, address _account)
        external
        onlyRole(ADMIN)
    {
        roles[_role][_account] = false;
        emit RevokeRole(_role, _account);
    }

    struct car {
        string name;
        string description; //reports
        string manufacturer;
        bool initialized;
        string engineId;
        string batteryId;
        address ownerAcc;
        string status;
    }
    address _owneracc;
    mapping(string => car) public carStore;
    mapping(string => string) public partStore;

    mapping(address => mapping(string => bool)) private walletStore;

    event AssetCreate(address account, string uuid, string manufacturer);
    event RejectCreate(address account, string uuid, string message);
    event AssetTransfer(address from, address to, string uuid);
    event RejectTransfer(address from, address to, string uuid, string message);

    function createAsset(
        string memory name,
        string memory description,
        string memory uuid,
        string memory manufacturer,
        string memory engineId,
        string memory batteryId,
        address ownerAcc,
        string memory status
    ) public onlyRole(MANUFACTURER) {
        if (carStore[uuid].initialized) {
            emit RejectCreate(
                msg.sender,
                uuid,
                "Asset with this UUID already exists."
            );
            return;
        }

        carStore[uuid] = car(
            name,
            description,
            manufacturer,
            true,
            engineId,
            batteryId,
            ownerAcc,
            status
        );
        walletStore[ownerAcc][uuid] = true;

        partStore[engineId] = uuid;

        emit AssetCreate(ownerAcc, uuid, manufacturer);
    }

    function transferAsset(address to, string memory uuid)
        public
        onlyRole(SELLER)
    {
        if (!carStore[uuid].initialized) {
            emit RejectTransfer(
                msg.sender,
                to,
                uuid,
                "No asset with this UUID exists"
            );
            return;
        }
        _owneracc = carStore[uuid].ownerAcc;
        if (!walletStore[msg.sender][uuid]) {
            emit RejectTransfer(
                msg.sender,
                to,
                uuid,
                "Sender does not own this asset."
            );
            return;
        }

        walletStore[msg.sender][uuid] = false;
        walletStore[to][uuid] = true;
        emit AssetTransfer(msg.sender, to, uuid);
        carStore[uuid].ownerAcc = to;
    }

    function getAssetByUUID(string memory uuid)
        public
        view
        returns (
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            string memory,
            address ownerAcc
        )
    {
        return (
            carStore[uuid].name,
            carStore[uuid].description,
            carStore[uuid].manufacturer,
            carStore[uuid].engineId,
            carStore[uuid].batteryId,
            carStore[uuid].status,
            carStore[uuid].ownerAcc
        );
    }

    function accidentReports(string memory uuid, string memory _report)
        public
        onlyRole(INSURANCE)
    {
        carStore[uuid].description = _report;
    }

    function isOwnerOf(address owner, string memory uuid)
        public
        view
        returns (bool)
    {
        if (walletStore[owner][uuid]) {
            return true;
        }

        return false;
    }

    function Partdetails(string memory _partid)
        public
        view
        returns (
            string memory,
            string memory,
            address,
            string memory
        )
    {
        uint256 begin = 1;
        uint256 end = 5;
        bytes memory a = new bytes(end - begin + 1);
        for (uint256 i = 0; i <= end - begin; i++) {
            a[i] = bytes(_partid)[i + begin - 1];
        }

        string memory temp = string(a);

        return (
            carStore[temp].name,
            carStore[temp].manufacturer,
            carStore[temp].ownerAcc,
            carStore[temp].status
        );
    }

    function ChangeAssetStatus(string memory uuid, string memory _status)
        public
        onlyRole(POLICE)
    {
        carStore[uuid].status = _status;
    }
}
