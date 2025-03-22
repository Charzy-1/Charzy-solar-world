import Button from "../Components/Button"

const Subscribe = () => {
  return (
    <section id="contact-us"
      className="max-container flex flex-col items-center gap-10">
      
      {/* Heading */}
      <h3 className="font-bold text-center leading-tight font-palanquin text-4xl lg:text-4xl sm:text-3xl">
        Join Our Exciting <span className="text-coral-red">Community</span> for Updates & Newsletter
      </h3>

      {/* Button container */}
      <div className="w-full flex justify-center items-center gap-5 p-2.5 max-sm:flex-col">
        <div className="flex justify-center w-full max-sm:w-auto">
          <a href="https://chat.whatsapp.com/F8NqNRNKVxwLhFgfDv7SXb" target="_blank" rel="noopener noreferrer">
            <Button label="Join Group" className="text-lg lg:text-lg sm:text-base" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Subscribe;
