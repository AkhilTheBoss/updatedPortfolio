import React from "react";
import SkillBox from "./SkillBox";
import { BiCodeAlt } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiGooglecloud } from "react-icons/si";
import { GoDatabase } from "react-icons/go";
import { FaPython } from "react-icons/fa";
import { TbLetterC } from "react-icons/tb";
import { CgCPlusPlus } from "react-icons/cg";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandReactNative } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { SiTerraform } from "react-icons/si";
import { SiRabbitmq } from "react-icons/si";
import { SiNginx } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiMongodb } from "react-icons/si";
import { SiAmazondynamodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import "./Body.css";

function Body() {
  return (
    <div className="body-wrapper">
      <div className="body">
        <h1 className="title">Skills</h1>
        <div className="boxes-wrapper">
          <SkillBox
            icon={<BiCodeAlt size={25} />} // Pass the icon as a prop
            title="Languages"
            skills="Python, C, C++, JavaScript, React Native"
            bottomIcons={
              <>
                <FaPython size={20} />
                <TbLetterC size={20} />
                <CgCPlusPlus size={20} />
                <IoLogoJavascript size={20} />
                <TbBrandReactNative size={20} />
              </>
            }
          />
          <SkillBox
            icon={<FaReact size={25} />}
            title="Frameworks"
            skills="React, Node.js, Flask, Django, Next.js"
            bottomIcons={
              <>
                <FaReact size={20} />
                <FaNodeJs size={20} />
                <SiFlask size={20} />
                <SiDjango size={20} />
                <RiNextjsFill size={20} />
              </>
            }
          />
          <SkillBox
            imageSrc="/images/devOps.png"
            // icon={<SiGooglecloud size={25} />}
            title="DevOps Tools"
            skills="Git, Docker, Kubernetes, AWS, Terraform, RabbitMQ, NginX"
            bottomIcons={
              <>
                <FaGitAlt size={20} />
                <FaDocker size={20} />
                <SiKubernetes size={20} />
                <FaAws size={20} />
                <SiTerraform size={20} />
                <SiRabbitmq size={20} />
                <SiNginx size={20} />
              </>
            }
          />
          <SkillBox
            icon={<GoDatabase size={20} />}
            title="Databases"
            skills="PostgresSQL, MongoDB, DynamoDB, MySQL"
            bottomIcons={
              <>
                <BiLogoPostgresql size={20} />
                <SiMongodb size={20} />
                <SiAmazondynamodb size={20} />
                <GrMysql size={20} />
              </>
            }
          />
        </div>
      </div>
    </div>
  );
}

export default Body;
