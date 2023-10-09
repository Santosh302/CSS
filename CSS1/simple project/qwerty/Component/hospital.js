

document.querySelector("#driver-btn").addEventListener("click", addConsultations);
var driverData = JSON.parse(localStorage.getItem("ManagerData")) || [];
var Driverres = []


function addConsultations() {
    let DriverName = document.querySelector('#drivername');
    let contact = document.querySelector('#contact');
    let email = document.querySelector('#email');
    let date = document.querySelector('#date');
    let time = document.querySelector('#time');
    let queries = document.querySelector('#queries');
    let Driverlocation = document.querySelector('#driverlocation');

    // if (DriverName.length == "") {
    //     alert("Please enter Name")
    //     return ;
    // }
    // if (contact.length == "") {
    //     alert("Please enter Mobile no.")
    //     return ;
    // }
    // if (email.length == "") {
    //     alert("Please select a email.")
    //     return ;
    // }
    // if (date.length == "") {
    //     alert("Please enter date")
    //     return ;
    // }
    // if (time.length == "") {
    //     alert("Please enter time")
    //     return ;

    // }
    // if (queries.length == "") {
    //     alert("Please enter queries")
    //     return ;

    // }
    // if (Driverlocation.length == "") {
    //     alert("Please enter location")
    //     return ;

    // }

    let newConsultation = {
        id: "anonymous" + driverData.length+1,
        name: DriverName.value,
        email: email.value,
        contact: contact.value,
        date: date.value,
        time: time.value,
        queries: queries.value,
        location: Driverlocation.value
    }

    driverData.push(newConsultation);
    alert("Submitted Successfully!")
    localStorage.setItem("ManagerData", JSON.stringify(driverData));
    
    showConsultations()
}
showConsultations()

function showConsultations() {
    var driverData = JSON.parse(localStorage.getItem("ManagerData")) || [];

            // let ConsultationHTML = document.createElement('li');
            // ConsultationHTML.setAttribute('data-consultation-id', cursor.value.key);
            // ConsultationHTML.classList.add('list-group-item')
            let consultations = document.querySelector('#consultations');
            if(driverData.length !== 0) {
          
            driverData.map(function (elem) {
          
                console.log(elem, "EeeeE")
            let  ConsultationHTML = document.createElement('li');

                var p1 = document.createElement("p");
                p1.textContent = "Name : " + elem.name;
                var p2 = document.createElement("p");
                p2.textContent = "Contact : " + elem.contact;
                  var p3 = document.createElement("p");
                p3.textContent = "Email : " + elem.email;
                var p4 = document.createElement("p");
                p4.textContent = "Date : " + elem.date;
                var p5 = document.createElement("p");
                p5.textContent = "Time : " + elem.time;
                var p6 = document.createElement("p");
                p6.textContent = "Queries : " + elem.queries;
                var p7 = document.createElement("p");
                p7.textContent = "Location : " + elem.location;

                const cancelBtn = document.createElement('button');
                cancelBtn.classList.add('btn', 'btn-danger');
                cancelBtn.innerHTML = 'Cancel';
                cancelBtn.value = elem.id;
                cancelBtn.onclick = removeConsultation;
    
                const callBtn = document.createElement('button');
                callBtn.classList.add('btn', 'btn-success', "m-1");
                callBtn.innerHTML = 'Call';
                callBtn.value = elem.contact;
                callBtn.onclick = callDriver;
    
                ConsultationHTML.append(p1, p2, p3, p4, p5, p6, p7);
    
                ConsultationHTML.append(cancelBtn);
                ConsultationHTML.append(callBtn);
                
                consultations.append(ConsultationHTML);
            })
                  
        } else {

                            let noSchedule = document.createElement('p');
            
                            noSchedule.classList.add('text-center');
            
                            noSchedule.textContent = 'No results Found';
            
                            consultations.appendChild(noSchedule);
        }
          
        
    }

    function callDriver(e) {
        e.preventDefault()
        alert("Calling to " + e.target.value + ".!")
    }

    function removeConsultation(e) {
        e.preventDefault()
        let id = e.target.value;
        var driverData = JSON.parse(localStorage.getItem("ManagerData")) || [];
 
        const updatedHero = driverData.filter(item => item.id !== id);
        localStorage.setItem("ManagerData", JSON.stringify(updatedHero));
        alert("Delete successfully! please refresh the page")
    }



    



    showDriverConsultations()

function showDriverConsultations() {
    var DriverData = JSON.parse(localStorage.getItem("driverData")) || [];

            // let ConsultationHTML = document.createElement('li');
            // ConsultationHTML.setAttribute('data-consultation-id', cursor.value.key);
            // ConsultationHTML.classList.add('list-group-item')
            let consultations = document.querySelector('#driverconsultations');
            if(DriverData.length !== 0) {
          
                DriverData.map(function (elem) {
          
            let  ConsultationHTML = document.createElement('li');

                var p1 = document.createElement("p");
                p1.textContent = "Name : " + elem.name;
                var p2 = document.createElement("p");
                p2.textContent = "Contact : " + elem.contact;
                  var p3 = document.createElement("p");
                p3.textContent = "Email : " + elem.email;
                var p4 = document.createElement("p");
                p4.textContent = "Date : " + elem.date;
                var p5 = document.createElement("p");
                p5.textContent = "Time : " + elem.time;
                var p6 = document.createElement("p");
                p6.textContent = "Queries : " + elem.queries;
                var p7 = document.createElement("p");
                p7.textContent = "Location : " + elem.location;

                const cancelBtn = document.createElement('button');
                cancelBtn.classList.add('btn', 'btn-danger');
                cancelBtn.innerHTML = 'Cancel';
                cancelBtn.value = elem.id;
                cancelBtn.onclick = removeConsultation;
    
                const callBtn = document.createElement('button');
                callBtn.classList.add('btn', 'btn-success', "m-1");
                callBtn.innerHTML = 'Call';
                callBtn.value = elem.contact;
                callBtn.onclick = callDriver;
    
                ConsultationHTML.append(p1, p2, p3, p4, p5, p6, p7);
    
                ConsultationHTML.append(cancelBtn);
                ConsultationHTML.append(callBtn);
                
                consultations.append(ConsultationHTML);
            })
                  
        } else {

                            let noSchedule = document.createElement('p');
            
                            noSchedule.classList.add('text-center');
            
                            noSchedule.textContent = 'No results Found';
            
                            consultations.appendChild(noSchedule);
        }
          
        
    }

    function callDriver(e) {
        e.preventDefault()
        alert("Calling to " + e.target.value + ".!")
    }

    function removeConsultation(e) {
        e.preventDefault()
        let id = e.target.value;
        var DriverData = JSON.parse(localStorage.getItem("driverData")) || [];
 
        const updatedHero = DriverData.filter(item => item.id !== id);
        localStorage.setItem("driverData", JSON.stringify(updatedHero));
        alert("Delete successfully! please refresh the page")
    }
