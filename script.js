$(".nav-link").on("click", function (e) {
  let hrefPage = $(this).attr("href");

  let sectionPage = $(hrefPage);

  $("body").animate(
    {
      scrollTop: sectionPage.offset().top,
    },
    1000
  );

  e.preventDefault();
});
