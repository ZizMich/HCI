"use client";
import { StaticImageData } from "next/image";
import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from "@/components/kibo-ui/marquee";
import { ImageZoom } from "./kibo-ui/image-zoom";
import Image from "next/image";

const Marq = ({ images }: { images: string[] }) => (
  <div className="flex size-full items-center justify-center bg-background">
    <Marquee>
      <MarqueeFade side="left" />
      <MarqueeFade side="right" />
      <MarqueeContent>
        {images.map((image, index) => (
          <MarqueeItem className="h-40 w-40" key={index}>
            <ImageZoom>
              <Image
                style={{ justifySelf: "center" }}
                alt="Placeholder image"
                className="h-auto w-96"
                src={image}
                unoptimized
                width={200}
                height={200}
              />
            </ImageZoom>
          </MarqueeItem>
        ))}
      </MarqueeContent>
    </Marquee>
  </div>
);
export default Marq;
