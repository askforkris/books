const bios = [
    {
        text: "Bio for Astro: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam velit. Nulla ut magna lobortis, egestas erat quis, aliquet est. Sed vel massa a felis imperdiet ultricies. Duis vel auctor arcu.",
        epubPath: '3001.epub'
    },
    {
        text: "Bio for Ciany: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam velit. Nulla ut magna lobortis, egestas erat quis, aliquet est. Sed vel massa a felis imperdiet ultricies. Duis vel auctor arcu.",
        epubPath: 'Ciany.epub'
    },
    {
        text: "Bio for Image 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam velit. Nulla ut magna lobortis, egestas erat quis, aliquet est. Sed vel massa a felis imperdiet ultricies. Duis vel auctor arcu.",
        epubPath: 'image3.epub'
    },
    {
        text: "Bio for Image 4: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sit amet quam velit. Nulla ut magna lobortis, egestas erat quis, aliquet est. Sed vel massa a felis imperdiet ultricies. Duis vel auctor arcu.",
        epubPath: 'image4.epub'
    }
];

function showOverlay(index) {
    // Set the bio text and download link href based on the selected index
    document.getElementById('bioText').textContent = bios[index].text;
    document.getElementById('downloadLink').href = bios[index].epubPath;

    // Show the overlay
    document.getElementById('imageOverlay').style.display = 'block';
}

function hideOverlay() {
    // Hide the overlay
    document.getElementById('imageOverlay').style.display = 'none';
}

