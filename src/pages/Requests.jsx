import { useState } from "react";
import RequestCard from "../components/RequestCard";

export default function Requests() {
  const [requests, setRequests] = useState([
    {
      id: 1,
      sender: "Brian Mutai",
      skill: "React Basics",
      status: "pending",
    },
    {
      id: 2,
      sender: "Densi Nela Chep",
      skill: "UI Design",
      status: "pending",
    },
  ]);

  // ACCEPT REQUEST
  const acceptRequest = (id) => {
    const updatedRequests = requests.map((request) =>
      request.id === id
        ? { ...request, status: "accepted" }
        : request
    );

    setRequests(updatedRequests);
  };

  // REJECT REQUEST
  const rejectRequest = (id) => {
    const updatedRequests = requests.map((request) =>
      request.id === id
        ? { ...request, status: "rejected" }
        : request
    );

    setRequests(updatedRequests);
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">
        Skill Swap Requests
      </h1>

      <div className="grid gap-4">
        {requests.map((req) => (
          <RequestCard
            key={req.id}
            request={req}
            onAccept={acceptRequest}
            onReject={rejectRequest}
          />
        ))}
      </div>
    </div>
  );
}