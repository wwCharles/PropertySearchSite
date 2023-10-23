import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaBed, FaChair, FaParking } from "react-icons/fa";

export default function ListingItem({ listing }) {
  return (
    <div className="bg-white overflow-hidden rounded-lg  ">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={listing.imageUrls}
          alt="cover image"
          className="h-[320px] sm:h-[220px] w-[320px] object-cover hover:scale-110 transition
          -scale duration-300 "
        />
        <div className="">
          <p className="text-lg font-semibold truncate ">{listing.name}</p>
          <div className="flex items-center gap-1">
            <MdLocationOn className="h-4 w-4 text-green-700" />
            <p className="text-sm text-gray-600 truncate w-full">
              {listing.address}
            </p>
          </div>
          <p className="text-sm text-gray-600 line-clamp-3">
            {listing.description}
          </p>
          <p className="text-slate-500 font-semibold ">
            Ksh {listing.price.toLocaleString("en-US")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="flex flex-row font-semibold  mx-auto gap-4">
            <div>
              {/* <FaBed className="text-lg" /> */}
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap ">
              {/* <FaBathh className="text-lg" /> */}
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap ">
              {/* <FaParking className="text-lg" /> */}
              {listing.parking ? "Parking spot" : ""}
            </div>
            <div className="flex items-center gap-1 whitespace-nowrap ">
              {/* <FaChair className="text-lg" /> */}
              {listing.furnished ? "Furnished" : ""}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
