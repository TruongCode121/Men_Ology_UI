import BannerComponent from "@/sections/home/Banner/BannerComponent";
import Footer from "@/sections/home/Footer/Footer";
import SectionComponent from "@/sections/home/Section/SectionComponent";
import Section1Component from "@/sections/home/Section1/Section1Component";
import Section2Component from "@/sections/home/Section2/Section2Component";
import Section3Component from "@/sections/home/Section3/Section3Component";
import Section4Component from "@/sections/home/Section4/Section4Component";
import Section5FeedbackUser from "@/sections/home/Section5/Section5FeedbackUser";

export default async function Home() {
  return (
    <main className="overflow-x-hidden overflow-y-hidden tt_common_medium">
      <BannerComponent></BannerComponent>
      <SectionComponent></SectionComponent>
      <Section1Component></Section1Component>
      <Section2Component></Section2Component>
      <Section3Component></Section3Component>
      <Section4Component></Section4Component>
      <Section5FeedbackUser></Section5FeedbackUser>
      <Footer></Footer>
    </main>
  );
}
