import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
} from "react-icons/fa";

export default function Listing() {
  SwiperCore.use([Navigation]);
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const params = useParams();
  const [show, setShow] = useState(false);
  const [landlord, setLandlord] = useState(null);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
          setLoading(false);
          return;
        }
        setListing(data);

        const user = await fetch(`/api/user/${data.userRef}`);
        const userData = await user.json();
        setLandlord(userData);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  return (
    <main>
      {loading && <p className="text-center my-6 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-6 text-2xl">Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <div>
          <Swiper navigation>
            {listing.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[540px] w-full"
                  style={{
                    background: `url("${url}") center no-repeat`,
                    backgroundSize: "contain ",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="flex flex-col max-w-4xl mx-auto p-2 my-4 gap-4">
            <p className="text-2xl font-semibold">
              {listing.name}
              {listing.type === "rent" ? "(For Rent)" : "(For Sale)"}
              <br />
              KSh {listing.price.toLocaleString("en-US")}
              {listing.type === "rent" && " / month"}
            </p>
            <p className="flex items-center mt-4 gap-2 text-slate-800  text-sm">
              <FaMapMarkerAlt className="text-red-800" />
              {listing.address}
            </p>
            <p className="text-slate-800">
              <span className="font-semibold text-black">Description</span>
              <br />
              <span className=" whitespace-pre-line">
                {listing.description}
              </span>
            </p>
            <ul className="text-slate-800 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaBed className="text-lg" />
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds `
                  : `${listing.bedrooms} bed `}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaBath className="text-lg" />
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} baths `
                  : `${listing.bathrooms} bath `}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaParking className="text-lg" />
                {listing.parking ? "Parking spot" : "No Parking"}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaChair className="text-lg" />
                {listing.furnished ? "Furnished" : "Unfurnished"}
              </li>
            </ul>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setShow(true);
                  setTimeout(() => {
                    setShow(false);
                  }, 15000);
                }}
                type="button"
                className="bg-red-800 w-full max-w-[100px] text-white text-center p-1 rounded-lg active:bg-green-600 "
              >
                Inquire
              </button>
            </div>
            {show ? (
              <p className="text-slate-800">
                {landlord.username}
                <br />
                {landlord.email}
                <br />
                {listing.phone}
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      )}
    </main>
  );
}
