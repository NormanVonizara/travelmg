import {Wrapper} from "@/app/components/Wrapper"
import Link from "next/link"

export default function Home() {
  return (
      <Wrapper>
          <section className="bg-base-200/30 rounded-xl">
              <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                  <div className="mx-auto max-w-3xl text-center">
                      <h1
                          className="bg-gradient-to-r from-primary via-accent-600 to-accent bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
                      >
                          Bienvenue sur TravelMG

                          <span className="sm:block"> Votre Compagnon de Voyage Idéal. </span>
                      </h1>
                      <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
                          Découvrez des expériences locales uniques, des visites guidées aux activités d&apos;aventure, pour rendre chaque instant inoubliable.
                      </p>
                      <div className="mt-8 flex flex-wrap justify-center gap-4">
                          <Link
                              className="btn"
                              href="#"
                          >
                              Démarrer
                          </Link>
                          <Link
                              className="btn btn-accent"
                              href="#"
                          >
                              Voir plus
                          </Link>
                      </div>
                  </div>
              </div>
          </section>
      </Wrapper>
  );
}