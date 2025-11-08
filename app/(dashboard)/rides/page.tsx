"use client";

import "../globals.css"; // go up to /app
import { useState, useEffect } from "react";
import { useSupabase } from "@/app/providers/supabase-provider";

export default function RidesPage() {
  const { supabase, session } = useSupabase();
  const [rides, setRides] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [rideDate, setRideDate] = useState("");

  useEffect(() => {
    if (!session) return;
    fetchRides();
  }, [session]);

  const fetchRides = async () => {
    try {
      if (!session?.user) throw new Error("User not authenticated");

      const { data, error } = await supabase
        .from("rides")
        .select("*")
        .eq("user_id", session.user.id)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRides(data || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const createRide = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup || !destination || !rideDate) {
      alert("Please fill all fields");
      return;
    }

    const { error } = await supabase.from("rides").insert([
      {
        user_id: session?.user.id,
        pickup,
        destination,
        ride_date: rideDate,
        status: "pending",
      },
    ]);

    if (error) {
      alert(error.message);
    } else {
      setShowModal(false);
      setPickup("");
      setDestination("");
      setRideDate("");
      fetchRides();
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">My Rides</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition"
        >
          + New Ride
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : rides.length === 0 ? (
        <p>No rides yet.</p>
      ) : (
        <ul className="space-y-3">
          {rides.map((ride) => (
            <li
              key={ride.id}
              className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white"
            >
              <p>
                <strong>Pickup:</strong> {ride.pickup}
              </p>
              <p>
                <strong>Destination:</strong> {ride.destination}
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(ride.ride_date).toLocaleDateString()}
              </p>
              <p>
                <strong>Status:</strong> {ride.status}
              </p>
            </li>
          ))}
        </ul>
      )}

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white rounded-2xl p-6 w-[90%] sm:w-[400px] shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Create New Ride</h2>
            <form onSubmit={createRide} className="space-y-4">
              <input
                type="text"
                placeholder="Pickup Location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
              <input
                type="text"
                placeholder="Destination"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
              <input
                type="date"
                value={rideDate}
                onChange={(e) => setRideDate(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />

              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-md border border-gray-400 text-gray-600"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
