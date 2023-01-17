import Image from "next/image";

const ImageOptimization = () => {
  return (
    <Image
      src="/images/profile.png" // Route of the image file
      height={144} // Desired size with correct aspect ratio
      width={144} // Desired size with correct aspect ratio
      alt="Your Name"
      priority={true}
    />
  );
};

export default ImageOptimization;
