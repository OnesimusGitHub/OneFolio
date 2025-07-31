import { OrbitingCircles } from "./OrbitingCircles";

export function FrameWorks() {
    const skills = [
      "cs",
      "htmlicon", 
      "javascript",
      "neticon",
      "react",
      "tailwindcss",
      "vite",
      
    ]
    
    return (
      <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
        <OrbitingCircles iconSize={40}>
          {skills.map((skill, index) => (
            <Icon key={index} src={`/assets/img/${skill}.png`}/>
          ))}
          
        </OrbitingCircles>
        <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
           {[...skills].reverse().map((skill, index) => (
            <Icon key={index} src={`/assets/img/${skill}.png`}/>
          ))}
          
        </OrbitingCircles>
      </div>
    );
  }const Icon = ({ src }) => (
  <img 
    src={src} 
    alt="skill icon"
    className="rounded-sm duration-200 hover:scale-110 w-8 h-8 object-contain"
    style={{
      filter: 'brightness(1.1) contrast(1.1)',
      opacity: 1,
    }}
  />
)