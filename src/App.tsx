import { useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { ArrowLeft, ArrowRight, HelpCircle, Plus } from "lucide-react";
import { FaGripVertical } from "react-icons/fa";
import { Button } from "./components/ui/button";
import image from "./assets/image.jpg";

const tabItems = [
  {
    value: "about_me",
    label: "About me",
    content: `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
  },
  {
    label: "Experiences",
    value: "experiences",
    content: `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
  },
  {
    label: "Recommended",
    value: "recommended",
    content: `Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.

I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...`,
  },
];

function HoverTab({ value, label, isHovered, onHover, onLeave }: any) {
  return (
    <TabsTrigger
      value={value}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`
        relative flex-1 py-[10px] text-center cursor-pointer text-[#A3ADB2]
        data-[state=active]:bg-[#28292F] data-[state=active]:text-white
        hover:text-white transition-all font-poppins duration-500 shadow-[0_4px_16px_rgba(0,0,0,0.5)]
      `}
    >
      <div
        style={{
          width: isHovered ? "100%" : "0%",
          transition: "width 0.7s ease, background-color 0.3s ease",
        }}
        className="absolute inset-0 h-full bg-[#28292f67] origin-left rounded-md"
      />
      <span className="relative z-10">{label}</span>
    </TabsTrigger>
  );
}

export default function App() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("about_me");
  const [images, setImages] = useState<string[]>([
    image,
    image,
    image,
    image,
    image,
    image,
  ]);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount =
      direction === "left" ? -clientWidth / 2.5 : clientWidth / 2.5;

    scrollRef.current.scrollTo({
      left: scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };

  const addImage = () => {
    setImages((prev) => [...prev, image]);
    setTimeout(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollTo({
          left: scrollRef.current.scrollWidth,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  return (
    <div className="w-full py-15 px-10 h-full bg-[#191B1F] flex items-center">
      <div className="flex-1" />
      <div className="flex-1 flex flex-col">
        <Tabs
          value={activeTab}
          onValueChange={(v) => setTimeout(() => setActiveTab(v), 250)}
          className="h-[316px] bg-[#363C43] border-2 shadow-[#00000066] rounded-[18.89px] flex flex-col items-center relative justify-start"
        >
          <div className="absolute top-[20px] left-[12px] flex flex-col w-[24px] h-[159.89px] items-end justify-between">
            <div className="relative w-6 h-6">
              <HelpCircle className="absolute inset-0 w-full h-full text-[#4A4E54]" />
              <HelpCircle className="absolute inset-0 w-full h-full text-[#A3ADBA] opacity-50" />
            </div>
            <FaGripVertical className="text-[#4A4E54]" size={20} />
          </div>
          <TabsList className="w-[80%] bg-[#171717] h-[50px] mt-[17px] shadow-[0_14px_20px_rgba(0,0,0,0.5)] flex gap-x-2">
            {tabItems.map((tab, index) => (
              <HoverTab
                key={tab.value}
                value={tab.value}
                label={tab.label}
                isHovered={hoveredIndex === index}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
          </TabsList>

          {tabItems.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="text-[#969696] transition-opacity duration-500 delay-150 w-[80%] max-h-[170px] overflow-y-scroll scrollbar scrollbar-gradient mx-auto mt-[27px] font-jakarta"
            >
              <p>
                Hello! I’m Dave, your sales rep here from Salesforce. I’ve been
                working at this awesome company for 3 years now.
              </p>
              <br />
              <p>
                I was born and raised in Albany, NY& have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old
                twin daughters- Emma and Ella...
              </p>
              <p>
                I was born and raised in Albany, NY& have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old
                twin daughters- Emma and Ella...
              </p>
              <p>
                I was born and raised in Albany, NY& have been living in Santa
                Carla for the past 10 years my wife Tiffany and my 4 year old
                twin daughters- Emma and Ella...
              </p>
            </TabsContent>
          ))}
        </Tabs>

        <div className="h-[4px] mt-[21px] bg-[#282828] rounded-[2.46px] shadow-[#00000054] w-[90%] mx-auto" />

        <div className="h-[316px] mt-[18px] relative bg-[#363C43] border-2 shadow-[#00000066] rounded-[18.89px]">
          <header className="flex items-center mt-[21px] ml-[51px] justify-between">
            <div className="flex-1">
              <Button className="shadow-sm shadow-[#00000040] rounded-[20px] w-[149px] text-xl font-poppins h-[62px]">
                Gallery
              </Button>
            </div>
            <Button
              onClick={addImage}
              className="w-[131.32px] h-[46px] bg-[#FFFFFF08] hover:bg-[#FFFFFF08] rounded-[104px] text-[12px] font-extrabold mr-[36px] shadow-xl shadow-[0_4px_15px_rgba(13, 13, 13, 0.83)] flex items-center justify-center gap-1"
            >
              <Plus className="text-[12px] font-jakarta font-extrabold" /> ADD
              IMAGE
            </Button>

            <div className="flex mx-4 item-center justify-center gap-x-3">
              <div
                onClick={() => scroll("left")}
                className="h-[45px] w-[45px] rounded-full bg-linear-to-r from-[#303439] to-[#161718] flex items-center justify-center shadow-xl shadow-[#101213] cursor-pointer hover:from-[#25282A] hover:to-[#0D0E0E] duration-300"
              >
                <ArrowLeft className="text-[#6F787C]" />
              </div>
              <div
                onClick={() => scroll("right")}
                className="h-[45px] w-[45px] duration-300 rounded-full bg-linear-to-r from-[#303439] to-[#161718] flex items-center justify-center shadow-xl shadow-[#101213] cursor-pointer hover:from-[#25282A] hover:to-[#0D0E0E]"
              >
                <ArrowRight className="text-[#6F787C]" />
              </div>
            </div>
          </header>

          <div
            ref={scrollRef}
            className="max-w-[520px] mx-auto flex pt-[40.65px] gap-x-3 overflow-x-auto scroll-smooth scrollbar-gradient-none"
          >
            {images.map((img, index) => (
              <div
                key={index}
                className="min-w-[190px] hover:scale-110 duration-700 hover:-rotate-6 relative h-[179px] rounded-[24px] overflow-hidden"
              >
                <img
                  src={img}
                  className="filter grayscale hover:filter-none "
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        <div className="h-[4px] mt-[21px] bg-[#282828] rounded-[2.46px] shadow-[#00000054] w-[90%] mx-auto" />
      </div>
    </div>
  );
}
