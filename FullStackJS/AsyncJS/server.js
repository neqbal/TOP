const image = document.querySelector('img');

async function getCats() {
  const response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=9szoRqyN1BfQHW0jvXuCJpOfNx5oj1qF&s=cats", {mode: 'cors'});
  const catData = await response.json();
  image.src=catData.data.images.original.url;
}
console.log("aiuhfbsjc");