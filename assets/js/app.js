/*
 Template Name: Annex - Bootstrap 4 Admin Dashboard
 Author: Mannatthemes
 Website: www.mannatthemes.com
 File: Main js
 */
"use strict";
// let form = document.querySelector('form');
// form.addEventListener('submit',()=>{
//    console.log("clicked")
// })
// alert("sign in")

//JQuery to toggle between eye
// (function($) {

//     $(".toggle-password").click(function() {

//   $(this).toggleClass("fa-eye fa-eye-slash");
//   var input = $($(this).attr("toggle"));
//   if (input.attr("type") == "password") {
//     input.attr("type", "text");
//   } else {
//     input.attr("type", "password");
//   }
// });

// })(jQuery);

// alert("hello")

document.getElementById('click').addEventListener('click', () => {
    // debugger

    // alert("hello")
    let fav = document.querySelector('#fav-plus');
    let node = fav.getAttributeNode('class');
    // fav.removeAttributeNode(node);
    fav.classList.toggle('fa-circle-plus');

    // values = fav.attributes[1].value;
    // table 
    let favtable = document.getElementById("favtable");

    // values.indexOf("fa-circle-plus");
    let heart = node.value.includes('fa-circle-plus')
    let favadd = document.querySelector('.fav-add');

    if (heart === false) {
        alertify.success("Added to Favourite.");
        favadd.innerHTML = "Added";
    }

    else {
        alertify.error("Removed from Favourite.");
        favadd.innerHTML = "Add to";
    }


    // let value = fav.attributes[0].value;
    // console.log(value);

    // var row = table.insertRow(0);
    //   var cell1 = row.insertCell(0);
    //   var cell2 = row.insertCell(1);

    // const brazil = document.getElementById('brazil');
    // const brazilg = document.getElementById('brazilg');
    // const node = brazilg.getAttributeNode('href');
    // // node.value = 

    //   cell1.innerHTML = brazil.innerHTML;
    //   cell2.innerHTML = node.value;








});

function addgame(e) {

    e.preventDefault();
    let gameData = JSON.parse(localStorage.getItem('gameData')) || [];
    let title = document.getElementById('title').value,
        url = document.getElementById("game_url").value,
        country = document.getElementById('country').value,
        description = document.getElementById('game-desc').value;

    gameData.push({ title, url, country, description });
    localStorage.setItem('gameData', JSON.stringify(gameData));
    document.querySelector('form').reset();
    document.getElementById('title').focus();
    // let role = "selectrole.options[selectrole.selectedIndex].value;"
    // if(!window.location.hash) {
    //        window.location = window.location + '#loaded';
    //        window.location.reload();
    //    }
    // let formtitle = JSON.parse(localStorage.getItem('gameData')).some(data => 
    //            data[0]);
    // alert(formtitle);
    let gamelist = JSON.parse(localStorage.getItem('gameData'));

    let gamel = ((gamelist.length) - 1);
    let gtitle = gamelist[gamel].title;
    // let gametitle = JSON.parse(localStorage.getItem('gameData'))[gamet].title;
    document.querySelector('#hidden .card-title h4').innerHTML = gtitle;

    // let gurl = JSON.parse(localStorage.getItem('gameData'))[0].url;
    let gurl = gamelist[gamel].url;
    // let source = JSON.parse(localStorage.getItem('gameData'))[0].url;
    // document.querySelector('.card-title p').innerHTML = gamet;

    document.querySelector('#hidden iframe').setAttribute("src", gurl);

    let gdesc = gamelist[gamel].description;

    // let descriptionn = JSON.parse(localStorage.getItem('gameData'))[0].description;
    document.querySelector('#hidden .description #lead-main').innerHTML = gdesc;

    document.getElementById('hidden').style.display = "block";
    // if(!window.location.hash) {
    //         window.location = window.location + '#loaded';
    //         window.location.reload();
    //     }
    e.preventDefault();
}

function editmodel() {

    let gamelist = JSON.parse(localStorage.getItem('gameData'));

    let gamel = ((gamelist.length) - 1);
    let gtitle = gamelist[gamel].title;
    let gurl = gamelist[gamel].url;
    let gdesc = gamelist[gamel].description;


    document.querySelector('#edit-game #titleb').value = gtitle;
    // document.querySelector('#game_urlb iframe').setAttribute("src",source);
    document.querySelector('#game_urlb').value = gurl;
    document.getElementById('game-edesc').value = gdesc;
}



function editgame(e) {
    e.preventDefault(e);
    let titleb = document.getElementById('titleb').value;
    let source = document.getElementById('game_urlb').value;
    let country = document.getElementById('country').value,
        description = document.getElementById('game-edesc').value;

    document.querySelector('#hidden .card-title').innerHTML = titleb;
    document.querySelector('#hidden iframe').setAttribute("src", source);
    document.getElementById('lead-main').innerHTML = description;
    // e.preventDefault(e);

}



function schedulegame(e) {
    e.preventDefault();
}

