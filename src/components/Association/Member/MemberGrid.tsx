"use client";

import CompanyGrid from "@/components/Company/CompanyGrid";
import getMembers from "@/functions/association";

const MemberGrid = () => {
  return (
    <CompanyGrid companies={getMembers()} />
  );
};

export default MemberGrid;
