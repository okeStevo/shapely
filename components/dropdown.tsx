import { locations } from "@/utils/data";

export function DropDownMenu() {
    return (
        <div>
            <select name="" id="" className="w-[20rem] p-3 border rounded-lg ml-[20%] text-white mt-[-3 0px] mb-4">
              {locations.map(function(each){
                return (
                    <option value={each}>{each}</option>
                )
              })}
            </select>
        </div>
    )
}
