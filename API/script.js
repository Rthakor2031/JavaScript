async function search() {
    let value = document.querySelector("#Get").value;
    const details = document.querySelector(".all_data");

    let prom = await fetch('https://data.covid19india.org/state_district_wise.json');
    let collect_data = await prom.json();

    if (collect_data[value]) {
        let temp = collect_data[value];
        details.innerHTML = '';

        for (let district in temp.districtData) {
            let districtData = temp.districtData[district];

            let row = details.insertRow();
            let col1 = row.insertCell(0);
            col1.style.color = "white"
            let col2 = row.insertCell(1);
            col2.style.color = "white";
            let col3 = row.insertCell(2);
            col3.style.color = "white"
            let col4 = row.insertCell(3);
            col4.style.color = "white"
            let col5 = row.insertCell(4);
            col5.style.color = "red"
            let col6 = row.insertCell(5);
            col6.style.color = "white"


            col1.textContent = district;
            col2.textContent = districtData.active;
            col3.textContent = districtData.confirmed;
            col4.textContent = districtData.recovered;
            col5.textContent = districtData.deceased;
            col6.textContent = districtData.migratedother;
        }
    }
    else
        alert("Entered data not found!.");
}