$(document).ready(function () {
  // 移除语言检测，直接使用英文
  const navbar_data = {
    title: enNavbarData.title,
    navbar_links: [
      {
        active: navbarLinks.home ? true : false,
        title: enNavbarData.Home,
        url: "/",
      },
      {
        active: navbarLinks.publications ? true : false,
        title: enNavbarData.publications,
        url: "/publications.html",
      },
      {
        active: navbarLinks.cv ? true : false,
        title: enNavbarData.cv,
        url: "/cv.html",
      },
      {
        active: navbarLinks.jobs ? true : false,
        title: enNavbarData.Jobs,
        url: "/jobs.html",
      },
      {
        active: navbarLinks.contact ? true : false,
        title: enNavbarData.Contact,
        url: "/contact.html",
      },
    ],
  };
  
  function navbarData() {
    document.getElementById("navbar_title").innerHTML = navbar_data.title;
    document.getElementById("navbar_title").href = "/";
    document.getElementById("navbar_links").innerHTML = navbar_data.navbar_links
      .filter((item) => item.active)
      .map(
        (link) =>
          `<li class="nav-item">
              
              ${
                window.location.pathname === link.url
                  ? "class='nav-link active'"
                  : "class='nav-link'"
              }
              href=${link.url}
              >${link.title}</a>
            </li>`
      )
      .join("");
  }
  navbarData();
});
