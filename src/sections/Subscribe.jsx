import Button from "../Components/Button"

const Subscribe = () => {
  return (
    <section id="contact-us"
    className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="font-bold text-center leading-[68px] lg:max-w-md font-palanquin text-4xl">
        Sign up for <span className="text-coral-red">Updates</span> & Newsletter
      </h3>

      {/* imput and button container */}
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type='text'
        placeholder="subsribeu@exultedeagles.com" className="input" />

        {/* button container */}
        <div className="flex max-sm:justify-end items-center mas-sm:w-full"> 
          <Button label='Sign Up' fullWidth />
        </div>
      </div>
    </section>
  )
}

export default Subscribe