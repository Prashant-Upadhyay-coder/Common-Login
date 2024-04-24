function modifiedTable(prntID, chid, Jsondata, dtHide, pgLength, vaL) {
    var jsondata = Jsondata;
    var table = document.createElement("table");
    table.setAttribute('id', chid);
    table.setAttribute('class', 'table display');
    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    let cols = Object.keys(jsondata[0]);
    var header = table.createTHead();
    var tr = table.insertRow(-1); // TABLE ROW.  .
    for (var i = 0; i < cols.length; i++) {
        var th = document.createElement("th"); // TABLE HEADER.
        th.innerHTML = cols[i];
        tr.appendChild(th);
    }
    // ADD JSON DATA TO THE TABLE AS ROWS.
    for (var i = 0; i < jsondata.length; i++) {
        tr = table.insertRow(-1);
        for (var j = 0; j < cols.length; j++) {
            var tabCell = tr.insertCell(-1);
            console.log(cols[j]);
            if (cols[j] == 'StartDate') {
                var date1 = moment(jsondata[i].StartDate).format('DD-MM-YYYY');
                jsondata[i].StartDate = date1;
                console.log(jsondata[i].StartDate, 'date')
            };
            if (cols[j] == 'EndDate') {
                var date2 = moment(jsondata[i].EndDate).format('DD-MM-YYYY');
                jsondata[i].EndDate = date2;
                console.log(jsondata[i].EndDate, 'EndDate');
            };
            if (cols[j] == 'Status') {
                if (jsondata[i].Status == '0' || jsondata[i].Status == 0) {
                    jsondata[i].Status = 'In Active'
                }
            }
            tabCell.innerHTML += jsondata[i][cols[j]];
        }
    }
    // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
    var divContainer = document.getElementById(prntID);
    divContainer.innerHTML = "";
    divContainer.appendChild(table);
    var x = document.getElementById(chid).rows[0];
    $(header).append(x);
    //customTable(dtHide, tbName);// remove data
    if (vaL == true) {
        customTable(dtHide, pgLength, chid);// remove data
    };
};
function customTable(dtHide, pgLength, chid) {
    const tablName = document.getElementById(chid);
    $(tablName).DataTable({
        pageLength: pgLength,
        "aoColumnDefs": [
            { "bSearchable": false, "bVisible": false, "aTargets": dtHide },
            //{ "bVisible": false, "aTargets": [3] }
        ]
    });
}