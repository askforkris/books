function showOverlay(epubPath) {
    // Set the download link href to the ePub file path
    document.getElementById('downloadLink').href = epubPath;

    // Show the overlay
    document.getElementById('imageOverlay').style.display = 'block';
}

function hideOverlay() {
    // Hide the overlay
    document.getElementById('imageOverlay').style.display = 'none';
}
