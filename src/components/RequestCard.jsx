export default function RequestCard({
  request,
  onAccept,
  onReject,
}) {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 flex justify-between items-center">
      <div>
        <h2 className="font-semibold">
          {request.sender}
        </h2>

        <p className="text-sm text-gray-600">
          Wants to learn: {request.skill}
        </p>

        <p className="text-xs mt-1 text-gray-500">
          Status: {request.status}
        </p>
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => onAccept(request.id)}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          Accept
        </button>

        <button
          onClick={() => onReject(request.id)}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Reject
        </button>
      </div>
    </div>
  );
}