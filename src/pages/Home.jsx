import { useEffect } from "react"
import Header from "../components/Header"
import { useState } from "react"

export default function Home() {
    const [valueInput, setValueInput] = useState('')
    const [totalCountries, setTotalCountries] = useState(0)
    const[countries, setCountries]  =  useState([])
    const[country, setCountry]  =  useState()
    const [neighbouringCountries, setnNeighbouringCountries] = useState([])


    const [showCountries, setShowCountries] = useState(false)
    const handleKeyDown = () => {

    }

    const getCountries = () => {

        fetch('https://restcountries.com/v3.1/all?fields=name,flags,population,area,region')
            .then(response => response.json())
            .then(data => {
                console.log(data)

            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(() => {
        setCountries([
            {
              "flags": {
                "png": "https://flagcdn.com/w320/cy.png",
                "svg": "https://flagcdn.com/cy.svg",
                "alt": "The flag of Cyprus has a white field, at the center of which is a copper-colored silhouette of the Island of Cyprus above two green olive branches crossed at the stem."
              },
              "name": {
                "common": "Cyprus",
                "official": "Republic of Cyprus",
                "nativeName": {
                  "ell": {
                    "official": "Δημοκρατία της Κύπρος",
                    "common": "Κύπρος"
                  },
                  "tur": {
                    "official": "Kıbrıs Cumhuriyeti",
                    "common": "Kıbrıs"
                  }
                }
              },
              "region": "Europe",
              "area": 9251.0,
              "population": 1207361
            },
            {
              "flags": {
                "png": "https://flagcdn.com/w320/er.png",
                "svg": "https://flagcdn.com/er.svg",
                "alt": "The flag of Eritrea comprises three triangles — a large red isosceles triangle with its base spanning the hoist end and its apex at the midpoint on the fly end, and a green and blue right-angled triangle above and beneath the red triangle. On the hoist side of the red triangle is a golden vertical olive branch encircled by a golden olive wreath."
              },
              "name": {
                "common": "Eritrea",
                "official": "State of Eritrea",
                "nativeName": {
                  "ara": {
                    "official": "دولة إرتريا",
                    "common": "إرتريا‎"
                  },
                  "eng": {
                    "official": "State of Eritrea",
                    "common": "Eritrea"
                  },
                  "tir": {
                    "official": "ሃገረ ኤርትራ",
                    "common": "ኤርትራ"
                  }
                }
              },
              "region": "Africa",
              "area": 117600.0,
              "population": 5352000
            }])
    },[])

    const showCountry = (country, event) => {
        setShowCountries(true)
        console.log(country)
        setCountry(country)
        setnNeighbouringCountries()
        event.stopPropagation()
    }

    const closeCountry = () => {
        setShowCountries(false)
    }

    useEffect(() => {
        setTotalCountries(countries.length)
    }, [countries])

    return (
        <section 
            className="h-screen flex flex-col"
            onClick={closeCountry}
        >
            <Header/>
            <main className="flex-1 relative bg-[#040404] ">
                <section 
                    className={`w-fit absolute  flex flex-col gap-[36px] left-1/2 -translate-x-1/2 top-[-70px] bg-[#1B1D1F] py-[24px] px-[32px] rounded-xl border border-[#282B30] ${showCountries ? 'hidden' : '' }`}>
                    <header className="flex justify-between items-center text-center	">
                        <span className="text-[#6C727F] text-[16px] font-medium">{`Found ${totalCountries} countries`}</span>
                        <input 
                            type="text"
                            className='bg-search-image bg-no-repeat bg-[18px] pl-[50px] placeholder-[#6C727F] w-[380px] rounded-3xl py-[12px] px-[24px] bg-[#282B30] text-white'
                            placeholder='Search by Name, Region, Subregion'
                            onChange={(e) => setValueInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </header>
                    <div className="flex gap-[32px]">
                        <section className="flex flex-col ">
                            <div className="flex flex-col gap-[8px]">
                                <label className="text-[#6C727F] font-semibold text-[12px]">Sort by</label>
                                <select name="" id="">
                                    <option>Population</option>
                                </select>
                            </div>
                            <div>
                                <label className="text-[#6C727F] font-semibold text-[12px]">Region</label>
                                <div className="flex flex-wrap">
                                    <div className="bg-[#282B30]">
                                        <span className="text-[#D2D5DA]">Americas</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <label className="text-[#6C727F] font-semibold text-[12px]">Status</label>
                                <label className="text-[#D2D5DA]">
                                    <input type="checkbox" id="cbox1" value="first_checkbox" /> 
                                    Member of the United Nations
                                </label>
                                <label className="text-[#D2D5DA]">
                                    <input type="checkbox" id="cbox2" value="first_checkbox" /> 
                                    Independent
                                </label>
                            </div>
                        </section>
                        <section className="flex-1 bg-[#1B1D1F]">
                            <div className="text-[12px] grid grid-cols-5 gap-[24px] pb-[16px] text-[#6C727F] border-b border-[#6C727F] w-[600px]">
                                <div className="col-span-1">Flag</div>
                                <div className="col-span-1">Name</div>
                                <div className="col-span-1">Population</div>
                                <div className="col-span-1">Area(km<sup>2</sup>)</div>
                                <div className="col-span-1">Region</div>

                            </div>
                            {
                                countries && (
                                    countries.sort((a, b) => b.population - a.population).map((country, index) => (
                                        <div 
                                            onClick={(event) => showCountry(country, event)} 
                                            key={index} 
                                            className="grid grid-cols-5 gap-[24px] pt-[16px] text-[#D2D5DA] w-[600px]">
                                            <img className='w-[50px] h-[38px] rounded-md' src={country.flags.png} alt={country.name.common}/>
                                            <h3>{country.name.common}</h3>
                                            <span className="text-[#D2D5DA]">{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                            <span className="text-[#D2D5DA]">{country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>                                                                             
                                            <span className="text-[#D2D5DA]">{country.region}</span>
                                      </div>
                                    )) 
                                )
                            }
                        </section>
                    </div>
                </section>
                <section 
                    className={`w-fit absolute  flex flex-col gap-[36px] left-1/2 -translate-x-1/2 top-[-70px] bg-[#1B1D1F]  rounded-xl border border-[#282B30] ${showCountries ? '' : 'hidden'}`}
                >
                {
                    country && (
                        <div className=" flex flex-col items-center">
                            <img className="absolute top-[-48px] w-[260px] h-[196px] rounded-xl" src={country.flags.png}></img>
                            <h1 className="text-[32px] text-[#D2D5DA] mt-[164px] mb-[8px]">{country.name.common}</h1>   
                            <h2 className="text-[16px] text-[#D2D5DA] mb-[40px]">{country.name.official}</h2>     
                            <div className="flex gap-[40px] mb-[40px] text-[14px] px-[80px]">
                                <div className="flex text-[#D2D5DA] bg-[#282B30] py-[15px] rounded-xl">
                                    <label className="px-[20px] border-r border-[#1B1D1F]">Population</label>
                                    <span className="px-[20px]">{country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                </div>    
                                <div className="flex text-[#D2D5DA] bg-[#282B30] py-[15px] rounded-xl">
                                    <label className="px-[20px] border-r border-[#1B1D1F]">Area(km<sup>2</sup>) </label>
                                    <span className="px-[20px]">{country.area.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                                </div>    
                            </div>    
                            <div className="flex flex-col text-[14px] w-full">
                                <div className="flex p-[20px] justify-between text-[#6C727F] border-y border-y-[#282B30]">
                                    <label>Capital</label>
                                    <span className="text-[#D2D5DA]">New Delhi</span>
                                </div>
                                <div className="flex p-[20px] justify-between text-[#6C727F] border-y border-y-[#282B30]">
                                    <label>Subregion</label>
                                    <span className="text-[#D2D5DA]">New Delhi</span>
                                </div>
                                <div className="flex p-[20px] justify-between text-[#6C727F] border-y border-y-[#282B30]">
                                    <label>Language</label>
                                    <span className="text-[#D2D5DA]">New Delhi</span>
                                </div>
                                <div className="flex p-[20px] justify-between text-[#6C727F] border-y border-y-[#282B30]">
                                    <label>Currencies</label>
                                    <span className="text-[#D2D5DA]">New Delhi</span>
                                </div>
                                <div className="flex p-[20px] justify-between text-[#6C727F] border-y border-y-[#282B30]">
                                    <label>Continents</label>
                                    <span className="text-[#D2D5DA]">New Delhi</span>
                                </div>
                                <div className="flex p-[20px] flex-col text-[#6C727F] border-y border-y-[#282B30]">
                                    <label>Neighbouring Countries</label> 
                                    {
                     //                   neighbouringCountries && (
                       //                     neighbouringCountries.map()
                         //               )
                                    }
                                </div>
                            </div>     
                        </div>
                    )
                }
                </section>
            </main>
        </section>
    )
}