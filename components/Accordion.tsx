import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { accordionProvider } from "@/utils/data"
export function AccordionDemo() {
    return (

        <>
            <div className="w-full h-full py-20">
                <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-2xl text-center font-bold text-neutral-800 dark:text-neutral-200 font-sans">
                    Frequently asked questions
                </h2>
            </div>
            {accordionProvider.map(function ({ content, trigger }: any) {
                return (

                    <Accordion key={trigger} type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>{trigger}</AccordionTrigger>
                            <AccordionContent>
                                {content}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                )
            })}
        </>

    )
}


