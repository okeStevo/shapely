import { DropDownMenu } from "@/components/dropdown";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import shapeDark from "@/app/public/aa.png"
import Link from "next/link";
export default function About() {
    
    return (
        <div className="flex justify-center items-center h-[70vh] mb-16">
            <div>
                <Link href="/">
                    <Image alt="shapely logo" src={shapeDark} width={200} height={200} className="my-0 mx-auto" />
                </Link>
                {/* <PlaceholdersAndVanishInputDemo /> */}
                <h2 className="sm:mb-3 text-xl text-center sm:text-5xl dark:text-white text-black">
                    Get your best buisness location
                </h2>
                <DropDownMenu />
                <div id="buttons" className="flex  justify-between">
                    <Button>Hospital</Button>
                    <Button>Restaurants</Button>
                    <Button>Schools</Button>
                    <Button>Hotel</Button>
                    <Button>Bar</Button>
                </div>

            </div>
        </div>
    )
}