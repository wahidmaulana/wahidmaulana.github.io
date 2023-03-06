$(".nav-link").on("click", function (e) {
  let hrefPage = $(this).attr("href");

  let sectionPage = $(hrefPage);

  $("html").animate(
    {
      scrollTop: sectionPage.offset().top,
    },
    1000
  );

  e.preventDefault();
});
