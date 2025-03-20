"use client";

import CompanyList from "@/components/Company/CompanyList";
import getMembers from "@/functions/association";

const MemberList = () => {
  return (
    <CompanyList companies={getMembers()} />
  );
};

export default MemberList;
