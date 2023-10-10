import { Profile  } from "../components/Profile";
import { InformationGrid  } from "../components/InformationGrid";
import { SectionTitle  } from "../components/SectionTitle";
import { KnowledgeCard } from "../components/knowledgeCard";
import { HiOutlineLightBulb } from 'react-icons/hi2/' 
import { BsFillMicFill, BsFillBagFill, BsWindowFullscreen } from 'react-icons/bs/' 
import { AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillApi, AiFillGithub } from 'react-icons/ai/' 
import { Banner  } from "../components/Banner";
import { EducationCard  } from "../components/EducationCard";
import { PortfolioCard  } from "../components/PortfolioCard";
import { SocialLink  } from "../components/SocialLink";
import { Divider   } from "../components/Divider";
import { Footer   } from "../components/Footer";
import { ExtraSkills   } from "../components/ExtraSkills";

export default function Home() {

  const titlesContact = [ "Residence", "Phone", "Mail"];
  const resultsContact = [ "Medellín", "3113515503", "jjrluj@gmail.com"];

  const titlesLanguages = ["Spanish", "English", "Japanase"];
  const resultsLanguages = ["99%", "85%", "Trying"];
  const percentagesLanguages = [99, 90, 15];

  const titlesProgramming = [ "JS", "CSS" , "Angular"];
  const resultsProgramming = [ "75%", "80%","70%" ];
  const percentagesProgramming = [90, 75, 80, 70];

  return (
      <main className="flex bg-slate-100">

        <aside className="sticky top-0 w-1/5 p-6 bg-slate-50 h-screen ">

            <Profile/>
            <InformationGrid title={titlesContact} results={resultsContact}/>
            <Divider/>
            <InformationGrid mainTitle="Languages" title={titlesLanguages} results={resultsLanguages} percentage={percentagesLanguages}/>
            <Divider/>
            <InformationGrid mainTitle="Programming Languages" title={titlesProgramming} results={resultsProgramming} percentage={percentagesProgramming}/>
            <ExtraSkills mainTitle="Programming Languages" title={titlesProgramming} results={resultsProgramming}/>
        </aside>

        <div className=" w-max flex-col align-middle items-center flex flex-1 px-8 gap-4">
          <Banner title="Hi! I am Jackson Rivera Front-end Developer" subtitle="My passion for learning and trying new technologies drives me to create innovative digital experiences. As a designer and sound enthusiast, I add a unique creative flair to my work." button="Hire me"/>
          <SectionTitle title="My Knowledge" subtitle="My specialization lies in Ecommerce development, complemented by a background in design. I thrive on continuous learning in the dynamic world of coding."/>

          
          <section className="grid grid-cols-3 gap-5">
            <KnowledgeCard title="Front-end Development" subtitle="Angular HTML JS " ImageIcon={BsWindowFullscreen}/>
            <KnowledgeCard title="Shopify Expertise" subtitle="Liquid E-commerce management" ImageIcon={BsFillBagFill}/>
            <KnowledgeCard title="Back-end Development" subtitle="Java NestJs" ImageIcon={AiFillApi}/>
            <KnowledgeCard title="Creative Design:" subtitle="Photoshop Figma" ImageIcon={HiOutlineLightBulb}/>
            <KnowledgeCard title="Sound Design" subtitle="Voiceovers & Sound edition" ImageIcon={BsFillMicFill}/>
          </section>

          <SectionTitle title="Education" subtitle="My path through the world of education has surely not been the longest, however I still don't know when it will end! "/>

          <section className="bg-white w-full">
            <EducationCard time="2019 - Present" role="Student" place="University of Antioquia" title="Systems engineering degree" description="I am in the second half of my university career. Uni has given me not only knowledge, but also experience and code mentors"/>
            <EducationCard time="2016 - 2019" role="Student" place="ASW" title="C1 English Certificate" description="I took intensive English courses at American School Way, which allowed me to become confident and fluent in the English language."/>
            <EducationCard time="2013 - 2018" role="Student" place="Diego Echavarria Misas" title="Bachelor's degree with an emphasis in software development" description="I did my basic studies at the same time that I learned about the world of development. Here I began to know all the possibilities that the code could offer me."/>
          </section>

          <SectionTitle title="Portfolio" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor vel libero vel placerat."/>

          <div className="overflow-x-auto">
            <section className="flex flex-row gap-16 mb-8">
              <PortfolioCard title="Konkretus web" text="I designed sections and pages for the discreet and minimalist style of this web site" image="/imgs/descarga.png" />
              <PortfolioCard title="Casio Titec Site" text="Me and my team work together along Casio's design team in order to achieve a more personal approach to their interests" image="/imgs/casio.png" />
              <PortfolioCard title="Sempertex E-commerce" text="I have created a number of content for Sempertex's page, having a focus on user experience and client satisfaction" image="/imgs/sempertex.webp" />
            </section>
          </div>

          <Footer/>
        </div>



        <aside className="sticky h-screen top-0 flex flex-col items-center text-center w-28 bg-slate-50 gap-3 pt-16">
          <h3 className="text-2xl font-semibold">Links</h3>
          <SocialLink url="https://www.instagram.com/jack_monogama/" ImageIcon={AiFillInstagram}/>
          <SocialLink url="https://www.linkedin.com/in/jackson-rivera-usuga-006387240/" ImageIcon={AiFillLinkedin}/>
          <SocialLink url="https://github.com/JacksonRivera" ImageIcon={AiFillGithub}/>
        </aside>

      </main>
     
    
  )
}
