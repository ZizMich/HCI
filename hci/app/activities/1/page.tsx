
import Video from "@/components/VideoPlayer";
export default function Index() {
  return (
  <div className="flex-column">
    <div className="flex justify-center items-start overflow-y-auto p-4 bg-gray-50">
      
<article className="bg-white p-8 rounded-lg shadow-md typography w-full max-w-[1200px] gap-3"> 
       <h1 className="text-3xl font-bold text-center mb-4">
          Activity 1 - Problem Definition
        </h1>
        <p className="text-gray-700 leading-relaxed">
 As the world of education becomes more open and flexible, student accommodations welcome young people all over the World.  In the city of Leipzig, where this research is based, nearly 15 residential complexes currently host students (Studentenwerk Leipzig, 2025).  Student accommodations can provide not only housing, but community, often achieved with the help of events and shared spaces. Such shared places as small cinemas, gyms, study rooms, event halls and more are loved by students, who can find new connections, seek advice, or have fun together as they adapt to a new city, country or even continent.
In spite of shared spaces are an integral part of socialisation and networking for students, they may become a source of hardship for both housing management and tenants. Management of shared spaces and definition of the responsibility limits appear to be complicated, with a few hundred people and their guests having unsupervised and unlimited access to the common areas. Lack of organisation led to regular problems with crossbooking, lost track of keys, mess and confusion among the tenants 

        </p>
        <Video src="https://drive.google.com/uc?export=download&id=1jRSn_LnKFgfi6qgVGnYcSOebrHRpOQbE"></Video>
      </article>
    </div>
  </div>
  );
} 