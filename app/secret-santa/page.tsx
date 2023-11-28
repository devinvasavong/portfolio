import Link from "next/link";

export default function SecretSanta() {
    return (
        <div className="w-screen h-screen">
            <div className="w-full h-full p-10">
                <h1 className="font-medium text-lg">Devin&apos;s List</h1>
                <p className="text-xs">Updated 11/27/23 at 12:46PM</p>
                <p className="text-sm font-medium mt-3 mb-1">Anything clothing related is well appreciated</p>
                <p className="mb-3">
                    <span className="font-medium text-sm">Reference</span>
                    <br />
                    <span className="text-gray-400 text-sm">Shirt: Small</span>
                    <br />
                    <span className="text-gray-400 text-sm">Pants: 29X30 / 30X30</span>
                    <br />
                    <span className="text-gray-400 text-sm">Shoes: 9.5-10</span>
                    <br />
                    <span className="text-gray-400 text-sm">Socks: Medium (based off shoe size)</span>
                    <br />
                    <span className="text-gray-400 text-sm">Hoodies: Small</span>
                </p>
                <div>
                    <section className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                        <div>
                            <div className="w-full flex items-center justify-between text-sm border-b pb-3">
                                <span className="font-medium">Clothing</span>
                                <div className="py-0.5 px-2.5 bg-yellow-100 text-yellow-500 rounded-full">
                                    Highly consider
                                </div>
                            </div>
                            <ol className="text-sm space-y-1 mt-3 list-decimal ml-5">
                                <li>
                                    <div className="flex justify-between items-center">
                                        <Link href="https://www.abercrombie.com/shop/us/p/long-sleeve-grid-waffle-tee-53234322?categoryId=6570709&faceout=prod&seq=06" className="underline">Waffle Tee</Link>
                                        <span className="text-gray-400 text-xs">$50, size small</span>
                                    </div>
                                    <span className="text-gray-400 text-xs">Black, Cream, Light Brown Heather</span>
                                </li>
                                <li>
                                    <div className="flex justify-between items-center">
                                        <Link href="https://www.abercrombie.com/shop/us/p/athletic-loose-jean-54638920?faceout=model&seq=02" className="underline">Athletic Loose Jean</Link>
                                        <span className="text-gray-400 text-xs">$80, 30X30</span>
                                    </div>
                                    <span className="text-gray-400 text-xs">Black</span>
                                </li>
                                <li>
                                    <div className="flex justify-between items-center">
                                        <Link href="https://shop.lululemon.com/p/mens-trousers/ABC-Classic-Fit-Trouser-30-Warpstreme/_/prod11500067?color=0001&sz=29" className="underline">Lululemon ABC Trousers</Link>
                                        <span className="text-gray-400 text-xs">$128, 29X30</span>
                                    </div>
                                    <span className="text-gray-400 text-xs">Black</span>
                                </li>
                            </ol>
                        </div>
                        <div>
                            <div className="w-full flex items-center justify-between text-sm border-b pb-3">
                                <span className="font-medium">Technology</span>
                            </div>
                            <ol className="text-sm space-y-1 mt-3 list-decimal ml-5">
                                <li>
                                    <div className="flex justify-between items-center">
                                        <Link href="https://www.apple.com/us-edu/shop/product/MHJA3AM/A/20w-usb-c-power-adapter?fnode=48305efadbdba9ce8b443715bf1803787f8b735a32fd2791e75dce83a7beb1bf7db0c9bf1bc2b466bff340d7e011400908c68d9ff42d9076970bab11cbda3f2b11dcbc75a0ae1f9eab871cd515165833c791094537b45f84a7b7c1b866d3102c" className="underline">20W USB C Power Adapter</Link>
                                        <span className="text-gray-400 text-xs">$19</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex justify-between items-center">
                                        <Link href="https://www.apple.com/us-edu/shop/product/MQKJ3AM/A/60w-usb-c-charge-cable-1-m?fnode=767cea6e818aa3a54326664b8edd38e073690b8cba043554633af135a9365241f2ea6175edce5ccb1625564bcdd83792e357726e3c2b8336d340d391a7417d6579c18c66c8268834fbe3ad81be287c028e30aa8da242d8ee201f70e8379a16fe" className="underline">USB C to USB C</Link>
                                        <span className="text-gray-400 text-xs">$19</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex justify-between items-center">
                                        <Link href="https://www.amazon.com/dp/B09VP9QJSS?ref_=cm_sw_r_apin_dp_8NYAHN2F0HQYFAQDZ62S&language=en-US&th=1" className="underline">Anker Portable Charger w/ USB-C support</Link>
                                        <span className="text-gray-400 text-xs">$63.98</span>
                                    </div>
                                </li>
                            </ol>
                        </div>
                        <div>
                            <div className="w-full flex items-center justify-between text-sm border-b pb-3">
                                <span className="font-medium">Miscellaneous</span>
                            </div>
                            <ol className="text-sm space-y-1 mt-3 list-decimal ml-5">
                                <li>
                                    <div className="flex justify-between items-center">
                                        <Link href="https://www.sephora.com/product/P411325?skuId=1988245" className="underline">Versace Dylan Blue</Link>
                                        <span className="text-gray-400 text-xs">$130</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex justify-between items-center">
                                        <Link href="https://www.nike.com/t/everyday-plus-cushioned-training-crew-socks-6-pairs-vlRw4Q/SX6897-100" className="underline">Nike Socks</Link>
                                        <span className="text-gray-400 text-xs">$28</span>
                                    </div>
                                    <span className="text-gray-400 text-xs">Medium</span>
                                </li>
                                <li>
                                    <div className="flex justify-between items-center">
                                        <Link href="https://www.nike.com/t/therma-mens-therma-fit-open-hem-fitness-pants-DbPGBc/DQ4856-010" className="underline">Nike Therma</Link>
                                        <span className="text-gray-400 text-xs">$65</span>
                                    </div>
                                    <span className="text-gray-400 text-xs">Small</span>
                                </li>
                                <li>
                                    <div className="flex justify-between items-center">
                                        <Link href="https://www.amazon.com/AncestryDNA-Genetic-Testing-Ethnicity-Traits/dp/B07J1FZQBC/ref=sr_1_1_sspa?keywords=ancestry&qid=1701106812&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1" className="underline">AncestryDNA</Link>
                                        <span className="text-gray-400 text-xs">$49</span>
                                    </div>
                                    <span className="text-gray-400 text-xs">Saw this from Gina</span>
                                </li>
                                <li>
                                    <div className="flex justify-between items-center">
                                        <Link href="https://www.hydroflask.com/32-oz-wide-mouth-with-flex-straw-cap#color=Driftwood" className="underline">Hydroflask</Link>
                                        <span className="text-gray-400 text-xs">$37.46</span>
                                    </div>
                                    <span className="text-gray-400 text-xs">Driftwood</span>
                                </li>
                                <li>
                                    <div className="flex justify-between items-center">
                                        <Link href="https://www.purehockey.com/product/hockeyshot-extreme-passing-kit-4-x-8-5/itm/26562-2/" className="underline">Hockey passing kit</Link>
                                        <span className="text-gray-400 text-xs">$209.99</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex justify-between items-center">
                                        <Link href="https://www.purehockey.com/product/hockeyshot-synthetic-ice-revolution-tiles-10-pack/itm/37356-2/" className="underline">Synthetic ice</Link>
                                        <span className="text-gray-400 text-xs">$149.99</span>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}