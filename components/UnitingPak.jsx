import Image from 'next/image';

const UnitingPak = () => {
  return (
    <section className="bg-blue-50 dark:bg-gray-900 py-16 px-6">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 lg:p-12">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left Side - Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative w-full h-[400px] md:h-[500px]">
                <Image
                  src="/Gaza.webp"
                  alt="Save Gaza Campaign"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-4">
                Save Gaza: <span className="text-green-600">Uniting Pakistan for Palestine</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
                Save Gaza Campaign, initiated in November 2023 by Ms. Humaira Tayyaba and a small group, burgeoned into a nationwide movement driven by the solidarity of Pakistanis with the suffering Palestinians. Evolving from civil society roots, it swiftly gained momentum, organizing protests, engaging diverse sectors, and expanding across Pakistan.
              </p>
              {/* <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
                Ms. Tayyaba’s leadership stimulated support, notably from the youth, culminating in significant milestones such as global awareness campaigns and strategic alliances, solidifying its role as a beacon of activism for Gaza’s cause.
              </p> */}
              {/* <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
                With over 157,200 destroyed structures and 33,000 lives lost, the staggering death toll stands as a stark reminder of the ongoing humanitarian crisis in Gaza, fueling the urgency behind the Save Gaza Campaign’s mission.
              </p> */}

              {/* Stats Section */}
              <div className="flex flex-col md:flex-row gap-12 mt-8">
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-600">157K+</p>
                  <p className="text-gray-600 dark:text-gray-300">Destroyed structures</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-bold text-green-600">33K+</p>
                  <p className="text-gray-600 dark:text-gray-300">Lives lost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnitingPak;
