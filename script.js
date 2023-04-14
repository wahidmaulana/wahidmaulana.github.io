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

// typed js
var typed = new Typed(".heading", {
  strings: ["I'm a <b>nice guy</b> "],
  typeSpeed: 100,
  backSpeed: 150,
  startDelay: 1000,
  loop: true,
});
