$("#submitButton").on("click", function (e) {
  $.post("admin.php?data=login&password=" + $("#adminPassword").val()).done(
    function (data) {
      if (data == "success") {
        location.href = "index.html";
      } else {
        location.href = "login.html";
      }
    }
  );
});
