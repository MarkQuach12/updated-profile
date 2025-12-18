import profileImage from "@/assets/profileImage.jpg";
import { WavingEmoji } from "@/components/random/WavingEmoji";

const HomePage = () => {
  return (
    <>
      <div className="min-h-[calc(100vh-14rem)] flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col justify-center items-center">
            <p className="text-2xl">
              Hello there <WavingEmoji />, I'm
            </p>
            <p className="text-4xl font-bold mb-4">Mark Quach</p>
          </div>
          <div className="flex justify-center items-center">
            <img
              src={profileImage}
              alt="Profile"
              className="aspect-square rounded-full object-cover w-40 h-40"
            />
          </div>
          <div className="flex flex-col justify-center items-center"></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl">
            Welcome to my website! This is where I share my projects, thoughts,
            and experiences.
          </p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
