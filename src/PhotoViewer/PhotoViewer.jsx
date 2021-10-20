import React, {useState} from "react";  // import React (to provide access to JSX)
import './PhotoViewer.css';
import {imageUrls} from './getImages'


export function PhotoViewer() {

    const [currentImage, setImage] = useState("https://picsum.photos/id/600/1600/900.jpg")

    

    return (
        <div>
            <img className="mainPhoto" alt='mainPic' src={currentImage}/>
            <h2 className={"selectImage"}>Select your photo</h2>
            {/*<DisplayThumbnails setImageFunction={setImage} selectedImage={currentImage}/>*/}
            
            
            <div className="thumbnails">
                {imageUrls.map((image, index) => (
                    
                    <img src={image} alt={image} onClick={() => setImage(image)}/>
                ))
                }
            </div>
        </div>
    );
}

// function DisplayThumbnails(props) {
//
//     let allImages = [];
//     for (let url of imageUrls)
//     {
//         allImages.push(
//             <img className="thumbnailImages"  onClick={() => props.setImageFunction(url)} src={url} alt={url}/>
//         );
//     }
//    
//     return (
//         <div className="thumbnails">{allImages}</div>
//     )
// }

