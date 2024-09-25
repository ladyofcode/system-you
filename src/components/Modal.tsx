'use client';

import { ReactNode } from 'react';
import { Button } from "@/components/ui/button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    children: ReactNode;
}

export function Modal({ isOpen, onClose, onConfirm, title, children }: ModalProps) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-2xl mb-4">{title}</h2>
                <div className="mb-4">{children}</div>
                <div className="flex justify-end space-x-4">
                    <Button variant="ghost" onClick={onClose}>No</Button>
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={onConfirm}>Yes, I want to delete this account</Button>
                </div>
            </div>
        </div>
    );
}