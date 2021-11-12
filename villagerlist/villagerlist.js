window.onload = function () {
  loadTable();
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
        villager +=
          '<td><img src="../villager_img/NH-' +
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

const getCellValue = (tr, idx) =>
  tr.children[idx].innerText || tr.children[idx].textContent;

const comparer = (idx, asc) => (a, b) =>
  ((v1, v2) =>
    v1 !== "" && v2 !== "" && !isNaN(v1) && !isNaN(v2)
      ? v1 - v2
      : v1.toString().localeCompare(v2))(
    getCellValue(asc ? a : b, idx),
    getCellValue(asc ? b : a, idx)
  );

// do the work...
document.querySelectorAll("th").forEach((th) =>
  th.addEventListener("click", () => {
    const table = th.closest("table");
    Array.from(table.querySelectorAll("tr:nth-child(n+2)"))
      .sort(
        comparer(
          Array.from(th.parentNode.children).indexOf(th),
          (this.asc = !this.asc)
        )
      )
      .forEach((tr) => table.appendChild(tr));
  })
);
