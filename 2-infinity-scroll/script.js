
// Unsplash API
const count = 10
const apiKey = 'R-hch0MV5WQTKR1HLSN9BItZIBfq7vx5AgST6kt5N_M'
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`


//Get photos from Unsplash API

async function getPhotos() {
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
  } catch(error) {

  }
}

//On Load
getPhotos()