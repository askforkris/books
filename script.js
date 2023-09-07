function showOverlay(epubPath1, epubPath2, epubPath3) {
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

    // Set the third download link href for the "Astro" image
    if (epubPath3) {
        document.getElementById('downloadLink3').href = epubPath3;
        document.getElementById('downloadLink3').style.display = 'inline-block';
    } else {
        // Hide the third download link if no third ePub path is provided
        document.getElementById('downloadLink3').style.display = 'none';
    }

    // Show the overlay
    document.getElementById('imageOverlay').style.display = 'block';
}

