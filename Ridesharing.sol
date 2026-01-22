// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RideSharing {
    
    // Untuk status pesanan
    enum RideStatus { Requested, Accepted, Funded, Started, CompletedByDriver, Finalized, Cancelled }

    struct Driver {
        string name;
        string licensePlate;
        string vehicleType;
        string vehicleName;
        uint256 rate; 
        bool isRegistered;
        address wallet;
    }

    struct Ride {
        uint256 rideId;
        address passenger;
        address driver;
        string pickupLocation;
        string destination;
        uint256 price;
        string passengerNotes;
        RideStatus status;
        bool isPaid;
    }

    uint256 public rideCounter;
    mapping(address => Driver) public drivers;
    mapping(uint256 => Ride) public rides;
    
    // Events untuk log aktivitas di frontend
    event DriverRegistered(address indexed driver, string name);
    event RideRequested(uint256 indexed rideId, address indexed passenger, uint256 price, string notes);
    event RideStatusUpdated(uint256 indexed rideId, RideStatus status);

    modifier onlyDriver() {
        require(drivers[msg.sender].isRegistered, "Anda bukan pengemudi terdaftar");
        _;
    }

    // --- BAGIAN A: Data Pengemudi [cite: 55] ---

    //Mendaftarkan pengemudi baru ke sistem
    function registerDriver(string memory _name, string memory _licensePlate, string memory _vehicleType, string memory _vehicleName, uint256 _rate) public {
        require(!drivers[msg.sender].isRegistered, "Driver sudah terdaftar");
        
        drivers[msg.sender] = Driver({
            name: _name,
            licensePlate: _licensePlate,
            vehicleType: _vehicleType,
            vehicleName: _vehicleName,
            rate: _rate,
            isRegistered: true,
            wallet: msg.sender
        });

        emit DriverRegistered(msg.sender, _name);
    }

    //Melihat data pengemudi
    function getDriver(address _driverAddress) public view returns (Driver memory) {
        return drivers[_driverAddress];
    }

    // --- BAGIAN B & C: Pemesanan & Aturan Dana [cite: 58, 71] ---

    //Penumpang membuat pesanan perjalanan
    function requestRide(string memory _pickup, string memory _destination, uint256 _price, string memory _notes) public {
        rideCounter++;
        rides[rideCounter] = Ride({
            rideId: rideCounter,
            passenger: msg.sender,
            driver: address(0),
            pickupLocation: _pickup,
            destination: _destination,
            passengerNotes: _notes,
            price: _price,
            status: RideStatus.Requested,
            isPaid: false
        });

        emit RideRequested(rideCounter, msg.sender, _price, _notes);
    }

    //Pengemudi menerima pesanan
    function acceptRide(uint256 _rideId) public onlyDriver {
        Ride storage ride = rides[_rideId];
        require(ride.status == RideStatus.Requested, "Pesanan tidak tersedia");

        ride.driver = msg.sender;
        ride.status = RideStatus.Accepted;
        
        emit RideStatusUpdated(_rideId, RideStatus.Accepted);
    }

    //Penumpang menyetor dana ke Contract (Escrow)
    function fundRide(uint256 _rideId) public payable {
        Ride storage ride = rides[_rideId];
        require(msg.sender == ride.passenger, "Hanya penumpang yang bisa membayar");
        require(ride.status == RideStatus.Accepted, "Driver belum menerima pesanan");
        require(msg.value == ride.price, "Jumlah pembayaran tidak sesuai");

        ride.isPaid = true;
        ride.status = RideStatus.Funded;

        emit RideStatusUpdated(_rideId, RideStatus.Funded);
    }

    //Driver memulai perjalanan
    function startRide(uint256 _rideId) public {
        Ride storage ride = rides[_rideId];
        require(msg.sender == ride.driver, "Bukan driver pesanan ini");
        require(ride.status == RideStatus.Funded, "Penumpang belum membayar");

        ride.status = RideStatus.Started;
        emit RideStatusUpdated(_rideId, RideStatus.Started);
    }

    //Driver menyelesaikan perjalanan
    function completeRide(uint256 _rideId) public {
        Ride storage ride = rides[_rideId];
        require(msg.sender == ride.driver, "Bukan driver pesanan ini");
        require(ride.status == RideStatus.Started, "Perjalanan belum dimulai");

        ride.status = RideStatus.CompletedByDriver;
        emit RideStatusUpdated(_rideId, RideStatus.CompletedByDriver);
    }

    //Penumpang konfirmasi selesai -> Dana cair ke Driver
    function confirmArrival(uint256 _rideId) public {
        Ride storage ride = rides[_rideId];
        require(msg.sender == ride.passenger, "Hanya penumpang bisa konfirmasi");
        require(ride.status == RideStatus.CompletedByDriver, "Driver belum menyelesaikan");

        ride.status = RideStatus.Finalized;
        
        // Transfer dana ke driver
        payable(ride.driver).transfer(ride.price);

        emit RideStatusUpdated(_rideId, RideStatus.Finalized);
    }
}