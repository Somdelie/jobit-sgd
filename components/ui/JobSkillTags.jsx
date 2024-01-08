import React from "react"
import Paragraph from "../front-office/Paragraph"

const JobSkillTags = ({ skills }) => {
  return (
    <div className="grid grid-cols-3 w-full mt-2 items-start text-gray-400 dark:text-text border-b  p-1 text-xs py-2 ">
      {/* Create a wrapper for the skills */}
      {skills?.slice(0, 3).map((skill, i) => (
        <div key={i} className="">
          <div className=" ">
            <Paragraph className="text-gray-400" title={skill} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default JobSkillTags
