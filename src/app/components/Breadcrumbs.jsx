"use client";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { GrLinkNext } from "react-icons/gr";

const BreadCrumbs = () => {
  const breadPath = usePathname();
  const pathSegments = breadPath.split("/").filter((segment) => segment !== "");

  return (
    <Breadcrumbs separator={<GrLinkNext />}>
      {pathSegments.map((segment, index) => (
        <BreadcrumbItem key={index}>
          <span className="text-lg font-medium text-[#0072B1] capitalize px-1">
            {segment}
          </span>
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};

export default BreadCrumbs;
