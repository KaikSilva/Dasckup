$(function () {
    "use strict";
    new PerfectScrollbar(".header-message-list"),
        new PerfectScrollbar(".header-notifications-list"),
        $(".mobile-search-icon").on("click", function () {
            $(".search-bar").addClass("full-search-bar"), $(".page-wrapper").addClass("search-overlay");
        }),
        $(".search-close").on("click", function () {
            $(".search-bar").removeClass("full-search-bar"), $(".page-wrapper").removeClass("search-overlay");
        }),
        $(".mobile-toggle-menu").on("click", function () {
            $(".wrapper").addClass("toggled");
        }),
        $(".toggle-icon").click(function () {
            $(".wrapper").hasClass("toggled")
                ? ($(".wrapper").removeClass("toggled"), $(".sidebar-wrapper").unbind("hover"))
                : ($(".wrapper").addClass("toggled"),
                    $(".sidebar-wrapper").hover(
                        function () {
                            $(".wrapper").addClass("sidebar-hovered");
                        },
                        function () {
                            $(".wrapper").removeClass("sidebar-hovered");
                        }
                    ));
        }),
        $(document).ready(function () {
            $(window).on("scroll", function () {
                300 < $(this).scrollTop() ? $(".back-to-top").fadeIn() : $(".back-to-top").fadeOut();
            }),
                $(".back-to-top").on("click", function () {
                    return $("html, body").animate({ scrollTop: 0 }, 600), !1;
                });
        }),
        $(function () {
            for (
                var o = window.location,
                    e = $(".metismenu li a")
                        .filter(function () {
                            return this.href == o;
                        })
                        .addClass("")
                        .parent()
                        .addClass("mm-active");
                e.is("li");

            )
                e = e.parent("").addClass("mm-show").parent("").addClass("mm-active");
        }),
        $(function () {
            $("#menu").metisMenu();
        })

});
