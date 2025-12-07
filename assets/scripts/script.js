document.addEventListener('DOMContentLoaded', () => {
    
    // Pattern: Master-Detail Logic for Visualizations Page
    const masterItems = document.querySelectorAll('.master-item');
    const detailPanels = document.querySelectorAll('.chart-panel');

    if(masterItems.length > 0) {
        masterItems.forEach(item => {
            item.addEventListener('click', () => {
                // 1. Remove active class from all items
                masterItems.forEach(i => i.classList.remove('active-item'));
                
                // 2. Add active class to clicked item
                item.classList.add('active-item');

                // 3. Hide all details
                detailPanels.forEach(panel => panel.classList.remove('active-panel'));

                // 4. Show corresponding detail
                const targetId = item.getAttribute('data-target');
                document.getElementById(targetId).classList.add('active-panel');
            });
        });
    }

    // Pattern: Sidebar Active State
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if(link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
});