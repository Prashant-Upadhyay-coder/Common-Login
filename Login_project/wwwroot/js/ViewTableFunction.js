var dt1 = null;
var dt2 = [];
var field_name = [];
var editIcon = `<svg x="0px" y="0px" width="15" height="15" fill="#0d6efd" viewBox="0 0 512 512" class="m - r - 5"><path d="M490.3 40.4C512.2 62.27 512.2 97.73 490.3 119.6L460.3 149.7L362.3 51.72L392.4 21.66C414.3 - .2135 449.7 - .2135 471.6 21.66L490.3 40.4zM172.4 241.7L339.7 74.34L437.7 172.3L270.3 339.6C264.2 345.8 256.7 350.4 248.4 353.2L159.6 382.8C150.1 385.6 141.5 383.4 135 376.1C128.6 370.5 126.4 361 129.2 352.4L158.8 263.6C161.6 255.3 166.2 247.8 172.4 241.7V241.7zM192 63.1C209.7 63.1 224 78.33 224 95.1C224 113.7 209.7 127.1 192 127.1H96C78.33 127.1 64 142.3 64 159.1V416C64 433.7 78.33 448 96 448H352C369.7 448 384 433.7 384 416V319.1C384 302.3 398.3 287.1 416 287.1C433.7 287.1 448 302.3 448 319.1V416C448 469 405 512 352 512H96C42.98 512 0 469 0 416V159.1C0 106.1 42.98 63.1 96 63.1H192z" /></svg>`;
function createTable(prntID, chid, Jsondata) {
    var jsondata = Jsondata;
    var table = document.createElement("table");
    table.setAttribute('id', chid);
    table.setAttribute('class', 'table display');
    table.style.width = '100%';
    // CREATE HTML TABLE HEADER ROW USING THE EXTRACTED HEADERS ABOVE.
    let cols = Object.keys(jsondata[0]);
    var header = table.createTHead();
    var tr = table.insertRow(-1); // TABLE ROW.  .
    for (var i = 0; i < cols.length; i++) {
        var th = document.createElement("th"); // TABLE HEADER.
        const str = cols[i];
        testCol = str.replace(/([A-Z])/g, ' $1').trim();
        console.log(testCol, 'testCol');
        th.innerHTML = testCol;
        tr.appendChild(th);
        //th.innerHTML = cols[i];
        //tr.appendChild(th);
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
            };
            if (cols[j] == 'Efforts') {
                //if (jsondata[i].Efforts == '0' || jsondata[i].Efforts == 0) {
                //    jsondata[i].Status = 'In Active'
                //}
                var EffortTime = jsondata[i].Efforts.split('.')[0];
                jsondata[i].Efforts = EffortTime;
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
};