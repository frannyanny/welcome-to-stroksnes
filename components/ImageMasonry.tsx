'use client'

// import Masonry from '@mui/lab/Masonry';
import Masonry from "react-masonry-css";
import type { LightGallery } from "lightgallery/lightgallery";

import imageData from '@/public/imageData.json';
import Image from 'next/image'

import { useRef } from "react";

type ImageData = {
    name: string;
    relPath: string;
    size: number;
    height: number;
    width: number;
    title: string;
    photographer: string;
    film: string;
    camera: string;
    alt: string;
    createdAt: string;
  }

// Lightbox imports
// Import lightgallery with a couple nice-to-have plugins


import LightGalleryComponent from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

import lgZoom from "lightgallery/plugins/zoom";
import "lightgallery/css/lg-zoom.css";

import lgFullscreen from "lightgallery/plugins/fullscreen";
import "lightgallery/css/lg-fullscreen.css";


export default function ImageMasonry() {

    const lightbox = useRef<LightGallery | null>(null);
    const masonryBreakpoints = {
        default: 3,    // ≥1280px
        1024: 2,       // ≥1024px
        768: 1,        // ≥768px
        480: 1         // ≥480px
    };

    return (

        <>
            <LightGalleryComponent
                // Once the component initializes, we'll assign the instance to our React ref.  
                // This is used in the onClick() handler of each image in the Masonry layout
                onInit={(ref) => {
                    if (ref) {
                        lightbox.current = ref.instance;
                    }
                }}
                plugins={[lgZoom, lgFullscreen]}
                controls
                mobileSettings={{
                    controls: true,
                    showCloseIcon: true,
                    download: false,
                  }}

                download={false}
                // These options turn the component into a "controlled" component that let's us 
                // determine when to open/close it
                dynamic
                dynamicEl={imageData.map((img: ImageData) => ({
                    src: img.relPath,
                    thumb: img.relPath,
                    width: img.width.toString(),
                    alt: img.alt,
                    subHtml: `<div class='captioncontainer'>
                                <div class='caption'>
                                    <div class='nametitle'>
                                        <h4>${img.title}</h4>
                                        <p>${img.photographer}</p>
                                    </div>
                                    <div class='techinfo'>
                                        <p>${img.camera}</p>
                                        <p>${img.film}</p>
                                    </div>
                                </div>
                            </div>`
                }))}
            />
            <Masonry breakpointCols={masonryBreakpoints}
                className="my-masonry-grid"
                columnClassName="my-masonry-column">
                {imageData.map((img: ImageData, index: number) => (
                    <Image
                        key={index}
                        src={img.relPath}
                        width={img.width}
                        height={img.height}
                        alt={img.alt}
                        className="hover:opacity-80 cursor-pointer my-2"
                        onClick={() => lightbox.current?.openGallery(index)}
                    />
                ))}
            </Masonry>
        </>

    );
}
