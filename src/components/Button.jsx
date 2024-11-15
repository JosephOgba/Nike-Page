const Button = ({label,iconURL}) => {
  return (
   <button className='flex justify-center items-center gap-2 bg-coral-red text-white-400 px-7 py-4 border font-montserrat text-lg leading-none rounded-full border-coral-red'>
     {label}
     <img 
     className='ml-2 rounded-full w-5 h-5'
     src={iconURL} alt="Right Arrow icon" />
   </button>
   
  )
}

export default Button