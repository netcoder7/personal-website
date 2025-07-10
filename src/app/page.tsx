import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <main className="container mx-auto p-8">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2">My Personal Website</h1>
          <p className="text-xl text-gray-400">Welcome to my little corner of the internet</p>
        </header>

        {/* About Me Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold border-b-2 border-teal-400 pb-2 mb-6">About Me</h2>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-lg leading-relaxed text-gray-300">
            Hello! I'm [Your Name], a passionate developer, creator, and lifelong learner. This is a placeholder text area for your personal introduction. You can talk about your journey, your passions, your skills, or anything else you'd like to share with the world. Keep it engaging and authentic!
          </p>
        </section>

        {/* Photo Gallery Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold border-b-2 border-teal-400 pb-2 mb-6">My Photos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image src="https://placehold.co/600x400/EEE/31343C" alt="Placeholder image 1" width={600} height={400} />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image src="https://placehold.co/600x400/DDD/31343C" alt="Placeholder image 2" width={600} height={400} />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image src="https://placehold.co/600x400/CCC/31343C" alt="Placeholder image 3" width={600} height={400} />
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section>
          <h2 className="text-3xl font-semibold border-b-2 border-teal-400 pb-2 mb-6">My Video</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // A classic placeholder
              title="Placeholder Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </section>

      </main>
      <footer className="text-center py-6 mt-12 border-t border-gray-700">
        <p className="text-gray-500">&copy; {new Date().getFullYear()} [Your Name]. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
