export default function FollowUpRecordCard({ record }) {
  return (
    <div className="p-4 border rounded-lg bg-white shadow">
      <h3 className="text-sm font-medium mb-1">{record.title}</h3>
      <p className="text-xs text-gray-600">{record.content}</p>
    </div>
  );
}