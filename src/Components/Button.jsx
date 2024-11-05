const Button = ({ label, iconURL }) => {
  return (
    <button className='flex justify-center items-center gap-2 px-5 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full text-white'>
        {label}

        <img 
        src={iconURL} alt="Rrow right icon" className="ml-2 rounded-full w-5 h-5"
        />
    </button>
  )
}

export default Button