


const CONTRACT_ADDRESS = "0x37CB3739eae3c24D5C1bD5d062bb875E2414b3dc";

const CONTRACT_ABI = [
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_rideId",
                "type": "uint256"
            }
        ],
        "name": "acceptRide",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_rideId",
                "type": "uint256"
            }
        ],
        "name": "completeRide",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_rideId",
                "type": "uint256"
            }
        ],
        "name": "confirmArrival",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "driver",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "name",
                "type": "string"
            }
        ],
        "name": "DriverRegistered",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_rideId",
                "type": "uint256"
            }
        ],
        "name": "fundRide",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_licensePlate",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_vehicleType",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_vehicleName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_rate",
                "type": "uint256"
            }
        ],
        "name": "registerDriver",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "string",
                "name": "_pickup",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_destination",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "_notes",
                "type": "string"
            }
        ],
        "name": "requestRide",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "rideId",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "passenger",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "string",
                "name": "notes",
                "type": "string"
            }
        ],
        "name": "RideRequested",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "rideId",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "enum RideSharing.RideStatus",
                "name": "status",
                "type": "uint8"
            }
        ],
        "name": "RideStatusUpdated",
        "type": "event"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_rideId",
                "type": "uint256"
            }
        ],
        "name": "startRide",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "name": "drivers",
        "outputs": [
            {
                "internalType": "string",
                "name": "name",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "licensePlate",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "vehicleType",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "vehicleName",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "rate",
                "type": "uint256"
            },
            {
                "internalType": "bool",
                "name": "isRegistered",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "wallet",
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
                "name": "_driverAddress",
                "type": "address"
            }
        ],
        "name": "getDriver",
        "outputs": [
            {
                "components": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "licensePlate",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "vehicleType",
                        "type": "string"
                    },
                    {
                        "internalType": "string",
                        "name": "vehicleName",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "rate",
                        "type": "uint256"
                    },
                    {
                        "internalType": "bool",
                        "name": "isRegistered",
                        "type": "bool"
                    },
                    {
                        "internalType": "address",
                        "name": "wallet",
                        "type": "address"
                    }
                ],
                "internalType": "struct RideSharing.Driver",
                "name": "",
                "type": "tuple"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rideCounter",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "rides",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "rideId",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "passenger",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "driver",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "pickupLocation",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "destination",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "string",
                "name": "passengerNotes",
                "type": "string"
            },
            {
                "internalType": "enum RideSharing.RideStatus",
                "name": "status",
                "type": "uint8"
            },
            {
                "internalType": "bool",
                "name": "isPaid",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];


let web3;
let contract;
let userAccount;
const STATUS_LABELS = ["Requested", "Accepted", "Funded", "Started", "Completed", "Finalized", "Cancelled"];

// FUNGSI UTAMA 

async function connectWallet() {
    if (window.ethereum) {
        try {
            web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method: "eth_requestAccounts" });

            const accounts = await web3.eth.getAccounts();
            userAccount = accounts[0];

            const chainId = await web3.eth.getChainId();
            if (chainId != 11155111n) alert("⚠️ Peringatan: Anda tidak berada di Sepolia Testnet!");

            document.getElementById("status").innerHTML = "Terhubung ✅";
            document.getElementById("status").style.color = "green";
            document.getElementById("account").innerText = userAccount.substring(0, 6) + "..." + userAccount.substring(38);

            contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
            loadEvents(); // Muat data tabel saat koneksi berhasil

        } catch (error) {
            console.error(error);
            alert("Gagal: " + error.message);
        }
    } else {
        alert("MetaMask tidak terdeteksi!\n\nJika Anda membuka file ini langsung dari folder (file://), browser mungkin memblokir MetaMask.\n\nSolusi:\n1. Gunakan 'Live Server' di VS Code (rekomendasi).\n2. Atau atur ekstensi MetaMask: Settings > Extensions > MetaMask > Allow access to file URLs.");
    }
}

async function registerDriver() {
    const name = document.getElementById("regName").value;
    const vehicleName = document.getElementById("regVehicleName").value; // Baru
    const plate = document.getElementById("regPlate").value;
    const type = document.getElementById("regVehicleType").value;
    const rate = document.getElementById("regRate").value;

    if (!name || !vehicleName || !plate || !type || !rate) return alert("Isi semua data!");

    try {
        await contract.methods.registerDriver(name, vehicleName, plate, type, rate)
            .send({ from: userAccount });
        alert("✅ Registrasi Berhasil!");
        loadEvents();
    } catch (err) { alert("Error: " + err.message); }
}

