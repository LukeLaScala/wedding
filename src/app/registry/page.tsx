import Header from "@/components/Header"
import { Container } from "@/components/Container"
import { FadeIn } from "@/components/FadeIn"
import { Hero } from "@/components/Hero"
import Image from "next/image"

export default function RegistryPage() {
  return (
    <>
      <Header />

      <main className="bg-gray-50 min-h-screen border-y border-gray-200 border-dashed border-spacing-4">
        <Hero description="We can't wait to celebrate with you! Having all of our loved ones together is the best present we could ever receive. For those who have asked about a gift, we've created a registry of items to help us set up Our First Home together. You can find the details below:">
          Registry
        </Hero>

        <div className="relative bg-white border-t border-gray-200">
          <Container className="py-20">
            <FadeIn>
              <div className="max-w-5xl mx-auto text-center">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 h-80 flex flex-col justify-between items-center text-center">
                    <div className="flex-1 flex items-center justify-center">
                      <Image
                        src="/ws.png"
                        alt="Williams Sonoma"
                        width={200}
                        height={100}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <a
                      href="https://www.williams-sonoma.com/registry/dcnxxclmwc/registry-list.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors font-medium mt-4"
                    >
                      View Registry
                    </a>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 h-80 flex flex-col justify-between items-center text-center">
                    <div className="flex-1 flex items-center justify-center">
                      <Image
                        src="/fete.png"
                        alt="fête"
                        width={120}
                        height={120}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <a
                      href="https://tresbellefete.com/pages/gift-registry/?mrsearch=&mrrid=4873135"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors font-medium mt-4"
                    >
                      View Registry
                    </a>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 h-80 flex flex-col justify-between items-center text-center">
                    <div className="flex-1 flex items-center justify-center">
                      <Image
                        src="/bloomingdales.png"
                        alt="Bloomingdale's"
                        width={180}
                        height={60}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <a
                      href="https://www.bloomingdales.com/registry/Piper-Rackley-Luke-LaScala/1191765"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700 transition-colors font-medium mt-4"
                    >
                      View Registry
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </Container>
        </div>
      </main>
    </>
  )
}