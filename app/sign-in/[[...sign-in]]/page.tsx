import {SignIn} from '@clerk/nextjs'
import Image from "next/image"
import Link from 'next/link'

export default function Page() {
    return (
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt=""
                        src="https://www.outlooktravelmag.com/media/Recommended-Tsingy-de-Bemaraha-National-Park-jpg.webp"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />
                    <div className="hidden lg:relative lg:block lg:p-12">
                        <Link className="block bg-base-200 blur-2xl" href="#">
                            <Image
                                width={40}
                                height={40}
                                src="https://cdn-icons-png.flaticon.com/128/18010/18010348.png"
                                alt="Travel Logo"
                            />
                        </Link>
                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                            Bienvenue sur TravelMG
                        </h2>
                        <p className="mt-4 leading-relaxed text-white/90">
                            Prêt à partir ? Explorez nos offres et laissez-nous vous guider vers votre prochaine grande
                            aventure !
                        </p>
                    </div>
                </section>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
                        <div className="relative -mt-16 block lg:hidden">
                            <Link
                                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                                href="#"
                            >
                                <Image
                                    width={40}
                                    height={40}
                                    src="https://cdn-icons-png.flaticon.com/128/18010/18010348.png"
                                    alt="Travel Logo"
                                />
                            </Link>
                            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                                Bienvenue sur TravelMG
                            </h1>
                            <p className="mt-4 leading-relaxed text-gray-500">
                                Prêt à partir ? Explorez nos offres et laissez-nous vous guider vers votre prochaine
                                grande aventure !
                            </p>
                        </div>
                        <div className="mt-6 md:mt-0 w-full flex justify-center items-center">
                            <SignIn/>
                        </div>
                    </div>
                </main>
            </div>
        </section>
    )
}