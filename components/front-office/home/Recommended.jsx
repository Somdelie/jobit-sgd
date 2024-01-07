/* eslint-disable @next/next/no-img-element */
import Image from "next/image"
import Link from "next/link"

const Recommended = ({ jobs }) => {
  return (
    <div className="card-shadow dark:shadow-none card p-3">
      {jobs.slice(0, 5).map((job) => (
        <Link href={`/jobs/${job?.id}`} key={job?.id}>
          <div className="flex items-center justify-between bg-slate-100 rounded-lg dark:bg-hover-color p-2 mt-2 !opacity-100 group">
            <div className="flex items-center gap-2">
              <Image width={30} height={30} src={job?.logo_url} alt="" />
              <div>
                <h1 className="group-hover:text-secondaryGreen">
                  {job?.title}
                </h1>
                <p>
                  <span className="text-sm">{job?.company_name}</span>
                  <span className="text-xl mx-2">.</span>
                  <span className="text-sm">{job?.company_location}</span>
                </p>
              </div>
            </div>
            <div>
              <h1>
                {job?.salary_range}/{" "}
                <span className="text-sm text-muted">yr</span>
              </h1>
              <span className="text-sm text-muted">
                {job?.type_of_employment}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Recommended
