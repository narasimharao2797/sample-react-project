import React, { useState } from "react";

function GetEmployeeDetails() {
    const [showDetails, setShowDetails] = useState(false);
    const employeeDetails = {
        name: "Sai",
        age: 24,
        empNickNames: ["Sai", "MLA"],
        empAddress: {
            street: "Circle pet",
            pin: 521001
        },
        married: false,
        studying: false,
        carNumber: null,
        siteAtDelhi: undefined,
        siteDeatils: {
            ownProperty: "RJY",
            propertyType: "Land",
            contanctNumbers: [12345, 65748]
        },
        bikeNames: [
            { bike: "Passion", Year: "2006" },
            { bike: "Yamaha", Year: "2020" },
            { bike: "Access", Year: "2022" }
        ]
    };

    

    function getName(name) {
        return name;
    }

    function getInfo(toggle) {
        if (toggle === "show") {
            setShowDetails(true);
        } else {
            setShowDetails(false);
        }
    }

    return (
        <div className="App">
            <button onClick={() => getInfo("show")}>
                Show {getName("Sai")} Deatisl
            </button>
            <button onClick={() => getInfo("hide")}>
                Hide {getName("Sai")} Deatisl
            </button>

            {showDetails && (
                <div>
                    <p>
                        <label>Name: </label> <span>{employeeDetails.name}</span>
                    </p>
                    <p>
                        <label> age: </label> <span>{employeeDetails.age}</span>
                    </p>
                    <p>
                        <label> Nick Names: </label>{" "}
                        <span>
                            {employeeDetails.empNickNames.map((name) => (
                                <span key={name}> {name} </span>
                            ))}
                        </span>
                    </p>
                    <p>
                        {" "}
                        <label> Employee Address </label>{" "}
                        <span>{employeeDetails.empAddress.street} </span>{" "}
                    </p>
                    <p>
                        <label> employee Address:</label>
                        <span>{employeeDetails.empAddress.pin}</span>
                    </p>
                    <p> 
                        <label>married:</label>
                        <span>{employeeDetails.married}</span>
                    </p>

                    <p>
                        <label>studying: </label> <span>{employeeDetails.studying}</span>
                    </p>

                    <p>
                        <label>Bike Names: </label>{" "}
                        <span>
                            {employeeDetails.bikeNames.map(bike => (
                                <span key={bike.bike}> {bike.bike} </span>
                            ))}
                        </span>
                    </p>

                 
                </div>
            )}
        </div>
    );
}

export default GetEmployeeDetails;
