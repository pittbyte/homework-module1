// Define a function to generate the partners list
function generatePartnerList() {
    // Create an array of partner image sources
    var partnerImages = [
        "Image/partners/partner-bustour.png",
        "Image/partners/partner-cabinrental.png",
        "Image/partners/partner-campingadv.png",
        "Image/partners/partner-collegetours.png",
        "Image/partners/partner-rentalbike.png",
        "Image/partners/partner-tourgroup.png"
    ];

    // Get the partners section by its ID
    var partnersSection = document.getElementById("partners");

    // Create an unordered list element
    var partnerList = document.createElement("ul");
    partnerList.id = "partner";

    // Loop through the array and create list items with images
    partnerImages.forEach(imageSrc => {
        var listItem = document.createElement("li");
        listItem.className = "partner";

        var image = document.createElement("img");
        image.src = imageSrc;
        image.alt = "Partner Image"; // Set your alt text here

        listItem.appendChild(image);
        partnerList.appendChild(listItem);
    });

    // Append the partnerList to the partnersSection
    partnersSection.appendChild(partnerList);
}

