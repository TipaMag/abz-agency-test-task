var _URL = window.URL || window.webkitURL

export const imageCheckResolution = async (file) => {
    let image = new Image()
    image.src = _URL.createObjectURL(file)
    
    return new Promise((resolve) => {
        image.onload = () => {
            return resolve(image.width > 70 && image.height > 70)
        } 
    })
}

export const imageCheckSize = (size, maxSize) => {
    const imgSize = Math.round(size / 1024)
    return imgSize > maxSize ? false : true
}