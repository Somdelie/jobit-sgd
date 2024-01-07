"use client"
import Chart from "@/components/admin-panel/Chart"
import Header from "@/components/admin-panel/Header"
import LatestUser from "@/components/admin-panel/LatestUser"
import LargeCards from "@/components/admin-panel/cards/LargeCards"
import SmallCards from "@/components/admin-panel/cards/SmallCards"
import Paragraph from "@/components/front-office/Paragraph"
import useUser from "@/lib/loggedInUser"

const AdminPanel = () => {
  const { user, handleLogout } = useUser()
  return (
    <div className="py-6 px-8">
      <div className="flex items-center justify-between">
        <div>
          <span className="font-semibold text-secondaryLightRed text-[24px]">
            Howdy,{user?.firstName}!
          </span>
          <Paragraph title="We are glad to see you again!" />
        </div>
        <Header title="Overview" />
      </div>

      <SmallCards />
      <LargeCards />
      <Chart />
      <LatestUser />
      <section className="attribution pt-2 border-t-2 mt-4 flex items-center justify-center border-t-secondaryLightPurple">
        <p className="text-center  text-muted pb-2">
          Created By{" "}
          <span className="text-secondaryGreen">Somdelie Graphics</span> | All
          Rights Reserved
        </p>
      </section>
    </div>
  )
}

export default AdminPanel
