/*
   File: script.js
   GUI Assignment: HW3
   Description: Multiplication Table Website
   Vittoria Santoro, UMass Lowell Computer Science, vittoria_santoro@student.uml.edu
   Copyright (c) 2025 by Santoro. All rights reserved. May be freely copied or
   excerpted for educational purposes with credit to the author.
 */
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("tableForm");

    const multTable = document.getElementById("multTable");

    form.addEventListener("submit", function (event) {
        // preventDEfault prevents page reloading during submit event
        event.preventDefault();

        const minCol = parseInt(document.getElementById("minCol").value);
        const maxCol = parseInt(document.getElementById("maxCol").value);
        const minRow = parseInt(document.getElementById("minRow").value);
        const maxRow = parseInt(document.getElementById("maxRow").value);

        console.log("min col ", minCol);
        console.log("max col", maxCol);
        console.log("min row", minRow);
        console.log("max row", maxRow);

        let tableHTML = "<table>"

        let error = "<p>ERROR</p>"

        if (minCol >= maxCol){
            error += "<p>Min Column Must be Less than Max Column</p>";
        }
        if (minRow >= maxRow){
            error += "<p>Min Row Must be Less than Max Row</p>";
        }
        if ((maxCol - minCol) > 100)
        {
            error += "<p>The given width is too large. Please input a smaller range.</p>"
        }
        if ((maxRow - minRow) > 100)
        {
            error += "<p>The given height is too large. Please input a smaller range.</p>"
        }
        // if nothing was appended to the error string, then create the multiplication table html
        if( error === "<p>ERROR</p>" )
        {
            // initate with table header (columns)
            tableHTML += "<tr><th></th>"
            for (let k = minCol; k <= maxCol; k++)
            {
                tableHTML += `<th>${k}</th>`
            }
            tableHTML += "</tr>"
            for (let i = minRow; i <= maxRow; i++)
            {
                // the first element of each row should be a table header (row header)
                tableHTML += `<tr><th>${i}</th>`
                for (let j = minCol; j <= maxCol; j++)
                {
                    tableHTML += `<td>${i * j}</td>`
                }
                tableHTML += "</tr>"
            }
            tableHTML += "</table>";
            console.log(tableHTML);
            multTable.innerHTML = tableHTML;
        }
        else
        {
            multTable.innerHTML = error;
        }
    });
});
