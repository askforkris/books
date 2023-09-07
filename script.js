function showOverlay(epubPath1, epubPath2) {
    // Set the download link href to the first ePub file path
    document.getElementById('downloadLink').href = epubPath1;

    // Set the second download link href for the "Astro" image
    if (epubPath2) {
        document.getElementById('downloadLink2').href = epubPath2;
        document.getElementById('downloadLink2').style.display = 'inline-block';
    } else {
        // Hide the second download link if no second ePub path is provided
        document.getElementById('downloadLink2').style.display = 'none';
    }

    // Show the overlay
    document.getElementById('imageOverlay').style.display = 'block';
}