async function requestRide() {
    const pickup = document.getElementById("pickup").value;
    const dest = document.getElementById("destination").value;
    const priceEth = document.getElementById("price").value;
    let notes = document.getElementById("notes").value; // Baru (Opsional)
    if (!notes) notes = ""; // Handle string kosong

    if (!pickup || !dest || !priceEth) return alert("Isi data utama!");
    const priceWei = web3.utils.toWei(priceEth, "ether");

    try {
        await contract.methods.requestRide(pickup, dest, priceWei, notes)
            .send({ from: userAccount });
        alert("✅ Order Dibuat!");
        loadEvents();
    } catch (err) { alert("Error: " + err.message); }
}

// FUNGSI ACTION
async function acceptRide() {
    const id = document.getElementById("actionRideId").value;
    if (!id) return;
    try { await contract.methods.acceptRide(id).send({ from: userAccount }); alert("Accepted!"); loadEvents(); }
    catch (e) { alert(e.message); }
}

async function fundRide() {
    const id = document.getElementById("actionRideId").value;
    if (!id) return;
    try {
        const ride = await contract.methods.rides(id).call();
        await contract.methods.fundRide(id).send({ from: userAccount, value: ride.price });
        alert("Funded!"); loadEvents();
    } catch (e) { alert(e.message); }
}

async function startRide() {
    const id = document.getElementById("actionRideId").value;
    if (!id) return;
    try { await contract.methods.startRide(id).send({ from: userAccount }); alert("Started!"); loadEvents(); }
    catch (e) { alert(e.message); }
}

async function completeRide() {
    const id = document.getElementById("actionRideId").value;
    if (!id) return;
    try { await contract.methods.completeRide(id).send({ from: userAccount }); alert("Completed!"); loadEvents(); }
    catch (e) { alert(e.message); }
}

async function confirmArrival() {
    const id = document.getElementById("actionRideId").value;
    if (!id) return;
    try { await contract.methods.confirmArrival(id).send({ from: userAccount }); alert("Confirmed & Paid!"); loadEvents(); }
    catch (e) { alert(e.message); }
}

// LOAD DATA KE TABLE
async function loadEvents() {
    if (!contract) {
        return alert("Harap hubungkan wallet (Metamask) terlebih dahulu sebelum mengambil data!");
    }

    const events = await contract.getPastEvents("DriverRegistered", { fromBlock: 0, toBlock: 'latest' });
    const driverBody = document.getElementById("driverTable").querySelector("tbody");
    driverBody.innerHTML = "";

    const processedDrivers = new Set();

    for (let i = events.length - 1; i >= 0; i--) {
        const evt = events[i];
        const addr = evt.returnValues.driver;

        if (processedDrivers.has(addr)) continue;
        processedDrivers.add(addr);

        const drv = await contract.methods.getDriver(addr).call();
        if (drv.isRegistered) {
            driverBody.innerHTML += `
                <tr>
                    <td>${drv.name}</td>
                    <td>${drv.vehicleName}</td> <td>${drv.licensePlate}</td>
                    <td>${drv.vehicleType}</td>
                    <td><small>${addr.substring(0, 6)}...${addr.substring(38)}</small></td>
                </tr>`;
        }
    }

    const counter = await contract.methods.rideCounter().call();
    const rideBody = document.getElementById("rideTable").querySelector("tbody");
    rideBody.innerHTML = "";

    for (let i = counter; i >= 1; i--) { // Loop terbalik (terbaru di atas)
        const ride = await contract.methods.rides(i).call();
        const priceEth = web3.utils.fromWei(ride.price, "ether");
        const statusLabel = STATUS_LABELS[ride.status];

        let routeInfo = `<b>${ride.pickupLocation}</b> ➝ <b>${ride.destination}</b>`;
        if (ride.passengerNotes) {
            routeInfo += `<br><small>📝 Note: ${ride.passengerNotes}</small>`;
        }

        let driverInfo = ride.driver === "0x0000000000000000000000000000000000000000" ?
            "<span style='color:gray'>Waiting...</span>" :
            `<small>${ride.driver.substring(0, 6)}...</small>`;

        rideBody.innerHTML += `
            <tr>
                <td style="text-align:center;"><b>${ride.rideId}</b></td>
                <td>${routeInfo}</td>
                <td>${driverInfo}</td>
                <td><span class="status-badge">${statusLabel}</span></td>
                <td>${priceEth} ETH</td>
            </tr>`;
    }
}