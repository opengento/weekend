import { getMembers } from "@/lib/association";
import Container from "@/layouts/Container";
import MemberPage from "@/layouts/Association/MemberPage";

export default function Page() {
  return (
    <Container size="large" className="flex flex-col gap-8 my-8">
      <MemberPage members={getMembers()} />
    </Container>
  );
}
