window.onload = function () {
  loadOptions();
  loadTracker();
};

function loadOptions() {
  $(document).ready(function () {
    // FETCHING DATA FROM JSON FILE
    $.getJSON("../villagers.json", function (data) {
      var villager = "";

      // ITERATING THROUGH OBJECTS
      $.each(data, function (key, value) {
        //CONSTRUCTION OF ROWS HAVING
        // DATA FROM JSON OBJECT
        villager +=
          '<option value="' + value.Name + '">' + value.Name + "</option>";
      });

      //INSERTING ROWS INTO TABLE
      $("#villagerEntry").append(villager);
    });
  });
}

function loadTracker() {
  $("#trackerData .villagerRow").remove();
  $.get("admin.php?data=trackerAdmin").done(function (data) {
    $("#trackerData").append(data);
  });
}

$("#addVillager").on("click", function (e) {
  $.get(
    "admin.php?data=addVillager&villager=" + $("#villagerEntry").val()
  ).done(function () {
    loadTracker();
  });
});

$(document).on("click", ".deleteBtn", function (e) {
  $.get("admin.php?data=deleteVillager&villager=" + $(this).val()).done(
    function () {
      loadTracker();
    }
  );
});

const interval = setInterval(function () {
  loadTracker();
}, 60000);
