function openExperience(evt, experienceName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tab-content" and hide them
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tab-link" and remove the class "active"
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(experienceName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Optional: Ensure one tab is open by default if JS is enabled
// (Handled by inline style `display:block` on the first tab-content in HTML for non-JS scenarios)
// If you want to ensure JS activates the first tab:
document.addEventListener('DOMContentLoaded', function() {
    // Check if any tab is already active (e.g. by server-side rendering or HTML default)
    const activeTab = document.querySelector('.tab-link.active');
    if (!activeTab && document.getElementsByClassName("tab-link").length > 0) {
        // If no tab is active and tab links exist, click the first one
        document.getElementsByClassName("tab-link")[0].click();
    } else if (activeTab) {
        // If a tab is marked active in HTML, ensure its content is displayed
        // This is useful if the default display:block was not set on the corresponding content
        const activeContentId = activeTab.getAttribute('onclick').split("'")[1];
        if (document.getElementById(activeContentId)) {
             document.getElementById(activeContentId).style.display = "block";
        }
    }
});
