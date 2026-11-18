

const ClientCard = ({NewsImg, Title, Date}) => {
  return (
    <div className='flex items-center gap-1 rounded-lg overflow-hidden border border-r-6 border-gray-600  '>

        <div className='h-20 aspect-4/2'>
            <img src={NewsImg} alt="News1" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col gap-2" >
            <span>{Title}</span>
            <span>{Date}</span>
        </div>
    </div>
  )
}

export default ClientCard