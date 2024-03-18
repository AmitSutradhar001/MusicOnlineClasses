import FeaturedCourses from "@/components/FeaturedCourses";
import Herosection from "@/components/Herosection";
import WhyChooseUs from "@/components/WhyChooseUs";
import MusicInfiniteMovingCard from "@/components/MusicInfiniteMovingCard";
import Upcoming from "@/components/Upcoming";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <Herosection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicInfiniteMovingCard />
      <Upcoming />
      <Instructors />
      <Footer />
    </main>
  );
}
