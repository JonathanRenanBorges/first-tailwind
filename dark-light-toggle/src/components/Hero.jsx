import React from "react";

const Hero = () => {
  return (
    <div className="isolate relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-1/4 w-1/2 h-[30%] bg-[#3165ff] dark:bg-[#3165ff] rounded-full blur-3xl opacity-20"></div>
      </div>

      {/* Content Area with Conditional Scroll */}
      <div className="mobile-scroll-container">
        <div className="container mx-auto px-6 py-20 md:py-24 lg:py-20 xl:py-32">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
            <div className="flex-1 space-y-6 lg:space-y-7">
              <div className="space-y-4 lg:space-y-5">
                {/* Badge and Title */}
                <div className="flex items-center">
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-[#3165ff] text-white mr-2">
                    Novo
                  </span>
                  <h2 className="inline-block px-3 py-1.5 lg:px-4 lg:py-2 rounded-full dark:bg-neutral-900 text-[#3165ff] font-medium text-sm backdrop-blur-sm border border-neutral-800/50">
                    <i className="bx bx-trending-up mr-1"></i>Nova geração de
                    design de sistemas
                  </h2>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                  <span className="block mb-1">Design</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#3165ff] via-[#3165ff] to-[#3165ff]">
                    Sem limites
                  </span>
                </h1>

                {/* Description */}
                <p className="text-base lg:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl font-light">
                  Eleve seus projetos comigo com um sistema de design
                  simplificado alimentado pelo mais recente TailwindCSS v4. Crie
                  experiências de usuário impressionantes com a troca de
                  tecnologia de última geração
                </p>

                {/* Divider */}
                <div className="flex gap-3 items-center">
                  <div className="h-px bg-neutral-300 dark:bg-neutral-700 w-12"></div>
                  <p className="uppercase text-xs tracking-widest text-neutral-500 dark:text-neutral-400 font-medium">
                    Transições perfeitas
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap gap-3 lg:gap-4">
                  <button
                    onClick={() =>
                      window.open(
                        "https://portfolio-jonathanborgess.netlify.app/",
                        "_blank"
                      )
                    }
                    className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-900 hover:bg-black text-white dark:bg-[#3165ff] dark:hover:bg-[#3165ff] dark:text-neutral-900 font-medium shadow-lg hover:shadow-neutral-900/20 dark:hover:shadow-[#3165ff] flex items-center transition group cursor-pointer"
                  >
                    <i className="bx bx-code-alt mr-2 lg:mr-3 text-lg lg:text-xl group-hover:rotate-12 transition transform"></i>
                    <span>Comece já</span>
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        "https://www.linkedin.com/in/jonathan-renan-borges/",
                        "_blank"
                      )
                    }
                    className="px-6 py-3 lg:px-7 lg:py-3.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 border border-neutral-300 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium flex items-center transition group cursor-pointer"
                  >
                    <i className="bx bxs-paper-plane mr-2 lg:mr-3 text-lg lg:text-xl opacity-70 group-hover:rotate-12 transition-opacity"></i>
                    <span>Contato</span>
                  </button>
                </div>

                {/* Testimonials */}
                <div className="flex flex-col sm:flex-row gap-5 sm:items-center pt-6 lg:pt-7 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="flex -space-x-3">
                    <img
                      src="../public/images/cris.png"
                      alt="User"
                      className="w-9 h-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover block"
                    />
                    <img
                      src="../public/images/savio.png"
                      alt="User"
                      className="w-9 h-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover block"
                    />
                    <img
                      src="../public/images/biel.png"
                      alt="User"
                      className="w-9 h-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover block"
                    />
                    <img
                      src="../public/images/ricardo.png"
                      alt="User"
                      className="w-9 h-10 lg:h-10 rounded-full border-2 border-white dark:border-neutral-900 object-cover block"
                    />
                    <span className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white dark:border-neutral-900 dark:bg-[#3165ff] bg-[#3165ff] text-black dark:text-neutral-900 text-xs font-medium">
                      +100
                    </span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <i key={i} className="bx bxs-star text-[#3165ff]"></i>
                      ))}
                      <i className="bx bxs-star-half text-[#3165ff]"></i>
                    </div>
                    <span className="text-neutral-600 dark:text-neutral-400 text-sm ml-1">
                      4.8/5
                    </span>
                    <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                      Confiável por
                      <span className="font-bold text-neutral-900 dark:text-white">
                        {" "}
                        +100
                      </span>{" "}
                      pessoas
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
