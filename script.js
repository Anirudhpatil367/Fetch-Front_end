document.addEventListener("DOMContentLoaded", function () {
    const breedSelect = document.getElementById("breed-select");
    const loadImagesButton = document.getElementById("load-images");
    const imageGallery = document.querySelector(".image-gallery");

    // Fetch a list of all dog breeds from the API
    fetch("https://dog.ceo/api/breeds/list/all")
        .then((response) => response.json())
        .then((data) => {
            const breeds = Object.keys(data.message);
            breeds.forEach((breed) => {
                const option = document.createElement("option");
                option.value = breed;
                option.textContent = breed;
                breedSelect.appendChild(option);
            });
        });

    // Event listener for the "Load Images" button
    loadImagesButton.addEventListener("click", () => {
        const selectedBreeds = Array.from(breedSelect.selectedOptions, (option) => option.value);

        // Fetch images for selected breeds
        selectedBreeds.forEach((breed) => {
            fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`)
                .then((response) => response.json())
                .then((data) => {
                    data.message.forEach((imageUrl) => {
                        const img = document.createElement("img");
                        img.src = imageUrl;
                        img.alt = breed;
                        imageGallery.appendChild(img);
                    });
                });
        });
    });
   });
