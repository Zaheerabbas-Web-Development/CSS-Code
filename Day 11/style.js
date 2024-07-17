document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('check');
    var sidebarMenu = document.querySelector('.sidebar_menu');

    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            sidebarMenu.style.transform = 'translateX(0)';
        } else {
            sidebarMenu.style.transform = 'translateX(-100%)';
        }
    });
});
