// 1. Declare a variable name 'imageContainer' and store the html element with the id 'imageContainer'
//  - Using querySelector, store the selector #imageContainer
let imageContainer = document.querySelector("#imageContainer");



// 2. Add at least four image urls to the imageUrls array
let imageUrls = ["https://www.svgheart.com/wp-content/uploads/2022/07/black-cat-silhouette_749-430-min.png",
"https://www.svgheart.com/wp-content/uploads/2022/07/black-cat-silhouette_749-430-min.png",
"https://www.svgheart.com/wp-content/uploads/2022/07/black-cat-silhouette_749-430-min.png",
"https://www.svgheart.com/wp-content/uploads/2022/07/black-cat-silhouette_749-430-min.png"];

// 3. Selecting the imageUrls array, create a forEach loop.


// In side the body of the loop:
//  - Create an image element and store it in a variable named 'image'
//  - Update the src of the image element to equal the function parameter (the array element)
//  - Append the image to the image container.
imageUrls.forEach(function(imageUrls) {
    let img = document.createElement("img");
    img.src = ["https://www.svgheart.com/wp-content/uploads/2022/07/black-cat-silhouette_749-430-min.png",
    "https://www.svgheart.com/wp-content/uploads/2022/07/black-cat-silhouette_749-430-min.png",
    "https://www.svgheart.com/wp-content/uploads/2022/07/black-cat-silhouette_749-430-min.png",
    "https://www.svgheart.com/wp-content/uploads/2022/07/black-cat-silhouette_749-430-min.png"];
    imageContainer.appendChild(img);
});