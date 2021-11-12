window.onload = function () {
  // loadTable();
  loadTracker();
};

//NOT BEING USED - LOADS ENTIRE LIST OF VILLAGERS FROM JSON
function loadTable() {
  $(document).ready(function () {
    // FETCHING DATA FROM JSON FILE
    $.getJSON("villagers.json", function (data) {
      var villager = "";

      // ITERATING THROUGH OBJECTS
      var count = 1;
      $.each(data, function (key, value) {
        //CONSTRUCTION OF ROWS HAVING
        // DATA FROM JSON OBJECT
        villager += "<tr>";
        villager += "<td>" + count + "</td>";
        villager +=
          '<td><img src="villager_img/NH-' +
          value.Name +
          '_poster.png" width="100" height="100"></td>';
        villager += "<td>" + value.Name + "</td>";
        villager += "<td>" + value.Personality + "</td>";
        villager += "<td>" + value.Species + "</td>";
        villager += "<td>" + value.Birthday + "</td>";
        villager += "<td>" + value.Catchphrase + "</td>";
        villager += "<td>" + value.Hobbies + "</td>";

        villager += "</tr>";
        count++;
      });

      //INSERTING ROWS INTO TABLE
      $("#table").append(villager);
    });
  });
}

//NOT BEING USED - Sorting capabilitlies for the table
// const getCellValue = (tr, idx) =>
//   tr.children[idx].innerText || tr.children[idx].textContent;

// const comparer = (idx, asc) => (a, b) =>
//   ((v1, v2) =>
//     v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
//       ? v1 - v2
//       : v1.toString().localeCompare(v2))(
//     getCellValue(asc ? a : b, idx),
//     getCellValue(asc ? b : a, idx)
//   );

// // do the work...
// document.querySelectorAll("th").forEach((th) =>
//   th.addEventListener("click", () => {
//     const table = th.closest("table");
//     Array.from(table.querySelectorAll("tr:nth-child(n+2)"))
//       .sort(
//         comparer(
//           Array.from(th.parentNode.children).indexOf(th),
//           (this.asc = !this.asc)
//         )
//       )
//       .forEach((tr) => table.appendChild(tr));
//   })
// );

//////////////////////////

function loadTracker() {
  $("#trackerData .villagerRow").remove();
  $.get("admin/admin.php?data=tracker").done(function (data) {
    $("#trackerData").append(data);
  });
}

const interval = setInterval(function () {
  loadTracker();
}, 60000);

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("villagerHunt");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 1; i < rows.length - 1; i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) < Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
