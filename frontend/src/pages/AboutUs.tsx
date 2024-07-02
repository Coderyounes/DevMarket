export default function AboutUs() {
  return (
    <section className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Our team members
            </h2>
          </div>

          <div className="grid max-w-6xl grid-cols-1 px-20 mx-auto mt-12 text-center sm:px-0 sm:grid-cols-2 md:mt-20 gap-x-8  gap-y-12 lg:gap-x-16 xl:gap-x-20">
            <div>
              <img
                className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
                src="https://avatars.githubusercontent.com/u/125454968?v=4"
                alt=""
              />
              <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
                Younes Bousfiha
              </p>
              <p className="mt-2 text-base font-normal text-gray-600 font-pj">
                Backend dev
              </p>
            </div>

            <div>
              <img
                className="object-cover w-32 h-32 mx-auto rounded-full lg:w-44 lg:h-44 grayscale filter"
                src="https://aup.imgix.net/user_images/58991/private-lessons-python-basics-practice-real-based-project-work-framework-1688262182.jpg"
                alt=""
              />
              <p className="mt-5 text-lg font-bold text-gray-900 sm:text-xl sm:mt-8 font-pj">
                Mohamed el assaoui
              </p>
              <p className="mt-2 text-base font-normal text-gray-600 font-pj">
                Frontend Dev
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-8 sm:mt-6 lg:mt-10 lg:grid-cols-12 lg:gap-x-12 gap-y-8">
          <div className="hidden lg:block lg:col-span-2"></div>

          <article className="prose lg:col-span-8 max-w-none prose-gray prose-blockquote:px-8 prose-blockquote:py-3 prose-blockquote:lg:text-xl prose-blockquote:font-medium prose-blockquote:text-gray-900 prose-blockquote:border-gray-900 prose-blockquote:border-l-2 prose-blockquote:lg:leading-9 prose-blockquote:not-italic prose-blockquote:bg-gray-100 prose-blockquote:text-lg prose-blockquote:leading-8">
            <p>
              Welcome to DevMarket, a dynamic platform where freelancers can
              discover diverse missions posted by employers. Our goal is to
              bridge the gap between skilled freelancers and businesses in need
              of their expertise.
            </p>
            <p>
              Welcome to DevMarket, a dynamic platform where freelancers can
              discover diverse missions posted by employers. Our goal is to
              bridge the gap between skilled freelancers and businesses in need
              of their expertise.
            </p>
            <p>
              At the heart of this innovative project are two passionate
              developers, Younes and Mohamed, who have poured their skills and
              dedication into making DevMarket a reality.
            </p>
            <br/>
            <h1 className="text-xl font-bold">Younes - Backend Developer Younes</h1>
            
            <p>
              Our talented backend developer, is the architect behind the robust
              and efficient server-side operations of DevMarket.With a strong
              foundation in database management, API development, and
              server-side scripting, Younes ensures that our platform runs
              smoothly and securely. His motivation for joining this project
              stems from a desire to create a seamless user experience for both
              freelancers and employers. As part of his final project for the
              ALX Software Engineering program, Younes has dedicated countless
              hours to perfecting the backend infrastructure, ensuring that
              DevMarket is scalable, reliable, and ready to handle the needs of
              a growing community.
            </p>
            <br/>
            <h1 className="text-xl font-bold">Mohamed - Frontend Developer Mohamed</h1>
            
            <p>
              our creative frontend developer, is the visionary behind the user
              interface and user experience design of DevMarket. With a keen eye
              for detail and a passion for crafting intuitive and engaging user
              experiences, Mohamed has brought the platform to life through his
              expertise in HTML, CSS, JavaScript, and modern frontend
              frameworks.
            </p>
            <p>
              As part of their final project for the ALX Software Engineering
              program, they were driven by a shared vision to create a
              meaningful and impactful platform that could serve the global
              freelance community. Their dedication to excellence and their
              passion for technology have fueled their efforts to bring
              DevMarket to life. We believe that DevMarket will not only connect
              freelancers with valuable opportunities but also empower them to
              showcase their skills and grow their careers. We are excited to
              share this platform with you and look forward to seeing the
              incredible collaborations and projects that will emerge from our
              community. Thank you for being a part of DevMarket. Together, we
              can create a vibrant and thriving ecosystem for freelancers and
              employers alike.
            </p>

            <p>
              His motivation lies in his commitment to creating a platform that
              is not only functional but also visually appealing and easy to
              navigate. As his final project for the ALX Software Engineering
              program, Mohamed has worked tirelessly to ensure that DevMarket
              offers a smooth and enjoyable experience for all users. Our
              Motivation The journey of building DevMarket has been both
              challenging and rewarding for Younes and Mohamed.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
