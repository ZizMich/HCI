"use client";

import {
  Deck,
  DeckCards,
  DeckEmpty,
  DeckItem,
} from "@/components/kibo-ui/deck";
import Image from "next/image";
import { useState } from "react";

export interface ImgItem {
  id: number;
  src: string;
  title: string;
}

interface StoryBoardProps extends React.HTMLAttributes<HTMLDivElement> {
  imgs: ImgItem[];
}

export const StoryBoard = ({ imgs, className, ...props }: StoryBoardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState<
    "left" | "right"
  >("left");
  return (
    <div className={`flex justify-center w-160 h-160 ${className}`} {...props}>
      <Deck className="size-full">
        <DeckCards
          animateOnIndexChange={true}
          className="aspect-[2/3]"
          currentIndex={currentIndex}
          indexChangeDirection={animationDirection}
          onCurrentIndexChange={setCurrentIndex}
          onSwipe={(_index, _direction) => {}}
        >
          {imgs.map((image) => (
            <DeckItem className="p-0" key={image.id}>
              <Image
                src={image.src}
                alt={image.title}
                width={600}
                height={600}
                className="object-cover w-full h-full pointer-events-none"
                unoptimized
              />
            </DeckItem>
          ))}
        </DeckCards>

        <DeckEmpty />
      </Deck>
    </div>
  );
};
export default StoryBoard;
