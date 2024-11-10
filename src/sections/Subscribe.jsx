const Subscribe = () => {
  return (
    <section id="contact-us"
    className="max-container flex justify-between items-center max-lg:flex-col gap-10">
      <h3 className="font-bold leading-[68px] lg:max-w-md font-palanquin text-4xl">
        Sign up for {''}
        <span className="text-coral-red">Updates</span>  & Newsletter
      </h3>
      <div>
        <input type='text'
        placeholder="charles.adikankwu@exultedeagles.com" className="input" />
        <div>
          <button label='Sign Up' />
        </div>
      </div>
    </section>
  )
}

export default Subscribe