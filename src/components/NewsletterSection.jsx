const NewsletterSection = () => (
  <section className="section bg-gradient-to-r from-green-600 to-green-700">
    <div className="container text-center">
      <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Subscribe to Our Newsletter</h2>
      <p className="text-white mb-8">Get the latest offers and updates</p>
      <form className="max-w-md mx-auto">
        <div className="flex gap-4">
          <input
            type="email"
            placeholder="Email Address"
            className="input flex-grow"
          />
          <button
            type="submit"
            className="btn btn-secondary whitespace-nowrap"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </section>
);

export default NewsletterSection; 