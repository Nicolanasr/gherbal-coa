import React from "react";

import { Container } from "@mui/material";

import "./AppealDelaySection.css";
import FlipCard from "../../FlipCard/FlipCard";

const finalJudgmentData = [
  {
    front_en: "With respect to the plaintiff, defendant, responsible for money, and guarantor, the delay is 15 days:",
    front_ar: "With respect to the plaintiff, defendant, responsible for money, and guarantor, the delay is 15 days:",
    back_en:
      "As of the date of its issuance if it is made in presentia.  As of the date of being noticed whether it is made in presentia or absentia.",
    back_ar:
      "As of the date of its issuance if it is made in presentia.  As of the date of being noticed whether it is made in presentia or absentia.",
  },
  {
    front_en: "With respect to the Appellate Public Prosecutor, the delay is one month:",
    front_ar: "With respect to the Appellate Public Prosecutor, the delay is one month:",
    back_en: "As of the date of issuance of the judgment.",
    back_ar: "As of the date of issuance of the judgment.",
  },
  {
    front_en: "With respect to the Appellate Public Prosecution, the delay is two months:",
    front_ar: "With respect to the Appellate Public Prosecution, the delay is two months:",
    back_en: "As of the date of issuance of the judgment.",
    back_ar: "As of the date of issuance of the judgment.",
  },
];

const AppealDelaySection = () => {
  return (
    <Container>
      <div className="doa-section">
        <h2 className="section__title">Delay of appeal:</h2>
        <h3 className="section__sub-title">Final judgments: </h3>
        <div className="final-judgment__cards">
          {finalJudgmentData.map((item, index) => {
            return <FlipCard key={`${item.front_en}-${index}`} {...item} />;
          })}
        </div>

        <h3 className="section__sub-title">Decision on revoking or accepting the defenses stated in Article 73 of the Criminal Procedures Code:</h3>
      </div>
    </Container>
  );
};

export default AppealDelaySection;
