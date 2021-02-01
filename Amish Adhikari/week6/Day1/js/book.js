const retainCover = function () {

const xhr = new XMLHttpRequest();
  const results = document.getElementById('results');

  //clear any element within results div
  results.innerHTML = '';

 //get value from text box
 searchInput = document.getElementById('search').value;

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${ searchInput }?json`);
  xhr.send();// asynchronous

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return; // exit the function, the data isn't available yet.

    const data = JSON.parse(xhr.responseText);

    //start
    const bookTitle = data.items[0].volumeInfo.title;
    const imageSrc = data.items[0].volumeInfo.imageLinks.smallThumbnail;

    const titleTag = document.createElement('h1'); //detach DOM node.
    titleTag.innerHTML = bookTitle;
    results.appendChild( titleTag ); // attach the DOM node.

    const img = document.createElement('img'); //detach DOM node.
    img.src = imageSrc;
    results.appendChild( img ); // attach the DOM node.
    //end
  };
};

document.getElementById('retain').addEventListener('click', retainCover);
