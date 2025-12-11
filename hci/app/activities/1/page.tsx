import Video from "@/components/VideoPlayer";
import Mess from "@/public/mess.jpg";
import { ImageZoom } from "@/components/kibo-ui/image-zoom";
import Image from "next/image";
import { StoryBoard, ImgItem } from "@/components/Deck";
const messages = Array.from({ length: 9 }, (_, i) => `/messages/${i + 1}.jpg`);
const storyBoardItems = Array.from({ length: 5 }, (_, i) => ({
  id: i + 1,
  src: `/storyboard/${i + 1}.jpg`,
  title: `Message ${i + 1}`,
}));
import Marq from "@/components/Marquee";

export default function Index() {
  return (
    <div className="flex-column">
      <div className="flex justify-center items-start overflow-y-auto p-4 bg-gray-50">
        <article className="bg-white p-8 rounded-lg shadow-md typography w-full max-w-[1200px]">
          <h1 className="text-3xl font-bold text-center mb-4">
            Activity 1 - Problem Definition
          </h1>

          <p className="text-gray-700 leading-relaxed">
            As the world of education becomes more open and flexible, student
            accommodations welcome young people all over the World. In the city
            of Leipzig, where this research is based, nearly 15 residential
            complexes currently host students (Studentenwerk Leipzig, 2025).
            Student accommodations can provide not only housing, but community,
            often achieved with the help of events and shared spaces. Such
            shared places as small cinemas, gyms, study rooms, event halls and
            more are loved by students, who can find new connections, seek
            advice, or have fun together as they adapt to a new city, country or
            even continent. In spite of shared spaces are an integral part of
            socialisation and networking for students, they may become a source
            of hardship for both housing management and tenants. Management of
            shared spaces and definition of the responsibility limits appear to
            be complicated, with a few hundred people and their guests having
            unsupervised and unlimited access to the common areas. Lack of
            organisation led to regular problems with crossbooking, lost track
            of keys, mess and confusion among the tenants
          </p>
          <ImageZoom>
            <Image
              style={{ justifySelf: "center" }}
              alt="Placeholder image"
              className="h-auto w-96"
              src={Mess}
              unoptimized
            />
          </ImageZoom>

          <p>
            In Lumis Leipzig, one of the newest student residences in Leipzig,
            tenants took matters into their own hands in an attempt to organise
            and set rules for the booking of shared spaces
          </p>

          <p>
            Residents of Lumis initiate booking through the WhatsApp group by
            writing down the time and date when they plan to occupy the space.
            However, such practice has shown accuracy problems, as well as
            difficulty with tracking the current booking situation of each room
            in a consistent flow of messages
          </p>
          <Marq images={messages}></Marq>
          <p>
            Another side that struggles because of the disorganisation of common
            spaces is housing management. Some leasing agreements clearly state
            the personal responsibility of the tenants for the disarray and
            damages caused by them in the shared spaces of student
            accommodation. But searching and holding people accountable became a
            serious quest for the management, as they have no information or any
            record of who used and was in charge of a specific space
          </p>

          <Video src="https://archive.org/download/the-roomer-hci/The%20Roomer%20-%20HCI.mp4"></Video>
          <StoryBoard
            style={{ justifySelf: "center" }}
            imgs={storyBoardItems}
          ></StoryBoard>
        </article>
      </div>
    </div>
  );
}
