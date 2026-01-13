import {motion} from 'motion/react'
import { DragMe } from './DragMe';



const Connect = () => {
    const connects = [
  {
    name: "LinkedIn",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174857.png",
    link: "https://www.linkedin.com/in/amanasthanacse",
  },
  {
    name: "GitHub",
    logo: "https://cdn-icons-png.flaticon.com/512/733/733553.png",
    link: "https://github.com/amanasthana1111",
  },
  {
    name: "LeetCode",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
    link: "https://leetcode.com/amanasthana1212",
  },
  {
    name: "GeeksforGeeks",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
    link: "https://auth.geeksforgeeks.org/user/amanasthfl2r",
  },
  {
    name: "Email",
    logo: "https://cdn-icons-png.flaticon.com/512/732/732200.png",
    link: "mailto:amanasthana20051@gmail.com",
  },
  {
    name: "Instagram",
    logo: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
    link: "https://instagram.com/aman_asthana12",
  },
  {
    name: "Twitter (X)",
    logo: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
    link: "https://x.com/aman_dev12",
  },
  {
    name: "WhatsApp",
    logo: "https://cdn-icons-png.flaticon.com/512/733/733585.png",
    link: "https://wa.me/917982174178",
  },
];

  return (
    <div className="mb-12">
    <div className="text-sm font-['MyFont1'] text-gray-500 mt-12 mb-3 flex justify-between">
        Connect with Me
        <div>
          <DragMe/>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
        {connects.map((connect) => (
          <motion.div
            key={connect.name}
            drag
            dragConstraints= {{
              top : 0,
              bottom:0,
              left:0,
              right:0

            }}
            dragElastic = {0.3}
            className="flex items-center gap-2 px-3 py-2 rounded-md
                   border border-white/10 bg-[#131311]
                   text-sm text-gray-200 hover:border-white/30
                   cursor-grab "
          >
            <img
             src={connect.logo} alt={connect.name} className="w-4 h-4" />
            <a  target="_blank" href={connect.link}><span className=" hover:text-orange-400  ">{connect.name}</span></a>
          </motion.div>
        ))}
      </div>
      
    </div>
  )
}

export default Connect