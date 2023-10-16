import React from "react";

export default function createListing() {
  return (
    <main className="p-3 max-w-4xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">
        Create a Listing
      </h1>
      <form className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-col gap-4 flex-1 ">
          <input
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg"
            id="name"
            minLength="10"
            required
          />
          <input
            type="text"
            placeholder="Description"
            className="border p-3 rounded-lg"
            id="description"
            required
          />
          <input
            type="text"
            placeholder="Address"
            className="border p-3 rounded-lg"
            id="address"
            required
          />
          <div className="flex gap-6 flex-wrap">
            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>Sell</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="parking" className="w-5" />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="furninshed" className="w-5" />
              <span>Furnished</span>
            </div>
            {/* <div className="flex gap-2">
              <input type="checkbox" id="pets" className="w-5" />
              <span>Pets</span>
            </div> */}
          </div>
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bedrooms"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <p>Bedrooms</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="bathrroms"
                min="1"
                max="10"
                required
                className="p-3 border border-gray-300 rounded-lg"
              />
              <p>Bathrooms</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="number"
                id="price"
                min="1"
                max="10"
                required
                className="p-3 s border border-gray-300 rounded-lg"
              />
              <div className="flex flex-col items-center">
                <p>Price</p>
                <span> (ksh / month) </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 flex-1 ">
          <p className="font-semibold">
            Images{" "}
            <span className="font-normal text-gray-700 ml-2">
              {" "}
              The first image will be cover
            </span>
          </p>
          <div className="flex gap-4">
            <input
              type="file"
              id="images"
              accept="images/*"
              mulitple
              className="p-3 border border-e-gray-300 rounded w-full"
            />
            <button className="p-3 bg-green-700 text-white border border-green-700 rounded uppercase hover:opacity-80 disabled:opacity-80">
              Upload
            </button>
          </div>
          <button className="p-3 bg-slate-700 text-white rounded uppercase hover:opacity-80 disabled:opacity-80">
            create post
          </button>
        </div>
      </form>
    </main>
  );
}
