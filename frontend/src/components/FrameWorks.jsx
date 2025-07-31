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
      "express",
      "node",
      "postgre",
    ]
    
    // Debug: log the paths being used
    console.log('Skills paths:', skills.map(skill => `/assets/img/${skill}.png`));
    
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
}

const Icon = ({ src }) => (
  <img 
    src={src} 
    alt="skill icon"
    className="rounded-sm duration-200 hover:scale-110 w-8 h-8"
    onLoad={() => console.log(`✅ Loaded: ${src}`)}
    onError={(e) => {
      console.error(`❌ Failed to load: ${src}`);
      console.error('Error details:', e);
    }}
  />
)