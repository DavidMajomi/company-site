import Image from "next/image";

const LOAN_ORIGINATION_ONTOLOGY_SRC =
  "/diagrams/loan-origination-ontology.webp";

const ONTOLOGY_WIDTH = 1024;
const ONTOLOGY_HEIGHT = 540;

const LOAN_ORIGINATION_ONTOLOGY_ALT =
  "Loan origination solutions: channels including mobile app, online portal, branch portal and external systems connect to an API gateway; retail loans with product, collateral, onboarding, credit scoring and business rules; SME loans with guarantor, KYC/KYB, risk, imaging and affordability; corporate loans with document management, BPM, eligibility and credit analysis, reports and identity and access management; adapters and data hub with customer data, system integration and security and compliance.";

type OntologyImageProps = {
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function LoanOriginationOntologyImage({
  className = "h-auto w-full",
  sizes = "(min-width: 1200px) 520px, (min-width: 1024px) 45vw, 100vw",
  priority,
}: OntologyImageProps) {
  return (
    <Image
      src={LOAN_ORIGINATION_ONTOLOGY_SRC}
      alt={LOAN_ORIGINATION_ONTOLOGY_ALT}
      width={ONTOLOGY_WIDTH}
      height={ONTOLOGY_HEIGHT}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
