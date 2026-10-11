"use client";

import {useEffect} from "react";
import {cn} from "@/lib/utils";
import {StaffMember} from "@/types";
import {Card, CardContent, CardDescription, CardTitle} from "@/components/ui/Card";
import {Badge} from "./Badge";

interface StaffProps {
    member: StaffMember,
}

export function Staff({
                          member
                      }: StaffProps) {
    // Fermer avec Escape


    return (
        <Card key={member.id}
              className="m-3 group border-0 shadow-sm hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden bg-white">
            <div className="aspect-[4/5] bg-slate-100 relative overflow-hidden">
                {/* Placeholder pour l'image du membre */}
                {member.image === null && <div
                    className="absolute inset-0 flex items-center justify-center text-5xl grayscale group-hover:grayscale-0 transition-all duration-500 bg-gradient-to-t from-black/20 to-transparent">
                    👤
                </div>}
                {member.image !== null &&
                    <img src={member.image} alt="test" className="w-full"/>}
                <div
                    className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="absolute bottom-4 left-4 right-4">
                    <Badge
                        className="bg-white/90 backdrop-blur-sm text-primary border-0 font-bold uppercase tracking-wider text-[10px] px-3">
                        {member.role}
                    </Badge>
                </div>
            </div>
            <CardContent className="p-6">
                <CardTitle className="mb-3 text-xl group-hover:text-primary transition-colors">{member.name}</CardTitle>
                <CardDescription className="line-clamp-none text-text-secondary text-sm leading-relaxed">
                    {member.description}
                </CardDescription>
            </CardContent>
        </Card>
    );
}