// Signing In
function signIn(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let selectrole = document.getElementById('mainrole'),
        role = selectrole.options[selectrole.selectedIndex].value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.password.toLowerCase() == password && data.role.toLowerCase() == role);
    if (!exist) {
        alertify.error("Incorrect login credentials");
    }
    else {

        let loginData = JSON.parse(localStorage.getItem('loginData')) || [];
        loginData.unshift({ email, password, role });
        localStorage.setItem('loginData', JSON.stringify(loginData));
        let roles = (JSON.parse(localStorage.getItem('loginData'))[0]).role;

        // console.log(roles);

        if (roles === "ad") {
            window.location.href = "admin.html"
            // console.log("admin")
        }

        else if (roles = "us") {
            window.location.href = "user.html"
            // console.log("user");
        }

        else {
            alertify.errors("Choose correct role");
        }
        // console.log(formData.push({ username,password,role }));
        //     localStorage.setItem('formData', JSON.stringify(formData));
        // console.log (JSON.parse(localStorage.getItem('formData'))[0]);

        // location.href = "index.html";
        // alert("hello");
        // alert("correction")
    }

}



//ending

!function ($) {


    var MainApp = function () {
        this.$body = $("body"),
            this.$wrapper = $("#wrapper"),
            this.$btnFullScreen = $("#btn-fullscreen"),
            this.$leftMenuButton = $('.button-menu-mobile'),
            this.$menuItem = $('.has_sub > a')
    };
    //scroll
    MainApp.prototype.initSlimscroll = function () {
        $('.slimscrollleft').slimscroll({
            height: 'auto',
            position: 'right',
            size: "10px",
            color: '#9ea5ab'
        });
    },
        //left menu
        MainApp.prototype.initLeftMenuCollapse = function () {
            var $this = this;
            this.$leftMenuButton.on('click', function (event) {
                event.preventDefault();
                $this.$body.toggleClass("fixed-left-void");
                $this.$wrapper.toggleClass("enlarged");
            });
        },
        //left menu
        MainApp.prototype.initComponents = function () {
            $('[data-toggle="tooltip"]').tooltip();
            $('[data-toggle="popover"]').popover();
        },
        //full screen
        MainApp.prototype.initFullScreen = function () {
            var $this = this;
            $this.$btnFullScreen.on("click", function (e) {
                e.preventDefault();

                if (!document.fullscreenElement && /* alternative standard method */ !document.mozFullScreenElement && !document.webkitFullscreenElement) {  // current working methods
                    if (document.documentElement.requestFullscreen) {
                        document.documentElement.requestFullscreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullscreen) {
                        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
                    }
                } else {
                    if (document.cancelFullScreen) {
                        document.cancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                }
            });
        },
        //full screen
        MainApp.prototype.initMenu = function () {
            var $this = this;
            $this.$menuItem.on('click', function () {
                var parent = $(this).parent();
                var sub = parent.find('> ul');

                if (!$this.$body.hasClass('sidebar-collapsed')) {
                    if (sub.is(':visible')) {
                        sub.slideUp(300, function () {
                            parent.removeClass('nav-active');
                            $('.body-content').css({ height: '' });
                            adjustMainContentHeight();
                        });
                    } else {
                        visibleSubMenuClose();
                        parent.addClass('nav-active');
                        sub.slideDown(300, function () {
                            adjustMainContentHeight();
                        });
                    }
                }
                return false;
            });

            //inner functions
            function visibleSubMenuClose() {
                $('.has_sub').each(function () {
                    var t = $(this);
                    if (t.hasClass('nav-active')) {
                        t.find('> ul').slideUp(300, function () {
                            t.removeClass('nav-active');
                        });
                    }
                });
            }

            function adjustMainContentHeight() {
                // Adjust main content height
                var docHeight = $(document).height();
                if (docHeight > $('.body-content').height())
                    $('.body-content').height(docHeight);
            }
        },
        MainApp.prototype.activateMenuItem = function () {
            // === following js will activate the menu in left side bar based on url ====
            $("#sidebar-menu a").each(function () {
                if (this.href == window.location.href) {
                    $(this).addClass("active");
                    $(this).parent().addClass("active"); // add active to li of the current link
                    $(this).parent().parent().prev().addClass("active"); // add active class to an anchor
                    $(this).parent().parent().parent().addClass("active"); // add active class to an anchor
                    $(this).parent().parent().prev().click(); // click the item to make it drop
                }
            });
        },
        MainApp.prototype.Preloader = function () {
            $(window).on('load', function () {
                $('#status').fadeOut();
                $('#preloader').delay(350).fadeOut('slow');
            });
        },
        // Preloader

        MainApp.prototype.init = function () {
            this.initSlimscroll();
            this.initLeftMenuCollapse();
            this.initComponents();
            this.initFullScreen();
            this.initMenu();
            this.activateMenuItem();
            this.Preloader();
        },
        //init
        $.MainApp = new MainApp, $.MainApp.Constructor = MainApp
}(window.jQuery),

    //initializing
    function ($) {
        "use strict";
        $.MainApp.init();
    }(window.jQuery);

