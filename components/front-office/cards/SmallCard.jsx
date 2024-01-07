import Image from "next/image"

const SmallCard = ({ name, rating, address, vacancy }) => {
  return (
    <div class="flex-1 basis-[12rem] bg-dark-card text-[#cbd5e1] w-[150px] h-[200px] p-3 border border-dark-light rounded-[10px]">
      <div class="flex items-center gap-3">
        <Image width={40} height={40} src="/social.png" alt="LOGO" />
        <div>
          <h1>{name}</h1>
          <div className="flex items-center gap-2">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 576 512"
              className="text-yellow-500 text-sm"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
            </svg>
            <span className="text-muted text-sm">{rating}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="text-muted"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2z"></path>
          <path d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819zM12 4c3.309 0 6 2.691 6 6.005.021 4.438-4.388 8.423-6 9.73-1.611-1.308-6.021-5.294-6-9.735 0-3.309 2.691-6 6-6z"></path>
        </svg>
        <span className="text-muted">{address}</span>
      </div>
      <div className="flex items-center gap-2 mt-2">
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="text-muted"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zm-5-2v2H9V4h6zM8 8h12v3H4V8h4zM4 19v-6h6v2h4v-2h6l.001 6H4z"></path>
        </svg>
        <span className="text-muted">{vacancy} Vacancies</span>
      </div>
      <button className="w-full py-2 bg-slate-100 hover:bg-slate-200 dark:hover:border-b-gray-600 transition dark:bg-dark-light rounded-[8px] capitalize mt-6">
        more details
      </button>
    </div>
  )
}

export default SmallCard
