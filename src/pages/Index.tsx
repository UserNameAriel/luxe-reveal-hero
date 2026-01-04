import { HeroSection } from "@/components/HeroSection";

const Index = () => {
  return (
    <main className="bg-black">
      <HeroSection />
      
      {/* Next Section - appears after scroll */}
      <section className="flex min-h-screen items-center justify-center bg-zinc-950 px-6">
        <div className="text-center">
          <h2 className="text-4xl font-light tracking-wide text-white md:text-5xl lg:text-6xl">
            Your Next Section
          </h2>
          <p className="mt-6 text-lg text-white/60">
            Continue building your amazing project here
          </p>
        </div>
      </section>
    </main>
  );
};

export default Index;
