"use client"

import { useState, Fragment } from "react";
import type { Member } from "../types/member";
import { Dialog, DialogPanel, TransitionChild, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import MembersContent from "../PageContent/MembersContent";

interface MemberCardProps {
    member: Member;
  
}

export default function MemberCard({ member }: MemberCardProps) {
    const [isOpen, setIsOpen] = useState(false);
    const { language } = useLanguage();
    const content = MembersContent[language];

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
    return (
        <div className="group w-full h-full cursor-pointer" onClick={openModal}>
            {/* Circular image with light frame */}
            <div className="mx-auto mb-4 4xl:mb-6">
                <div className="w-44 h-44 mx-auto rounded-full overflow-hidden border-4 border-gray-100 shadow-md transition-all duration-300 group-hover:border-blue-200 group-hover:shadow-lg">
                    <img
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
                    />
                </div>
            </div>
            
            {/* Member info */}
            <div className="text-center space-y-1 4xl:space-y-2">
                <h3 className="text-lg sm:text-xl 4xl:text-4xl font-bold text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
                    {member.name}
                </h3>
                <p className="text-sm sm:text-base 4xl:text-2xl text-gray-600 font-medium">
                    {member.role}
                </p>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>

                    <TransitionChild
                        as={Fragment}
                        enter="ease-out duration-200"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true" />
                    </TransitionChild>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <TransitionChild
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <DialogPanel className="w-full max-w-lg 4xl:max-w-4xl transform overflow-hidden rounded-3xl bg-white p-8 4xl:p-16 text-left align-middle shadow-2xl transition-all border border-gray-200">
                                    
                                    <div className="flex justify-between items-start">
                                        <div className="flex items-center space-x-4 4xl:space-x-8">
                                            {/* Circular image in modal */}
                                            <div className="w-16 h-16 4xl:w-32 4xl:h-32 rounded-full overflow-hidden border-4 border-white shadow-lg flex-shrink-0">
                                                <img
                                                    src={member.imageUrl}
                                                    alt={member.name}
                                                    className="w-full h-full object-cover object-center"
                                                />
                                            </div>
                                            <div>
                                                <h3 className="text-2xl 4xl:text-5xl font-bold text-gray-900 mb-1 4xl:mb-2">{member.name}</h3>
                                                <p className="text-lg 4xl:text-3xl text-blue-600 font-semibold">{member.role}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={closeModal}
                                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-full"
                                        >
                                            <X size={24} className="4xl:size-14" />
                                        </button>
                                    </div>

                                    <div className="mt-6 4xl:mt-12">
                                        <div className="bg-gray-50 rounded-2xl p-6 4xl:p-12 border border-gray-100">
                                            <h4 className="text-lg 4xl:text-3xl font-semibold text-gray-800 mb-3 4xl:mb-6">About {member.name}</h4>
                                            <p className="text-base 4xl:text-2xl text-gray-700 leading-relaxed">{member.bio}</p>
                                        </div>
                                    </div>

                                    <div className="mt-8 4xl:mt-16 flex justify-end">
                                        <button
                                            type="button"
                                            className="rounded-xl bg-blue-600 px-6 py-3 4xl:px-12 4xl:py-6 text-base 4xl:text-2xl font-semibold text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                                            onClick={closeModal}
                                        >
                                            {content.close}
                                        </button>
                                    </div>
                                </DialogPanel>
                            </TransitionChild>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
}

