import React from "react";

export default function CardList(props) {
    const { judul, kelompok, image } = props;

    return (
        <div className="bg-white shadow">
            <div className="max-w-2x1 mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7x1 lg:px-8">
                <h2 className="text-2x1 font-extrabold tracking-tight text-gray-900">
                    {judul}
                </h2>
                <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="group relative shadow">
                        <div className="w-full min-h-80  aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-100 lg:aspect-none">
                            <img
                                src={image}
                                alt="Gambar"
                                className="w-70 h-80 object-full object-cover lg:w-50 lg:h-60"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                                <p className="text-sm font-bold text-gray-900">
                                        Kelompok : {kelompok}
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}