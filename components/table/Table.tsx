import Image from "next/image";
import React from "react";
import { IoAddOutline } from "react-icons/io5";
import wix from "../../public/wix.png";
import shopify from "../../public/shopify.png";
import mailchimp from "../../public/mailchimp.jpg";
import payPal from "../../public/payPal.jpg";
import disney from "../../public/disney.jpg";
import intercom from "../../public/intercom.png";
import google from "../../public/google.jpg";
import evernote from "../../public/evernote.png";
import microsoft from "../../public/microsoft.png";
import invision from "../../public/invision.png";

import { PiChats } from "react-icons/pi";

const Table = () => {
  return (
    <section className="overflow-x-auto">
      <table className="table  border-2 border-t-0">
        {/* head */}
        <thead className="border-b-2">
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th className="border-r-2">
              <div className="flex justify-between items-center">
                Brand
                <IoAddOutline className="text-lg" />
              </div>
            </th>
            <th className="border-r-2">Description</th>
            <th className="border-r-2">Members</th>
            <th className="border-r-2">Categories</th>
            <th className="border-r-2">Tags</th>
            <th className="border-r-2">Next Metting</th>
            <th>
              <IoAddOutline className="text-lg" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="border-r-2 max-w-[25%]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="avatar">
                    <div className="w-5 h-5 object-cover rounded-md">
                      <Image src={wix} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Wix</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-500 font-medium">
                  <PiChats className="text-lg" />
                  <p>2</p>
                </div>
              </div>
            </td>
            <td className="border-r-2 w-[15%] overflow-hidden">
              <p className="overflow-ellipsis w-[60px] whitespace-nowrap overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                magnam?
              </p>
            </td>
            <td className="border-r-2">
              <div className="avatar-group -space-x-4 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
            </td>
            <th className="border-r-2 w-[10%]">
              <p className="bg-blue-100 border-2 border-blue-200 p-1 rounded-lg text-xs text-blue-700 font-bold">
                Authentication
              </p>
            </th>
            <th className="border-r-2 w-[20%]">
              <button className="badge badge-ghost badge-sm">
                #DigitalTranslation
              </button>
            </th>
            <th className="border-r-2 w-[10%]">
              <p className="bg-green-100 border-2 border-green-200 p-1 rounded-lg text-xs text-green-700 font-bold">
                in 30 minutes
              </p>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="border-r-2 w-[30%]">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-8 h-8 object-cover">
                    <Image src={shopify} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Shopify</div>
                </div>
              </div>
            </td>
            <td className="border-r-2 w-[20%] overflow-hidden">
              <p className="overflow-ellipsis w-[60px] whitespace-nowrap overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                magnam?
              </p>
            </td>
            <td className="border-r-2">
              <div className="avatar-group -space-x-5 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
            </td>
            <th className="border-r-2 w-[10%]">
              <button className="badge badge-ghost badge-sm">details</button>
            </th>
            <th className="border-r-2 w-[20%]">
              <button className="badge badge-ghost badge-sm">#details</button>
            </th>
            <th className="border-r-2 w-[10%]">
              <p className="bg-blue-100 border-2 border-blue-200 p-1 rounded-lg text-xs text-blue-700 font-bold">
                Tomorrow
              </p>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="border-r-2 w-[30%]">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-8 h-8 rounded-lg">
                    <Image
                      src={mailchimp}
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Mailchimp</div>
                </div>
              </div>
            </td>
            <td className="border-r-2 w-[20%] overflow-hidden">
              <p className="overflow-ellipsis w-[60px] whitespace-nowrap overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                magnam?
              </p>
            </td>
            <td className="border-r-2">
              <div className="avatar-group -space-x-5 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
            </td>
            <th className="border-r-2 w-[10%]">
              <button className="badge badge-ghost badge-sm">details</button>
            </th>
            <th className="border-r-2 w-[20%]">
              <button className="badge badge-ghost badge-sm">#details</button>
            </th>
            <th className="border-r-2 w-[10%]">
              <p className="bg-blue-100 border-2 border-blue-200 p-1 rounded-lg text-xs text-blue-700 font-bold">
                Tomorrow
              </p>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="border-r-2 w-[30%]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-8 h-8 rounded-lg object-fill">
                      <Image src={payPal} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">PayPal</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-500 font-medium">
                  <PiChats className="text-lg" />
                  <p>7</p>
                </div>
              </div>
            </td>
            <td className="border-r-2 w-[20%] overflow-hidden">
              <p className="overflow-ellipsis w-[60px] whitespace-nowrap overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                magnam?
              </p>
            </td>
            <td className="border-r-2">
              <div className="avatar-group -space-x-5 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
            </td>
            <th className="border-r-2 w-[10%]">
              <button className="badge badge-ghost badge-sm">details</button>
            </th>
            <th className="border-r-2 w-[20%]">
              <button className="badge badge-ghost badge-sm">#details</button>
            </th>
            <th className="border-r-2 w-[10%]">
              <p className="bg-green-100 border-2 border-green-200 p-1 rounded-lg text-xs text-green-700 font-bold">
                in 6 hours
              </p>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="border-r-2 w-[30%]">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-8 h-8 object-cover rounded-lg">
                    <Image src={disney} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Disney</div>
                </div>
              </div>
            </td>
            <td className="border-r-2 w-[20%] overflow-hidden">
              <p className="overflow-ellipsis w-[60px] whitespace-nowrap overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                magnam?
              </p>
            </td>
            <td className="border-r-2">
              <div className="avatar-group -space-x-5 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
            </td>
            <th className="border-r-2 w-[10%]">
              <button className="badge badge-ghost badge-sm">details</button>
            </th>
            <th className="border-r-2 w-[20%]">
              <button className="badge badge-ghost badge-sm">#details</button>
            </th>
            <th className="border-r-2 w-[10%]">
              <p className="bg-red-100 border-2 border-red-200 p-1 rounded-lg text-xs text-red-700 font-bold">
                No Contact
              </p>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="border-r-2 w-[30%]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-8 h-8 rounded-lg object-cover">
                      <Image
                        src={intercom}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Intercom</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-500 font-medium">
                  <PiChats className="text-lg" />
                  <p>9</p>
                </div>
              </div>
            </td>
            <td className="border-r-2 w-[20%] overflow-hidden">
              <p className="overflow-ellipsis w-[60px] whitespace-nowrap overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                magnam?
              </p>
            </td>
            <td className="border-r-2">
              <div className="avatar-group -space-x-5 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
            </td>
            <th className="border-r-2 w-[10%]">
              <button className="badge badge-ghost badge-sm">details</button>
            </th>
            <th className="border-r-2 w-[20%]">
              <button className="badge badge-ghost badge-sm">#details</button>
            </th>
            <th className="border-r-2 w-[10%]">
              <p className="bg-green-100 border-2 border-green-200 p-1 rounded-lg text-xs text-green-700 font-bold">
                in 1 hour
              </p>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="border-r-2 w-[30%]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-8 h-8 rounded-lg object-cover">
                      <Image src={google} alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Google</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-500 font-medium">
                  <PiChats className="text-lg" />
                  <p>5</p>
                </div>
              </div>
            </td>
            <td className="border-r-2 w-[20%] overflow-hidden">
              <p className="overflow-ellipsis w-[60px] whitespace-nowrap overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                magnam?
              </p>
            </td>
            <td className="border-r-2">
              <div className="avatar-group -space-x-5 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
            </td>
            <th className="border-r-2 w-[10%]">
              <button className="badge badge-ghost badge-sm">details</button>
            </th>
            <th className="border-r-2 w-[20%]">
              <button className="badge badge-ghost badge-sm">#details</button>
            </th>
            <th className="border-r-2 w-[10%]">
              <p className="bg-green-100 border-2 border-green-200 p-1 rounded-lg text-xs text-green-700 font-bold">
                in 30 minutes
              </p>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="border-r-2 w-[30%]">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-8 h-8 rounded-lg object-cover">
                    <Image src={evernote} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Evernote</div>
                </div>
              </div>
            </td>
            <td className="border-r-2 w-[20%] overflow-hidden">
              <p className="overflow-ellipsis w-[60px] whitespace-nowrap overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                magnam?
              </p>
            </td>
            <td className="border-r-2">
              <div className="avatar-group -space-x-5 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
            </td>
            <th className="border-r-2 w-[10%]">
              <button className="badge badge-ghost badge-sm">details</button>
            </th>
            <th className="border-r-2 w-[20%]">
              <button className="badge badge-ghost badge-sm">#details</button>
            </th>
            <th className="border-r-2 w-[10%]">
              <p className="bg-gray-100 border-2 border-gray-200 p-1 rounded-lg text-xs text-gray-700 font-bold">
                Next month
              </p>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="border-r-2 w-[30%]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="w-8 h-8 rounded-lg object-cover">
                      <Image
                        src={microsoft}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Microsoft</div>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-500 font-medium">
                  <PiChats className="text-lg" />
                  <p>14</p>
                </div>
              </div>
            </td>
            <td className="border-r-2 max-w-[30%] overflow-hidden">
              <p className="overflow-ellipsis w-[60px] whitespace-nowrap overflow-hidden">
                Zemlak, Daniel sdfasdf asdfasdf asdfasdf asdfa dfasdf asdfa
                dfsasdf asdfa
              </p>
            </td>
            <td className="border-r-2">
              <div className="avatar-group -space-x-5 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
            </td>
            <th className="border-r-2 w-[10%]">
              <button className="badge badge-ghost badge-sm">details</button>
            </th>
            <th className="border-r-2 w-[20%]">
              <button className="badge badge-ghost badge-sm">#details</button>
            </th>
            <th className="border-r-2 w-[10%]">
              <p className="bg-red-100 border-2 border-red-200 p-1 rounded-lg text-xs text-red-700 font-bold">
                No Contact
              </p>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td className="border-r-2 w-[30%]">
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="w-8 h-8 rounded-lg object-cover">
                    <Image src={invision} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div className="flex gap-3 items-center justify-between">
                  <div className="font-bold">Invision</div>
                </div>
              </div>
            </td>
            <td className="border-r-2 w-[20%] overflow-hidden">
              <p className="overflow-ellipsis w-[60px] whitespace-nowrap overflow-hidden">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                magnam?
              </p>
            </td>
            <td className="border-r-2">
              <div className="avatar-group -space-x-5 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-6">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              </div>
            </td>
            <th className="border-r-2 w-[10%]">
              <button className="badge badge-ghost badge-sm">details</button>
            </th>
            <th className="border-r-2 w-[20%]">
              <button className="badge badge-ghost badge-sm">#details</button>
            </th>
            <th className="border-r-2 w-[10%]">
              <p className="bg-gray-100 border-2 border-gray-200 p-1 rounded-lg text-xs text-gray-700 font-bold">
                Next month
              </p>
            </th>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default Table;
