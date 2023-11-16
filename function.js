var inventoryForm = document.getElementById("inventoryForm");

inventoryForm.addEventListener("submit",  (e) => {
        e.preventDefault();


        let currentDesk = document.getElementById("current-desk");
        let uiiWorkstation = document.getElementById("uii-workstation");
        let newLocation = document.getElementById("new-location");

        if (currentDesk.value == "" || uiiWorkstation.value == "" || newLocation.value == "") {
            alert("Ensure you have entered data in all fields!");
        } else {
            //perform operation with form 
            alert("Successfully submitted");
            console.log(
                `current desk is ${currentDesk.value}
            uii workstation is ${uiiWorkstation.value}
            new location is ${newLocation.value}`
            );
            currentDesk.value = "";
            uiiWorkstation.value = "";
            newLocation.value = "";
        }

    });



