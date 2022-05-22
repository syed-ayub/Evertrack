const keepersContractAddress = "0x6B58F91d779951F2Bf7a9d078A886FA6cb2cCd8B"

const keeperContractABI = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "uuid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_report",
				"type": "string"
			}
		],
		"name": "accidentReports",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "uuid",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "manufacturer",
				"type": "string"
			}
		],
		"name": "AssetCreate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "uuid",
				"type": "string"
			}
		],
		"name": "AssetTransfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "uuid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_status",
				"type": "string"
			}
		],
		"name": "ChangeAssetStatus",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "uuid",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "manufacturer",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "engineId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "batteryId",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "ownerAcc",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"name": "createAsset",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_role",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "grantRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "role",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "GrantRole",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "account",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "uuid",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "RejectCreate",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "uuid",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "message",
				"type": "string"
			}
		],
		"name": "RejectTransfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_role",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_account",
				"type": "address"
			}
		],
		"name": "revokeRole",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "string",
				"name": "role",
				"type": "string"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "RevokeRole",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uuid",
				"type": "string"
			}
		],
		"name": "transferAsset",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "carStore",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "manufacturer",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "initialized",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "engineId",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "batteryId",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "ownerAcc",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "status",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "uuid",
				"type": "string"
			}
		],
		"name": "getAssetByUUID",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "ownerAcc",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "uuid",
				"type": "string"
			}
		],
		"name": "isOwnerOf",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_partid",
				"type": "string"
			}
		],
		"name": "Partdetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "partStore",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "roles",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
async function connectMetaMask (){

    if(typeof window.ethereum !== "undefined"){
        try
        {
            await ethereum.request({ method: "eth_requestAccounts" });
        }
        catch (error) {
            console.log(error);
        }
       
        document.getElementById("connectButton").innerHTML = "Connected";
        
        const accounts = await ethereum.request({ method: "eth_accounts" });
        console.log(accounts);
    }
    else {
        document.getElementById("connectButton").innerHTML ="Please install MetaMask";
      }
}
async function callContract() {
                let a = document.getElementById("Role").value;
                let b = document.getElementById("addressTo").value;

                console.log(b);
                 const provider = new ethers.providers.Web3Provider(window.ethereum)
                 const keepersContract = new ethers.Contract(keepersContractAddress, keeperContractABI, provider.getSigner());

                

                const counter = await keepersContract.grantRole(a,b);
                
                //0x3F74c594596bB73661d6121b883666407d235056
            }
            async function manufact() {
                let a = document.getElementById("name").value;
                let b = document.getElementById("description").value;
                let c = document.getElementById("uuid").value;
                let d = document.getElementById("manufacturer").value;
                let e = document.getElementById("engineId").value;
                let f = document.getElementById("batteryId").value;
                let g = document.getElementById("ownerAcc").value;
                let h = document.getElementById("status").value;
                console.log(a);
                 const provider = new ethers.providers.Web3Provider(window.ethereum)
                 const keepersContract = new ethers.Contract(keepersContractAddress, keeperContractABI, provider.getSigner());

                

                const counter = await keepersContract.createAsset(a,b,c,d,e,f,g,h);
                
                //0x3F74c594596bB73661d6121b883666407d235056
            }
            async function statusChange() {
                let a = document.getElementById("uuid2").value;
                let b = document.getElementById("_status").value;

                console.log(b);
                 const provider = new ethers.providers.Web3Provider(window.ethereum)
                 const keepersContract = new ethers.Contract(keepersContractAddress, keeperContractABI, provider.getSigner());

                

                const counter = await keepersContract.ChangeAssetStatus(a,b);
                
                
            }
            async function ReportChange() {
                let a = document.getElementById("uuid3").value;
                let b = document.getElementById("_report").value;

                console.log(b);
                 const provider = new ethers.providers.Web3Provider(window.ethereum)
                 const keepersContract = new ethers.Contract(keepersContractAddress, keeperContractABI, provider.getSigner());

                

                const counter = await keepersContract.accidentReports(a,b);
                
                
            }

            async function ownerChange() {
                let a = document.getElementById("buyer").value;
                let b = document.getElementById("uuid4").value;

                console.log(b);
                 const provider = new ethers.providers.Web3Provider(window.ethereum)
                 const keepersContract = new ethers.Contract(keepersContractAddress, keeperContractABI, provider.getSigner());

                

                const counter = await keepersContract.transferAsset(a,b);
                
                
            }

            async function partDetails() {
                let a = document.getElementById("partId").value;
                

                console.log(a);
                 const provider = new ethers.providers.Web3Provider(window.ethereum)
                 const keepersContract = new ethers.Contract(keepersContractAddress, keeperContractABI, provider);

                

                const counter = await keepersContract.Partdetails(a);
                console.log(counter);
                var PartDisp=document.getElementById("partsdetails");
                PartDisp.innerHTML="Model is "+counter[0]+" , The company Manufactuer is "+counter[1]+" , The owner is "+counter[2]+" , The Part is "+counter[3];
            } 
            async function fetchCar() {
                let a = document.getElementById("sUUID").value;
                

                console.log(a);
                 const provider = new ethers.providers.Web3Provider(window.ethereum)
                 const keepersContract = new ethers.Contract(keepersContractAddress, keeperContractABI, provider);

                const counter = await keepersContract.getAssetByUUID(a);
                console.log(counter);
                var carDisp=document.getElementById("cardetails");
                carDisp.innerHTML="Model is "+counter[0]+" , General reports of car is "+counter[1]+" , The company Manufactuer is "+counter[2]+" , The EngineID is "+counter[3]+" , The BatteryID is "+counter[4]+" , The Status of the car is "+counter[5]+" , The Owner address is "+counter[6];
            } 