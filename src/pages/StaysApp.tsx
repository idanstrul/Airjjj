import { StaysFilter } from "../cmps/StaysFilter";
import { StaysList } from "../cmps/StaysList";

export const StaysApp = () => {
  return (
    <main className="stays-app">
      <StaysFilter />
      <StaysList />
    </main>
  );
}
