import Header from "../components/Header"
import { useState } from "react"

export default function Home() {
    const [valueInput, setValueInput] = useState('')

    const handleKeyDown = () => {

    }

    return (
        <section className="h-screen flex flex-col">
            <Header/>
            <main className="flex-1 relative bg-[#040404]">
                <section className="absolute left-1/2 -translate-x-1/2 top-[-70px] bg-[#1B1D1F] p-[40px] rounded-xl ">
                    <header className="flex justify-between">
                        <span className="text-[#6C727F]">Found 234 countries</span>
                        <input 
                            type="text"
                            className='bg-search-image bg-no-repeat bg-[18px] pl-[50px] placeholder-[#6C727F] w-[380px] rounded-3xl py-[12px] px-[24px] bg-[#282B30] text-white'
                            placeholder='Search by Name, Region, Subregion'
                            onChange={(e) => setValueInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </header>
                    <div className="flex">
                        <section className="flex flex-col px-[20px]">
                            <div className="flex flex-col">
                                <label className="text-[#6C727F]">Sort by</label>
                                <select name="" id="">
                                    <option>Population</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-[#6C727F]">Region</label>
                                <div className="flex flex-wrap">
                                    <div className="bg-[#282B30]">
                                        <span className="text-[#D2D5DA]">Americas</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label>Status</label>
                                <label className="text-[#D2D5DA]">
                                    <input type="checkbox" id="cbox1" value="first_checkbox" /> 
                                    Member of the United Nations
                                </label>
                                <label className="text-[#D2D5DA]">
                                    <input type="checkbox" id="cbox1" value="first_checkbox" /> 
                                    Independent
                                </label>
                            </div>
                        </section>
                        <section className="flex-1 bg-[#1B1D1F]">
                            <div className="grid grid-cols-5">
                                <div className="col-span-1">Label 1</div>
                                <div className="col-span-1">Label 2</div>
                                <div className="col-span-1">Label 3</div>
                                <div className="col-span-1">Label 4</div>
                                <div className="col-span-1">Label 5</div>
                            </div>
                        </section>
                    </div>
                </section>
            </main>
        </section>
    )
}