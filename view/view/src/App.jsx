import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import  axios  from "axios";

export async function fetchDatas(datas) {
    try {
        const url = "http://localhost:3000/register";
        const data = datas;
        const response = await axios.post(url, data);
        //console.log('Respuesta:', response.data);
        return response.data.response[0];
    } catch (error) {
        console.error('Error al hacer la solicitud:', error);
        return null; // Manejo del error, puedes ajustarlo según tu lógica
    }
}
export default function Example() {
    return (
        <>
            <div class="bg-white">
                <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
                    <div class="mx-auto max-w-2xl">

                        <form onSubmit={(e)=>{
                            e.preventDefault()
                            let names = e.target.first.value + " " + e.target.last.value
                            let directions = e.target.street.value + " " + e.target.city.value + " " + e.target.region.value + " " + e.target.postal.value
                            let toSend = {
                                username :e.target.username.value,
                                Telefono :e.target.Telf.value,
                                edad:e.target.Edad.value,
                                compras : [],
                                pais:e.target.country.value,
                                contraseña:e.target.Password.value,
                                isAutenticated: false,
                                name : names,
                                dirreccion:directions
                            }
                            console.log(toSend)
                            fetchDatas(toSend)
                            setTimeout(() => {
                                window.location.href = "/login";
                              }, 1000);

                        }} >
                            <div class="space-y-12">
                                <div class="border-b border-gray-900/10 pb-12">
                                    <h2 class="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                                    <p class="mt-1 text-sm leading-6 text-gray-600">This information will be displayed publicly so be careful what you share.</p>

                                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div class="sm:col-span-4">
                                            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
                                            <div class="mt-2">
                                                <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                                    <span class="flex select-none items-center pl-3 text-gray-500 sm:text-sm">nike.com/</span>
                                                    <input type="text" name="username" id="username" autocomplete="username" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="janesmith" />
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="border-b border-gray-900/10 pb-12">
                                    <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                                    <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                                    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                        <div class="sm:col-span-3">
                                            <label for="first" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
                                            <div class="mt-2">
                                                <input type="text" name="first" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-3">
                                            <label for="last" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
                                            <div class="mt-2">
                                                <input type="text" name="last" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-4">
                                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                                            <div class="mt-2">
                                                <input id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-4">
                                            <label for="Edad" class="block text-sm font-medium leading-6 text-gray-900">Edad</label>
                                            <div class="mt-2">
                                                <input id="edad" name="Edad" type="number" autocomplete="Edad" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-3">
                                            <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
                                            <div class="mt-2">
                                                <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                                                    <option>United States</option>
                                                    <option>Canada</option>
                                                    <option>Mexico</option>
                                                    <option>Colombia</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">

                                            <label for="Telf" class="block text-sm font-medium leading-6 text-gray-900">Telefono</label>
                                            <div class="mt-2">
                                                <input type="text" name="Telf" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>

                                        <div class="col-span-full">
                                            <label for="street" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
                                            <div class="mt-2">
                                                <input type="text" name="street" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2 sm:col-start-1">
                                            <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
                                            <div class="mt-2">
                                                <input type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
                                            <div class="mt-2">
                                                <input type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>

                                        <div class="sm:col-span-2">
                                            <label for="postal" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
                                            <div class="mt-2">
                                                <input type="text" name="postal" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-span-full">
                                    <label for="Password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                    <div class="mt-2">
                                        <input type="text" name="Password" id="Password" autocomplete="Password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                    </div>
                                </div>


                            </div>

                            <div class="mt-6 flex items-center justify-end gap-x-6">
                                <a href="/login"><button type="button" class="text-sm font-semibold leading-6 text-gray-900">Cancel</button></a>
                                <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
