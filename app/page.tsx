import AddMotivationForm from "@/components/AddMotivationForm";
import MotivationList from "@/components/MotivationList";

export default function Home() {
  return (
    <main className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Motivation Tracker</h1>
      <AddMotivationForm />
      <MotivationList />
    </main>
  );
}
