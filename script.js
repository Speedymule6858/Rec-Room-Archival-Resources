// script.js

// Functionality for interactive builds menu

class BuildsMenu {
    constructor() {
        this.builds = [];
        this.render(); // Initial render
    }

    // Add a build to the menu
    addBuild(build) {
        this.builds.push(build);
        this.render();
    }

    // Render the builds menu
    render() {
        const menu = document.getElementById('builds-menu');
        menu.innerHTML = ''; // Clear existing menu

        this.builds.forEach(build => {
            const buildItem = document.createElement('div');
            buildItem.classList.add('build-item');
            buildItem.innerText = build;
            buildItem.onclick = () => this.selectBuild(build);
            menu.appendChild(buildItem);
        });
    }

    // Handle build selection
    selectBuild(build) {
        console.log(`Selected build: ${build}`);
        // Additional functionality for selected build can be added here
    }
}

// Example usage
const buildsMenu = new BuildsMenu();
buildsMenu.addBuild('Build 1');
buildsMenu.addBuild('Build 2');
buildsMenu.addBuild('Build 3');
