import { getMembers } from "@/lib/association";
import Container from "@/layouts/Container";
import MemberList from "@/components/Association/MemberList";

export default function Page() {
  return (
    <Container size="large" className="flex flex-col gap-8 my-8">
      <MemberList members={getMembers()} />
    </Container>
  );
}
