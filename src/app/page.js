import Feature from "@/components/Feature/Feature";
import Menu from "@/components/Header/Menu/Menu";
import TopNav from "@/components/Header/TopNav/TopNav";
import Slider from "@/components/Slider/Slider";
import NotificationService from "@/components/NotificationService/NotificationService";
import Image from "next/image";
import featureData from '@/data/feature.json';
import Module from "@/components/Module/Module";
import NotificationServiceTwo from "@/components/NotificationService/NotificationServiceTwo";
import FormRequest from "@/components/FormRequest/FormRequest";
import Testimonial from "@/components/Testimonial/Testimonial";
import Blog from "@/components/Blog/Blog";
import blogData from '@/data/blog.json';
import Partner from "@/components/Partner/Partner";
import Footer from "@/components/Footer/Footer";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
        <header id="header">
            <TopNav />
            <Menu />
        </header>
        <main className="content">
            <Slider />
            <Feature data={featureData}/>
            <NotificationService />
            <Module />
            <NotificationServiceTwo />
            <FormRequest />
            <Testimonial />
            <Blog data={blogData}/>

        </main>
        <Partner className='lg:mt-[100px] sm:mt-16 mt-10'/>
        <footer id='footer'>
            <Footer/>
        </footer>
    </div>
  );
}
