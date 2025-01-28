"use client"

import { useState, Fragment } from "react";
import type { Member } from "../types/member";
import { Dialog, DialogPanel, TransitionChild, Transition } from "@headlessui/react";
import { X } from "lucide-react";

interface MemberCardProps {
    member: Member;
}

export default function MemberCard({ member }: MemberCardProps) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div className="relative group w-full h-full ">

            <div
                className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105 h-full"
                onClick={openModal}
            >
                <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-fit object-cover object-center"
                />
                <div className="p-4 ">
                    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                    <p className="text-sm text-gray-600">{member.role}</p>
                </div>
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
                                <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">

                                    <div className="flex justify-between items-center">
                                        <h3 className="text-lg font-medium leading-6 text-gray-900">{member.name}</h3>
                                        <button
                                            onClick={closeModal}
                                            className="text-gray-500 hover:text-gray-700"
                                        >
                                            <X size={24} />
                                        </button>
                                    </div>

                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">{member.bio}</p>
                                    </div>

                                    <div className="mt-4 flex justify-end">
                                        <button
                                            type="button"
                                            className="rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Fermer
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

