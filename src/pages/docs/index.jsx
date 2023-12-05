/* eslint-disable */
import React from "react";

import { Inter } from "next/font/google";
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

import Image from "next/image";

const index = () => {
  return (
    <main className={`${inter.className} bg-schemes-light-surfaceContainer`}>
      <div className="flex flex-col gap-4 w-11/12 mx-auto bg-schemes-light-surfaceContainerLowest p-4 h-fit rounded-3xl mb-8 pb-8">
        <div className="flex flex-col gap-8 w-6/12 pl-6 pt-6">
          <div className="flex flex-col gap-3">
            <p className="font-bold text-2xl">Inspiration</p>
            <p>
              In some parts of the world to receive a package of a purchase is
              necessary to give certain data to corroborate that one is the
              owner of the package, for example, imagine that we buy a 70-inch
              TV, and to receive it I need to give my full name, my id or dni,
              plus my home address which is explicit, and a package that is too
              obvious. Maybe I don't want to give so many details but still
              corroborate that I am the owner of the package. This is why dShips
              was created, a system with the idea of delivering local packages
              without revealing unnecessary information.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-bold text-2xl">What it does</p>

            <p>
              It serves as a tool for online stores that need to ship their
              products to buyers who choose to receive packages anonymously,
              guaranteeing their correct delivery. Generating anonymous jobs.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-bold text-2xl">How is this accomplished?</p>
            <p>
              By generating a ZK Proof that corroborates if the owner of the
              package is who he claims to be.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-bold text-2xl">Step by step</p>

            <ol className="list-decimal ml-10">
              <li>
                <p>A purchase is made in a marketplace</p>
                <Image width={500} height={500} alt="1" src="/docs/1.png" />
              </li>
              <li>
                <p>
                  The product needs to be purchased, so the purchase becomes a
                  package.
                </p>
                <Image width={500} height={500} alt="2" src="/docs/2.png" />
              </li>
              <li>
                <p>
                  3. A verified delivery person chooses which parcels to
                  transport
                </p>
                <Image width={500} height={500} alt="3" src="/docs/3.png" />
                <Image
                  width={500}
                  height={500}
                  alt="carrier zk"
                  src="/docs/carrier zk.png"
                />
              </li>
              <li>
                <p>
                  The delivery person goes to the store and picks up the package
                  to be transported
                </p>
                <Image width={500} height={500} alt="4" src="/docs/4.png" />
              </li>
              <li>
                <p>
                  The delivery person goes to the buyer's address and verifies
                  that he is the owner of the package to be delivered
                </p>
                <Image width={500} height={500} alt="5" src="/docs/5.png" />
                <Image
                  width={500}
                  height={500}
                  alt="buyer zk"
                  src="/docs/buyer zk.png"
                />
              </li>
            </ol>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-bold text-2xl">How we built it</p>

            <p>
              Actually as mentioned before, dShips is a proof of concept,
              conformed by a smart contract in solidity deployed in Mumbai and a
              front end developed in NextJs.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-bold text-2xl">Challenges we ran into</p>

            <p>Understanding the users involved</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-bold text-2xl">
              Accomplishments that we're proud of
            </p>

            <ul className="list-disc ml-10">
              <li>
                Beginning to shape a tool that will be able to provide jobs to
                people
              </li>
              <li>
                Create a tool that facilitates the delivery of orders
                anonymously
              </li>
              <li>
                Understanding and analyzing the tools available to bring this
                idea to fruition
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-bold text-2xl">What we learned</p>

            <ul className="list-disc ml-10">
              <li>
                Shape the idea Knowing the Chainlink tools Knowing Polygon tools
              </li>
              <li>Focusing on a user problem and solving it with web3</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-bold text-2xl">What's next for dShips</p>

            <p>
              Shape dShips as an easy-to-integrate service for online stores to
              provide an anonymous product delivery option. Integrate Polygon ID
              to validate delivery drivers and shoppers Create a mobile dApp to
              facilitate the work of the delivery drivers Devise an optimal
              system to prevent fraud by delivery drivers
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default index;
