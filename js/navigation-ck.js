/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */(function(){var e=document.getElementById("site-navigation"),t=e.getElementsByTagName("h1")[0],n=e.getElementsByTagName("ul")[0];if(undefined==t||undefined==n)return!1;t.onclick=function(){-1==n.className.indexOf("nav-menu")&&(n.className="nav-menu");if(-1!=t.className.indexOf("toggled-on")){t.className=t.className.replace(" toggled-on","");n.className=n.className.replace(" toggled-on","");e.className=e.className.replace("main-small-navigation","navigation-main")}else{t.className+=" toggled-on";n.className+=" toggled-on";e.className=e.className.replace("navigation-main","main-small-navigation")}};n.childNodes.length||(t.style.display="none")})();