import { teamMembers } from "@/utils/team-members";
import { TeamMemberCard2 } from "./TeamMemberCard2";
import Container from "@/components/shared/Container";
import { div } from "motion/react-client";

export function TeamMembers() {
  return (
    <div className="bg-white xl:p-10 p-6">
      <Container>
        <h2 className="mb-8 md:text-4xl text-2xl font-bold">Team Member</h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <TeamMemberCard2
              key={member.id}
              name={member.name}
              role={member.role}
              imageUrl={member.imageUrl}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
