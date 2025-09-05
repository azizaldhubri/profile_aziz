import {  Card, CardContent,  Typography, useTheme } from "@mui/material";
 
 

const skills = [

  { name: "HTML", level: "متقدم", icon:  <img src="/icons/html.png" alt="HTML" className="w-8 h-8" />},
  { name: "CSS", level: "متقدم", icon: <img src="/icons/css.png" alt="css" className="w-8 h-8" /> },
  { name: "JavaScript", level: "متقدم", icon: <img src="/icons/js1.png" alt="js" className="w-8 h-8" style={{filter: 'grayscale(1)'}}/>},
  { name: "React.js", level: "متقدم", icon: <img src="/icons/react.png" alt="react" className="w-8 h-8" /> },
  { name: "Redux", level: "متوسط", icon: <img src="/icons/redux.png" alt="redux" className="w-8 h-8"  /> },
  { name: "Material-UI", level: "متقدم", icon: <img src="/icons/mui.png" alt="MUI" className="w-8 h-8" /> }, 
  { name: "Bootstrap", level: "متقدم", icon: <img src="/icons/bootstrap.png" alt="Bootstrap"  className="w-8 h-8   " />},
  { name: "Tailwind CSS", level: "متوسط", icon: <img src="/icons/tailwind_icon.png" alt="tailwind" className=" w-8 h-8 " /> },
  { name: "Laravel", level: "متوسط", icon:<img src="/icons/laravel3.png" alt="Laravel" className="w-9 h-9  "    /> },
];

export default function SkillCards() {
  const theme = useTheme();
  return ( 
     <Card 
     sx={{
        p: 4,
        borderRadius: 4,
        boxShadow: 4,
        textAlign: "center",
        bgcolor: theme.palette.mode === "light" ? "grey.100" : "grey.900",
      }}>
      <Typography variant="2" className="text-2xl font-bold mb-6  ">My Skills</Typography>
      <CardContent className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <Card
              sx={{
                  p: 2,
                  borderRadius: 3,
                  boxShadow: 3,
                  textAlign: "center",
                  cursor: "pointer",
                  border: "1px solid ",
                  // borderColor: "error.main",
                  borderColor: "#6a5250",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    bgcolor:
                      theme.palette.mode === "light" ? "grey.200" : "grey.800",
                  },
                  bgcolor:
                    theme.palette.mode === "light" ? "grey.50" : "grey.850",
                }}
          >    
          {/* {skill.icon}        */}
            <span className="text-3xl mb-2 text-center  "
            style={{display:'inline-block'}}>{skill.icon}</span>
            <h3 className="text-lg font-semibold">{skill.name}</h3>
            <p className="text-sm text-gray-400">{skill.level}</p>
          </Card>
        ))}
      </CardContent>
    </Card>
 
  );
}
