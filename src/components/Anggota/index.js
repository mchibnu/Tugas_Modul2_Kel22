import React from "react";

export default function Anggota(props) {
    const {header, footer, data} = props;
    return (
        <div className="bg-white overflow-hidden sm:rounded-lg">
            <h2 className="flex flex-col font-bold items-center justify-center bg-gray-50 shadow-md"
                style={{ height: "100px" }}>
                {header}
            </h2>
            {data.map(({nama, nim, kelompok}) => (
                <div className="items-center justify-center border-t border-gray-300 py-4">
                    <dl>
                       <div class="bg-gray-50 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                 Nama
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {nama}
                            </dd>
                        </div>
                        <div class="bg-white py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                NIM
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {nim}
                            </dd>
                        </div>
                        <div class="bg-white py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt class="text-sm font-medium text-gray-500">
                                Kelompok
                            </dt>
                            <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                                {kelompok}
                            </dd>
                        </div> 
                    </dl>
                </div>
            ))}
            <h2 className="flex flex-col font-bold items-center justify-center bg-gray-50 shadow-md"
                style={{ height: "100px" }}>
                {footer}
            </h2>
        </div>
        
    );
}