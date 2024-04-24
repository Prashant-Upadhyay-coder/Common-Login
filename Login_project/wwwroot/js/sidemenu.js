function generateMenuItems(data) {
    let activeSubmenu = null;
    const menuItemsContainer = $("#menuItems");
    data.forEach(item => {
        const menuItem = $("<li></li>");
        const link = $("<a></a>").addClass("crose").text(item.label).attr("href", item.url);
        menuItem.append(link);
        if (item.submenus && item.submenus.length > 0) {
            const submenu = $("<ul></ul>").addClass("submenu").hide();
            item.submenus.forEach(submenuItemData => {
                const submenuItem = $(`<li></li>`);

                const submenuLink = $("<a></a>").text(submenuItemData.label).attr("href", submenuItemData.url);
                submenuItem.append(submenuLink);
                submenu.append(submenuItem);
            }); menuItem.addClass("has-submenu");
            const arrowIcon = $("<span></span>").addClass("submenu-arrow fa-solid fa-chevron-right");
            menuItem.append(arrowIcon);

            menuItem.on("click", (e) => {
                if (activeSubmenu !== submenu) {
                    if (activeSubmenu) {
                        activeSubmenu.slideUp();
                        activeSubmenu.siblings(".has-submenu").removeClass("active");
                        activeSubmenu.siblings(".has-submenu").find(".submenu-arrow").removeClass("arrow-down");
                    }
                    submenu.slideToggle();
                    activeSubmenu = submenu;
                    menuItem.addClass("active");
                    arrowIcon.addClass("arrow-down");
                } else {
                    submenu.slideUp();
                    activeSubmenu = null;
                    menuItem.removeClass("active");
                    arrowIcon.removeClass("arrow-down");
                }
            });
            menuItem.append(submenu);
        }
        menuItemsContainer.append(menuItem);
    });
}

function addicon(iconData) {

    var list = document.querySelectorAll('#menuItems li');
    list.forEach((item) => {
        var link = item.querySelector("a");

        var labelHeading = document.createElement("label");
        labelHeading.innerText = link.innerText;
        link.innerHTML = '';
        link.appendChild(labelHeading);

        var icon = document.createElement("span");

        var iconDataItem = iconData.find((data) => data.label === link.innerText);
        if (iconDataItem) {
            icon.className = iconDataItem.iconClass;
        }

        if (icon.className !== "") {
            link.insertBefore(icon, link.firstChild);
        }
    });
}

$(document).ready(function () {
    $(document).on("click", "#toggleButton", function () {
        $("#sideMenu").toggleClass("collaps");
    });
    generateMenuItems(menuData);
    addicon(dynamicIcons);
});
