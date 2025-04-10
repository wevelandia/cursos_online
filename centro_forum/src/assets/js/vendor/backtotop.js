//!function(o){"use strict";o(document).ready(function(){var r=document.querySelector(".rbt-progress-parent path"),n=r.getTotalLength();r.style.transition=r.style.WebkitTransition="none",r.style.strokeDasharray=n+" "+n,r.style.strokeDashoffset=n,r.getBoundingClientRect(),r.style.transition=r.style.WebkitTransition="stroke-dashoffset 10ms linear";function t(){var t=o(window).scrollTop(),e=o(document).height()-o(window).height();r.style.strokeDashoffset=n-t*n/e}t(),o(window).scroll(t);jQuery(window).on("scroll",function(){50<jQuery(this).scrollTop()?jQuery(".rbt-progress-parent").addClass("rbt-backto-top-active"):jQuery(".rbt-progress-parent").removeClass("rbt-backto-top-active")}),jQuery(".rbt-progress-parent").on("click",function(t){return t.preventDefault(),jQuery("html, body").animate({scrollTop:0},550),!1})})}(jQuery);

function BACKTOP(o) {
  "use strict";

  o(document).ready(function () {
    setTimeout(function waitForPath() {
      const r = document.querySelector(".rbt-progress-parent path");

      if (!r) {
        console.warn("No se encontró el elemento .rbt-progress-parent path. Reintentando...");
        // Reintenta cada 200ms hasta que aparezca, por máximo 5 segundos
        return setTimeout(waitForPath, 200);
      }

      // Si ya existe, continua con la lógica
      var n = r.getTotalLength();
      r.style.transition = r.style.WebkitTransition = "none";
      r.style.strokeDasharray = n + " " + n;
      r.style.strokeDashoffset = n;
      r.getBoundingClientRect();
      r.style.transition = r.style.WebkitTransition = "stroke-dashoffset 10ms linear";

      function t() {
        var t = o(window).scrollTop(),
            e = o(document).height() - o(window).height();
        r.style.strokeDashoffset = n - t * n / e;
      }

      t();
      o(window).scroll(t);

      o(window).on("scroll", function () {
        o(this).scrollTop() > 50
          ? o(".rbt-progress-parent").addClass("rbt-backto-top-active")
          : o(".rbt-progress-parent").removeClass("rbt-backto-top-active");
      });

      o(".rbt-progress-parent").on("click", function (t) {
        t.preventDefault();
        o("html, body").animate({ scrollTop: 0 }, 550);
        return false;
      });
    }, 200); // Espera inicial antes del primer intento
  });
}
