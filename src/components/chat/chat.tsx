"use client";

import {getTranslation, useTranslations} from "@/contexts/translations-context";
import {useIsOpenChat} from "@/contexts/is-open-chat-context";
import {cn, scrollToBottom} from "@/lib/utils";
import Face from "@/components/face/face";
import {IconX} from "@tabler/icons-react";
import {Button} from "@/components/ui/button";
import Message, {MessageVariant} from "@/components/chat/components/message";
import {useEffect, useRef, useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {getMailTo} from "@/components/hire-me-button/utils";

export interface ChatMessage {
    variant: MessageVariant,
    text: string,
    action?: () => void
}

export default function Chat() {
    const {translations: t, currentLanguage} = useTranslations();
    const {push} = useRouter();
    const delay: number = 600;
    const chatWrapperRef = useRef<HTMLDivElement>(null);
    const {isOpenChat, setIsOpenChat} = useIsOpenChat();
    const pathname: string = usePathname();

    const [timeouts, setTimeouts] = useState<NodeJS.Timeout[]>([]);

    const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);

    const [options, setOptions] = useState<ChatMessage[]>([]);
    const [optionsVisible, setOptionsVisible] = useState<boolean>(false);

    function initialOptions(): ChatMessage[] {
        const tellMe: ChatMessage = {
            variant: "option",
            text: getTranslation(t, "chat.Tell_me_something_about_you"),
            action: () => tellMeAction(tellMe)
        }
        const experience: ChatMessage = {
            variant: "option",
            text: getTranslation(t, "chat.What_s_your_experience"),
            action: () => experienceAction(experience)
        }
        const projects: ChatMessage = {
            variant: "option",
            text: getTranslation(t, "chat.Show_me_your_projects"),
            action: () => projectsAction(projects)
        }
        const hireYou: ChatMessage = {
            variant: "option",
            text: getTranslation(t, "chat.We_d_like_to_hire_you"),
            action: () => hireAction(hireYou)
        }

        return [
            tellMe,
            experience,
            projects,
            hireYou
        ]
    }

    const initialMessages: ChatMessage[] = [
        {
            variant: "system",
            text: getTranslation(t, "chat.Hi")
        },
        {
            variant: "system",
            text: getTranslation(t, "chat.welcome_message")
        },
        {
            variant: "system",
            text: getTranslation(t, "chat.How_can_I_help_you_today")
        },
    ]

    function addTimeout(callback: () => void, delay: number) {
        const timeout: NodeJS.Timeout = setTimeout(callback, delay);
        setTimeouts((prev) => [...prev, timeout]);
    }

    function addVisibleMessage(message: ChatMessage, delayMultiplier: number = 1) {
        addTimeout(() => {
            setVisibleMessages((prev) => [...prev, message]);

            addTimeout(() => {
                scrollToBottom(chatWrapperRef);
            }, 50)
        }, delayMultiplier * delay)
    }

    function showInitialOptionsOptions(message?: ChatMessage, scrollToBottomAfter: boolean = true) {
        if (message) {
            addOptionToVisibleMessages(message);
        }

        addTimeout(() => {
            setOptions(initialOptions());
            setOptionsVisible(true);

            if (scrollToBottomAfter) {
                addTimeout(() => {
                    scrollToBottom(chatWrapperRef);
                }, 50);
            }
        }, delay);
    }

    function addOptionToVisibleMessages(message: ChatMessage) {
        setOptionsVisible(false);
        setOptions([]);

        delete message.action;
        message.variant = "user";
        setVisibleMessages((prev) => [...prev, message]);
    }

    function sendEmail(message: ChatMessage) {
        addOptionToVisibleMessages(message)
        push(getMailTo(t));
    }

    function goToProjects(message: ChatMessage) {
        addOptionToVisibleMessages(message)

        if(pathname === `/${currentLanguage}/projects`) {
            addVisibleMessage({
                variant: "system",
                text: getTranslation(t, "chat.projects.already_on_page")
            }, 1);
            addVisibleMessage({
                variant: "system",
                text: getTranslation(t, "chat.Can_I_help_you_with_anything_else")
            }, 2);
            addTimeout(() => {
                showInitialOptionsOptions();
            }, 2 * delay);
        } else {
            addTimeout(() => {
                push(`/${currentLanguage}/projects`);
            }, delay);
        }
    }

    function hireAction(message: ChatMessage) {
        addOptionToVisibleMessages(message)

        addVisibleMessage({
            variant: "system",
            text: getTranslation(t, "chat.hire.Thank_you_for_your_interest")
        }, 1);

        addVisibleMessage({
            variant: "system",
            text: getTranslation(t, "chat.hire.Please_send_me_an_email")
        }, 2);

        const sendEmailOption: ChatMessage = {
            variant: "option",
            text: getTranslation(t, "chat.hire.Send_email"),
            action: () => sendEmail(sendEmailOption)
        }

        const otherOptions: ChatMessage = {
            variant: "option",
            text: getTranslation(t, "chat.Back_to_other_options"),
            action: () => showInitialOptionsOptions(otherOptions)
        }

        addTimeout(() => {
            setOptions([
                sendEmailOption,
                otherOptions
            ]);
            setOptionsVisible(true);

            addTimeout(() => {
                scrollToBottom(chatWrapperRef);
            }, 50);
        }, delay * 3);
    }

    function tellMeAction(message: ChatMessage) {
        addOptionToVisibleMessages(message)

        addVisibleMessage({
            variant: "system",
            text: getTranslation(t, "chat.tell_me.message")
        }, 2);
        addVisibleMessage({
            variant: "system",
            text: getTranslation(t, "chat.Can_I_help_you_with_anything_else")
        }, 3);
        addTimeout(() => {
            showInitialOptionsOptions();
        }, 3 * delay);
    }

    function experienceAction(message: ChatMessage) {
        addOptionToVisibleMessages(message)

        addVisibleMessage({
            variant: "system",
            text: getTranslation(t, "chat.experience.message")
        }, 2);
        addVisibleMessage({
            variant: "system",
            text: getTranslation(t, "chat.Can_I_help_you_with_anything_else")
        }, 3);
        addTimeout(() => {
            showInitialOptionsOptions();
        }, 3 * delay);
    }

    function projectsAction(message: ChatMessage) {
        addOptionToVisibleMessages(message)

        addVisibleMessage({
            variant: "system",
            text: getTranslation(t, "chat.projects.message")
        }, 1);

        const sendEmailOption: ChatMessage = {
            variant: "option",
            text: getTranslation(t, "chat.projects.take_me"),
            action: () => goToProjects(sendEmailOption)
        }

        const otherOptions: ChatMessage = {
            variant: "option",
            text: getTranslation(t, "chat.Back_to_other_options"),
            action: () => showInitialOptionsOptions(otherOptions)
        }

        addTimeout(() => {
            setOptions([
                sendEmailOption,
                otherOptions
            ]);
            setOptionsVisible(true);

            addTimeout(() => {
                scrollToBottom(chatWrapperRef);
            }, 50);
        }, delay * 2);
    }

    useEffect(() => {
        if (isOpenChat) {
            initialMessages.map((message, index) => {
                addVisibleMessage(message, index)
            });
            addTimeout(() => {
                setOptions(initialOptions());
                setOptionsVisible(true);

                addTimeout(() => {
                    scrollToBottom(chatWrapperRef);
                }, 50);
            }, initialMessages.length * delay);
        } else {
            timeouts.map((timeout: NodeJS.Timeout) => {
                clearTimeout(timeout)
            });
            setTimeouts([]);
            setVisibleMessages([]);
            setOptions([]);
            setOptionsVisible(false);
        }
    }, [isOpenChat, setIsOpenChat])


    return (
        <div className={cn(
            !isOpenChat && "opacity-0 translate-y-full translate-x-1/2 scale-0",
            "fixed z-50",
            "border border-accent rounded-xl bg-background/80 backdrop-blur-lg backdrop-filter",
            `transform transition-all duration-300 ease-in-out`,
            `bottom-14`,
            `md:right-4 md:bottom-4`,
            `w-full md:w-96 lg:w-104`,
            `max-h-[80svh] min-h-[80svh]`,
            `md:max-h-[70svh] md:min-h-[70svh]`,
            "flex flex-col flex-grow overflow-hidden"
        )}>
            <div className={"relative inline-flex w-full gap-3 px-4 py-2 bg-primary text-primary-foreground rounded-t-xl"}>
                <div className={"flex h-16 w-16 shrink-0 items-center p-3 rounded-full bg-white overflow-hidden"}>
                    <Face className={"h-12 w-12"}/>
                </div>

                <div className={"flex flex-col w-full"}>
                    <span className={"font-bold text-lg"}>{getTranslation(t, "chat.title")}</span>
                    <span className={"text-muted dark:text-primary-foreground"}>{getTranslation(t, "chat.Lets_talk")}</span>
                </div>

                <Button className={"absolute top-2 right-2 rounded-full"} variant={"ghost"} title={getTranslation(t, "chat.close")}
                        onClick={() => setIsOpenChat(false)}>
                    <IconX/>
                </Button>
            </div>

            <div className={"flex flex-col flex-grow w-full h-full gap-3 p-3 overflow-y-auto "} ref={chatWrapperRef}>
                {visibleMessages.map((message: ChatMessage, index: number) => (
                    <Message clickFnc={() => {
                        if (message?.action) {
                            message.action()
                        }
                    }} key={index} variant={message.variant}>{message.text}</Message>
                ))}
                {optionsVisible && options.map((message: ChatMessage, index: number) => (
                    <Message clickFnc={() => {
                        if (message?.action) {
                            message.action()
                        }
                    }} key={index} variant={message.variant}>{message.text}</Message>
                ))}
            </div>
        </div>
    )
}
