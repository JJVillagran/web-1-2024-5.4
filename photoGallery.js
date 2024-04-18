// 1. Declare a variable name 'imageContainer' and store the html element with the id 'imageContainer'
//  - Using querySelector, store the selector #imageContainer
let imageContainer = document.querySelector("#imageContainer");



// 2. Add at least four image urls to the imageUrls array
let imageUrls = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU28oD5t9UKZ_zu1GimCi4ZI8_fdQvlur4GX9ppoUZ0VMGZY_7Um9N8t-UFwhOoT_351s&usqp=CAU",
"https://www.rollingstone.com/wp-content/uploads/2018/06/bladerunner-2-trailer-watch-8bd914b0-744f-43fe-9904-2564e9d7e15c.jpg?w=910&h=511&crop=1",
"https://www.hollywoodreporter.com/wp-content/uploads/2011/06/drive_primary.jpg?w=2000&h=1126&crop=1",
"https://m.media-amazon.com/images/M/MV5BMmEzNmJhYWUtMzU5Ni00ODZiLTk2ZjgtMGMxNDRiNjJjYmJhXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg"];

// 3. Selecting the imageUrls array, create a forEach loop.


// In side the body of the loop:
//  - Create an image element and store it in a variable named 'image'
//  - Update the src of the image element to equal the function parameter (the array element)
//  - Append the image to the image container.
imageUrls.forEach(function(imageUrls){
    let image = document.createElement("img");
    image.src = ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU28oD5t9UKZ_zu1GimCi4ZI8_fdQvlur4GX9ppoUZ0VMGZY_7Um9N8t-UFwhOoT_351s&usqp=CAU",
    "https://www.rollingstone.com/wp-content/uploads/2018/06/bladerunner-2-trailer-watch-8bd914b0-744f-43fe-9904-2564e9d7e15c.jpg?w=910&h=511&crop=1",
    "https://www.hollywoodreporter.com/wp-content/uploads/2011/06/drive_primary.jpg?w=2000&h=1126&crop=1",
    "https://m.media-amazon.com/images/M/MV5BMmEzNmJhYWUtMzU5Ni00ODZiLTk2ZjgtMGMxNDRiNjJjYmJhXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_.jpg"];
    imageContainer.appendChild(image);
});