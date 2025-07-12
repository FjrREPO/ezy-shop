"use client";

import { Button } from "@/components/ui/button";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";
import Link from "next/link";
import Features from "./_components/features";
import Testimonials from "./_components/testimonials";

export default function Home() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <section className="w-full h-full" id="home">
          <div>
            <div className="pb-16 pt-8 sm:pb-20 sm:pt-12 md:pb-24 md:pt-16 lg:pb-56 lg:pt-44">
              <div className="relative mx-auto flex flex-col px-4 sm:px-6 lg:block">
                <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:max-w-none lg:text-left">
                  <h1 className="mt-4 max-w-2xl text-balance text-3xl font-medium sm:text-4xl md:text-5xl lg:mt-16 lg:text-6xl xl:text-7xl">
                    Everything You Need, All in One Place
                  </h1>
                  <p className="mt-4 max-w-2xl text-pretty text-base sm:mt-6 sm:text-lg md:mt-8">
                    Discover top-quality products — from daily essentials and fashion to digital goods. Shop faster, easier, and with total confidence.
                  </p>

                  <div className="mt-8 flex flex-col items-center justify-center gap-2 sm:flex-row sm:mt-10 lg:justify-start lg:mt-12">
                    <Button asChild size="lg" className="px-5 text-base w-full sm:w-auto">
                      <Link href="#link">
                        <span className="text-nowrap">Start Shopping</span>
                      </Link>
                    </Button>
                  </div>
                </div>
                <Image
                  className="z-10 order-first ml-auto h-48 w-full object-cover sm:h-64 md:h-80 lg:absolute lg:inset-0 lg:-right-20 lg:top-1/2 lg:-translate-y-1/2 lg:order-last lg:h-max lg:w-2/3 lg:object-contain dark:mix-blend-lighten"
                  src="/hero.png"
                  alt="Abstract Object"
                  height="4000"
                  width="3000"
                />
              </div>
            </div>
          </div>
          <div className="bg-background pb-12 sm:pb-16 md:pb-24 lg:pb-32">
            <div className="group relative m-auto max-w-6xl px-4 sm:px-6">
              <div className="flex flex-col items-center space-y-6 md:flex-row md:space-y-0">
                <div className="text-center md:text-left md:max-w-44 md:border-r md:pr-6">
                  <p className="text-sm text-muted-foreground md:text-end">Powering the best teams</p>
                </div>
                <div className="relative py-6 w-full md:w-[calc(100%-11rem)]">
                  <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
                    <div className="flex">
                      <img
                        className="mx-auto h-4 w-fit dark:invert sm:h-5"
                        src="https://html.tailus.io/blocks/customers/nvidia.svg"
                        alt="Nvidia Logo"
                        height="20"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-3 w-fit dark:invert sm:h-4"
                        src="https://html.tailus.io/blocks/customers/column.svg"
                        alt="Column Logo"
                        height="16"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-3 w-fit dark:invert sm:h-4"
                        src="https://html.tailus.io/blocks/customers/github.svg"
                        alt="GitHub Logo"
                        height="16"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-4 w-fit dark:invert sm:h-5"
                        src="https://html.tailus.io/blocks/customers/nike.svg"
                        alt="Nike Logo"
                        height="20"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-4 w-fit dark:invert sm:h-5"
                        src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                        alt="Lemon Squeezy Logo"
                        height="20"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-3 w-fit dark:invert sm:h-4"
                        src="https://html.tailus.io/blocks/customers/laravel.svg"
                        alt="Laravel Logo"
                        height="16"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-5 w-fit dark:invert sm:h-6 md:h-7"
                        src="https://html.tailus.io/blocks/customers/lilly.svg"
                        alt="Lilly Logo"
                        height="28"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-4 w-fit dark:invert sm:h-5 md:h-6"
                        src="https://html.tailus.io/blocks/customers/openai.svg"
                        alt="OpenAI Logo"
                        height="24"
                        width="auto"
                      />
                    </div>
                  </InfiniteSlider>

                  <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-12 sm:w-16 md:w-20"></div>
                  <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-12 sm:w-16 md:w-20"></div>
                  <ProgressiveBlur
                    className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 md:w-20"
                    direction="left"
                    blurIntensity={1}
                  />
                  <ProgressiveBlur
                    className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 md:w-20"
                    direction="right"
                    blurIntensity={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <Features />
        <Testimonials />
      </div>
    </div>
  );
}