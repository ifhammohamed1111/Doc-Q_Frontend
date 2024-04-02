const filterArr = [];
let data = [
    {
        Name: "Mary Joseph",
        Diagnosis: "Malaria",
        Status: "Recovered",
        LastAppointment: "20/10/2022",
        NextAppointment: "1/12/2022",
        Options: "...",
    },
    {
        Name: "Amala Jones",
        Diagnosis: "Stroke",
        Status: "Awaiting surgery",
        LastAppointment: "11/10/2022",
        NextAppointment: "1/12/2022",
        Options: "...",
    },
    {
        Name: "Damilola Oyin",
        Diagnosis: "Liver failure",
        Status: "On treatment",
        LastAppointment: "9/10/2022",
        NextAppointment: "1/11/2022",
        Options: "...",
    },
    {
        Name: "Selim jubril",
        Diagnosis: "Typhoid",
        Status: "Awaiting surgery",
        LastAppointment: "12/10/2022",
        NextAppointment: "2/12/2022",
        Options: "...",
    },
    {
        Name: "Paul christian",
        Diagnosis: "Gonorrhea",
        Status: "On treatment",
        LastAppointment: "22/10/2022",
        NextAppointment: "3/12/2022",
        Options: "...",
    },
    {
        Name: "Rosabel Briggs",
        Diagnosis: "Malaria",
        Status: "Recovered",
        LastAppointment: "23/10/2022",
        NextAppointment: "4/12/2022",
        Options: "...",
    },
    {
        Name: "Tina Adekeye",
        Diagnosis: "Syphilis",
        Status: "Recovered",
        LastAppointment: "19/10/2022",
        NextAppointment: "5/12/2022",
        Options: "...",
    },
    {
        Name: "Mark Bossman",
        Diagnosis: "Malaria",
        Status: "Recovered",
        LastAppointment: "17/10/2022",
        NextAppointment: "2/12/2022",
        Options: "...",
    }
];

const divv = document.getElementById("userList1");

function adjustStyles() {
    const windowWidth = window.innerWidth;
    const userDataElements = document.querySelectorAll(".userData");

    userDataElements.forEach(element => {
        if (windowWidth <= 600) {
            element.style.padding = "5px";
        } else if (windowWidth <= 768) {
            element.style.padding = "8px";
        } else {
            element.style.padding = "10px";
        }
    });
}

data.forEach((user) => {
    const li = document.createElement("li");
    li.classList.add("userData");

    let bgColor, textColor;
    let borderRadius = "4px";

    switch (user.Status) {
        case "Recovered":
            bgColor = "#c8e6c9";
            textColor = "#2e7d32";
            break;
        case "Awaiting surgery":
            bgColor = "#bbdefb";
            textColor = "#0d47a1";
            break;
        case "On treatment":
            bgColor = "#ffcdd2";
            textColor = "#c62828";
            break;
        default:
            bgColor = "#ffffff";
            textColor = "#000000";
    }

    if (user.Status === "Recovered" || user.Status === "Awaiting surgery" || user.Status === "On treatment") {
        borderRadius = "15px";
    }

    li.innerHTML = `
        <span>${user.Name}</span>
        <span>${user.Diagnosis}</span>
        <span style="background-color: ${bgColor}; color: ${textColor}; border-radius: ${borderRadius}; padding: 5px 10px;">${user.Status}</span>
        <span>${user.LastAppointment}</span>
        <span>${user.NextAppointment}</span>
        <span>${user.Options}</span>
    `;
    divv.appendChild(li);
    filterArr.push(li);
});

// Calling adjustStyles initially and on window resize
adjustStyles();
window.addEventListener('resize', adjustStyles);
