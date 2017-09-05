$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/aml007.json',
    dataType: 'jsonp',
    success: function(response) {
      var courses = response.courses.completed;

      $.each(courses, function(index, course) {
        var title = $('<h3>').text(course.title);
        var image = $('<img>').attr('src', course.badge);
        var link = $('<a>').attr({href: course.url, target: '_blank'})
          .addClass('btn btn-primary').text('See Course');

        var course = $('<div>').addClass('course')
          .append(title)
          .append(image)
          .append(link);

        $('#badges').append(course);
      });
    }
  });
});