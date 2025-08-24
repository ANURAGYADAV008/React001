const MenuHeader=({menuItem})=>{
    return(
        <div>
            <div className="max-w-3xl mx-auto px-4">
  <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 md:p-6 mt-4">
    <div className="flex items-start justify-between gap-4">
      <div className="min-w-0">
        <h1 className="text-[22px] md:text-2xl font-semibold text-gray-900 leading-snug">
          {menuItem[2]?.card?.card?.info?.name}
        </h1>
        <p className="text-sm text-gray-600 mt-1 truncate">
          {menuItem[2]?.card?.card?.info?.locality},{" "}
          {menuItem[2]?.card?.card?.info?.city}
        </p>

        <div className="flex flex-wrap items-center gap-3 mt-3 text-sm text-gray-700">
          <span className="inline-flex items-center gap-2">
            💸 <span className="text-gray-800">
              {menuItem[2]?.card?.card?.info?.costForTwoMessage}
            </span>
          </span>
          <span className="h-3 w-px bg-gray-300" />
          <span className="inline-flex items-center gap-2">
            ⏱️ <span className="text-gray-800">
              {menuItem[2]?.card?.card?.info?.sla?.slaString || "—"}
            </span>
          </span>
        </div>
      </div>

      {/* Rating pill */}
      <div className="shrink-0">
        <div className="inline-flex flex-col items-center justify-center rounded-xl border border-gray-200 px-3 py-2 shadow-sm">
          <div className="inline-flex items-center gap-1 text-sm font-semibold text-green-700">
            ★ {menuItem[2]?.card?.card?.info?.avgRating ?? "—"}
          </div>
          <div className="text-[11px] text-gray-500 mt-0.5">
            {menuItem[2]?.card?.card?.info?.totalRatingsString || "Ratings"}
          </div>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className="h-px bg-gray-100 my-4" />

    {/* Offer / tags row (optional) */}
    <div className="flex flex-wrap gap-2">
      {(menuItem[2]?.card?.card?.info?.labels || []).slice(0,3).map((l, i) => (
        <span
          key={i}
          className="text-xs md:text-[13px] bg-orange-50 text-orange-700 border border-orange-200 rounded-full px-2.5 py-1"
        >
          {l?.message || l?.title}
        </span>
      ))}
    </div>
  </div>
  
  </div>
        </div>
    )
}
export default MenuHeader