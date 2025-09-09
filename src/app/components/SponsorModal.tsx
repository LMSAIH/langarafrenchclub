"use client"

import type React from "react"
import { Dialog, DialogPanel, TransitionChild, Transition  } from "@headlessui/react"
import { Fragment } from "react"
import Image from "next/image"
import type { Sponsor } from "../types/sponsor"
import { X } from "lucide-react"
import { Span, H3, P } from "./Typography"
import Link from "next/link"

interface SponsorModalProps {
  sponsor: Sponsor | null
  isOpen: boolean
  onClose: () => void
}

const SponsorModal: React.FC<SponsorModalProps> = ({ sponsor, isOpen, onClose }) => {
  if (!sponsor) return null

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={onClose}>
        <div className="min-h-screen px-4 text-center">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black opacity-30" />
          </TransitionChild>

          <Span className="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </Span>

          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="inline-block w-full max-w-md 4xl:max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
              <div className="relative h-48 mb-4">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <H3 className="text-gray-900 mb-2 4xl:mb-10">
                {sponsor.name}
              </H3>
              <P className="text-gray-700 mb-4 4xl:mb-10">{sponsor.description}</P>
              <Link
                href={sponsor.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 4xl:text-5xl 4xl:mb-10 4xl:p-4 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Visiter le site web
              </Link>
              <button 
                onClick={onClose} 
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                type="button"
              >
                <X size={24} className="4xl:size-12" />
              </button>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  )
}

export default SponsorModal