! function(c) {
    function e(n) {
        return n < 10 ? "0" + n : n
    }
    c.fn.showclock = function() {
        var n = new Date,
            o = c(this).data("date").split("-"),
            s = [0, 0];
        if (null != c(this).data("time") && (s = c(this).data("time").split(":")), (a = new Date(o[0], o[1] - 1, o[2], s[0], s[1]).getTime() / 1e3 - n.getTime() / 1e3) <= 0 || isNaN(a)) return $(el).hide(), this;
        var t = Math.floor(a / 86400);
        a %= 86400;
        o = Math.floor(a / 3600);
        a %= 3600;
        var s = Math.floor(a / 60),
            a = Math.floor(a % 60),
            n = "";
        0 != t && (n += "<div class='countdown-container days'>", n += "<span class='countdown-value days-bottom'>" + e(t) + "</span>", n += "<span class='countdown-heading days-top'>Days</span>", n += "</div>"), n += "<div class='countdown-container hours'>", n += "<span class='countdown-value hours-bottom'>" + e(o) + "</span>", n += "<span class='countdown-heading hours-top'>Hrs</span>", n += "</div>", n += "<div class='countdown-container minutes'>", n += "<span class='countdown-value minutes-bottom'>" + e(s) + "</span>", n += "<span class='countdown-heading minutes-top'>Mins</span>", n += "</div>", n += "<div class='countdown-container seconds'>", n += "<span class='countdown-value seconds-bottom'>" + e(a) + "</span>", n += "<span class='countdown-heading seconds-top'>Secs</span>", this.html(n += "</div>")
    }, c.fn.countdown = function() {
        var n = c(this);
        n.showclock(), setInterval(function() {
            n.showclock()
        }, 1e3)
    }
}(jQuery), jQuery(document).ready(function() {
    0 < jQuery(".countdown").length && jQuery(".countdown").each(function() {
        // jQuery(this).countdown()
        // deploy_countdown(jQuery);
        countdownT();
    })
});


function eT(n) {
    return n < 10 ? "0" + n : n
}

// 1. Adicionamos el en esta función
function showclockT(el) {
    var n = new Date,
        o = jQuery(".countdown").data("date").split("-"),
        s = [0, 0];
    if (null != jQuery(".countdown").data("time") && (s = jQuery(".countdown").data("time").split(":")), (a = new Date(o[0], o[1] - 1, o[2], s[0], s[1]).getTime() / 1e3 - n.getTime() / 1e3) <= 0 || isNaN(a)) return $(el).hide(), this;
    var t = Math.floor(a / 86400);
    a %= 86400;
    o = Math.floor(a / 3600);
    a %= 3600;
    var s = Math.floor(a / 60),
        a = Math.floor(a % 60),
        n = "";
    0 != t && (n += "<div class='countdown-container days'>", n += "<span class='countdown-value days-bottom'>" + eT(t) + "</span>", n += "<span class='countdown-heading days-top'>Days</span>", n += "</div>"), n += "<div class='countdown-container hours'>", n += "<span class='countdown-value hours-bottom'>" + eT(o) + "</span>", n += "<span class='countdown-heading hours-top'>Hrs</span>", n += "</div>", n += "<div class='countdown-container minutes'>", n += "<span class='countdown-value minutes-bottom'>" + eT(s) + "</span>", n += "<span class='countdown-heading minutes-top'>Mins</span>", n += "</div>", n += "<div class='countdown-container seconds'>", n += "<span class='countdown-value seconds-bottom'>" + eT(a) + "</span>", n += "<span class='countdown-heading seconds-top'>Secs</span>", jQuery(".countdown").html(n += "</div>")
}

// 2. Realizamos bien el llamado a la función de showclockT enciando this. Con ello ya no se muestran mensajes en consola de errores.
function countdownT() {
    showclockT(this)
    setInterval(function() {
        showclockT(this)
    }, 1e3)
}

