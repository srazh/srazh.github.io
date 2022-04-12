import PhotoAlbum from "react-photo-album";
export default function Play() {
    // npm install react-photo-album


    <h1 className="Play-Title">
        A gallery of traditional art and graphic design
    </h1>
const photos = [
    {
        src: "/images/image1.jpg",
        width: 800,
        height: 600
    },
    {
        src: "/images/image2.jpg",
        width: 1600,
        height: 900
    }
];

<PhotoAlbum layout="rows" photos={photos} />

}
