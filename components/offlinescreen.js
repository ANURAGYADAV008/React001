const OfflineScreen=()=>{
  return(
    <div className="flex flex-col items-center justify-center h-screen">
  <img
    src="https://as2.ftcdn.net/v2/jpg/05/97/81/57/1000_F_597815797_ESqIxQdM1C1XJwMJyuX08ucOzrgXejyG.jpg"
    alt="offline"
    className="w-80 mb-6"
  />
  <h2 className="text-2xl font-semibold mb-2">You are offline</h2>
  <p className="text-gray-500">Don’t worry, you’ll be back online soon 🚀</p>
</div>
  )
}

export default OfflineScreen

