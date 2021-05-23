$(document).ready(function () {
  function getFormData(data) {
    var unindexed_array = data;
    var indexed_array = {};

    $.map(unindexed_array, function (n, i) {
      indexed_array[n["name"]] = n["value"];
    });

    return indexed_array;
  }

  $("#createCourse").submit(function (e) {
    const data = getFormData($("#createCourse").serializeArray());
    $.ajax({
      url: "http://localhost:5050/createCourse",
      type: "POST",
      crossDomain: true,
      data: JSON.stringify(data),
      dataType: "application/json",
      contentType: "application/json",
      success: function (data) {
        console.log(ko.toJSON(data));
      },
    });
  });

  $("#viewCourse").submit(function (e) {
    const courseId = $("#courseId").val();
    

    // $.get('http://localhost:5050/viewCourse/307', function (data) {
    //   debugger;
    //   console.log(ko.toJSON(data));
    // });

    $.ajax({
      url: `http://localhost:5050/viewCourse/${courseId}`,
      type: "GET",
      crossDomain: true,
      contentType: "application/json",
      success: function (data) {
        debugger;
        console.log(ko.toJSON(data));
      },
      error: function( error ){
          debugger;

      },
    });
  });
});
